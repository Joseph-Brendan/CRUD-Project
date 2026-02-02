const addItemButton = document.getElementById("add-button")
const modalOverlay = document.getElementById("modal-overlay")
const nameOfItem = document.getElementById("name-of-item")
const closeIcon = document.getElementById("close-icon")
const form = document.getElementById("form")
const linkToItem = document.getElementById("link-to-item")
const descriptionOfItem = document.getElementById("description-of-item")

// Reveal and hide modal overlay
addItemButton.addEventListener("click", revealModalOverlay)
function revealModalOverlay(){
    modalOverlay.classList.remove("modal-overlay")
    modalOverlay.classList.add("modal-overlay-visible")
    nameOfItem.focus()
}

closeIcon.addEventListener("click", closeModalOverlay)
function closeModalOverlay(){
    if(modalOverlay.classList.contains("modal-overlay-visible")){
        modalOverlay.classList.remove("modal-overlay-visible")
        modalOverlay.classList.add("modal-overlay")
    }
}

// Collect data, handle form data and store data in LS
let researchItems = []

form.addEventListener("submit", handleFormData)
function handleFormData(event){
    event.preventDefault()
    // input data collection
    let itemName = nameOfItem.value
    let itemLink = linkToItem.value
    let itemDescription = descriptionOfItem.value

    const researchItem = {
        itemNAME : itemName,
        itemLINK : itemLink,
        itemDESCRIPTION : itemDescription
    }

    researchItems.push(researchItem)
    localStorage.setItem("itemsOfResearch", JSON.stringify(researchItems))
    form.reset()
    closeModalOverlay()
    fetchItems()
}

// Fetch data from LS
function fetchItems(){
    if(localStorage.getItem("itemsOfResearch")){
        researchItems = JSON.parse(localStorage.getItem("itemsOfResearch"))
    }
    
}
fetchItems()


// Print Data from LS on the UI
function printItemsOnUI(){
    researchItems.forEach(function(item){
        let itemNameTOPRINT = item.itemNAME
        let itemLinkTOPRINT = item.itemLINK
        let itemDescrTOPRINT = item.itemDESCRIPTION
    })
}