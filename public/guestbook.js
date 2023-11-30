const backgroundMusic = document.getElementById("backgroundMusic");
const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");
  
    playButton.addEventListener("click", function () {
      backgroundMusic.play();
    });
  
    pauseButton.addEventListener("click", function () {
      backgroundMusic.pause();
    });


const cancelBtn = document.getElementById("cancelBtn");
cancelBtn.addEventListener("click", function () {
    clearInputFields();
    let audio = new Audio("sound/stop-13692.mp3");
    document.body.appendChild(audio);
    audio.play();
    
});
const recordContainer = document.querySelector(".record-container");

const resetBtn = document.getElementById("reset-btn");
const resetPasswordInput = document.getElementById("reset-password-input");

const name = document.getElementById("name");
const number = document.getElementById("contact-num");
const web = document.getElementById("web")
const phone = document.getElementById("phone")
const comment = document.getElementById("comment")

let ContactArray = [];
let id = 0;

function Contact(id, name, number, web, phone, comment) {
    this.id = ++id;
    this.name = name;
    this.number = number;
    this.web = web;
    this.phone = phone;
    this.comment = comment;
}

document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("contacts") == null) {
        ContactArray = [];
    } 
    else {
        ContactArray = JSON.parse(localStorage.getItem("contacts"));
        lastID(ContactArray);
    }
    displayRecord();

});

function displayRecord() {
    ContactArray.forEach(function (singleContact) {
        addToList(singleContact);
    });
}

function lastID(ContactArray) {
    if (ContactArray.length > 0) {
        id = ContactArray[ContactArray.length - 1].id;
    } else {
        id = 0;
    }
}

function addToList(item) {
    const newRecordDiv = document.createElement("div");
    newRecordDiv.classList.add("record-item");
    newRecordDiv.innerHTML = `
        <div class="record-el">
            <span id="labelling">Name: </span>
            <span id="name-content">${item.name}</span>
        </div>

        <div class="record-el">
            <span id="labelling">E-mail: </span>
            <span id="contact-num-content">${item.number}</span>
        </div>

        <div class="record-el">
            <span id="labelling">Website: </span>
            <span id="name-content">${item.web}</span>
        </div>

        <div class="record-el">
            <span id="labelling">Phone number: </span>
            <span id="name-content">${item.phone}</span>
        </div>

        <div class="record-el">
            <span id="labelling">Comments: </span>
            <span id="name-content">${item.comment}</span>
        </div>

        `;
    recordContainer.appendChild(newRecordDiv);
}



const addBtn = document.getElementById("submit-btn");  



function clearInputFields() {
    name.value = "";
    number.value = "";
    web.value = "";
    phone.value = "";
    comment.value = "";
}


document.addEventListener("DOMContentLoaded", function() {
    const backgroundMusic = document.getElementById("backgroundMusic");
    const playButton = document.getElementById("playButton");
    const pauseButton = document.getElementById("pauseButton");
    const volumeControl = document.getElementById("volumeControl");

    playButton.addEventListener("click", function() {
        backgroundMusic.play();
    });

    pauseButton.addEventListener("click", function() {
        backgroundMusic.pause();
    });

});