// const openboxEl = document.querySelector(".openbox-el")

// openboxEl?.addEventListener("click", function() {
//     console.log("I want to open the box!")
// })


const inputEl = document.querySelector("#input-el")
const inputBtn = document.getElementById("input-btn");
const ulEl = document.querySelector("#ul-el");
const deleteBtn = document.querySelector("#delete-btn");
const tabBtn = document.querySelector("#tab-btn");

let myLeads = [];

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;

    renderLeads();
}

function renderLeads() {
    let listItems = "";

    for(let i = 0; i < myLeads.length; i++) {
        listItems += `<li> 
            <a target="_blank" href="${myLeads[i]}"> ${myLeads[i]} </a>
        </li>`
    }

    ulEl.innerHTML = listItems;
}

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        console.log(tabs)
    })
})

inputBtn.addEventListener("click", function() {
    let inputValue = inputEl.value;
    myLeads.push(inputValue);
    inputEl.value = "";

    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads();
})

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear("myLeads");
    myLeads = [];
    renderLeads();
})
