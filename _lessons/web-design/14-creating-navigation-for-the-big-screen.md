---
title: "Creating Navigation for the Big Screen"
excerpt: "Learn to create a horizontal navigation for a large screen site, a multi-column layout, and how to hide and show certain elements based on screen size using media queries. "
lesson: 14
book: web-design
---

{% include toc.md %}

## Overview

In the last lesson we introduced the idea of using media queries to alter our web page based on screen width. We talked about designing our page for the mobile screen first and then making adjustments using media queries as our screen gets larger.

In this lesson, I'd like to talk about some of the bigger adjustments that often get made as the screen gets larger. I'd like to walk you through creating more appropriate navigation for a large screen site, creating a multi-column layout, and hiding and showing certain elements based on screen size using media queries. 

## Lesson Setup

To get started, we'll need to first get organized. We'll need to create our lesson folder structure, our initial HTML file and connect it up with a new stylesheet.

### Folder Setup

1. Create a new __Lesson14__ folder inside of Bob
2. Create your __notes__ and __root__ folders
3. Inside the root folder, create  an __images__ folder and a __css__ folder
4. __Download__ the lesson 14 resources from [here](http://lessons.elbongurk.com/L14-images.zip)
5. __Move__ those images into your __images__ folder for this lesson

### HTML Setup

1. __Open__ up TextMate 
2. __File__ > __New__ to open a new file
3. Code in your [boilerplate HTML](../1-file-management/#the-boilerplate) making sure to add a title to the page. I'm calling mine: _Creating Navigation for the Big Screen_.
4. Make sure that your boilerplate includes the `<meta name="viewport" content="width=device-width, initial-scale=1" />` [we learned in lesson 8](../8-navigation-and-mobile-first-design/#setting-the-viewport) to ensure the site works properly on a mobile device.
5. __Save__ your HTML file to your Lesson14 root folder with the name: __lesson14.html__
6. __Open__ and __Preview__ your page in the browser, checking to make sure your page title is appearing correctly.

### CSS Setup

1. __Open__ up TextMate
2. __File__ > __New__ to open a new file
3. __File__ > __Save__
4. Navigate to the "css" folder you created
5. Name your file, __style.css__
6. Hit __Save__
7. Attach this stylesheet to our HTML page. Type: `<link href="css/style.css rel="stylesheet" />` into the head section of our __lesson14.html__ file.
8. __File__ > __Save__ the HTML file

Your HTML should now look like this:

```html
<!doctype html>
<html>

	<head>
		<title>Creating Navigation for the Big Screen</title>
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

## Creating a Navigation

You might remember that the technique for creating navigation is to nest the links inside an unordered list, and to nest the unordered list inside of a pair of `<nav></nav>` tags. This is true for any navigation whether it be a footer navigation like we learned previously or a horizontal top navigation bar like we are about to learn.

### Navigation HTML

Let's go ahead and build our navigation in the HTML. Here are the links we'll be using in our navigation:

* Home
* About
* Services
* Contact

1. Because this navigation will live inside our header, let's begin by adding a pair of `<header></header>` tags.
2. Now, inside the header, let's add a pair of `<nav></nav>` tags to hold our navigation.
3. Inside of the navigation tags, we'll begin our unordered list, add: `<ul></ul>`
4. Next, we'll add our list items between our unordered list tags. Each one should contain a text link using the text above for the link text. For now, we'll use a blank space between the quotes as a placeholder. `<li><href=" ">link text</a>`

Here's the HTML so you can double-check your work:

```html
<header>
	<nav>
		<ul>
			<li><a href=" ">Home</a>
			<li><a href=" ">About</a>
			<li><a href=" ">Services</a>
			<li><a href=" ">Contact</a>
		</ul>
	</nav>
</header>
```

5. __Save__ and __Refresh__ your browser.
{:start="5"}

and here's how it looks in the browser. *__(fig. 1)__*

{% include figure.html type="picture" lesson="14" figure="1" %}

As we'd expect, we have a simple bulleted list of links. Next, we'll go about styling them into a pretty typical top navigation where they will align themselves horizontally across the page. 

#### Horizontal Navigation CSS

A few lessons ago, we learned how to style our navigation for a mobile footer navigation. The links each were displayed vertically with each link spanning the entire screen width. This made it easier for a mobile user to navigate the site. 

Big screens allow us to take advantage of more horizontal space, so we need to tell our links that they can sit side by side. 

Our first step is similar to that of our footer navigation. We'll remove the bullets and the extra left padding on the unordered list since that isn't necessary in our navigation.

1. Locate your CSS file
2. Add: `ul {` 
3. To remove the bullets, add: `list-style: none;`
4. To remove the extra left padding used to hold the bullets, add: `padding-left: 0;`
5. Close the block: `}`

Here's my CSS:

```css
ul {
	list-style: none;
	padding-left: 0;
}
```

and here's how it looks in the browser. *__(fig. 2)__*

{% include figure.html type="picture" lesson="14" figure="2" %}

Okay, we've successfully stripped our unordered list down to just the list items and the links contained inside. To make our work easier to see, let's add background colors so we can clearly identify our pieces.

1. Add: `li {` to talk to our list items directly
2. Add: `background-color: yellow;`
3. Close the block: `}`
4. Hit __Enter__ twice
5. Add: `li a {` to talk directly to the links inside of the list items
6. Add: `background-color: grey;`
7. Close the block: `}`

Here's my CSS:

```css
ul {
	list-style: none;
	padding-left: 0;
}

li {
	background-color: yellow;
}

li a {
	background-color: grey;
}
```

and here's how it looks in the browser. *__(fig. 3)__*

{% include figure.html type="picture" lesson="14" figure="3" %}

Looking at our page, we notice that our list items are block-level, we can tell because they span the full screen width. Our links, however, are inline elements. We can tell that because the background color wraps tightly around just the content. We'll have to make some adjustments to the display of each of these to achieve our horizontal layout.

#### Using Display: Inline-Block

So far we've discussed only two types of elements: inline element and block-level elements. By default all elements fall into one of these categories, however, there is another setting we can use, inline-block.

Inline-block is a special hybrid of inline and block-level elements. It has the position qualities of an inline element so inline-block elements can sit side-by-side, but also are powerful enough to control their own padding and margin like a block-level element can.

Using inline-block for our list items and links will allow us to display those elements side-by-side but still able to precisely set padding and margin. This setup is the key to creating our horizontal navigation.

Let's set this up.

1. Add: `display: inline-block;` to your `li {`
2. Now, also add: `display: inline-block;` to your `li a {`

Here's my CSS:

```css
ul {
	list-style: none;
	padding-left: 0;
}

li {
	background-color: yellow;
	display: inline-block;
}

li a {
	background-color: grey;
	display: inline-block;
}
```

3. __Save__ and __Refresh__
{:start="3"}

and here's how it looks in the browser. *__(fig. 4)__*

{% include figure.html type="picture" lesson="14" figure="4" %}

Good, we are getting closer. Our list items as well as our links are set so they are sitting side-by-side. Notice we can no longer see any of the yellow from our list items. This is because they are sitting exactly behind our links. If we were to delete our background color from our links, we would see the yellow again.

#### Adding Padding and Margin to Separate Links

Now, we'll control the look of our navigation using some more CSS. The first thing we need to do is create some separation between our links so our user can easily identify where one stops and the next starts. To do this we'll need to add margin _(margin creates invisible space around the outside of an element)_ to our list item.

1. Add `margin: 0 2px;` to your list items under the selector:  `li {`
2. __Save__ and __Refresh__

Here's my CSS:

```css
li {
	background-color: yellow;
	display: inline-block;
	margin: 0 2px;	
}
```

>    __Note:__ You may have noticed that I did something a little different for the value of my margin property. Instead of typing: `margin-left: 2px;` followed by `margin-right: 2px;` I used a shorthand. I just typed: `margin: 0 2px;`. When you use only `margin:` as the property and two values after that, the first value becomes the value for the top and the bottom. The second number becomes the value for both the left and the right. So when I say `margin: 0 2px;`, I'm actually writing shorthand for the for different directional properties associated with margin.

and here's how it looks in the browser. *__(fig. 5)__*

{% include figure.html type="picture" lesson="14" figure="5" %}

We've successfully created a little separation between our links. That's a great start. 

Next up, we'll increase our hit targets so our user has a little wiggle room when clicking as right now they have to click exactly on the text to use the link. To do this we'll need to add padding to our links. We'll add a bit of padding on the top and bottom and more on the left and right.

1. Add: `padding: 5px 15px;` to the `li a {` selector
2. __Save__ and __Refresh__

```css
li a {
	background-color: grey;
	display: inline-block;
	padding: 5px 15px;
}
```

>    __Note:__ I used the same shorthand I used for margin in the padding for our link. Instead of writing out all four margin properties, I just used the generic property, `margin:` and two number. The first number, 5px, works for top and bottom and the second number, 15px adds the padding to the left and the right.

and here's how it looks in the browser. *__(fig. 6)__*

{% include figure.html type="picture" lesson="14" figure="6" %}

Looking pretty good. Now let's say we want to align our navigation to the right side of our screen. This is a little tricky. We need to tell a block-level parent to `text-align: right;` its children. In our case, the next block-level parent element is the unordered list, so we should just be able to tell our unordered list to `text-align: right;`. Let's give it a try.

1. Locate your CSS file
2. Add: `text-align: right:` to your `ul {` selector
3. __Save__ and __Refresh__

Here's my CSS:

```css
ul {
	list-style: none;
	padding-left: 0;
	text-align: right;
}

li {
	background-color: yellow;
	display: inline-block;
	margin: 0 2px;	
}

li a {
	background-color: grey;
	display: inline-block;
	padding: 5px 15px;
}
```

and here's how it looks in the browser. *__(fig. 7)__*

{% include figure.html type="picture" lesson="14" figure="7" %}

There. We have a right-aligned horizontal navigation. If we wanted to clean this up a bit and make it a little more stylish, we could remove the background colors and underline on the links. We could also change the link color from that obnoxious blue and add a hover.

1. Locate your CSS file
2. Remove the background colors for the list items and the links
3. Remove the underlines by adding: `text-decoration: none;` to the `li a {` selector
4. Change the link text color by adding: `color: grey;` to the `li a {` selector
5. Add a new CSS block for the link hover. Remember this is a pseudo class and we need to use `li a:hover {` as the selector
6. Add: `text-decoration: underline;` to our hover
7. Close the block: `}`
8. __Save__ and __Refresh__

Here's my CSS:

```css
ul {
	list-style: none;
	padding-left: 0;
	text-align: right;
}

li {
	display: inline-block;
	margin: 0 2px;	
}

li a {
	display: inline-block;
	padding: 5px 15px;
	text-decoration: none;
	color: grey;
}

li a:hover {
	text-decoration: underline;
}
```

and here's how it looks in the browser. *__(fig. 8)__*

{% include figure.html type="picture" lesson="14" figure="8" %}

That is looking pretty nice. If you hover over any of the links, you should see an underline appear. In __(fig. 8)__ you can see it on the Home link. You could use any number of techniques for the hover. Applying a background color is also a very popular choice.

To complete our header, let's add in our logo. Typically this would be in the top left corner above the navigation. Let's go ahead and code this in our HTML.

1. Locate your HTML file
2. Add: `<a href=" "><img src="images/logo.png"/></a>` above your opening navigation tag.
3. __Save__ and __Refresh__

Here's how your HTML should look:

```html
<header>
	<a href=" "><img src="images/logo.png"/></a>
	<nav>
		<ul>
			<li><a href=" ">Home</a>
			<li><a href=" ">About</a>
			<li><a href=" ">Services</a>
			<li><a href=" ">Contact</a>
		</ul>
	</nav>
</header>
```

and here's how it looks in the browser. *__(fig. 9)__*

{% include figure.html type="picture" lesson="14" figure="9" %}

That's pretty much it, that's how you create a top navigation for just about any basic large screen website. Next, let's use a media query to switch between a small screen footer navigation and this new large screen version.

### Mobile First Approach

We should first design our site with mobile in mind. So we need to preview our site in a mobile sized browser using [Responsive Design Mode](../9-navigation-and-mobile-first-design/#responsive-design-mode). *__(fig. 10)__*

{% include figure.html type="picture" lesson="14" figure="10" %}

Things actually look semi-ok on mobile, but we can do much better. I'd like to start by switching out our horizontal top navigation for a hamburger button and footer navigation combination. Even though our links look okay on this sized screen, it would be pretty difficult for our user to reach up with a thumb and accurately use them for navigation.


#### Adding Mobile Navigation Elements

A weird thing needs to happen here. I need to switch out one type of navigation for another entirely here. Instead of this bar navigation, I want a hamburger button up top. First, let's add our hamburger button.

1. Locate your HTML file
2. Before your logo link, add an image link using "hamburger.png" from your images folder as the link image. Use a blank for the address as a placeholder: `<a href=" "><img src=images/hamburger.png/></a>`
__Save__ and __Refresh__

and here's how it looks in the browser. *__(fig. 11)__*

{% include figure.html type="picture" lesson="14" figure="11" %}

Because our hamburger button is the first thing in our HTML content, it takes the place of the logo in the top-most left position. If we want to align it to the right, we'll need to `float: right;`. Because we now have two image links in the header _(the logo and the hamburger)_ we'll need a way to talk to them independently. Let's add and `id="logo"` to the logo link and `id="hamburger"` to the hamburger link.

Here's how your HTML should look:

```html
<a href=" " id="hamburger"><img src=images/hamburger.png/></a>
<a href=" " id="logo"><img src="images/logo.png"/></a>
```

Now, let's use CSS to tell our hamburger link to float right.

1. Locate your CSS file
2. Add: `a#hamburger {`
3. Add: `float: right;`
4. Close the block: `}`
5. __Save__ and __Refresh__

Here's my CSS:

```css
a#hamburger {
	float: right;
}
```


and here's how it looks in the browser. *__(fig. 12)__*

{% include figure.html type="picture" lesson="14" figure="12" %}

Remember that whenever we float any element, it's important to clear that float using the micro-clear fix. To do this, we need to add `class="group"` to the parent, in this case the header.

1. Locate your HTML
2. Add: `class="group"` to the opening header tag: `<header class="group">`
3. __Save__ your HTML

Your HTML should look like this:

```html
<header class="group">
	<a href=" " id="hamburger"><img src=images/hamburger.png/></a>
	<a href=" " id="logo"><img src="images/logo.png"/></a>
	
	<nav>
		<ul>
			<li><a href=" ">Home</a>
			<li><a href=" ">About</a>
			<li><a href=" ">Services</a>
			<li><a href=" ">Contact</a>
		</ul>
	</nav>
		
</header>

...
```

Now we need to add our micro-clear fix to our CSS

1. Locate your CSS
2. Add the micro-clear fix CSS block to the top of your CSS:

```css
.group:after {
  content: "";
  display: table;
  clear: both;
}
```

6. __Save__ your CSS.
{:start="3"}

Here's the start of my CSS:

```css
.group:after {
  content: "";
  display: table;
  clear: both;
}

ul {
	list-style: none;
	padding-left: 0;
	text-align: right;
}

...
```

These changes won't produce any visible results in our page now, but will save us a lot of frustration later if we put them in before they cause any real issues.

Now, let's add our matching footer navigation. The neat thing here is that we can mostly reuse the navigation HTML we wrote for the top bar navigation, we just need to change out the `<header></header>` tags for some `<footer></footer>` tags. Also, we'll leave out the two images that live in the header. The rest will stay the same.

Here is our new footer navigation:

```html
<footer>
	<nav>
		<ul>
			<li><a href=" ">Home</a>
			<li><a href=" ">About</a>
			<li><a href=" ">Services</a>
			<li><a href=" ">Contact</a>
		</ul>
	</nav>
</footer>
```

You can grab this from your HTML file or __Copy__ and __Paste__ from mine above. Put this after your closing header tag.

Here's how your HTML should look:

```html
<header class="group">
	<a href=" " id="hamburger"><img src=images/hamburger.png/></a>
	<a href=" " id="logo"><img src="images/logo.png"/></a>
	<nav>
		<ul>
			<li><a href=" ">Home</a>
			<li><a href=" ">About</a>
			<li><a href=" ">Services</a>
			<li><a href=" ">Contact</a>
		</ul>
	</nav>
</header>
	
<footer>
	<nav>
		<ul>
			<li><a href=" ">Home</a>
			<li><a href=" ">About</a>
			<li><a href=" ">Services</a>
			<li><a href=" ">Contact</a>
		</ul>
	</nav>
</footer>
```

__Save__ and __Refresh__



and here's how it looks in the browser. *__(fig. 13)__*

{% include figure.html type="picture" lesson="14" figure="13" %}

Right now both sets of navigation are listening to the CSS we wrote for our unordered list, our list items, an our nested links. We can use specificity to adjust our CSS so that the CSS we already wrote for list items only applies to our header navigation. Let's add `header nav` to each our `ul {`, our `li {`,our `li a {`, and our `li a:hover {`.

Here's my CSS:

```css
header nav ul {
	list-style: none;
	padding-left: 0;
	text-align: right;
}

header nav li {
	display: inline-block;
	margin: 0 2px;	
}

header nav li a {
	display: inline-block;
	padding: 5px 15px;
	text-decoration: none;
	color: grey;
}

header nav li a:hover {
	text-decoration: underline;
}
```

__Save__ and __Refresh__

and here's how it looks in the browser. *__(fig. 14)__*

{% include figure.html type="picture" lesson="14" figure="14" %}

Cool. We now have a regular unordered list, ready to be styled using similar selectors only swapping `header nav` for `footer nav`.

We learned to style footer navigation back in lesson 10, let's borrow our CSS from there. You can __Copy__ and __Paste__ from here:

```css
ul {
	list-style: none;
	background-color: yellow;
	padding-left: 0;
}

ul a {
	background-color: pink;
	display: block;
	padding: 25px;
	margin-bottom: 5px;
	text-align: center;
	text-decoration: none;
	color: black;
	font-size: 2em;
}
```

We'll need to adjust this to make sure it is directed at our footer navigation. Add: `footer nav` in front of each selector.

Here's my CSS:

```css
footer nav ul {
	list-style: none;
	background-color: yellow;
	padding-left: 0;
}

footer nav ul a {
	background-color: pink;
	display: block;
	padding: 25px;
	margin-bottom: 5px;
	text-align: center;
	text-decoration: none;
	color: black;
	font-size: 2em;
}
```

__Save__ and __Refresh__

and here's how it looks in the browser. *__(fig. 15)__*

{% include figure.html type="picture" lesson="14" figure="15" %}

Great. We now have both a big screen navigation and a small screen navigation. We'll need to set to work on removing our big screen navigation on our mobile design.
 
#### Hiding Elements on Mobile

CSS allows us to hide or show certain elements using a simple CSS declaration, `display: none;` and `display: block; or inline;`. These are very powerful lines of code when we work on a responsive web site. 

To hide our horizontal navigation on our mobile sized page, we can add: `display: none;` to our `header nav ul {`. Later, we'll use a media query to bring it back.

1. Locate your CSS file
2. Add: `display: none;` to `header nav ul {`
3. __Save__ and __Refresh__

Here's my CSS:

```css
header nav ul {
	list-style: none;
	padding-left: 0;
	text-align: right;
	display: none;
}
```

and here's how it looks in the browser. *__(fig. 16)__*

{% include figure.html type="picture" lesson="14" figure="16" %}

We've done it. Our mobile navigation is the only navigation that now appears. We'll use a similar but opposite strategy later with a media query to switch out the mobile for the top bar navigation.

### Adding More Content

Let's add some more content to our page. We'll add three new sections, one with a large banner image, and two containing an h2 and a paragraph each.

Add these new sections in between your header and your footer code. You can __Copy__ and __Paste__ from my HTML below:

```html
<section>
	<img src="images/banner.png">
</section>
	
<section>
	<h2>Section One</h2>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin congue sem et pretium. Sed pulvinar volutpat facilisis. Sed velit risus, consequat sit amet sollicitudin a, ultrices nec nisl. Nullam ac dolor purus. In ac mi quis urna lobortis venenatis. Sed interdum, arcu a volutpat pretium, nisl velit auctor elit, at venenatis turpis mi a nisl. Integer at porttitor urna. Nulla sem mauris, pulvinar bibendum tristique vitae, pulvinar vel elit. Aenean sollicitudin quam sit amet lectus elementum sit amet suscipit sem feugiat. Fusce aliquam euismod diam, at placerat felis fringilla et. Vivamus sagittis suscipit dapibus. Donec molestie tristique quam, sed sodales justo volutpat eu. Sed pellentesque sollicitudin tempus. Donec at sem eu massa tempor porta congue id purus.</p>
</section>
	
<section>
	<h2>Section Two</h2>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin congue sem et pretium. Sed pulvinar volutpat facilisis. Sed velit risus, consequat sit amet sollicitudin a, ultrices nec nisl. Nullam ac dolor purus. In ac mi quis urna lobortis venenatis. Sed interdum, arcu a volutpat pretium, nisl velit auctor elit, at venenatis turpis mi a nisl. Integer at porttitor urna. Nulla sem mauris, pulvinar bibendum tristique vitae, pulvinar vel elit. Aenean sollicitudin quam sit amet lectus elementum sit amet suscipit sem feugiat. Fusce aliquam euismod diam, at placerat felis fringilla et. Vivamus sagittis suscipit dapibus. Donec molestie tristique quam, sed sodales justo volutpat eu. Sed pellentesque sollicitudin tempus. Donec at sem eu massa tempor porta congue id purus.</p>
</section>
```

__Save__ and __Refresh__

and here's how it looks in the browser. *__(fig. 17)__*

{% include figure.html type="picture" lesson="14" figure="17" %}

You'll notice that our banner image is very large. We'll need to apply CSS to make the image responsive so it can resize itself to fit our browser. To do this we'll need to apply our `max-width: 100%;` to our images.

1. At the top of your CSS file, after the boilerplate, add: `img {` to target all images on our site and hit __Enter__
2. Add `max-width: 100%;` and hit __Enter__ to move to the next line
3. Close out the CSS block with `}`
4. __Save__ and __Refresh__ your browser

Your CSS should look like this:

```css
img {
	max-width: 100%;
}

.group:after {
  content: "";
  display: table;
  clear: both;
}
```

Your page should now look something like this in the browser: *__(fig. 18)__*

{% include figure.html type="video" lesson="14" figure="18" %}


#### Styling our Section Text

Let's go ahead and make our text easier to read. We'll control our line lengths and our font size and spacing like we learned last lesson. 

##### Controlling Line Lengths and Styling Text

We can control our line-lengths by constricting our section content. We can do that one of two ways, the first is to set a width on the sections that have text, the second is to add padding. Adding padding is the more simple solution, let's go with that. The tricky part will be applying the padding only to the sections with text and not the section holding the large banner image. To apply to only the second and third sections, we'll need to add a `class=` attribute to both of them.

1. Locate your HTML
2. Add: `class="text"` to the opening tag of the second and third section.
3. Save your HTML file

Here's how your HTML should look for each of your three sections so far:

```html
<section>
	<img src="images/banner.png">
</section>
	
<section class="text">
	<h2>Section One</h2>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin congue sem et pretium. Sed pulvinar volutpat facilisis. Sed velit risus, consequat sit amet sollicitudin a, ultrices nec nisl. Nullam ac dolor purus. In ac mi quis urna lobortis venenatis. Sed interdum, arcu a volutpat pretium, nisl velit auctor elit, at venenatis turpis mi a nisl. Integer at porttitor urna. Nulla sem mauris, pulvinar bibendum tristique vitae, pulvinar vel elit. Aenean sollicitudin quam sit amet lectus elementum sit amet suscipit sem feugiat. Fusce aliquam euismod diam, at placerat felis fringilla et. Vivamus sagittis suscipit dapibus. Donec molestie tristique quam, sed sodales justo volutpat eu. Sed pellentesque sollicitudin tempus. Donec at sem eu massa tempor porta congue id purus.</p>
</section>
	
<section class="text">
	<h2>Section Two</h2>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin congue sem et pretium. Sed pulvinar volutpat facilisis. Sed velit risus, consequat sit amet sollicitudin a, ultrices nec nisl. Nullam ac dolor purus. In ac mi quis urna lobortis venenatis. Sed interdum, arcu a volutpat pretium, nisl velit auctor elit, at venenatis turpis mi a nisl. Integer at porttitor urna. Nulla sem mauris, pulvinar bibendum tristique vitae, pulvinar vel elit. Aenean sollicitudin quam sit amet lectus elementum sit amet suscipit sem feugiat. Fusce aliquam euismod diam, at placerat felis fringilla et. Vivamus sagittis suscipit dapibus. Donec molestie tristique quam, sed sodales justo volutpat eu. Sed pellentesque sollicitudin tempus. Donec at sem eu massa tempor porta congue id purus.</p>
</section>
```

1. Now, locate your CSS file.
2. Add: `section.text {` to the bottom
3. Add: `padding: 2% 8%;` to add 2% padding to the top and bottom and 8% padding to the left and the right.
4. Close the block: `}` 
5. __Save__ and __Refresh__

Here's my CSS:

```css
section.text {
	padding: 2% 8%;
}
```

and here's how it looks in the browser. *__(fig. 19)__*

{% include figure.html type="picture" lesson="14" figure="19" %}

Better. Now let's increase our text size and line-height _(leading)_. Let's go ahead and increase it universally on all our section text.

1. Locate your CSS file
2. Add: `font-size: 1.5em;` to the `section.text {` selector
3. Add: `line-height: 1.5;` to the same selector
4. __Save__ and __Refresh__

Here's my CSS:

```css
section.text {
	padding: 2% 8%;
	font-size: 1.25em;
	line-height: 1.5;
}
```

and here's how it looks in the browser. *__(fig. 20)__*

{% include figure.html type="picture" lesson="14" figure="20" %}

Okay, we'll call that good for now. We have completed our mobile first design. Now let's begin to pull the browser larger and smaller to see what happens.  *__(fig. 21)__*

{% include figure.html type="video" lesson="14" figure="21" %}

You can also click through the different device options from the top menu bar on your Responsive Design Mode. You'll see that for each device things look pretty good.  *__(fig. 22)__*

{% include figure.html type="video" lesson="14" figure="22" %}


So we have good news. At least in my opinion, our site looks pretty decent at all sizes and in all devices. At the very least, you'll have to admit that it is still functional no matter how big we pull our browser or what device we choose at any orientation. This is the beauty of mobile first design.

Now, we can introduce our bigger screen features, like our new top navigation at whatever screen width we think makes the most sense using a media query.

### Adding A Media Query

Let's say the smallest device I want to use a top navigation bar on is a iPad Mini 4 held vertically. I know from my [Responsive Design Mode](../9-navigation-and-mobile-first-design/#responsive-design-mode) on Safari that the horizontal resolution on that device is 768 pixels *__(fig. 23)__*

{% include figure.html type="picture" lesson="14" figure="23" %}

So in order to plan for this, I'm going to write my first media query to detect when I have a 750 pixel wide screen or larger.

1. Locate your CSS file
2. At the very bottom of the file, add your media query opener: `@media (min-width: 750px) {`
3. Hit __Enter__ a couple of times to make a little room

Okay, so now after my opening bracket of my media query, I need to decide what code to override. Remember, I hid my `header nav ul` with a `display: none;` above. Let's override that command first. To override a `display: none:` well still use the `display:` property, but we'll need to know if the element was an inline or block-level element. That is what needs to be set in the override. Because we know our unordered list is a block-level element, we'll use `display: block;`.

1. Inside the media query, add: `header nav ul {` 
2. Add: `display: block;` to display the nav we hid earlier.
3. Close the block: `}`
5. __Save__ and __Refresh__
6. Make sure to choose iPad Mini 4 from the device options

Here's my CSS:

```css
@media (min-width: 750px) {
	header nav ul {
		display: block;
	}
}
```

and here's how it looks in the browser. *__(fig. 24)__*

{% include figure.html type="picture" lesson="14" figure="24" %}

You can see that our horizontal navigation is back. Flip through the device options to see that for everybody bigger than our iPad Mini 4 the horizontal navigation stays, for anybody smaller, it disappears. *__(fig. 25)__*

{% include figure.html type="video" lesson="14" figure="25" %}

We could pull the browser left or right to see exactly where the change happens as well. Make sure to watch the resolution width above the device options change as we resize.  *__(fig. 26)__*

{% include figure.html type="video" lesson="14" figure="26" %}

Way neat, right?! Okay, so now that we have our top bar navigation working, we'll need to get rid of our hamburger and footer when we get to the big screen.  We can do this in the same media query.

1. Locate your CSS file
2. After your `header nav ul {` block in the media query, add: `a#hamburger {` to select just the hamburger button
3. Add: `display: none;`
4. Close the block: `}`
5. Make sure your media query still has its own closing bracket.
6. __Save__ and __Refresh__

Here's my CSS:

```css
@media (min-width: 750px) {
	header nav ul {
		display: block;
	}
	
	a#hamburger {
		display: none;
	}
}
```

and here's how it looks in the browser at our iPad Mini 4 size. *__(fig. 27)__*

{% include figure.html type="picture" lesson="14" figure="27" %}

Click through all the devices or pull your browser window left and right, check to see that it disappears on smaller screen and reappears on bigger ones *__(fig. 28)__*

{% include figure.html type="video" lesson="14" figure="28" %}

We'll need to do the same for our footer navigation. 

1. Add: `footer nav ul {` as the next CSS block in your media query
2. Add: `display: none;` to hide it at 750 pixels or larger
3. Close the block: `}`
5. Make sure your'll media query still has its own closing bracket.
6. __Save__ and __Refresh__

Here's my CSS:

```css
@media (min-width: 750px) {
	header nav ul {
		display: block;
	}
	
	a#hamburger {
		display: none;
	}
	
	footer nav ul {
		display: none;
	}
}
```

and here's how it looks in the browser. If we scroll down we'll see that our footer navigation disappears on larger devices and reappears on the smaller ones. *__(fig. 29)__*

{% include figure.html type="video" lesson="14" figure="29" %}

That is more than half our battle. We now have handled our navigation. 

### Controlling Line-Lengths on Big Screens

I'd say our site works pretty well no matter the device or screen size at this point. The only real concern I have is that on really big screens, like large desktop computers, our line length can get too long making it difficult for our users to keep their place on the page.


#### Adding Columns

From a stylistic standpoint we may want to do a layout adjustment like use two columns rather than one when our screen gets large enough. This would help with our line-length as well as take advantage of the extra horizontal space in our window. 

Let's say we wanted to have our layout split to two columns at 1,000 pixels in width. We can add an additional media query to handle this.

1. After the closing bracket for your first media query, at the very end of your CSS, hit __Enter__ a few times to make room.
2. Add: `@media (min-width: 1000px) {` to begin a new media query set to 1,000 pixels or larger. 
3. Make sure to add a closing bracket for that media query: `}`
3. Hit __Enter__ a few times in-between the brackets to make a little more room

Here's my CSS so far:

```css
@media (min-width: 750px) {
	header nav ul {
		display: block;
	}
	
	a#hamburger {
		display: none;
	}
	
	footer nav ul {
		display: none;
	}
}

@media (min-width: 1000px) {

}
```


We don't want to override much, we simply want our sections with text to float side by side. We need to be really careful, as you'll remember floating an element means it needs to have a set width. Setting a width if the element would normally be block-level means we need to take into account content + padding + border + margin = 100%.

We have our `sections.text` currently set to `padding: 2% 8%;`. This means that on the left and right of each section is 8% padding or 16% of the screen used up by the padding. We don't currently have any margin or border, so we've got that going for us. If we were to leave our padding as is, and ask our sections to float, we need to remember that side by side, each section will have 16% of the screen dedicated to padding, so 32% total, leaving only 68% screen real estate for the content. Splitting that between two sections means that each can only be a maximum width of 34%. 

Let' give that a try.

1. Add: `section.text {` as the first block in your new media query
2. Add: `width: 34%;`
3. Add: `float: left;`
4. Close the block: `}`
5. Close the media query with another `}`
6. __Save__ and __Refresh__

Here's my CSS:

```css
@media (min-width: 750px) {
	
	header nav ul {
		display: block;
	}
	
	a#hamburger {
		display: none;
	}
	
	footer nav ul {
		display: none;
	}
}

@media (min-width: 1000px) {
	section.text {
		width: 34%;
		float: left;
	}
}
```

In your browser, in Responsive Design Mode, you'll need to select a device larger than 1,000 horizontal pixels. You can also drag the browser larger till the dynamic readout reads over 1,000 pixels on the first number. *__(fig. 30)__* starts at our iPad Mini 4.

{% include figure.html type="video" lesson="14" figure="30" %}

That works pretty well. The only adjustment I'd like to make is to decrease the gutter between the two columns so the columns can each be a little wider and can be just a tad closer together. They feel a little like they are drifting apart at the larger screen sizes.

Earlier I set the padding on the `section.text` to be `padding: 2% 8%;`. Because of my new media query I can adjust this just for the largest screens. Let's change our padding to be 2% on the top and bottom and 4% on the left and right instead and see how that looks. This also means that we can adjust our width of our section to be 42% instead of only 34%.

Here's my CSS:

```css
@media (min-width: 1000px) {
	section.text {
		padding: 2% 4%;
		width: 42%;
		float: left;
	}
}
```

and here's how it looks in the browser. *__(fig. 31)__*

{% include figure.html type="video" lesson="14" figure="31" %}

We did it, we managed a two column layout using a media query! 

We do need to remember to clear our floats however, but that presents a problem. We don't currently have a parent element that holds both sections. No problem, we can add one. 

Actually, we'll make it easy, we'll add a pair of `<section></section>` tags to hold both sections. It may sound weird, but it's legit. We can put sections inside of sections, we just need to do it carefully.

1. Locate your HTML file
2. Add: `<section>` before your first `<section class="text">`
3. Let's add an `class=` attribute to this section so it's accessible to the CSS. Add: `class=group"` to that opening tag to allow it to clear our floats with the micro-clear fix CSS.
4. Close our new section after the closing tag of the second section we added earlier:`</section>`
5. Save your HTML

Here's how your HTML should look:

```html
<section class="group">
	<section class="text">
		<h2>Section One</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin congue sem et pretium. Sed pulvinar volutpat facilisis. Sed velit risus, consequat sit amet sollicitudin a, ultrices nec nisl. Nullam ac dolor purus. In ac mi quis urna lobortis venenatis. Sed interdum, arcu a volutpat pretium, nisl velit auctor elit, at venenatis turpis mi a nisl. Integer at porttitor urna. Nulla sem mauris, pulvinar bibendum tristique vitae, pulvinar vel elit. Aenean sollicitudin quam sit amet lectus elementum sit amet suscipit sem feugiat. Fusce aliquam euismod diam, at placerat felis fringilla et. Vivamus sagittis suscipit dapibus. Donec molestie tristique quam, sed sodales justo volutpat eu. Sed pellentesque sollicitudin tempus. Donec at sem eu massa tempor porta congue id purus.</p>
	</section>
	
	<section class="text">
		<h2>Section Two</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin congue sem et pretium. Sed pulvinar volutpat facilisis. Sed velit risus, consequat sit amet sollicitudin a, ultrices nec nisl. Nullam ac dolor purus. In ac mi quis urna lobortis venenatis. Sed interdum, arcu a volutpat pretium, nisl velit auctor elit, at venenatis turpis mi a nisl. Integer at porttitor urna. Nulla sem mauris, pulvinar bibendum tristique vitae, pulvinar vel elit. Aenean sollicitudin quam sit amet lectus elementum sit amet suscipit sem feugiat. Fusce aliquam euismod diam, at placerat felis fringilla et. Vivamus sagittis suscipit dapibus. Donec molestie tristique quam, sed sodales justo volutpat eu. Sed pellentesque sollicitudin tempus. Donec at sem eu massa tempor porta congue id purus.</p>
	</section>
</section>
```

That's it. There isn't any visible result of that clearing of the float just yet, but if we had a footer, we would have trouble with that floating up into our sections.

#### Controlling Overall Page Width

In order to keep our site under control at very large sizes, we can use some CSS to restrict our whole page to a certain width. If a user decides to pull the browser wider than that width, we can tell our site to remain at the same size, but center itself in the window. We can use a nice background color or pattern at that point to take care of the empty space on the sides.

To do this we simply add to our HTML a new tag. We use `<article></article>` to wrap all of our page content. This almost takes over the job of the body element.

1. Locate your HTML
2. After the opening body tag, add: `<article>`
3. After the closing footer tag, add: `</article>`
4. Save your HTML file

Here's how your HTML should look:

```html
<body>
	
	<article>
		<header class="group">
			<a href=" " id="hamburger"><img src=images/hamburger.png/></a>
			<a href=" " id="logo"><img src="images/logo.png"/></a>
			<nav>
				<ul>
					<li><a href=" ">Home</a>
					<li><a href=" ">About</a>
					<li><a href=" ">Services</a>
					<li><a href=" ">Contact</a>
				</ul>
			</nav>
		</header>
	
		<section>
			<img src="images/banner.png">
		</section>
		<section class="group">
			<section class="text">
				<h2>Section One</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin congue sem et pretium. Sed pulvinar volutpat facilisis. Sed velit risus, consequat sit amet sollicitudin a, ultrices nec nisl. Nullam ac dolor purus. In ac mi quis urna lobortis venenatis. Sed interdum, arcu a volutpat pretium, nisl velit auctor elit, at venenatis turpis mi a nisl. Integer at porttitor urna. Nulla sem mauris, pulvinar bibendum tristique vitae, pulvinar vel elit. Aenean sollicitudin quam sit amet lectus elementum sit amet suscipit sem feugiat. Fusce aliquam euismod diam, at placerat felis fringilla et. Vivamus sagittis suscipit dapibus. Donec molestie tristique quam, sed sodales justo volutpat eu. Sed pellentesque sollicitudin tempus. Donec at sem eu massa tempor porta congue id purus.</p>
			</section>
	
			<section class="text">
				<h2>Section Two</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin congue sem et pretium. Sed pulvinar volutpat facilisis. Sed velit risus, consequat sit amet sollicitudin a, ultrices nec nisl. Nullam ac dolor purus. In ac mi quis urna lobortis venenatis. Sed interdum, arcu a volutpat pretium, nisl velit auctor elit, at venenatis turpis mi a nisl. Integer at porttitor urna. Nulla sem mauris, pulvinar bibendum tristique vitae, pulvinar vel elit. Aenean sollicitudin quam sit amet lectus elementum sit amet suscipit sem feugiat. Fusce aliquam euismod diam, at placerat felis fringilla et. Vivamus sagittis suscipit dapibus. Donec molestie tristique quam, sed sodales justo volutpat eu. Sed pellentesque sollicitudin tempus. Donec at sem eu massa te	mpor porta congue id purus.</p>
			</section>
		</section>
		<footer>
			<nav>
				<ul>
					<li><a href=" ">Home</a>
					<li><a href=" ">About</a>
					<li><a href=" ">Services</a>
					<li><a href=" ">Contact</a>
				</ul>
			</nav>
		</footer>
	</article>

</body>
```

Now, to add some CSS.

1. Locate your CSS file
2. At the top of your CSS, after your clear fix _(this guy doesn't have anything to do with your media query, it's just regular CSS)_ add: `article {`
3. Add: `max-width: 1200px;` to tell our page to never allow itself to grow larger than 1,200 pixels wide.
4. Close the block: `}`
5. __Save__ and __Refresh__

Here's my CSS:

```css
.group:after {
  content: "";
  display: table;
  clear: both;
}

article {
	max-width: 1200px;
}

img {
	max-width: 100%;
}
```

Now, pull your browser larger than 1200 pixels wide. You'll see that your site stops growing just a bit after we break into a two column layout. *__(fig. 32)__*

{% include figure.html type="video" lesson="14" figure="32" %}

This is what we want, now the next step is to tell it to be centered. Since we have a set a width in our CSS,  `max-width: 1200px;`, we can use margins set to `auto;` to automatically center this.

1. Locate your CSS file
2. Add: `margin: 0 auto;` to your `article {` selector
3. __Save__ and __Refresh__

Here's my CSS:

```css
article {
	max-width: 1200px;
	margin: 0 auto;
}
```

>    __Note:__ I'm using my shorthand to write my margin as I have before, but this time I'm introducing a new value: `auto;`. This only really works in rare occasions, but setting margin on the left and right of an element with a set width will automatically center it on the page. It's really handy, especially in this case.

and here's how it looks in the browser. You'll see now when you pull the browser, your site stays in the center of the window once it stops growing. *__(fig. 33)__*

{% include figure.html type="video" lesson="14" figure="33" %}

This makes for a much more aesthetic solution. Now, we can control our line-lengths using columns when our screens get larger, but we can also control our layout when our screens get really large. This is helpful as most sites do hit a point where it would be crazy to let it keep expanding forever.

Now, if you wanted to, you could change the background color of both the article and the body to have a color appear on the left and right side where we now have available space.

1. Locate your CSS file
2. Add: `body {` near the top
3. Add: `background-color: #black;`
4. Close the block: `}`
5. Add: `background-color: white;` to `article {`
5. __Save__ and __Refresh__

Here's my CSS:

```css
.group:after {
  content: "";
  display: table;
  clear: both;
}

body {
	background-color: black;
}

article {
	max-width: 1200px;
	margin: 0 auto;
	background-color: white;
}
```


and here's how it looks in the browser. *__(fig. 34)__*

{% include figure.html type="video" lesson="14" figure="34" %}

Some sites will use this technique to make a more clear separation between site and background and others will let it blend. It's a design decision to be made for each site you build.

## Lesson Conclusion

In this lesson we continued our discussion on using media queries to help us adjust our page for larger screen sizes. We learned how to make certain elements disappear at various screen sizes as well as appear at others to help transform a mobile navigation structure to a large screen navigation system.

Additionally we learned how to take advantage of the horizontal space that only the largest screen sizes provide by adding columns. In fact, we learned that sometimes screen sizes become so large, that it is necessary to restrain our websites to a width that is more reasonable.

Next up, we will learn about the newer features of [CSS3](../15-css3/).
