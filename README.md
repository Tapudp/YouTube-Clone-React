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