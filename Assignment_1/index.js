'use strict';

function puppyListener() {
    console.log("puppylistener load!");
    $(".puppy-form").on("submit", function(event) {
        event.preventDefault(); 
        let dogNum = $("#puppy-input").val(); 
        getPupPics(dogNum);
    });
}

function getPuppyNum(dogNum) {
    console.log("getPuppyNum load!");
    let userNum = dogNum; 
    getPupPics(userNum);
}

function getPupPics(userNum){
    console.log("getPupPics load!");
    fetch(`https://dog.ceo/api/breeds/image/random/${userNum}`)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson))
    .catch(error => alert("Sorry, I can't show you any puppies right now :("))
}

function puppyReveal(pupImages) {
    console.log("puppyReveal load!");
    for (let i = 0; i < pupImages.message.length; i++) {
        $('.puppy-images').replaceWith(`<img src="${responseJson.message}" class="dog-imgs`);
        $('.puppies').removeClass('hidden');
    }
}

function runGenerator() {
    console.log("Pic generator loaded! Type in a number!");
    puppyListener();
}

$(runGenerator);