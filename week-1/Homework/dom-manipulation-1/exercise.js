/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
    const pElement = document.querySelectorAll('p')
    const firstDivElement = document.querySelector('div')
    const jumbotron = document.querySelector("#jumbotron-text")

    const primaryContent = document.querySelectorAll('.primary-content')
    const primaryParagraph = primaryContent.querySelectorAll('p') //ESTE ME DIO ERROR

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

let alertButton = document.querySelector('#alertBtn') // me aparece como no definida

alertButton.addEventListener("click", (e) => {
    e.preventDefault()
    alert("Thanks for visiting Bikes for Refugees!")
});
//NO ME APARECE EL POP UP

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

const colourButton = document.querySelector("#bgrChangeBtn");
colourButton.addEventListener("click", (e) => {
    e.preventDefault()
    document.body.style.backgroundColor = "red"
});
//NO CAMBIA

/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/
const addTextButton = document.querySelector("#addArticleBtn")
const learnMoreSection = document.querySelector("#mainArticles")

addTextButton.addEventListener("click", (e) => {
    e.preventDefault()
    let newParagraph = document.createElement("p")
    learnMoreSection.appendChild(newParagraph)
})


/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
const largerLinkBottom = document.querySelector('#largerLinksBtn')
const aLink = document.querySelectorAll('a')

largerLinkBottom.addEventListener("click", (e) => {
    e.preventDefault()
    aLink.forEach(link => {
        link.style.fontSize = '20px';
      });
})


/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/

const addButton = document.querySelector("#addArticleBtn")
const inputField = document.querySelector(".form-control")

addButton.addEventListener("click", (e) => {
    e.preventDefault()
    let newParagraph = document.createElement("p")
    learnMoreSection.appendChild(newParagraph)
})

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

