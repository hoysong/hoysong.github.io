const categoryButtons = document.querySelectorAll('.category_button');
const projectCards = document.querySelectorAll('.project_card');

/*=========*/
/*Debug Log*/
/*=========*/
function putLog () {

    for (let i = 0; i < categoryButtons.length; i++) {
        console.log("Category: " + categoryButtons[i].dataset.category);
        for (let j = 0; j < categoryButtons[i].classList.length; j++)
            console.log("└─Classes: " + categoryButtons[i].classList);
    }

    for (let i = 0; i < projectCards.length; i++) {
        console.log(projectCards[i]);
    }

}

function hide_or_show(card, category) {
    const splits = card.dataset.category.split(",");
    if (category === "all" || splits.includes(category) === true) {
        card.hidden = false;
    }
    else {
        card.hidden = true;
    }
}

function show_category_only(category) {
    for (let i = 0; i < projectCards.length; i++) {
        hide_or_show(projectCards[i], category);
    }
}

/*===================*/
/*button event logic.*/
/*===================*/
function handleButtonClick(event) {
    for (let i = 0; i < categoryButtons.length; i++) {
        categoryButtons[i].classList.remove("active");
    }

    let clicked_button = event.currentTarget;
    /*put debug*/
    console.log("Button Clicked: " + clicked_button.dataset.category);
    clicked_button.classList.add("active");
    show_category_only(clicked_button.dataset.category);
    putLog();
}

/*init*/
for (let i = 0; i < categoryButtons.length; i++) {
    categoryButtons[i].addEventListener("click", handleButtonClick);
    if (categoryButtons[i].dataset.category == "all") {
        categoryButtons[i].classList.add("active");
    }
}