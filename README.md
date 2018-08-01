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