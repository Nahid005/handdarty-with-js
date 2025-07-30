// const openboxEl = document.querySelector(".openbox-el")

// openboxEl?.addEventListener("click", function() {
//     console.log("I want to open the box!")
// })


const inputEl = document.querySelector("#input-el")
const inputBtn = document.getElementById("input-btn");
const ulEl = document.querySelector("#ul-el")

let myLeads = [];

inputBtn.addEventListener("click", function() {
    let inputValue = inputEl.value;
    myLeads.push(inputValue);
    inputEl.value = "";
    renderLeads();
})

function renderLeads() {
    let listItems = "";

    for(let i = 0; i < myLeads.length; i++) {
        listItems += `<li> 
            <a target="_blank" href="${myLeads[i]}"> ${myLeads[i]} </a>
        </li>`
    }

    ulEl.innerHTML = listItems;
}
