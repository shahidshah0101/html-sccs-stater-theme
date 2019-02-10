# Bootstrap HTML/SCSS Stater Template

[This](https://github.com/shahidshah0101/html-sccs-stater-theme.git) is simple a HTML starter template for **Front End Developers**. This template features folder directotry for SCSS,SASS Mixins That Use on Nearly Every Project, Bootstrap and jQuery, so you can take a quickly start.

## Features
1. Page Loader
2. Responsive navigation bar with sub-dropdown
3. Stick footer to bottom if not enough content
4. back-to-top button when user scroll down
5. Clone the navigation menu for mobile menu
6. Hamburger menu icon

## Planning and pieces of code written in this Template

A) Use of Favicon [stackoverflow](https://stackoverflow.com/questions/4014823/does-a-favicon-have-to-be-32x32-or-16x16) and [cssTricks](https://css-tricks.com/favicon-quiz/)
1. What is the primary favicon file?
2. What dimensions should favicon.ico be for all screens?

```html
  <!-- favicons -->
  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
  <link rel="apple-touch-icon" sizes="180x180" href="assets/images/apple-touch-icon-180x180.png">
  <link rel="icon" type="image/png" sizes="32x32" href="assets/images/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="assets/images/favicon-16x16.png">
  <link rel="mask-icon" href="assets/images/favicon-site-safari.svg" color="#bcd331"> 
  
  ```

---

B) Sass theme structure and variable.sccs file

```css
$font-family: 'Roboto', sans-serif;
$gradient-start-color      : #5989e5;
$gradient-end-color        : #37cfdc;
$theme-colors: (
  'primary': (
    'base': #384ea9,
    'light': #e4efff,
    'dark': #273677
  ),
  'accent': (
    'base': #f08110,
    'light': #ff8100,
    'dark': #e47f17
  ),
  'foreground': (
    'base': #393939,
    'light': #6e6e6e,
    'dark': #111,
    'white': #fff,
    'black': #000,
  ),
  'background': (
    'base': #f8f5f5,
    'light': #f5f5f5,
    'dark': #ddd,
    'white': #fff
  )
);

 ```

C) Sass media queries mixins

```css
$breakpoints: (
  xs: 320px,
  sm: 768px,
  md: 1024px,
  lg: 1280px,
  xlg: 1280px
  );
@mixin respond-between($lower, $upper) {
  @if map-has-key($breakpoints, $lower) and map-has-key($breakpoints, $upper) {
    $lower-breakpoint: map-get($breakpoints, $lower);
    $upper-breakpoint: map-get($breakpoints, $upper);
    @media (min-width: $lower-breakpoint) and (max-width: ($upper-breakpoint - 1)) {
      @content;
    }
  } @else {
    @if (map-has-key($breakpoints, $lower) == false) {
      @warn 'Your lower breakpoint was invalid: #{$lower}.';
    }
    @if (map-has-key($breakpoints, $upper) == false) {
      @warn 'Your upper breakpoint was invalid: #{$upper}.';
    }
  }
}
 ```

## Download and Installation

To begin using this template, click the Clone or download buttons, There is no explicit git ignore files.

### Basic Usage

After downloading, simply edit the HTML and CSS files included within the html-sccs-stater-theme folder.


## About
