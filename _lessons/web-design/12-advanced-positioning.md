---
title: "Advanced Positioning"
excerpt: "Whenever possible, limit yourself to basic positioning techniques, however, there are times where more contol is needed. Learn CSS techniques for precise positioning of specific elements on a page."
lesson: 12
book: web-design
---

{% include toc.md %}

## Overview

Whenever possible, floating should be used to do most of the heavy lifting for page layout. It offers lots of control over the interactions of elements while maintaining the flexibility necessary to accommodate all screen sizes. 

There are however, times where floating just won't cut it. There are some rare occasions where you might need to do more precise positioning of certain elements on a page, it is that that kind of precise positioning that we'll be looking at in this lesson.

## Lesson Setup

To get started, we'll need to create our lesson folder structure, our initial HTML file and connect it up with a new stylesheet.

### Folder Setup

1. Create a new __Lesson12__ folder inside of Bob
2. Now, create your __notes__ and __root__ folders
3. Inside the root folder, create an __images__ folder and a __css__ folder
4. __Download__ the lesson 12 resources from [here](http://hashtagcheese.com/L12-images.zip).
5. __Move__ those images into your __images__ folder for this lesson

### HTML Setup

6. __Open__ up TextMate 
7. __File__ > __New__ to open a new file
8. Code in your [boilerplate HTML](../1-file-management/#the-boilerplate) making sure to add a title to the page. I'm calling mine: _Advanced Positioning_.
4. Make sure that your boilerplate includes the `<meta name="viewport" content="width=device-width, initial-scale=1" />` [we learned in lesson 8](../8-navigation-and-mobile-first-design/#setting-the-viewport) to ensure the site works properly on a mobile device.
5. __Save__ your HTML file to your Lesson12 root folder with the name: __lesson12.html__
6. __Open__ and __Preview__ your page in the browser, checking to make sure your page title is appearing correctly.

### CSS Setup

1. __Open__ up TextMate
2. __File__ > __New__ to open a new file
3. __File__ > __Save__
4. Navigate to the "css" folder you created
5. Name your file, __style.css__
6. Hit __Save__
7. Attach this stylesheet to our HTML page. Type: `<link href="css/style.css rel="stylesheet" />` into the head section of our __lesson12.html__ file.
8. __File__ > __Save__ the HTML file

Your HTML should now look like this:

```html
<!doctype html>
<html>

	<head>
		<title>Advanced Positioning</title>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link href="css/style.css" rel="stylesheet" />
	</head>

	<body>
	
	</body>
	
</html>
```

>    __Note:__ You may have noticed that I've shortened the lesson setup to a list of action steps above. If you need a refresher on folder and file organization see the [lesson 3 setup section](../3-images-and-captions/#lesson-setup).

Let's test to make sure our pages connected correctly.

1. Navigate back to your new CSS file.
2. Let's change the background color of the body element. Type: `body {` on an open line and hit __Enter__
3. Now, type the property we want to change: `background-color:`
4. Type: `pink;` and hit __Enter__
5. Close the CSS block, type: `}`
6. __Save__ this file and __Refresh__ the browser

If your background turned pink, then you are set. Everything is working correctly.  You can go ahead and delete that CSS block, so we can start fresh.

## Adding Content

We'll be building this lesson site in a few different steps. Initially I'd like to focus just on the header.

1. Begin by adding a pair of `<header></header>` tags
2. After the opening `<header>` tag hit __Enter__ to make room
3. We'll add our logo as an image link using the file "logo.png" already inside your images folder. For now, just use a "space" for the address. `<a href=" "><img src="images/logo.png"/></a>`
4. Next, add in an image link using the "hamburger.png" for our mobile navigation link. `<a href=" "><img src="images/hamburger.png"/></a>`


Here's how your HTML should look:

```html
<header>
	<a href=" "><img src="images/logo.png"/></a>
	<a href=" "><img src="images/hamburger.png"/></a>
</header>
```

and here's how it looks in the browser. *__(fig. 1)__*

{% include figure.html type="picture" lesson="12" figure="1" %}

## Styling the Header

Let's  add a background color to our header section so we can more easily see what we're dealing with.

1. We'll need to use `header {` as the selector
2. The property is: `background-color:`
3. Let's use teal as our value: `teal;`
4. Close the CSS block: `}`
5. __Save__ and __Refresh__

Here's my CSS so far:

```css
header {
	background-color: teal;
}
```

and here's how it looks in the browser. *__(fig. 2)__*

{% include figure.html type="picture" lesson="12" figure="2" %}

We see that there is a small white border around our header. If we think back a few lessons, we discussed where this is coming from. Remember that the body has some default margin applied? Let's go ahead and remove any margin applied by default.

1. To remove margin from ALL elements, we want to use the universal selector _(means all elements no matter what)_ we use `* {`. Put this at the very top of your CSS before any other CSS blocks.
2. To remove any default margin, we say: `margin: 0;` for the property and value
3. It's also a good idea to reset any default padding as well. Add: `padding: 0;` to the block.
3. Close the CSS block:`}`
4. __Save__ and __Refresh__

Here's my CSS:

```css
* {
	margin: 0;
	padding: 0;
}

header {
	background-color: teal;
}
```

and here's how it looks in the browser. *__(fig. 3)__*

{% include figure.html type="picture" lesson="12" figure="3" %}

Next let's deal with our hamburger button. What if we wanted it to be on the right side rather than next to our logo? To do that, we can float it right, but first we'll need to find a way to talk directly to it. We'll need to add and `id=` attribute.

1. Locate your HTML file
2. Add `id="hamburger"` to the link that holds the hamburger button: `<a href=" " id="hamburger"><img src="images/hamburger.png"/></a>`
3. Save your HTML file

Here's how your HTML should look:

```html
<header>
	<a href=" "><img src="images/logo.png"/></a>
	<a href=" " id="hamburger"><img src="images/hamburger.png"/></a>
</header>
```

Now let's work on our CSS.

1. Locate your CSS file
2. Add a CSS block with the selector `a#hamburger {`
3. Now to float it to the right side, we add: `float: right;`
4. Close the CSS block: `}`
5. __Save__ and __Refresh__

Here's my CSS:

```css
a#hamburger {
	float: right;
}
```

and here's how it looks in the browser. *__(fig. 4)__*

{% include figure.html type="picture" lesson="12" figure="4" %}

That's better, but now I need to add some breathing room around it. Let's add some padding to the hamburger button.

1. Locate your CSS file
2. Add `padding: 15px;` to your `a#hamburger {`.
4. __Save__ and __Refresh__

Here's my CSS:

```css
a#hamburger {
	float: right;
	padding: 15px;
}
```

and here's how it looks in the browser. *__(fig. 5)__*

{% include figure.html type="picture" lesson="12" figure="5" %}

It looks like adding the padding did give the hamburger button some breathing room, but it broke our background. The background no longer contains both the logo and the hamburger button. Now what happened? Well remember in lesson 12 when we learned that floating elements requires us to use a micro-clear fix on our parent element. Doing so will allow the parent element to properly contain its floated children.

Let's give this a try.

1. Locate your HTML file
2. To use the micro-clear fix, we'll need to add `class=group` to our parent element. Since `header` is the parent to both our floated hamburger button, we'll add the class to it: `<header class="group">`
3. Save your HTML file

Here's how your HTML should look:

```html
<header class="group">
	<a href=" "><img src="images/logo.png"/></a>
	<a href=" " id="hamburger"><img src="images/hamburger.png"/></a>
</header>
```

Now we need to add our micro-clear fix to our CSS

1. Locate your CSS file
2. Add the micro-clearfix to the top of your file, just after our universal selector CSS block. 

```css
.group:after {
  content: "";
  display: table;
  clear: both;
}
```

3. __Save__ and __Refresh__
{:start="3"}

Here's my CSS:

```css
* {
	margin: 0;
	padding: 0;
}

.group:after {
  content: "";
  display: table;
  clear: both;
}

header {
	background-color: teal;
}

a#hamburger {
	float: right;
	padding: 15px;
}
```

and here's how it looks in the browser. *__(fig. 6)__*

{% include figure.html type="picture" lesson="12" figure="6" %}

Cool. That looks much better. Now let's match the space around the logo to that around the hamburger button.  Let's add 15 pixels of padding to our logo.

1. Locate your HTML file
2. First, we'll need to add an `id=` attribute to our link that contains our logo image to use as a handle. Add `id="logo"` to our link: `<a href=" " id="logo"><img src="images/logo.png"/></a>`
3. Save your HTML file

Here's how your HTML should look:

```html
<header class="group">
	<a href=" " id="logo"><img src="images/logo.png"/></a>
	<a href=" " id="hamburger"><img src="images/hamburger.png"/></a>
</header>
```

Now let's work on our CSS

1. Locate your CSS file
2. Add a CSS block using the selector `a#logo {`
3. Add `padding: 15px;`
4. Close the block: `}`
5. __Save__ and __Refresh__

Here's my CSS:

```css
a#logo {
	padding: 15px;
}
```

and here's how it looks in the browser. *__(fig. 7)__*

{% include figure.html type="picture" lesson="12" figure="7" %}

Huh, that's weird. We did get our padding on the left, but not on the top. What happenend? Well, remember when we discussed the major differences between block-level and inline elements? Yep, that's what's happening. Remember that a link is an inline element, so it isn't important enough to respond to all of our styling, this happens with margin and padding. Inline elements just don't have enough power in the web flow to apply these commands. What should we do?

We could promote our logo to a block-level element using `display: block;`. That would allow the padding to take effect, however, it would then knock our hamburger button down below our logo because of the width it would require. Instead, we can ask our logo to float left. Floating will take the logo out of the normal flow, but it will allow us to apply padding without bothering our hamburger.

1. Locate your CSS
2. Add `float: left;` to your `a#logo {`
3. __Save__ and __Refresh__

Here's my CSS:

```css
a#logo {
	float: left;
	padding: 15px;
}
```

and here's how it looks in the browser. *__(fig. 8)__*

{% include figure.html type="picture" lesson="12" figure="8" %}

Looks like we did it. Remember that whenever you use a float you must:

* Make sure there is an assigned width _(either inherent or set)_
* Make sure the parent of the floating element(s) has `class="group"` applied to the opening tag
* Make sure the micro clear fix is included in the CSS to clear the float

## Adding a Banner

Next we'll add a hero image banner and a button for our user to click to respond to our call to action request. Let's put both of these things into their own section to stay organized.

1. Locate your HTML file
2. After your closing header tag, hit __Enter__ twice to make some room
3. Add a pair of `<section></section>` tags 
4. In-between those tags, add our banner. The image is named: banner.png and is already inside your images folder. `<img src="banner.png"/>`
5. Add our button. This is an image link that uses button.png as the link image. For now, use a space for the address. `<a href=" "><img src="images/button.png"/></a>`
6. Save your HTML file

Here's how your HTML should look:

```html
<section>
	<img src="images/banner.png"/>
	<a href=" "><img src="images/button.png"/></a>
</section>
```

and here's how it looks in the browser. *__(fig. 9)__*

{% include figure.html type="picture" lesson="12" figure="9" %}

The first thing we notice is that our banner image is huge! We want it to be large so that high resolution screens can have a really clear image, but what about the rest of us? It's an easy fix. Remember back a few lessons when we learned how to deal with large images and responsive sites? We told all images to have a `max-width: 100%;`. This CSS tells the images that the largest they are allowed to be is 100% of the available screen width. Let's apply this to our CSS.

1. Locate your CSS
2. After your micro-clear fix, add the selector `img {`
3. Add: `max-width: 100%;`
4. Close the block: `}`
5. __Save__ and __Refresh__

Here's my CSS:

```css
* {
	margin: 0;
	padding: 0;
}

.group:after {
  content: "";
  display: table;
  clear: both;
}

img {
	max-width: 100%;
}

header {
	background-color: teal;
}

a#hamburger {
	float: right;
	padding: 15px;
}

a#logo {
	float: left;
	padding: 15px;
}
```

and here's how it looks in the browser. *__(fig. 10)__*

{% include figure.html type="picture" lesson="12" figure="10" %}

Much better. Now no matter how big or small we have our browser, our image will scale itself to fit. Any other images we add later will too.

## Absolute Positioning

Okay, so now looking at our current layout, let's say that we'd prefer to have our button layered on top of our banner image so it looks something like this: *__(fig. 11)__*

{% include figure.html type="picture" lesson="12" figure="11" %}

Floating can't help us with this one. What we really need is a way to tell our button exactly where we want it to be. In the case of my example, I told my button to be exactly 25 pixels from the right and 25 pixels from the bottom of its parent element. In this case, its parent is the section element.

### Establishing the Parent Child Relationship

A few things need to happen to make this work. First off we need to have a parent element for the element I want to position. In this case, we already do. 

Because we used a set of `<section></section>` tags to hold both our banner and our button, the section is the parent and our banner and button become its children. If we want to position our children inside the parent, we must first tell the parent. We do this using a new CSS property: `position: relative;`.  Let's do it.

1. Locate your HTML file
2. First off, it's best if we isolate just the element we want to talk to. We'll add an `id=` attribute to our section, let's call it banner: `<section id="banner">`
3. Save your HTML file

Here's how your HTML should look:

```html
<section id="banner">
	<img src="images/banner.png"/>
	<a href=" "><img src="images/button.png"/></a>
</section>
```

Okay, now we need to talk to our banner section in the CSS and let it know it's about to officially become a parent. Essentially you are making it aware that it is responsible for the positioning of its children elements.

1. Locate your CSS file
2. In a new CSS block, use the selector `section#banner {`
3. We'll establish it's position as relative, `position: relative;`
4. __Save__ and __Refresh__

Here's my CSS:

```css
section#banner {
	position: relative;
}
```

and here's how it looks in the browser. *__(fig. 12)__*

{% include figure.html type="picture" lesson="12" figure="12" %}

And... no change. That is because we've only set the hook. We still need to tell our button what to do, which is our next step. We need to talk directly to our button, telling it that it is going to be positioned in relation to its parent. Just like with our section, we'll need to first add a handle to talk directly to it.

1. Locate your HTML file
2. Add `id="button"` to our link that has our button image: `<a href=" " id="button"><img src="images/button.png"/></a>`
3. Save your HTML file

Here's how your HTML should look:

```html
<section id="banner">
	<img src="images/banner.png"/>
	<a href=" " id="button"><img src="images/button.png"/></a>
</section>
```

Since we know there won't be any change in the browser yet, let's skip right to the CSS. We need to tell our button that it has an absolute _(or coordinate based)_ position against its parent. We do this using the property: `position:` just like its parent. 

This time, however, we use: `absolute;` as the value indicating that it will be positioned absolutely relative to its parent. We will also need to provide coordinates relative to the edges of the parent.

1. Locate your CSS file
2. Add a CSS block with the selector: `a#button {`
3. Add `position: absolute;` to mobilize it
4. Now, to give coordinates, we need to tell the button exactly where to be relative to its parent. This means we can tell it exactly how many pixels to be from any edge of that parent. Let's tell it to be 25 pixels from the bottom of its parent. We use the property: `bottom:` and the value: `25px;`
5. Let's also tell it to be 25 pixels from the right: `right: 25px;`
6. __Save__ and __Refresh__

Here's my CSS:

```css
section#banner {
	position: relative;
}

a#button {
	position: absolute;
	bottom: 25px;
	right: 25px;
}
```

and here's how it looks in the browser. *__(fig. 13)__*

{% include figure.html type="picture" lesson="12" figure="13" %}

Ta da! We did it. Our button is now exactly 25 pixels from the right and 25 pixels from the bottom of its parent, the `<section>`. The reason it looks like it is being positioned over the banner image is because the banner image is actually another child element, the child element that is holding the section open.

Let me try this in other words. Empty elements don't actually occupy any space on our page. They need actual content to hold them open and they wrap tightly around that content. Once we take an element out of the natural flow, like when we float or absolutely position an element, that element no longer holds its parent open. So, essentially our parent element, the section, is tightly wrapped around our banner image. Because we knew this to be the case, we could position our button to appear to be positioned over the banner image itself.

>    __Note:__ If we don't have a specific parent element or we don't specify that the parent will be `position: relative;` the default parent will be the body tag. This means that any element set to `position: absolute;` will be positioned against the body tag, essentially positioning against the browser window itself.

If we wanted to align our button with the top of our section, we could use: `top:` rather than `bottom:`. Let's give it a try.

1. Locate your CSS file
2. Adjust your `a#button {` to read:

```css
a#button {
	position: absolute;
	top: 25px;
	right: 25px;
}
```

1. __Save__ and __Refresh__

and here's how it looks in the browser. *__(fig. 14)__*

{% include figure.html type="picture" lesson="12" figure="14" %}

Our button now positioned itself 25 pixels from the top rather than the bottom of our section. We can also use `left:` instead of `right:` if we wanted to.

## Fixed Positioning

Fixed positioning is similar to absolute positioning in that you get to tell an element exactly where to be using coordinates, but there are two major differences. 

The first is that you don't get to specify the parent. Elements using fixed positioning only position themselves against the body, meaning they can only be positioned against the browser window, not any individual element.

The second major difference is that fixed position elements don't scroll with the page. Absolutely positioned elements move with the page, but fixed position elements stay put no matter what is happening around or behind them.

Fixed positioning is pretty rarely used, but there are some cases where you might want this effect. Some of the more common fixed position elements that we see, especially in mobile websites, are the header and navigation elements. 

Some designers choose to keep the header or the hamburger button at the top of the site and allow the rest of the site to scroll underneath it. The thinking is that users will always have access to both the branding and the navigation for the site.

### Fixed Headers for Mobile

In order to really experience the difference between fixed positioning and absolute positioning, we're going to need to add content so our page will scroll.

To make things easy, we'll borrow some of our content from a previous lesson. You can just copy and paste the following HTML into your HTML file after you banner section:

```html
<section class="bgorange">
	<h2 id="Do">What We Do</h2>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin congue sem et pretium. Sed pulvinar volutpat facilisis. Sed velit risus, consequat sit amet sollicitudin a, ultrices nec nisl. Nullam ac dolor purus. In ac mi quis urna lobortis venenatis. Sed interdum, arcu a volutpat pretium, nisl velit auctor elit, at venenatis turpis mi a nisl. Integer at porttitor urna. Nulla sem mauris, pulvinar bibendum tristique vitae, pulvinar vel elit. Aenean sollicitudin quam sit amet lectus elementum sit amet suscipit sem feugiat. Fusce aliquam euismod diam, at placerat felis fringilla et. Vivamus sagittis suscipit dapibus. Donec molestie tristique quam, sed sodales justo volutpat eu. Sed pellentesque sollicitudin tempus. Donec at sem eu massa tempor porta congue id purus.</p>

	<h3>Exciting Things to Come</h3>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur ullamcorper eleifend. Mauris dapibus ligula vitae leo semper a aliquam felis fringilla. Pellentesque dapibus lacus sed orci vulputate ultrices. Quisque mollis nisl id nibh cursus sodales pretium non justo. Sed id dui vel velit posuere consectetur eget quis elit. Sed est augue, euismod et scelerisque nec, consectetur eget odio. Ut volutpat blandit velit lobortis tempus. Phasellus at ante a augue iaculis hendrerit tempor in felis. Aliquam justo massa, tempor vitae dignissim ultricies, semper et augue. Nam mollis pretium purus at faucibus. Etiam a metus arcu, ut vestibulum ligula.</p>

	<p>Proin dictum viverra orci, eu condimentum lorem vulputate quis. Proin suscipit pulvinar est. Quisque tincidunt, tellus sed scelerisque posuere, nulla orci pellentesque ante, non scelerisque tellus arcu at mi. Aenean lobortis interdum dolor, et dapibus elit volutpat vitae. Duis massa leo, aliquam eu posuere non, porta quis lorem. Sed dapibus leo vel diam lacinia id consequat enim egestas. Donec a purus vitae turpis iaculis scelerisque.</p>
	<p>Nunc eget tincidunt ipsum. Quisque nec turpis tortor. Phasellus vitae sapien ante. Nunc suscipit faucibus commodo. Duis vel semper metus. Sed suscipit tempus ligula id posuere. Integer lectus massa, tempor gravida scelerisque ut, varius nec tellus. In metus purus, faucibus non condimentum in, elementum ac ligula. Curabitur pharetra, lectus volutpat viverra auctor, ligula nulla condimentum lorem, eu venenatis orci massa vel est. Donec sem mi, adipiscing ut scelerisque congue, egestas non neque.</p>
</section>

<section>
	<h2>What We've Done</h2>
	<p>Aenean egestas urna non quam pellentesque nec rhoncus lacus adipiscing. Proin condimentum aliquam metus, nec auctor elit cursus vel. Nam posuere lectus augue, vitae ullamcorper lorem. Morbi pellentesque, nunc ut iaculis imperdiet, erat ante vehicula tortor, interdum congue dolor neque quis nibh. Suspendisse hendrerit lectus in ante vestibulum vitae luctus felis tempor. Cras viverra sagittis felis vitae elementum. Vestibulum est elit, varius adipiscing interdum sed, pulvinar ac mauris. Sed turpis erat, rhoncus non viverra in, rutrum vitae nisi.</p>
	<p>Vivamus mollis quam et tellus scelerisque auctor. Donec nisl lacus, semper sit amet interdum eu, fringilla tempus sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut dui justo. Nullam vel dolor ante. Sed non massa ut nunc posuere sollicitudin. Suspendisse potenti. In viverra ante eu quam dignissim ac condimentum lacus tincidunt. Praesent semper justo eget eros sodales id lobortis lectus iaculis. Praesent ornare ante eget nibh hendrerit quis ornare libero ornare.</p>

	<h3>Awards and Recognition</h3>
	<p>Curabitur vel purus turpis, blandit fringilla justo. Donec imperdiet gravida imperdiet. Nunc dui sem, tincidunt id mollis non, ultricies id libero. Maecenas in elit id mauris auctor aliquet. Duis ullamcorper egestas lorem a consequat. Praesent blandit laoreet ligula, vel cursus elit pretium sit amet. Praesent pharetra, massa vel volutpat vehicula, neque lorem sollicitudin dui, at placerat leo metus vel magna. Aliquam facilisis diam id massa mollis fringilla. Praesent sit amet ornare urna. Aliquam a est arcu. Vivamus scelerisque aliquam tempor. Etiam tempus libero eget orci faucibus vehicula. Aliquam volutpat erat turpis. Mauris lacus neque, sollicitudin vitae hendrerit id, mollis vitae elit. Vestibulum eu velit lectus.</p>
	<p>Nam varius condimentum eros non lacinia. Proin a dolor dui. Nam vel adipiscing mi. Nam vel mauris eget arcu lobortis dapibus. Sed sollicitudin magna ac mauris gravida quis semper felis commodo. Etiam libero nisl, congue in ornare ac, vulputate at metus. Mauris ut convallis sem. Cras lobortis lacus id leo tristique et mattis lorem malesuada. Phasellus ac neque orci. Sed nec justo a libero placerat egestas. Donec congue, odio tincidunt semper pretium, diam nisi vestibulum est, nec vulputate nunc nibh semper elit. Morbi non nibh ut velit cursus venenatis. Nam pellentesque, ligula vitae eleifend pellentesque, orci diam bibendum massa, non luctus lorem nulla congue nisi.</p>
</section>

<section class="bgorange">
	<h2>What We're Thinking</h2>
	<p>In hac habitasse platea dictumst. Etiam malesuada, nisl consequat convallis congue, nisl nisi viverra lacus, vitae sagittis nibh ante at dolor. Sed consectetur, enim sit amet molestie gravida, libero odio aliquam mauris, at euismod risus urna nec leo. Nulla rutrum mattis tincidunt. Nulla lacus felis, tincidunt a bibendum eget, commodo nec risus. Quisque quis eros magna, id sollicitudin neque. Nunc ut nibh non justo faucibus condimentum eget sit amet arcu.</p>

	<h3>We Are Passionate About our Process</h3>
	<p>Suspendisse eleifend nisl ut enim imperdiet pulvinar venenatis ante tempus. Pellentesque eu metus eu purus vestibulum vulputate vulputate vitae mi. Morbi justo nisi, ullamcorper at interdum sit amet, mollis ac neque. Phasellus id odio nec eros lobortis dignissim sed a libero. Ut vitae arcu neque, eget consectetur velit. Pellentesque sed massa vel tellus vehicula iaculis eu a arcu. Nunc semper lobortis orci sit amet ullamcorper.</p>
	<p>Donec luctus bibendum mi, id aliquet eros semper egestas. Curabitur sed velit id dui vestibulum fermentum. Maecenas venenatis ultrices nunc, vitae interdum enim pretium ut. Quisque vestibulum, augue sit amet blandit placerat, tellus justo egestas nisi, a gravida justo nulla sit amet risus. Curabitur congue aliquam congue. Praesent mi diam, feugiat eu congue at, tempus ut lectus. Morbi sapien turpis, interdum eget semper vitae, congue sit amet lorem. Integer luctus enim ut urna vehicula hendrerit. Mauris id arcu ligula, sit amet auctor augue. Nullam tincidunt turpis vitae libero rhoncus ut laoreet tortor ornare. Quisque et lectus purus, ultrices ultrices lorem. Vestibulum vel libero ut mi luctus suscipit. Quisque viverra, neque in auctor dignissim, justo eros euismod libero, at tincidunt augue massa eget lorem. Fusce tincidunt nunc eu arcu pretium interdum. Phasellus ultricies, est id facilisis imperdiet, sapien dolor consequat ligula, et ornare massa lacus vel enim. Vivamus pellentesque risus ac ante faucibus elementum.</p>
	<p>Nulla ultricies dolor ac lorem fermentum lobortis et fermentum enim. Phasellus lobortis bibendum arcu, a hendrerit tellus pulvinar ac. Duis sit amet consequat purus. Cras ultrices pellentesque quam, at adipiscing lectus auctor eu. Morbi ante augue, malesuada vestibulum luctus id, suscipit ac nisi. Morbi consequat massa et est vulputate eleifend. Nam facilisis viverra dolor quis feugiat. Mauris leo lacus, tristique sit amet iaculis vitae, feugiat sed mi. Proin at vehicula eros. Proin et ante purus. In non nisl augue, id pulvinar dui. Aenean pharetra tempus sapien, id consequat dui luctus at. Donec non ipsum eget mauris sagittis elementum.</p>
</section>

<section>
	<h2>Who We Are</h2>
	<p>Etiam et justo in magna pharetra venenatis. Integer mollis est et mauris iaculis hendrerit. Quisque non risus sem, nec volutpat lacus. Mauris lacinia metus suscipit massa consequat non vulputate sapien vulputate. Donec mattis, neque eget mollis dictum, urna diam laoreet purus, eu ultrices diam elit sit amet orci. Proin eget mi et orci viverra malesuada. Morbi ac justo quam, in varius orci. Curabitur id justo sed erat tristique rhoncus id id massa. Aliquam vitae tortor a lectus porttitor ultricies.</p>

	<h3>Our Staff</h3>

	<h4>Bill Bobs</h4>
	<figure>
		<img src="images/placeholder.png"/>
	</figure>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur ullamcorper eleifend. Mauris dapibus ligula vitae leo semper a aliquam felis fringilla. Pellentesque dapibus lacus sed orci vulputate ultrices. Quisque mollis nisl id nibh cursus sodales pretium non justo. Sed id dui vel velit posuere consectetur eget quis elit. Sed est augue, euismod et scelerisque nec, consectetur eget odio. Ut volutpat blandit velit lobortis tempus. Phasellus at ante a augue iaculis hendrerit tempor in felis. Aliquam justo massa, tempor vitae dignissim ultricies, semper et augue. Nam mollis pretium purus at faucibus. Etiam a metus arcu, ut vestibulum ligula.</p>

	<h4>Clementine Brown</h4>
	<figure>
		<img src="images/placeholder.png"/>
	</figure>
	<p>Proin dictum viverra orci, eu condimentum lorem vulputate quis. Proin suscipit pulvinar est. Quisque tincidunt, tellus sed scelerisque posuere, nulla orci pellentesque ante, non scelerisque tellus arcu at mi. Aenean lobortis interdum dolor, et dapibus elit volutpat vitae. Duis massa leo, aliquam eu posuere non, porta quis lorem. Sed dapibus leo vel diam lacinia id consequat enim egestas. Donec a purus vitae turpis iaculis scelerisque.</p>

	<h4>Dave Biggs</h4>
	<figure>
		<img src="images/placeholder.png"/>
	</figure>
	<p>Nunc eget tincidunt ipsum. Quisque nec turpis tortor. Phasellus vitae sapien ante. Nunc suscipit faucibus commodo. Duis vel semper metus. Sed suscipit tempus ligula id posuere. Integer lectus massa, tempor gravida scelerisque ut, varius nec tellus. In metus purus, faucibus non condimentum in, elementum ac ligula. Curabitur pharetra, lectus volutpat viverra auctor, ligula nulla condimentum lorem, eu venenatis orci massa vel est. Donec sem mi, adipiscing ut scelerisque congue, egestas non neque.</p>
</section>

<section class="bgorange">
	<h2 id="Contact">Contact Us</h2>
	<p>Morbi cursus est at lacus semper pretium et sed eros. Nullam tortor dolor, lacinia eu tincidunt in, pharetra nec elit. Ut adipiscing convallis nunc, imperdiet eleifend justo vestibulum hendrerit. Maecenas auctor tristique dui, ac pulvinar orci vulputate nec. Proin id tortor risus, vel aliquet orci. Integer ligula dolor, pretium id ultrices sit amet, elementum in orci. Integer mollis felis at turpis eleifend ullamcorper consectetur libero aliquet. Cras ac mollis massa. Cras sed orci magna. Nam et ante a lectus placerat pharetra sed at sem. Maecenas quam orci, eleifend et rutrum ut, tincidunt vitae massa. Suspendisse id metus magna. Duis fringilla lacus quis neque facilisis porta. Nullam id aliquam diam.</p>

	<h3>Join Our Staff</h3>
	<p>Aenean egestas urna non quam pellentesque nec rhoncus lacus adipiscing. Proin condimentum aliquam metus, nec auctor elit cursus vel. Nam posuere lectus augue, vitae ullamcorper lorem. Morbi pellentesque, nunc ut iaculis imperdiet, erat ante vehicula tortor, interdum congue dolor neque quis nibh. Suspendisse hendrerit lectus in ante vestibulum vitae luctus felis tempor. Cras viverra sagittis felis vitae elementum. Vestibulum est elit, varius adipiscing interdum sed, pulvinar ac mauris. Sed turpis erat, rhoncus non viverra in, rutrum vitae nisi.</p>
	<p>Vivamus mollis quam et tellus scelerisque auctor. Donec nisl lacus, semper sit amet interdum eu, fringilla tempus sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut dui justo. Nullam vel dolor ante. Sed non massa ut nunc posuere sollicitudin. Suspendisse potenti. In viverra ante eu quam dignissim ac condimentum lacus tincidunt. Praesent semper justo eget eros sodales id lobortis lectus iaculis. Praesent ornare ante eget nibh hendrerit quis ornare libero ornare.</p>

	<p>Email us at <a href="mailto:hello@elbongurk.com">hello@elbongurk.com</a> for more information</p>
</section>
``` 

1. __Save__ your HTML file
2. __Refresh__ in the browser

Here's how it looks in the browser. *__(fig. 15)__*

{% include figure.html type="picture" lesson="12" figure="15" %}

The text is in desperate need of styling, but that is okay. We'll ignore that for now and focus just on our positioning in this lesson. What I want you to notice is that when you scroll the page, your absolutely positioned button moves with the page as we can see in  *__(fig. 16)__*.

{% include figure.html type="video" lesson="12" figure="16" %}

Now, let's explore fixed positioning. We are going to fix position our hamburger button. To write the CSS, we can just add it to our `a#hamburger {` selector.

1. Locate your CSS file
2. Add: `position: fixed;` to your `a#hamburger {` selector block
3. Now, we add coordinates based off our body tag parent. _(fixed elements all use the body as the parent, no exceptions)_. Add `top: 0;` to position our hamburger button at the top of our window.
4. Add: `right: 0;` to position it exactly at the right edge of our window.
5. __Save__ and __Refresh__

Here's my CSS so far:

```css
a#hamburger {
	float: right;
	padding: 15px;
	position: fixed;
	top: 0;
	right: 0;
}
```

and here's how it looks in the browser. *__(fig. 17)__*

{% include figure.html type="video" lesson="12" figure="17" %}

So something really weird happens, our hamburger button initially looks the same, but as we start to scroll, the hamburger button stays in place, but for some reason the banner image scrolls over the top of it. Then, once we scroll past the banner, our hamburger button reappears exactly in place.

This is close to what we wanted, but we need to fix the part where the hamburger button falls behind the banner. This is happening because we've altered the natural order of things. When we set the position of `section#banner` to be relative, we gave it a special place in the natural order, we made it more important that then other elements and now it likes to sit on top of everybody. 

This normally wouldn't cause any problems, but when we combine it with a fixed position element who is also out of the natural order, we get some special kind of problems.

### Adjusting the Z-Index

To address the stacking order of our positioned elements, we need to adjust what's called the "z-index" or the order of things in space from back to front. Elements with a higher z-index are actually in front of elements with a lower z-index. Right now, the banner section has the higher z-index so it is in front of our hamburger button. To fix this, we'll give our hamburger button a higher z-index.

1. Locate your CSS file
2. Add: `z-index: 1` to your `a#hamburger {` selector
3. __Save__ and __Refresh__

Here's my CSS:

```css
a#hamburger {
	float: right;
	padding: 15px;
	position: fixed;
	top: 0;
	right: 0;
	z-index: 1;
}
```

and here's how it looks in the browser. *__(fig. 18)__*

{% include figure.html type="video" lesson="12" figure="18" %}

We have made some progress, but as you can see now our hamburger button is difficult to see once it leaves the header. To fix this, we will give our hamburger button a background color.

1. Locate your CSS
2. Add: `background-color: teal;` to your `a#hamburger {` selector
3. __Save__ and __Refresh__ your browser

Here's my CSS:

```css
a#hamburger {
	float: right;
	padding: 15px;
	position: fixed;
	top: 0;
	right: 0;
	z-index: 1;
	background-color: teal;
}
```

and here's how it looks in the browser. *__(fig. 19)__*

{% include figure.html type="video" lesson="12" figure="19" %}

Looks like we've won. As you can see in figure 19, when we scroll, the header now not only stays in place, but also has a background color with some padding to make it more visible.

Okay, so now that we've finally got things working correctly, we can see the advantages of this. No matter how far down our page we get, we always have access to our navigation. The disadvantages are complexity of code and the loss of the screen real estate that is now always occupied by our hamburger button. This is especially the case when we are using smaller mobile devices. Let's set our browsers to [Responsive Design Mode](../8-navigation-and-mobile-first-design/#responsive-design-mode) to test this out. *__(fig. 20)__*

{% include figure.html type="picture" lesson="12" figure="20" %}

If we have the iPhone 6 selected, we see that our hamburger button seems to work nicely. However, on our mobile devices a good portion of the top portion of our screen is now dedicated to the fixed hamburger button. We still get the advantages of always accessible navigation, but we do lose some valuable real estate. This is a decision that every designer needs to think carefully about.

The good news is that we can see that our design still does pretty well on any of our mobile sized screens. With the exception of our unstyled text, we have made a site that is adaptable to big or small screens.

## Lesson Conclusion

In this lesson we learned more about positioning elements to achieve certain page layouts. We can use absolute positioning or fixed positioning to tell an element exactly where to be on a page.

Next up, we will look at [media queries](../13-media-queries/) for width specific design.
