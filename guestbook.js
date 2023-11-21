
const addBtn = document.getElementById("submit-btn");
const cancelBtn = document.getElementById("cancel-btn");
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

resetBtn.addEventListener("click", function () {

    // Prompt the user for a password
    const enteredPassword = prompt("This action is password protected: ");
    // Check if the password is correct (replace 'yourPassword' with your actual password)
    if (enteredPassword === "tygman") {
        let audio = new Audio("ui_correct_button2-103167.mp3");
            document.body.appendChild(audio);
            audio.play();
        let contactElements = document.querySelectorAll(".record-item");
        contactElements.forEach(element => {
            setTimeout(function () {element.remove(); })
            
                
        
        });

        // Clear local storage
        localStorage.removeItem("contacts");
    } else {
        setTimeout(function() {alert("Incorrect password. Access denied!")}, 100)
        let audio = new Audio("wrong-answer-126515.mp3");
    document.body.appendChild(audio);
    audio.play();
    }
});


   
addBtn.addEventListener("click", function () {
    
    const truncatedName = name.value.slice(0, 25);
    const truncatedNumber = number.value.slice(0, 25);
    const truncatedWeb = web.value.slice(0, 25);
    const truncatedPhone = phone.value.slice(0, 25);
    const truncatedComment = comment.value.slice(0, 25);

    const contact = new Contact(++id, truncatedName, truncatedNumber, truncatedWeb, truncatedPhone, truncatedComment);
    ContactArray.push(contact);
    let audio = new Audio("interface-124464.mp3");
    document.body.appendChild(audio);
    audio.play();
    addToList(contact);
    saveToLocalStorage();
    clearInputFields();
});

function saveToLocalStorage() {
    localStorage.setItem("contacts", JSON.stringify(ContactArray));
}
     



cancelBtn.addEventListener("click", function () {
    clearInputFields();
    let audio = new Audio("stop-13692.mp3");
    document.body.appendChild(audio);
    audio.play();
    
});

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