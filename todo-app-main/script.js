let enteredItem = document.getElementById('input-area');
let itemContainer = document.getElementById('items-line');
const numberItemsLeft = document.querySelector('.items-left');
let filters = document.getElementById('bottom-row');

// ENTER ITEM
enteredItem.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const toDoAdded = enteredItem.value;
        const entireItemAdded = `<li class="draggable new-item" draggable="true"><input type="checkbox" class="checkbox"><p class = "items-text">${toDoAdded}</p><img src="./images/icon-cross.svg" class="exit-btn" alt="exit button"></li>`;
    if (toDoAdded) {
        function addItem() {
            itemContainer.insertAdjacentHTML('beforeend', entireItemAdded);
            enteredItem.value = "";
        }  
    }
    addItem();
    upDateItemsLeft();
    }
});

//UPDATE ITEMS
itemContainer.addEventListener('click', function(e) {
    let target = e.target;

    if (target.classList.contains('checkbox')) {
        target.classList.toggle('checked');
        target.parentNode.classList.toggle('checked')
    }
    if (target.classList.contains('exit-btn')) {
        target.parentNode.remove();
    }
    upDateItemsLeft();
});

//FILTERS
function upDateItemsLeft() {
    let uncheckedItems = document.querySelectorAll('li:not(.checked)');
    numberItemsLeft.innerHTML = uncheckedItems.length + ' Items Left';
    if (numberItemsLeft.innerHTML === "0 Items Left") {
        numberItemsLeft.innerHTML = "No More Items!"
    }
    if (numberItemsLeft.innerHTML === "1 Items Left") {
    numberItemsLeft.innerHTML = "1 Item Left"
    }
};

filters.addEventListener('click', function(e) {
    target = e.target;

    let checkedItems = document.querySelectorAll('li.checked');
    let notCheckedItems = document.querySelectorAll('li:not(.checked)');
    const allBtn = document.querySelector('.all');
    const activeBtn = document.querySelector('.active');
    const completedBtn = document.querySelector('.completed');
    
    if (target.classList.contains('all')) {
        allBtn.style.color = "hsl(235, 19%, 35%)";
        activeBtn.style.color = "hsl(236, 9%, 61%)";
        completedBtn.style.color = "hsl(236, 9%, 61%)";

        for (i = 0; i < checkedItems.length; i++) {
            checkedItems[i].classList.remove("filter");
        }
        for (i = 0; i < notCheckedItems.length; i++) {
               notCheckedItems[i].classList.remove('filter');
        }
    }
    if (target.classList.contains('active')) {
        allBtn.style.color = "hsl(236, 9%, 61%)";
        activeBtn.style.color = "hsl(235, 19%, 35%)";
        completedBtn.style.color = "hsl(236, 9%, 61%)";

        for (i = 0; i < checkedItems.length; i++) {
            checkedItems[i].classList.add('filter');
        }
        for (i = 0; i < notCheckedItems.length; i++) {
            notCheckedItems[i].classList.remove('filter');
        }
    }
    if (target.classList.contains('completed')) {
        allBtn.style.color = "hsl(236, 9%, 61%)";
        activeBtn.style.color = "hsl(236, 9%, 61%)";
        completedBtn.style.color = "hsl(235, 19%, 35%)";

        for (i = 0; i < notCheckedItems.length; i++) {
            notCheckedItems[i].classList.add('filter');
        }
        for (i = 0; i < checkedItems.length; i++) {
            checkedItems[i].classList.remove('filter');
        }
    }
    if (target.classList.contains('clear-completed')) {
        allBtn.style.color = "hsl(235, 19%, 35%)";
        activeBtn.style.color = "hsl(236, 9%, 61%)";
        completedBtn.style.color = "hsl(236, 9%, 61%)";

        for (i = 0; i < notCheckedItems.length; i++) {
            notCheckedItems[i].remove;
        }
        for (i = 0; i < checkedItems.length; i++) {
            checkedItems[i].remove();
        }   
    }
});

// DARK MODE
let themeBtn = 'dark';
function themeToggle() {
    let btnToggle = document.getElementById('theme-toggle');
    let bkgToggle = document.getElementById('background-image');
    let body = document.body;
    let instructions = document.querySelector('.instructions');
    let itemsText = document.querySelector('items-text')

    if (themeBtn=='dark') {
        btnToggle.src = "./images/icon-sun.svg";
        bkgToggle.src = "./images/bg-desktop-dark.jpg";
        body.style.backgroundColor = "hsl(235, 21%, 11%)";
        enteredItem.style.backgroundColor = "hsl(235, 24%, 19%)";
        enteredItem.style.color = "white";
        //itemsText.style.color = "white";
        itemContainer.style.backgroundColor = "hsl(235, 24%, 19%)";
        filters.style.backgroundColor = "hsl(235, 24%, 19%)";
        instructions.style.color = "hsl(236, 9%, 61%)";
        themeBtn = 'light';
    } else {
        btnToggle.src = "./images/icon-moon.svg"
        bkgToggle.src = "./images/bg-desktop-light.jpg"
        body.style.backgroundColor = "hsl(0, 0%, 98%)";
        enteredItem.style.backgroundColor = "";
        enteredItem.style.color = "black";
        itemContainer.style.backgroundColor = "";
        filters.style.backgroundColor = "";
        instructions.style.color = "black";
        themeBtn = "dark";
    }
};

// DRAG AND DROP LIST ITEMS


const draggables = document.body.querySelectorAll('draggable');


    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', () => {
            console.log('drag start');
        });
    });

    









//in dark mode, item container doesn't have border radius?
//can't get items text to be white?
//"addItem is not a function" when entered blank
//