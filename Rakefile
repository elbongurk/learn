require 'rubygems'
require 'bundler/setup'

require 'yaml'
require 'liquid'
require 'jekyll'

namespace :books do
  desc "Compiles web-design book"
  task :web do |task|
    Encoding.default_internal = Encoding::UTF_8
    Encoding.default_external = Encoding::UTF_8
    
    book = YAML.load_file('_books/web-design.md')
    chapters = Array.new
    Dir.glob("_lessons/#{book['name']}/*.md") do |file|
      chapter = YAML.load_file(file)
      index = chapter['lesson'] - 1
      chapters[index] = file
    end
    site_configuration = Jekyll::Utils.deep_merge_hashes(Jekyll::Configuration::DEFAULTS, YAML.load_file('_config.yml'))
    
    site = Jekyll::Site.new(site_configuration)
    
    Liquid::Template.register_tag('include', Jekyll::Tags::IncludeTag)
    Liquid::Template.register_tag('include_relative', Jekyll::Tags::IncludeRelativeTag)

    markdown = String.new
    chapters.each do |file|
      chapter = YAML.load_file(file)
      chapter['ebook'] = true
      template = Liquid::Template.parse(File.open(file).read.gsub(/---(.|\n)*---/, ''))

      info = {
        :filters   => [ Jekyll::Filters ],
        :registers => { :site => site, :page => chapter }
      }
      
      markdown << template.render({ 'page' => chapter }, info)
    end

    converter = site.find_converter_instance(Jekyll::Converters::Markdown)
    html = converter.convert(markdown)

    %x(mkdir -p _ebook)
    File.open("_ebook/#{book['name']}.html", 'w') do |file|
      file.write(html)
    end

    # cp assets
    %x(cp assets/css/epub.css _ebook/epub.css)
    %x(cp assets/img/#{book['name']}.jpg _ebook/#{book['name']}.jpg)
    %x(mkdir -p _ebook/figs)
    %x(cp assets/figs/* _ebook/figs/)
    %x(mkdir -p _ebook/font)
    %x(cp assets/font/* _ebook/font/)
    
    # pandoc to turn to epub
    %x(cd _ebook && pandoc #{book['name']}.html -o #{book['name']}.epub --toc --toc-depth=2 --epub-stylesheet=epub.css --epub-cover=#{book['name']}.jpg --epub-embed-font=font/*)

    # pandoc to turn to pdf
    # %x(cd _ebook && pandoc #{book['name']}.html -o #{book['name']}.pdf --toc --toc-depth=2)
  end
end

namespace :assets do
  desc "Resizes, converts, and compresses pictures"
  task :pictures, :glob do |task, args|
    %w(gm pngquant zopflipng).each do |bin|
      abort "#{bin} is required." unless system("which #{bin} > /dev/null")
    end

    puts "Creating Pictures"

    args.with_defaults(:glob => "*")
    
    Dir.glob("artwork/#{args[:glob]}.png") do |png|
      filename = File.basename(png)
      puts " Found #{filename}"
      puts " --> Resizing"
      %x(gm convert #{png} -resize 50% assets/figs/#{filename})
      puts " --> Converting"
      %x(pngquant --ext=.png --force --speed=1 --quality=75-100 --skip-if-larger -- assets/figs/#{filename})
      puts " --> Compressing"
      %x(zopflipng -m -y assets/figs/#{filename} assets/figs/#{filename})
    end
  end


  desc "Converts and thumbnails videos"
  task :videos, :glob do |task, args|
    %w(HandBrakeCLI ffmpegthumbnailer).each do |bin|
      abort "#{bin} is required." unless system("which #{bin} > /dev/null")
    end
    
    puts "Creating Videos"
    
    args.with_defaults(:glob => "*")
    
    Dir.glob("artwork/#{args[:glob]}.mov") do |mov|
      filename = File.basename(mov)
      basename = File.basename(mov, '.mov')
      puts " Found #{filename}"
      puts " --> Converting"
      %x(HandBrakeCLI --preset "iPhone & iPod Touch" --width 700 --vb 600 --two-pass --turbo --optimize --input #{mov} --output assets/figs/#{basename}.mp4)
      puts " --> Thumbnailing"
      %x(ffmpegthumbnailer -s 0 -t 33:00:00 -i assets/figs/#{basename}.mp4 -o assets/figs/#{basename}.jpg)
    end
  end
end

# ffmpeg -i input.mov \
#   -acodec libvorbis -ac 2 -ab 96k -ar 44100 \
#   -b 345k -s 640x360 output.ogv

# ffmpeg -i input.mov \
#   -acodec libvorbis -ac 2 -ab 96k -ar 44100 \
#   -b 345k -s 640x360 output.webm

# ffmpeg -i input.mov \
#   -acodec libfaac -ab 96k \
#   -vcodec libx264 -vpre slower -vpre main \
#   -level 21 -refs 2 -b 345k -bt 345k \
#   -threads 0 -s 640x360 output.mp4

# -vf "scale=700:-1" 
