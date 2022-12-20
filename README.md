# CS50 Final Project - English Dictionary
The CS50x introduction to computer science project is an english dictionary. My primary objective is to enhance my knowledge with the three core web development tools without using libraries. This is in line with my long term goal of becoming a fullstark developer. 
The main technologies been used were:
- HTML5 
* CSS3 
+ VANILLA JAVASCRIPT
- FETCH API

## The app
The dictionary app is based on the free dictionaryapi.dev api and it is modelled like an online thesaurus. The main features of the app has a pink background and inner display which is has a white background color. The display block has the search area and the display area for the word definition and and examples of word usage. 
The sound icon only appears when searching the word.
To search for word, type the word into the search box and click on the search button. If the word is available, the definition and examples of uage will be shown on the display block. However, unavailable words will display an alert with the message **word not in dictionary**. Some words definitions might have **undefined** examples on the display block

## The code
The primary objective of the project to is to let me practice with basic code in javascript and css without the use of libraries, since the long term objective is to be adept with the whole javascript environment starting with vanilla javascript. 
Therefore, only raw HTML, CSS and Javascript was used. The app has three files
- app.js
* index.html
+ style.css

These files contain the respective html, javascript and css styling respectively. 
The html file has the typical html5 boilerplate with the head tag having the meta and href link for css styling and google fonts.
The app.js file is an external file linked to the html in the head tag. The code sniping mainly deals with the fetch api and rending the html output in the javascript code.

## Dictionary api
The dictionary api is a free api that is provide users with an api that can used in game development, speech and text technology. 

The basic syntax is 
```
https://api.dictionaryapi.dev/api/v2/entries/en/<word>
```

The syntax is a url request to the api to fetch the data. **<word>** is the formatted search word input in javascript to be fetch from the api.
An example of getting the word **hello** from the api. send request to
```
https://api.dictionaryapi.dev/api/v2/entries/en/hello
```
##Fetch api
  The fetch api provides an interface for fetching resources including across networks. It is a web api that uses promises to make request over **http/1.1 protocol**. The fetch api is included in all modern browsers and is used through the fetch method.
  
  The caller function is **async** and **await** to handle the promise.
  ```
  async function search_function(inputWord){
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord}`);
    
    if (!response.ok){
        /*throw new Error(`HTTP error! status: ${response.status}`);*/
        alert("word not in dictionary")
    }
    const data = await response.json();
```

