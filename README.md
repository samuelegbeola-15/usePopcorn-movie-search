This is a Movie search React project that uses the OMDb API

The user can: 
* type in a keyword to search
* click on a movie of interest and view the full details of the movie
* rate the selected movie
* and add it to a Watched list that is automatically stored in the local storage.

I used the useState hook for variable state management, the useEffect hook for features like the fetch data request. 
Also, I used the useRef hook to store the search input DOM element for the .focus() method.

I created custom hooks for the escape and enter key features as well as saved the watched movies list to the browser's localstorage.

I implemented conditional rendering for both the movie search results and movie summary section on the click of the hide button.

I also used a useEffect hook to dynamically change the document.title property to reflect the name of the movie being viewed.

