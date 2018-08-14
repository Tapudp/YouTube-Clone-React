# YouTube API usage but first React
 
 ### 9 Component Instances

 ### 10 render Targets
 just added the html tag which has a particular class to render our components

 but can't use `document.getElementsByClassName('container')` but I had to use document.querySelector('.container')

 ### 11 Componenct structure
 files naming
  - search_bar.js
  - video_detail.js
  - video_list.js
  - video_list_item.js

 ### 12 - YouTube Search API
   generated API key from the console.developer.google.com 
   and added it in the file
   as well installed `npm install --save youtube-search-api`

 ### 13 Export
  the created component need to exported and then imported in the main `index.js`
  mostly created search bar and imported it in the main file.

 ### 14 Class based Components
  made the Search Bar a class based component instead of functional component

### 15 Handling User events
  added the `onChange` event with the `onInputChange` function and then make it to the single line arrow function

### 16 Introduction to State
  state is an plain javascript object that is used to record and react to user events. Each class based component we define has it's own state.
  
  only defined class and the `super(props)` method from the parent class, almost OOPs

### 25 Video list items
  rendered all the video list with a fixed search given in index.js, and got the imageUrl from the YouTube api response as `video.snippet.thumbnails.url`

### 26 Detail component and Template Strings
  created the video detail component for particular video to play, also used the template string while creating URL and now will render it as we add it in index.js

  remember the bootstrap class `embed-responsive-16by9` and the `iframe` that would let us create the video frame that we need

### 27 Handlind Null props
  adding the `VideoDetail` component to main `index.js` to render it between the `SearchBar` and `videoList`.
  gave the prop to `VideoDetail` component, which gives error as it can't find the `id` of undefined(video) because YT api is still fetching the data in background

  just added the Loading to render since video array won't be defined so a simple `if` statement

### 28 Video Selection
  selected video concept in the app component itself to render individual videos when clicked.
  Solved the error because didn't put the `onVideoSelect` callback in the VideoList component itself. It will a particular component.

### 29 adding style with css
  writing CSS stuff out.

### 30 Searching for videos
  added search bar functionalities and created call backs pertaining to that `videoSearch` and `onSearchTermChanged` passed to Searchbar component.

### 31 Throttling Search term input
  - using functional library called Loadash
  one particular Utility method is `de-bounce` to basically throttle how often a function is called
  - rather than saying the whole name industry standard is to use an underscore while working with it.
  - basically added time interval so that app will load within that time and looks smooth.

### 32 Wrapup
  - differnece between `class` based component and functional component, just the matter of using state
  - functional components are lightweight and fast.

  - `state` it resides in constructor whenever a class is defined.

  - `import` and `export` statements 

  - callbacks to manipulate data
  where as in redux we won't have these much amount of callbacks and lot of stuff will get clearer