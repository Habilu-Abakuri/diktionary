
const sound = document.getElementById("audioSound");
const result = document.getElementById("displayResult");
const searchWord = document.getElementById("searchButton");

/*add event-listener to search word button */
searchWord.addEventListener("click", function(e){
    e.preventDefault();

    const inputWord = document.getElementById("input").value;
    if (inputWord === ""){
        alert("type your word search...");
        return;
    }

    search_function(inputWord)
    
});

async function search_function(inputWord){
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord}`);
    
    if (!response.ok){
        /*throw new Error(`HTTP error! status: ${response.status}`);*/
        alert("word not in dictionary")
    }
    const data = await response.json();
    
    /*render the html */

        result.innerHTML = `
    <div class="word">
        <h3>${inputWord}</h3>
        <button onclick="playSound()">
            <i class="material-icons">mic</i>      
        </button>
    </div>
    <div class="definition">
        <p>${data[0].meanings[0].partOfSpeech}</p>
        <p>/${data[0].phonetic}/</p>
    </div>
    <p class="wordMeaning">
        ${data[0].meanings[0].definitions[0].definition}
    </p>
    <p class="wordExample">
        ${data[0].meanings[0].definitions[0].example}
    </p>
    `;
    sound.getAttribute("src", `https:${data[0].meanings[0].
    definitions[0].audio}`);
    
    function playSound(){
        sound.play();
    };
    
};

function playSound(){
    sound.play();
};


/* 
outstanding task
...fixed the audio error
...resized to normal size when the search box is empty
...give an error div when the word is not found
*/