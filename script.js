const submitFormButton = document.getElementById("submitButton")
const tableBody = document.getElementById("tableBody")
// This creates the constants that use two elements from the index.html file



//This makes it so the following code is only ran when the button is clicked
submitFormButton.addEventListener("click", (event) => {
    //This prevents the page from refreshing whenever the submit button is clicked
    event.preventDefault()

    //This creates the variables that use the value of the input boxes in the form from the html file.
    let gameName = document.getElementById("gameName").value
    let consoleName = document.getElementById("consoleName").value
    let copiesSold = document.getElementById("copiesSold").value
    let releaseDate = document.getElementById("releaseDate").value

    //This creates a new <tr> element and appends it to the bottom of the <tbody> element
    tableRow = document.createElement("tr")
    tableBody.appendChild(tableRow)

    //This changes the color to red, blue, green, or the default table color depending on the value of the consoleName variable.
    if (consoleName == "Nintendo Switch") {
        tableRow.style.backgroundColor = "#e03444"
    } else if (consoleName == "PS5") {
        tableRow.style.backgroundColor = "#106cfc"
    } else if (consoleName == "Xbox Series X") {
        tableRow.style.backgroundColor = "#208454"
    } else tableRow.style.backgroundColor = ""
    //This creates a <td> element at the last line of the existing <tbody> element
    td1 = document.createElement("td")
    //This sets the text content of the new element to the value of the gameName variable
    td1.textcontent = gameName
    //This creates a new variable that contains a textnode of the textcontent in td1
    let gn = document.createTextNode(td1.textcontent)
    //This appends the element in td1 to the new <tr> element
    tableRow.appendChild(td1)
    //This appends the textnode in the gn variable to the new <td> element
    td1.appendChild(gn)

//Down here is repeated code altered to fit the values that need to be stored and appended to the table
    td2 = document.createElement("td")
    td2.textcontent = consoleName
    let cn = document.createTextNode(td2.textcontent)
    tableRow.appendChild(td2)
    td2.appendChild(cn)


    td3 = document.createElement("td")
    td3.textcontent = releaseDate
    let rd = document.createTextNode(td3.textcontent)
    tableRow.appendChild(td3)
    td3.appendChild(rd)


    td4 = document.createElement("td")
    td4.textcontent = copiesSold
    let cs = document.createTextNode(td4.textcontent)
    tableRow.appendChild(td4)
    td4.appendChild(cs)
})