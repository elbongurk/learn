---
title: "Adding a Bit of JavaScript"
excerpt: "JavaScript is the progamming magic that allows for slideshows and slide-in navigation. Learn to use and customize some prewritten JavaScript for added interactivity in your site."
lesson: 16
book: web-design
---

{% include toc.md %}

## Overview

HTML and CSS do a pretty good job of displaying a webpage on their own, especially with the capabilities that CSS3 provides. However, there are times where we need just a little bit of extra help to make our sites the best they can be. In these cases, we often look to JavaScript to help us achieve the extra umpf we are looking for. 

JavaScript allows us to do things like rotating slideshows, smooth animation transitions on our anchored navigation, and lightbox effects so we can view images in a collection larger without leaving our page.

JavaScript is a different kind of code than HTML and CSS. Though there are plenty of web designers that are able to write JavaScript, many others leave that job up to developers since it involves a certain understanding of computer programming rather than markup code like HTML. Lucky for us, developers are a generous bunch and offer different snippets for us to incorporate into our sites free of charge.

This lesson will demonstrate some examples of how prewritten JavaScript snippets can be incorporated into a website so we can take advantage of some common features that only JavaScript can offer.

## Lesson Setup

Let's create our lesson folder structure, our initial HTML file and connect it up with a new stylesheet.

### Folder Setup

1. Create a new __Lesson16__ folder inside of Bob
2. Create the __notes__ and __root__ folders
3. Inside the root folder, create an __images__ folder and a __css__ folder
4. __Download__ the lesson 16 resources from [here](http://lessons.elbongurk.com/L16-images.zip).
5. __Move__ those images into your __images__ folder for this lesson

### HTML Setup

6. __Open__ up TextMate 
7. __File__ > __New__ to open a new file
8. Code in your [boilerplate HTML](../1-file-management/#the-boilerplate) making sure to add a title to the page. I'm calling mine: _Adding a Bit of JavaScript_.
4. Make sure that your boilerplate includes the `<meta name="viewport" content="width=device-width, initial-scale=1" />` [we learned in lesson 8](../8-navigation-and-mobile-first-design/#setting-the-viewport) to ensure the site works properly on a mobile device.
5. __Save__ your HTML file to your Lesson16 root folder with the name: __lesson16.html__
9. __Open__ and __Preview__ your page in the browser, checking to make sure your page title is appearing correctly.

### CSS Setup

1. __Open__ up TextMate
2. __File__ > __New__ to open a new file
3. __File__ > __Save__
4. Navigate to the "css" folder you created
5. Name your file, __style.css__
6. Hit __Save__
7. Attach this stylesheet to our HTML page. Type: `<link href="css/style.css rel="stylesheet" />` into the head section of our __lesson16.html__ file.
8. __File__ > __Save__ the HTML file

Your HTML should now look like this:

```html
<!doctype html>
<html>

	<head>
		<title>Adding a Bit of JavaScript</title>
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

## Adding jQuery to Your Page

To make use of any prewritten JavaScript out there, we have to understand and prepare a few things in advance. Most JavaScript will be written to perform a specific task and more often than not it will only be a small amount of code that can be easily read and edited to suit a wide range of needs. 

It's our job as a web designer to understand that there are two different bits of code that need to be incorporated into our `<head>` section of our site to incorporate any prewritten JavaScript. First, we need to add a link to the jQuery library itself, a very large and robust code base that almost all JavaScript draws resources from, and second, we need to attach the bit of prewritten JavaScript that controls the feature we wish to add. 

Lucky for us Google provides access to a whole bunch of libraries for free on [developers.google.com](https://developers.google.com/speed/libraries/), but the specific reference code we are looking for is [jQuery 1.x snippet](https://developers.google.com/speed/libraries/#jquery) as seen in *__(fig. 1)__*

{% include figure.html type="picture" lesson="16" figure="1" %}

Google makes it easy for us to access and add the library. All we need to do is __Copy__ the small chunk of code that appears after the **1.x Snippet:** heading. 

Here it is:

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
```

>    __Note:__ Notice that the code begins with a `<script>` and ends with `</script>`. All JavaScript links will look like this. You'll also notice that inside the opening tag is a `src=` attribute giving an address to where that bit of script _(term for JavaScript code)_ lives. In this case it lives in a googleapis.com site.


And __Paste__ it into our HTML head section. 

I like to put mine below my stylesheet `<link>` like this:

```html
<head>
	<title>Adding a Bit of JavaScript</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link href="css/style.css" rel="stylesheet" />
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
</head>
```

Great. That is exactly what we need to do to give our webpage access to the full jQuery library. Now any bit of prewritten JavaScript will be able to draw from resources inside that library. Next, we'll have to add another set of `<script></script>` tags that add whatever JavaScript function we wish to perform on our page.

## Creating the JavaScript

Now if we want to add our own JavaScript to this site, we’ll need to create our own JavaScript file. This time, instead of just simply linking to an external website, like we did with the jQuery library, we will actually host this bit of code ourselves. It's actually quite a bit like dealing with a stylesheet, so the process should seem somewhat familiar.

1. Inside the root folder, create a __js__ folder _(short for JavaScript)_
2. __Open__ up TextMate
3. __File > New__ to open a new file
4. __File__ > __Save__
5. Navigate to the "js" folder you just created
6. Name your file, __script.js__
7. Hit __Save__

## Adding JavaScript to Your Page

Just like if we had made a stylesheet, we would have to link it to our HTML page. The same thing applies here. We need to go our HTML page and use the same `<script></script>` tags we used to bring in the jQuery library to let the site know we have another JavaScript file to load, only difference is that this one lives in our root folder, so our address will need to reflect that. Let's go ahead and create the link.

1. Locate your HTML file
2. After your `<script></script>` tags linking to the jQuery library, hit enter to make room
3. Add: `<script src="`
4. Now, enter the address from this HTML page to that JavaScript file we just created: `js/script.js`
5. End the address with a double quotation mark: `"`
6. End the opening script tag: `>`
7. Now, strangely enough, without adding any additional content, we add a closing tag: `</script>`
8. __Save__ the HTML file

Here's how your head section of your HTML should look:

```html
<head>
	<title>Adding a Bit of JavaScript</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link href="css/style.css" rel="stylesheet" />
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script src="js/script.js"></script>
</head>
```

>    __Note:__ It's very important that you put the link to the jQuery library first and then any other JavaScript link after that. Order is important. The browser installs resources from the top down, so it needs to install the jQuery library before it installs our slideshow.js for things to work properly.

## Adding a Rotating Banner

The first JavaScript feature we'll be working on is a rotating banner. These types of banners are now becoming a very popular feature, especially on ecommerce websites. 

Incorporating a large rotating banner allows you to show off many images in the same spot on your page. You can use these images to promote sales, give extra company information, or show off any products that your company might be offering.

The role of the JavaScript in the case of a rotating banner, is literally to create the rotation between any number of images. JavaScript is able to not only create the transition between any images tagged specifically for the banner, but also it controls the transition speed and type. 

### The Banner JavaScript

Since We've already incorporated the jQuery library into our site earlier in this lesson, we can focus now on the JavaScript written specifically to create our banner. The script we will be using for this lesson initially comes from [Jonathan Snook](http://snook.ca/archives/javascript/simplest-jquery-slideshow/), but has been restructured for our purposes.

Let's first take a quick look at the prewritten JavaScript that we will use for our slideshow:

```javascript
$(function() {
  $('#slideshow img:gt(0)').hide();
  setInterval(function() {
    $('#slideshow :first-child')
      .fadeOut(1000)
      .next('img')
      .fadeIn(1000)
      .end()
      .appendTo('#slideshow');
  }, 4000);
});
```

Are you feeling a little overwhelmed? 

Me too.

That is the thing I was talking about earlier. Cleary JavaScript is a much different kind of animal than HTML or CSS. It's the reason that many designers rely on programmers and developers to write the JavaScript components for our sites.

There are a few things that I want to point out about the code that we'll need to know to make this work with our site:

1. The first and most important are the `'#slideshow'` references throughout the JavaScript. Similair to CSS, these are selectors that are telling us our slideshow will need to have an `id="slideshow"` in order for the JavaScript to be able work with it.
2. The next is the `4000` value sitting at the end. This number controls the amount of time between transitions. Larger numbers provide for more time on each slide between the transitions and lower number will allow less time on each slide.
3. Third is the `.fadeOut(1000)` and `.fadeIn(1000)`.  These numbers control just how long the cross fade between the slides takes. Once again larger numbers provide a lengthier cross fade and lower numbers a shorter cross fade.

That is all we'll really worry about in the top portion of our JavaScript.

### Adding the Script to our Page

Now that we've taken an initial look at the JavaScript we'll be using, let's add it to our site. 

1. Find your __script.js__ file you created eariler and open it in TextMate
2. __Copy__ the JavaScript from below in its entirely:

```javascript
$(function() {
  $('#slideshow img:gt(0)').hide();
  setInterval(function() {
    $('#slideshow :first-child')
      .fadeOut(1000)
      .next('img')
      .fadeIn(1000)
      .end()
      .appendTo('#slideshow');
  }, 4000);
});
```

3. __Paste__ the JavaScript into your __script.js__ file
4. Hit __Save__
{:start="3"}

Alright, now lets move on to setting up our HTML.

### Setting up our Images to Be Rotated (HTML)

We saw when we dissected bits of the JavaScript code used to create our slideshow, we saw that we needed to use `id="slideshow"` to indicate the element that the JavaScript should work with. So for our slideshow, we'll use with a `<figure>` element with `id="slideshow"` and inside we'll have three `<img>` elements, each containing an image of the same exact size to rotate.img

For images, we'll use three already located in your images folder: banner_01.png, banner_02.png, and banner_03.png.

Let's get started.

1. Locate your HTML
2. Inside the `<body>` tags, begin your figure element: `<figure id="slideshow">` and hit __Enter__
3. Add your first image: `<img src="images/banner_01.png"/>`
4. Add your second image: `<img src="images/banner_02.png"/>`
5. Add your third image: `<img src="images/banner_03.png"/>`
6. Close your figure element: `</figure>`
7. __Save__ your HTML

Here's how your HTML should look:

```html
<figure id="slideshow">
	<img src="images/banner_01.png"/>
	<img src="images/banner_02.png"/>
	<img src="images/banner_03.png"/>
</figure>
```

and here's how it looks in the browser. *__(fig. 2)__*

{% include figure.html type="video" lesson="16" figure="2" %}

We can see that we already have most of what we are looking for. We have a rotating banner that switches between the three images, but the switch isn't very smooth, the images aren't responsive, and we don't really need any margins here. To address these issues, let's turn to our CSS.

### Setting up our Images to Be Rotated (CSS)

In this case, the CSS can get a little bit complicated so I'm going to provide the code you can use in your site and make changes as you see fit.

1. Locate your CSS file
2. __Copy__ the CSS code below:

```css
img {
  max-width: 100%;
}

#slideshow:after {
  content: "";
  display: table;
  clear: both;
}

#slideshow img {
  float: left;
  margin: 0 -100% 0 0;
}
```

3. __Paste__ this code into your CSS file
4. __Save__ and __Refresh__

and here's how it looks in the browser. *__(fig. 3)__*

{% include figure.html type="video" lesson="16" figure="3" %}

You can see we are close. We now have a functional reponsive slideshow. The only other thing we might want to do is get rid of the white edge around the edges. That is being caused by the default margin on the body, we can remove that by using our universal selector `* {` and setting our margin and padding to 0.

1. Locate your CSS file
2. At the top of your CSS, Add: `* {`
3. Add: `margin: 0;`
4. Add: `padding: 0;`
5. Close the block: `}`
6. __Save__ and __Refresh__

Here's my CSS:

```css
* {
  margin: 0;
  padding: 0;
}
    
img {
  max-width: 100%;
}

#slideshow:after {
  content: "";
  display: table;
  clear: both;
}

#slideshow img {
  float: left;
  margin: 0 -100% 0 0;
}
```

and here's how it looks in the browser. *__(fig. 4)__*

{% include figure.html type="picture" lesson="16" figure="4" %}

As you see, that did take care of our white edge. Our banner now fully extends to the edge of our browser window.

>    __Note:__ We can add as many images as we want to our slideshow. It is just a matter of adding additional images to our figure tag. Also, it's worth reminding you at this point that any images you want incorporated into the slideshow need to be the exact same height and width. Other sizes will rotate, but the slideshow will jump from size to size and look very messy. 

That wraps it up. You now know how to create a rotating banner using some simple HTML, a bit of prewritten CSS, and a chunk of prewritten JavaScript.

## An Alternative Mobile Navigation

A few lessons back we worked on creating mobile navigation using a hamburger button and a footer navigation. That is still a great way to go, but if you would like a navigation that slides from the hamburger button, you'll need to incorporate some JavaScript to do the heavy lifting.

### The Navigation JavaScript

Since we've already incorporated the jQuery library into our site earlier in this lesson, we can focus now on the JavaScript written specifically to create our sliding mobile navigation. The script we will be using for this comes initially from an open source resource library created by [thoughtbot](http://refills.bourbon.io#er-toc-id-3), but restructured for our purposes.

Like before, let's first take a quick look at the prepackaged JavaScript that we will be using in this example.

```javascript
$(function() {
  var menuToggle = $('#menu-button').unbind();
  $('#menu-items').removeClass("show");
  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#menu-items').slideToggle(function(){
      if($('#menu-items').is(':hidden')) {
        $('#menu-items').removeAttr('style');
      }
    });
  });
});
```

Now, if we look closely at the script, we can pick out the `#`, which should be a familiar character. In this case, the `#` is being used like it would in the CSS, it means element with a specific `id=` attribute. So in this case we can see that the JavaScript will be scanning our HTML for two elements, the first is an element with the `id="menu-button"` and the second is an element with the `id="menu-items"`. 

I know these id names are a little different than we are used to because they a using a hypen, but really they shouldn't be treated any differently. We just need to keep this in mind when we are coding our HTML, we need to make sure that we don't make any errors in naming our elements to match.

Okay, now let's go ahead and add this JavaScript to our script.js file:

1. Find your __script.js__ file you created eariler and open it in TextMate
2. __Copy__ the JavaScript from below in its entirely:

```javascript
$(function() {
  var menuToggle = $('#menu-button').unbind();
  $('#menu-items').removeClass("show");
  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#menu-items').slideToggle(function(){
      if($('#menu-items').is(':hidden')) {
        $('#menu-items').removeAttr('style');
      }
    });
  });
});
```

3. Make some room below the slideshow JavaScript by hitting enter a few times
3. __Paste__ the JavaScript into your __script.js__ file
4. Hit __Save__
{:start="3"}

Now your script.js file should look like this:

```javascript
$(function() {
  $('#slideshow img:gt(0)').hide();
  setInterval(function() {
    $('#slideshow :first-child')
      .fadeOut(1000)
      .next('img')
      .fadeIn(1000)
      .end()
      .appendTo('#slideshow');
  }, 4000);
});

$(function() {
  var menuToggle = $('#menu-button').unbind();
  $('#menu-items').removeClass("show");
  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#menu-items').slideToggle(function(){
      if($('#menu-items').is(':hidden')) {
        $('#menu-items').removeAttr('style');
      }
    });
  });
});
```


### Setting up our Navigation (HTML)

We saw when we took a look at the JavaScript code used to create our navigation that we needed to use `id="menu-button"` and `id="menu-items"` to indicate what is to be used in the JavaScript.

We need to add `id="menu-button"` to the link we will be using to open and close our navigation and `id="menu-items"` to name the unordered list that will hold our items that belong in the navigation.

#### Building Our Navigation

Let's begin by giving ourselves a bit of semantic structure to make sure we stay in the habit of being organized and specific about what we make.

I think it's best if we begin with the creation of a header. 

1. Locate your HTML file
2. After the body tag, but before the figure element that we use for our banner, add: `<header>` and hit __Enter__
3. Now, just to make sure we don't forget, let's close that tag, add: `</header>`
4. Good, now because we are working on a navigation, let's add: `<nav>` and `</nav>` to identify the parts of the code involved in the navigation.

Here's how your HTML should look so far:

```html
<header>
	<nav>
	</nav>
</header>

<figure id="slideshow">
	<img src="images/banner_01.png"/>
	<img src="images/banner_02.png"/>
	<img src="images/banner_03.png"/>
</figure>
```

That's a good start, now let's add a link that will be used as our menu button. We'll use a simple text link using the word MENU as our button text. For the destination address we'll use a blank space to let the browser know that this link does not need to go anywhere since its purpose is only to trigger our JavaScript. Also, we cannot forget that we need to use the `id="menu-button"` that our JavaScript will be looking for.

1. Inside our opening `<nav>` let's add our text link:`<a href=" " id="menu-button">MENU</a>`
2. __Save__ and __Refresh__

Here's how your HTML should look now:

```html
<header>
	<nav>
		<a href=" " id="menu-button">MENU</a>
	</nav>
</header>
```	

and here's how it looks in the browser. *__(fig. 5)__*

{% include figure.html type="picture" lesson="16" figure="5" %}

As we'd expect, we now have a text link that has popped up in the top left corner of our site. We'll do some styling a little later, but for now, let's move on to building our links.

##### Everything Uses an Unordered List

You already know that almost all navigation will use an unordered list to organize links, this is no exception.

We'll use three items in our navigation: Portfolio, About, and Contact.

1. Locate your HTML
2. Inside the `<nav>` tags, following your `<a/>`, begin your unordered list : `<ul id="menu-items">` and hit __Enter__
3. Add your first text link as a list item: `<li><a href=" ">Portfolio</a></li>`
4. Add your second text link as a list item: `<li><a href=" ">About</a></li>`
5. Add your third text link as a list item: `<li><a href=" ">Portfolio</a></li>`
6. Close your unordered list: `</ul>`
7. __Save__ your HTML

Here's how your HTML should look:

```html
<nav>
	<a href=" " id="menu-button">MENU</a>
	<ul id="menu-items">
  	 	<li><a href=" ">Portfolio</a></li>
    	<li><a href=" ">About</a></li>
   	 	<li><a href=" ">Contact</a></li>
	 </ul>
</nav>
```

and here's how it looks in the browser. *__(fig. 6)__*

{% include figure.html type="picture" lesson="16" figure="6" %}

We can see that we have our MENU button and our three links ready for styling.

### Setting up our CSS

Let's get started by making this header setup a little cleaner and more professional. First, let's eliminate our underline on our menu button link, change its color to black, and give it a little padding which will mean changing its display mode to `display: inline-block`.

1. Locate your CSS file
2. Add: `#menu-button {` as a selector above your code that controls our slideshow
3. Add: `text-decoration: none;`
4. Add: `color: black;`
5. Add: `display: inline-block`
6. Add: `padding: 1em;`
5. Close the block: `}`

Here's my CSS:

```css
...

#menu-button {
	text-decoration: none;
	color: black;
	display: inline-block;
	padding: 1em;
}
```

and here's how it looks in the browser. *__(fig. 7)__*

{% include figure.html type="picture" lesson="16" figure="7" %}

Okay, so that looks pretty good, but since this a mobile navigation, we should check it with our browser set to [Responsive Design Mode](../8-navigation-and-mobile-first-design/#responsive-design-mode). As a common mobile device, let's use the iPhone 6 as we have for our other lessons. *__(fig. 8)__*

{% include figure.html type="picture" lesson="16" figure="8" %}

Good deal. Our menu button is looking pretty good. Now to deal with our navigation items. Like our banner, the CSS that runs this is a little heavy, so I'm going to give it to you to __Copy__ and __Paste__ into your code. I'll then walk you through the area you may want to adjust to suit your needs.

Below is the CSS used to style the list item links. 

1. __Copy__ this code block in its entirely:

```css
#menu-items {
  display: none;
  width: 100%;
}

#menu-items li {
  background-color: #e7f1ec;
  line-height: 60px;
  padding: 0 1em;
}
  
#menu-items li a {
  color: #333;
  text-decoration: none;
}
```

2. __Paste__ it into your CSS file after you styling related to your menu button.
3. __Save__ your CSS and refresh your browser.

and here's how it looks in the browser. *__(fig. 9)__*

{% include figure.html type="video" lesson="16" figure="9" %}

We did it, we made a menu that slides out from the top. Pretty nice, right?

Okay, now to show you where you can make adjustments. There really should only be a few things that you would consider adjusting, these are type color, background color, and justification _(meaning right aligned on the screen rather than left)_.

##### Changing Link Background Color

To change the background color of the links, right now it is a light green _(#e7f1ec;)_, you'll adjust the `background-color:` property of this specific CSS block already in your code:

```css
#menu-items li {
  background-color: #e7f1ec;
  line-height: 60px;
  padding: 0 1em;
}
```
  
##### Changing Link Text Color (or any other link text property)

To change the text color of the links, right now it is a grey _(#333;)_, you'll adjust the `color:` property of this specific CSS block already in your code:

```css
#menu-items li a {
  color: #333333;
  text-decoration: none;
}
```
   
If you'd like, you could also turn back on the underline or add in any other text properties you'd like to adjust on the link text _(font-family, font-size, etc)_.

##### Aligning the Menu to the Right

If things have gone according to plan, we should be able to change our alignment from left to right, by simply asking our `nav {` to `text-align: right;`.

1. Locate your CSS file
2. Add: `nav {` near the top of your CSS, before you start talking to your menu button.
3. Add: `text-align: right;`
4. Close the block: `}`
5. __Save__ and __Refresh__

Here's my CSS:

```css
nav {
	text-align: right;
}
```

and here's how it looks in the browser. *__(fig. 10)__*

{% include figure.html type="video" lesson="16" figure="10" %}

Ta da! Right aligned. 

To make this menu official, don't forget to update each of the link address is the list item so that they go to actual internal site pages, anchored links on the same page, or external webpages.

## Other JavaScript Resources

So, now that you have a feel for how you can integrate JavaScript into your website, you can start looking for other snippets that are out in the wild. I'd recommend looking at [codepen.io](http://codepen.io). It's a great resource for any designer or developer to share code samples. You can also take a look at my [personal codepen](http://codepen.io/fireantrescue). I have a few others that are pretty simple to follow you can find there.

Make sure you look closely at either any instructions provided, or at the JavaScript code to find any references to classes _(`.class-name`)_ or ids _(`#id-name`)_ and compare it closely to the HTML and CSS provided in the example. That way you'll be able to understand how it could integrate it into your own page.

## Lesson Conclusion

In this lesson we dipped just a toe in to what JavaScript can do and how it can be worked into a page design. The goal was to give you an understanding of how HTML and CSS still are the foundation of any webpage, and JavaScript, though not necessary, can be a great additional bit of interactivity and action to any page.

I also wanted to provide an understanding for the role of a designer and the role of a programmer or developer in making webpages work. 

Next up, we will learn how to use [forms](../17-forms/).
