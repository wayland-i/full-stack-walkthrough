function createHeader() {
    let h1 = document.querySelector("h1")
    h1.textContent = bookStore.name
}

function createFooter() {
    let divs = document.querySelector("footer").children
    console.log(divs)
    divs[0].textContent = bookStore.name
    divs[1].textContent = bookStore.address
    divs[2].textContent = bookStore.hours
}

createHeader();
createFooter();