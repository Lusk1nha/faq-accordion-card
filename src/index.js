// ? Object with all words
const allPhrases = {
    questions: ["How many team members can I invite?", 
        "What is the maximum file upload size?",
        "How do I reset my password?",
        "Can I cancel my subscription?",
        "Do you provide additional support?"],

    answers: ["You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
        "No more than 2GB. All files in your account must fit your allotted storage space.",
        "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
        "Yes! Send us a message and we’ll process your request no questions asked.",
        "Chat and email support is available 24/7. Phone lines are open during normal business hours."
    ]
    
}

let rules = document.querySelectorAll('.rule')

// * This function create the elements with the infos of object
const createElements = () => {
    for ( let indexQuestions = 0; indexQuestions < 5; indexQuestions++ ) {
        const ruleContainer = document.querySelector('.rules')

        // Create the div with class="rule"
        let rule = document.createElement('div')
        rule.classList.add('rule')
        rule.setAttribute('id', indexQuestions)
        ruleContainer.appendChild(rule)
        
        // Create the div with class="outside-container"
        let outsideContainer = document.createElement('div')
        outsideContainer.classList.add('outside-container')
        rule.appendChild(outsideContainer)

        // Create the h3 with class="outside-text"
        let outsideText = document.createElement('h3')
        outsideText.classList.add('outside-text')
        outsideText.innerHTML = allPhrases.questions[indexQuestions] // Pick the object the right question

        // Create the span with class="icon-arrow-container"
        let spanContainer = document.createElement('span')
        spanContainer.classList.add('icon-arrow-container')

        // Create the element and source img and put the class="icon-arrow"
        let arrowIcon = document.createElement('img')
        arrowIcon.src = "./assets/icon-arrow-down.svg"
        arrowIcon.classList.add("icon-arrow")

        spanContainer.appendChild(arrowIcon)

        // Putting in outside container the outside text and span
        outsideContainer.appendChild(outsideText)
        outsideContainer.appendChild(spanContainer)

        // Create the div with class="inside-text"
        let insideContainer = document.createElement('div')
        insideContainer.classList.add('inside-text')
        
        rule.appendChild(insideContainer)
    } 
}


// * Adding the function openAndClose in the elements
const addEventInElements = () => {
    rules = document.querySelectorAll('.rule')
    rules.forEach(rule => rule.addEventListener('click', openAndClose))
}


// * After the user clicks on the element the function is activated, IF the element is not open, the function will open it and shows the right answer, ELSE the function closes the element and hide the answer
function openAndClose() {
    let insideText = this.childNodes[1]
    
    if ( insideText.innerHTML != "" ) {     // If the quote was selected she is
        this.classList.remove('selected')
        return insideText.innerHTML = ""
    }
    
    rules.forEach(rule => {     // This code clean the text of all rules
        rule.classList.remove('selected')
        rule.childNodes[1].innerHTML = ""
    })
    
    insideText.innerText = allPhrases.answers[this.id]
    this.classList.add('selected')
}

// Calling the functions
createElements()
addEventInElements()
