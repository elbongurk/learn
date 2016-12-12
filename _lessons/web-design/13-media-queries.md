---
title: "Media Queries"
excerpt: "To compete, we need to design sites that adapt or respond to our user's device be it a phone, tablet, or computer. Learn CSS techniques that allow us to optimize our design for all screens."
lesson: 13
book: web-design
---

{% include toc.md %}

## Overview

Media queries are special CSS commands that allow us to change certain styles when the browser is larger or smaller than certain set widths. This is useful for responsive design because it allows us to design first for the small screen, in a simple, usually single column design, and then to take advantage of any extra screen we get by changing just small things in the layout as our screen gets larger. For example we could do a one column design up until 700 pixels, then use a media query to automatically change our layout to two columns for 701 pixel screens and larger.

## Lesson Setup

To get started, we'll need to first get organized. We'll need to create our lesson folder structure, our initial HTML file and connect it up with a new stylesheet.

### Folder Setup

1. Create a new __Lesson13__ folder inside of Bob
2. Now, create the __notes__ and __root__ folders
3. Inside the root folder, create  an __images__ folder and a __css__ folder

### HTML Setup

1. __Open__ up TextMate 
2. __File__ > __New__ to open a new file
3. Code in your [boilerplate HTML](../1-file-management/#the-boilerplate) making sure to add a title to the page. I'm calling mine: _Media Queries_.
4. Make sure that your boilerplate includes the `<meta name="viewport" content="width=device-width, initial-scale=1" />` [we learned in lesson 8](../8-navigation-and-mobile-first-design/#setting-the-viewport) to ensure the site works properly on a mobile device.
5. __Save__ your HTML file to your Lesson13 root folder with the name: __lesson13.html__
6. __Open__ and __Preview__ your page in the browser, checking to make sure your page title is appearing correctly.

### CSS Setup

1. __Open__ up TextMate
2. __File__ > __New__ to open a new file
3. __File__ > __Save__
4. Navigate to the "css" folder you created
5. Name your file, __style.css__
6. Hit __Save__
7. Attach this stylesheet to our HTML page. Type: `<link href="css/style.css rel="stylesheet" />` into the head section of our __lesson13.html__ file.
8. __File__ > __Save__ the HTML file

Your HTML should now look like this:

```html
<!doctype html>
<html>

	<head>
		<title>Media Queries</title>
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

If your background turned pink, then you are set. Everything is working correctly. This time we won't delete the CSS block as we'll use it for learning about media queries.

## Your First Media Query

So right now your web page should have a pink background from the CSS setup we did. What if we wanted the background to be blue  when the browser was 700 pixels or wider and pink when it was less than 700 pixels? 

Answer: we would use a media query.

Let's do it.

1. Locate you CSS file
2. After your body block, hit __Enter__ a couple of time to make some room
3. To begin our media query, type: `@media` and hit __Space__
4. Next, we'll need to type`(` and then `min-width: 700px;` and then `)` This tells the browser: _"When the browser is 700 pixels or wider"_
5. Next, We need to type: `{` to begin the set of commands that need to change at this browser width.
6. Close the media query so we don't forget later: `}`

Your CSS should now look like this:

```css
body {
	background-color: pink;
}

@media (min-width: 700px) {
}
```

Okay, now after the opening curly bracket in the media query, we write the CSS commands for things we want to change. These are just simple CSS block like we always write. Let's go ahead and change our body background color.

1. On the next open line, type: `body {`
2. `background-color: blue;`
3. Close the block `}`
4. Now, we also need to close the media query block: `}`
4. __Save__ and __Refresh__

Here's my CSS:

```css
body {
	background-color: pink;
}

@media (min-width: 700px) {
	body {
		background-color: blue;
	}
}
```

Okay, so depending on how big your browser is pulled open, you will have either a pink background or a blue one. If you pull it wider than 700 pixels it'll turn blue. Less, it will turn pink.

Go ahead, drag the side of the browser window left and right, it'll be pure magic.  *__(fig. 1)__* 

{% include figure.html type="video" lesson="13" figure="1" %}

So that's essentially what a media query is. It allows you to say here's a certain style, in our example a background color. Use that style until the page is a certain width, then override it with this other style.

Let's try another example, this time with some actual site content.

1. Locate your HTML file
2. Add the following HTML code:

```html
<section>
	<h2>This is a h2</h2>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin congue sem et pretium. Sed pulvinar volutpat facilisis. Sed velit risus, consequat sit amet sollicitudin a, ultrices nec nisl. Nullam ac dolor purus. In ac mi quis urna lobortis venenatis. Sed interdum, arcu a volutpat pretium, nisl velit auctor elit, at venenatis turpis mi a nisl. Integer at porttitor urna. Nulla sem mauris, pulvinar bibendum tristique vitae, pulvinar vel elit. Aenean sollicitudin quam sit amet lectus elementum sit amet suscipit sem feugiat. Fusce aliquam euismod diam, at placerat felis fringilla et. Vivamus sagittis suscipit dapibus. Donec molestie tristique quam, sed sodales justo volutpat eu. Sed pellentesque sollicitudin tempus. Donec at sem eu massa tempor porta congue id purus.</p>
</section>
```

3. __Save__ and __Refresh__
{:start="3"}

and here's how it looks in the browser. *__(fig. 2)__*

{% include figure.html type="video" lesson="13" figure="2" %}

Okay. So our background color still changes at our 700 pixels screen width and we see that our text automatically conforms to the screen width as well. Let's give our text some styling so we can use a media query to make adjustments.  

1. Locate your CSS file
2. In your primary CSS _(above the media query)_, add the selector: `h2 {` 
3. Let's make the text larger: `font-size: 3em;`
4. Close the block: `}`
5. Let's also increase the size and line-height _(leading)_ of our paragraph text, Add: `p {` as the selector for a new CSS block.
6. Add: `font-size: 1.5em;`
7. Add: `line-height: 1.5;`
7. Close the block: `}`
8. __Save__ and __Refresh__

Here's my CSS so far:

```css
body {
	background-color: pink;
}

h2 {
	font-size: 3em;
}

p {
	font-size: 1.5em;
	line-height: 1.5;
}

@media (min-width: 700px) {
	body {
		background-color: blue;
	}
}
```

and here's how it looks in the browser. *__(fig. 3)__*

{% include figure.html type="video" lesson="13" figure="3" %}

Okay, so now regardless of our browser size our text is much larger, as you can see. Often we'll want to use larger text on the smaller screen and smaller text on the larger screen. Let's go ahead and use our media query to make our text smaller at the 700 pixel and larger size.

1. Locate your CSS file
2. After the body block in your media query, but before the closing `}` of the media query, hit __Enter__ a few times to make some room.
3. Add the selector: `h2 {`
4. Now, add: `font-size: 2em;`
5. Close the block: `}`
6. __Save__ and __Refresh__


Here's my media query CSS:

```css
@media (min-width: 700px) {
	body {
		background-color: blue;
	}
	
	h2 {
		font-size: 2em;
	}
}
```

and here's how it looks in the browser. *__(fig. 4)__*

{% include figure.html type="video" lesson="13" figure="4" %}

That's a good start. Let's now move on to styling the paragraph text. We'll bring our paragraph text down to 1em font size at our 700 pixel and larger screen size.

1. Locate your CSS file
2. After your h2 block in the media query, add: `p {`
3. Add: `font-size: 1em;`
4. Close the block: `}`
5. __Save__ and __Refresh__

Here's my CSS:

```css
@media (min-width: 700px) {
	body {
		background-color: blue;
	}
	
	h2 {
		font-size: 2em;
	}
	
	p {
		font-size: 1em;
	}
}
```

and here's how it looks in the browser. *__(fig. 5)__*

{% include figure.html type="video" lesson="13" figure="5" %}

## Adjusting h2 Alignment

Let's say we wanted our h2 to be centered on the smaller screen and left-aligned on the larger screen. This would mean that in our primary CSS _(above the media query)_, we would ask the h2 to `text-align: center;` and the override it in the media query by saying: `text-align: left;`.

Let's give that a try.

1. Locate your CSS file
2. In your primary CSS _(above media query)_ add: `text-align: center;` to the `h2 {` to indicate that on the smaller mobile screen we want to center our h2.
3. Now, to override that we add: `text-align: left;` to the `h2 {` in the media query CSS.
4. __Save__ and __Refresh__

Here's my CSS:

```css
body {
	background-color: pink;
}

h2 {
	font-size: 3em;
	text-align: center;
}

p {
	font-size: 1.5em;
	line-height: 1.5;
}

@media (min-width: 700px) {
	body {
		background-color: blue;
	}
	
	h2 {
		font-size: 2em;
		text-align: left;
	}
	
	p {
		font-size: 1em;
	}
}
```

and here's how it looks in the browser. *__(fig. 6)__*

{% include figure.html type="video" lesson="13" figure="6" %}

We can see that our h2 is indeed centered and much larger in our small screen and adjusts itself to be smaller and left-aligned when we hit our 700 pixel width. This is the kind of thing that a media query is very good at and is a useful tool for adjusting our layout for our screen size.

## Controlling Line Length

One of the biggest problems with reading text on screen is controlling the space around and within the text. When there isn't enough space or lines get too long, it can be difficult for a reader to keep their place. To help with this, I like to make sure that that I constrain my text to a percentage of the total screen. This helps control line length and also helps create more space on the left and right side of my browser window.

Because all of our current text is inside a section we can use that `section` as the selector to control our width. I'm actually going to control the width by adding padding to that section. By adding padding to the left and right, I am essentially subtracting width from my content while creating extra space.

1. Locate your CSS file
2. Add: `section {` to your primary CSS _(before the media query)_
3. Add: `padding-left: 10%;`
4. Add: `padding-right: 10%;`
4. Close the block: `}`
5. __Save__ and __Refresh__

Here's my CSS:

```css
body {
	background-color: pink;
}

h2 {
	font-size: 3em;
	text-align: center;
}

p {
	font-size: 1.5em;
	line-height: 1.5;
}

section {
	padding-left: 10%;
	padding-right: 10%;
}

@media (min-width: 700px) {
	body {
		background-color: blue;
	}
	
	h2 {
		font-size: 2em;
		text-align: left;
	}
	
	p {
		font-size: 1em;
	}
}
```

and here's how it looks in the browser. *__(fig. 7)__*

{% include figure.html type="video" lesson="13" figure="7" %}

The really great thing about this is that we don't need to do anything in the media query. Because we used a percentage, that margin grows or shrinks with the browser. In both the small and large screen sizes, our text sits comfortably away from the browser edges, making it easier to read because now the line length is more manageable and we don't have the tension that having text too close to the edges can cause.

## The Mobile First Approach

Okay, so now that we have a basic understanding of what a media query is, we can talk about how best to use them.  I teach using a mobile first approach which I've discussed a bit already in earlier lessons. Mobile first design is an approach where you design every web page for a mobile sized screen first. You don't worry about tablets or computers, you simply make sure that your page is functional, useable, and enjoyable on the smallest sized screen that is appropriate. We've been using the iPhone 6 for this purpose, but you could easily argue that sometime smaller like the iPhone 5 is also a good choice since they are still in use.

By prioritizing the smallest screen size, you have ensured that your mobile user will have an optimized experience, but what you might not initially realize it that you have also prioritized content and functionality so that really, at any screen size, your site is still useable and functional. The idea is if it works on a small screen, then it still works on any sized screen. 

From a mobile first approach standpoint, a bigger screen just means that you can make adjustments to your page to take advantage of the extra space. These adjustments can even be quite small. Sometimes it is just as simple as changing the size of the type like we did a few minutes ago. 

Other times you make bigger, more noticeable adjustments that make more sense on the big screen. There are things like changing the navigation from a mobile navigation to a more standard navigation bar at the top, or moving from a single column design to a double-column one.

### Step 1: Design Your Page for Mobile

To begin your mobile first project, you'll code in your content and style your page using the mobile screen as your goal. Set your browser to preview in [Responsive Design Mode](../8-navigation-and-mobile-first-design/#responsive-design-mode) and choose a phone as your goal device. We have been using the iPhone 6 because at this time, it's pretty much on the small end of the standard, though you could argue there are still a few iPhone 5s' out there in the world. 

Make sure your page works well and looks good at that screen size. Take into account that your user will be navigating with a finger or thumb and will likely prefer scrolling over clicking as it's way easier on a phone. Make sure the type is big enough and easy to read. You might be surprised, but type is usually much, much bigger on the small screen than on a large one. Our earlier example is actually pretty close to what I might do on a real project.

Size your images knowing that phones are both high resolution and also pulling from a data plan. This means that you make the biggest image you can without serving up gigantic files that will take a long time to load on slower connections and unnecessarily drain the data plan. You'll almost never need more than a 2,000 pixel image, even for a large full window banner image _(even for the desktop size)_.

### Step 2: Test on Small Tablets or Larger Phones

Once your page is finished for mobile, begin testing your site on a bit larger screen. Aim for a tablet or larger phone. See if there is anything that doesn't look right or actually breaks at that screen size. Typically everything will be fine if you didn't set widths. Text and images should expand nicely. 

The only adjustments I usually make at this size are to the line lengths. I tend to like to give more white space on the left and right sides of may pages. This could be accomplished by adding more margin or padding to the body tag for example. Sometimes I'll adjust text size just a bit if it seems like it's needed.

Add a media query at the width where you notice that your current design breaks down. Then simply override just the styles you need to adjust under that media query. You may only have one or two and that is great. Less is more. The whole idea is not to reinvent the wheel, just to make small tweaks along the way.

### Step 3: Test on Large Tablets and Small Laptops

Once you are happy with your small tablets and larger phones, move on to bigger screen sizes. These would be things like a regular sized iPad or a small Macbook Air. At this point, your page should still be totally functional and look pretty ok, but you'll begin to notice more changes that you could make to take advantage of the all the extra screen space.

You'll start to consider adding a media query for changing the navigation at this point. Now you'll probably wish that you had top navigation to make the content more easily accessible. You'll likely be thinking that the type could be a bit smaller. Other than that, I'd expect that your page is still pretty good.

### Step 4: Test on the Biggest Screens

The last step is to test it on a desktop computer or larger laptop. The largest screen size I ever worry about is 1920 pixels across. It's usually at this step that you make any really significant layout adjustments. Sometimes it is as simple as constraining all or most of your content to a certain width and centering, which I highly recommend and will show you a little later, or adding columns which can often be combined with the width constraint to make a really usable cohesive site. 

At this size, almost all sites will use an additional media query to add a top bar navigation rather than the hamburger mobile type and you'll likely be happier using a smaller type size.  You may be tempted to make lots of big changes, but remember that the goal is functionality and that you still want the site to look very much like the same site at each size. You want to take advantage of new space, but not to radically change your design. If done well, the transformation from small screen to large screen can be very seamless.

## Multiple Media Queries: Less is More

In the stepped process I just described above, I mentioned adding a new media query for each screen size grouping. It is important to know that you can add as many media queries as you want to a stylesheet to control your page. It's also important to know that it can easily become impossible to manage if you go overboard.

Only write as many media queries as you absolutely need to keep your page viewing experience a good one. Some people can get away with just one media query moving from small to large. Others use two to handle a middle and large sized screen. Remember that each one you add adds complexity to your code and to the management of your site, so use them sparingly. 

It's also important that you have all your content ready first and have all your initial styling complete. Making changes once you have new media queries in place make for a very confusing and tedious refactoring _(going through all your code to make sure nothing is in error or being repeated)_ process and can easily make your site nearly impossible to maintain.


## Lesson Conclusion

In this lesson we learned about media queries as a tool for making changes to our web pages at certain browser widths. We practiced overriding styles set in our initial CSS code using a media query set to notice when our browser window was 700 pixels wide or wider.

We made adjustments to both our text and our background color _(which is weird, but it does serve as a very easy to notice example)_. We walked through the process of mobile first design.  In the next lesson, we'll dig deeper into the mobile first approach.

Next, we will use media queries to modify our [navigation for the big screen](../14-creating-navigation-for-the-big-screen/).
