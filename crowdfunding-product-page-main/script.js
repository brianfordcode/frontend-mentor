// BOOKMARK BUTTON
const bookmarkBtn = document.querySelector(".header-btn__bookmarkBtn");
bookmarkBtn.addEventListener('click', function() {
    let bookmarkTxt = document.querySelector('.bookmark-text');
    let bookmarkIcon = document.querySelector('.bookmark-icon')
    
    bookmarkBtn.classList.toggle('bookmarked');
    
    if (bookmarkBtn.classList.contains('bookmarked')) {
        bookmarkBtn.style.width="200px";
        bookmarkIcon.src = "./images/icon-bookmark-checked.svg"
        bookmarkTxt.innerHTML = "Bookmarked";
        bookmarkTxt.style.color = 'hsl(176, 72%, 28%)';
        bookmarkTxt.style.transform = 'translateX(-5px)';
    } else {
        bookmarkBtn.style.width="175px";
        bookmarkIcon.src = "./images/icon-bookmark.svg"
        bookmarkTxt.innerHTML = "Bookmark";
        bookmarkTxt.style.color = 'hsl(0, 0%, 48%)';
        bookmarkTxt.style.transform = 'translateX(5px)';
    }
});

//OPEN/CLOSE MODALS
const modalBackground = document.getElementById('overlay');

    //BACK PROJECT MODAL
const openBackProjModalBtn = document.querySelector(".header-btn__backthisprojectBtn");
const backProjModal = document.querySelector(".backproj-modal");
const closeBackProjModalBtn = document.querySelector(".close");

        //PLEDGE 0
let pledge0Title = document.querySelector('.pledge0.backproj-firstline__title');
let pledge0Border = document.querySelector('.pledge0.backproj-modal__box');
        //PLEDGE 25
let pledge25Title = document.querySelector('.pledge25.backproj-firstline__title');
let pledge25Border = document.querySelector('.pledge25.backproj-modal__box');
        //PLEDGE 75
let pledge75Title = document.querySelector('.pledge75.backproj-firstline__title');
let pledge75Border = document.querySelector('.pledge75.backproj-modal__box');
        //PLEDGE 200
let pledge200Title = document.querySelector('.pledge200.backproj-firstline__title');
let pledge200Border = document.querySelector('.pledge200.backproj-modal__box');

function openBackProjModal() {
    backProjModal.style.display="initial";
    modalBackground.style.display="initial";
}

openBackProjModalBtn.addEventListener('click', ()=> {
    openBackProjModal();
});

closeBackProjModalBtn.addEventListener('click', ()=> {
    backProjModal.style.display="none";
    modalBackground.style.display="none";
    closePledge(pledge0);
    closePledge(pledge25);
    closePledge(pledge75);
    closePledge(pledge200);
    pledge0Title.style.color="black";
    pledge0Border.style.border="1px solid rgba(0,0,0,0.5)";
    pledge25Title.style.color="black";
    pledge25Border.style.border="1px solid rgba(0,0,0,0.5)";
    pledge75Title.style.color="black";
    pledge75Border.style.border="1px solid rgba(0,0,0,0.5)";
    pledge200Title.style.color="black";
    pledge200Border.style.border="1px solid rgba(0,0,0,0.5)";
});

        // OPEN BACK PROJECT MODAL PLEDGES
const pledgeBox = document.getElementById('pledges-container');
const pledge0 = document.getElementById('pledge0-toggle');
const pledge25 = document.getElementById('pledge25-toggle');
const pledge75 = document.getElementById('pledge75-toggle');
const pledge200 = document.getElementById('pledge200-toggle');

pledgeBox.addEventListener('click', (e) => {
    let target = e.target;
    let dropdown = document.querySelector('.backproj-thirdline')

    if (target.classList.contains('pledge0')) {
        openPledge(pledge0);
        pledge0Title.style.color="hsl(176, 50%, 47%)";
        pledge0Border.style.border="2px solid hsl(176, 50%, 47%)";
        pledge25Title.style.color="black";
        pledge25Border.style.border="1px solid rgba(0,0,0,0.5)";
        pledge75Title.style.color="black";
        pledge75Border.style.border="1px solid rgba(0,0,0,0.5)";
        pledge200Title.style.color="black";
        pledge200Border.style.border="1px solid rgba(0,0,0,0.5)";

        closePledge(pledge25);
        closePledge(pledge75);
        closePledge(pledge200);
    }
    
    if (target.classList.contains('pledge25')) {
        openPledge(pledge25);
        pledge25Title.style.color="hsl(176, 50%, 47%)";
        pledge25Border.style.border="2px solid hsl(176, 50%, 47%)"
        pledge0Title.style.color="black";
        pledge0Border.style.border="1px solid rgba(0,0,0,0.5)";
        pledge75Title.style.color="black";
        pledge75Border.style.border="1px solid rgba(0,0,0,0.5)";
        pledge200Title.style.color="black";
        pledge200Border.style.border="1px solid rgba(0,0,0,0.5)";

        closePledge(pledge0);
        closePledge(pledge75);
        closePledge(pledge200);
    }
    if (target.classList.contains('pledge75')) {
        openPledge(pledge75);
        pledge75Title.style.color="hsl(176, 50%, 47%)";
        pledge75Border.style.border="2px solid hsl(176, 50%, 47%)";
        pledge0Title.style.color="black";
        pledge0Border.style.border="1px solid rgba(0,0,0,0.5)";
        pledge25Title.style.color="black";
        pledge25Border.style.border="1px solid rgba(0,0,0,0.5)";
        pledge200Title.style.color="black";
        pledge200Border.style.border="1px solid rgba(0,0,0,0.5)";

        closePledge(pledge0);
        closePledge(pledge25);
        closePledge(pledge200);
    }
    if (target.classList.contains('pledge200')) {
        openPledge(pledge200);
        pledge0Title.style.color="black";
        pledge0Border.style.border="1px solid rgba(0,0,0,0.5)";
        pledge200Title.style.color="hsl(176, 50%, 47%)";
        pledge200Border.style.border="2px solid hsl(176, 50%, 47%)";
        pledge25Title.style.color="black";
        pledge25Border.style.border="1px solid rgba(0,0,0,0.5)";
        pledge75Title.style.color="black";
        pledge75Border.style.border="1px solid rgba(0,0,0,0.5)";
        
        closePledge(pledge0);
        closePledge(pledge25);
        closePledge(pledge75);
    }
    
});


function openPledge(pledge) {
    pledge.style.display="flex";
    // pledge.classList.toggle('active');
};

function closePledge(pledge) {
    pledge.style.display="none";
    
};

const pledgeBoxMainBtn = document.querySelectorAll('.pledge-box__btn');

//open pledge 25 main page button
pledgeBoxMainBtn[0].addEventListener('click', () => {
    backProjModal.style.display="initial";
    modalBackground.style.display="initial";
    openPledge(pledge25);
    pledge25Title.style.color="hsl(176, 50%, 47%)";
    pledge25Border.style.border="2px solid hsl(176, 50%, 47%)"

});

//open pledge 75 main page button
pledgeBoxMainBtn[1].addEventListener('click', () => {
    backProjModal.style.display="initial";
    modalBackground.style.display="initial";
    openPledge(pledge75);
    pledge75Title.style.color="hsl(176, 50%, 47%)";
    pledge75Border.style.border="2px solid hsl(176, 50%, 47%)";
});

//open pledge 200 main page button
pledgeBoxMainBtn[2].addEventListener('click', () => {
    backProjModal.style.display="initial";
    modalBackground.style.display="initial";
    openPledge(pledge200);
    pledge200Title.style.color="hsl(176, 50%, 47%)";
    pledge200Border.style.border="2px solid hsl(176, 50%, 47%)";
});

//Thank you Modal
const thankYouGotItBtn = document.querySelector('.thankyou-modal__body__button');
const pledge0btn = document.querySelector('.pledge0-btn');
const pledge25btn = document.querySelector('.pledge25-btn');
const pledge75btn = document.querySelector('.pledge75-btn');
const pledge200btn = document.querySelector('.pledge200-btn');
const thankyouModal = document.querySelector('.thankyou-modal');

let backersNumber = document.getElementById('backers-number');


let moneyDonatedCollection = [];        
function addToMoneyDonated(valueEntered) {
    moneyDonatedCollection.push(parseInt(valueEntered, 10));

    let sum = moneyDonatedCollection.reduce(function(a, b){
        return a + b;
    }, 0);
    
    document.getElementById('money-donated').innerHTML = sum.toLocaleString();
    document.getElementById('backers-number').innerHTML = moneyDonatedCollection.length;

    // UPDATE PROGRESS BAR
    let progressDone = document.querySelector('.progress-done');
    let goalReachedText = document.querySelector('.goal-reached')

    progressDone.style.width = sum / (0.01 * campaignAmountNeeded) + "%";

    if (sum >= campaignAmountNeeded) {
        progressDone.style.width = "100%"
        goalReachedText.style.display = "initial";
    }
};

function newPledge25() {
    let value = document.getElementById("pledge25-input").value;
    if (isNaN(value) || value < 25 || value > 75) {
        alert('please donate between $25 and $75.');
    } else {
        backProjModal.style.display="none";
        thankyouModal.style.display = "initial";

        addToMoneyDonated(value);
        updateHowManyLeft(pledge25LeftMainTracker, pledge25LeftModuleTracker );
    }
};

function newPledge75() {
    let value = document.getElementById("pledge75-input").value;
    if (isNaN(value) || value < 75 || value > 200) {
        alert('please donate between $75 and $200.');
    } else {
        backProjModal.style.display="none";
        thankyouModal.style.display = "initial";

        addToMoneyDonated(value);
        updateHowManyLeft(pledge75LeftMainTracker, pledge75LeftModuleTracker);
    }
};

function newPledge200() {
    let value = document.getElementById("pledge200-input").value;
    if (isNaN(value) || value < 200) {
        alert('please donate more than $200.');
    } else {
        backProjModal.style.display="none";
        thankyouModal.style.display = "initial";

        addToMoneyDonated(value);
        updateHowManyLeft(pledge200LeftMainTracker, pledge200LeftModuleTracker);
    }
};

    //Enter Pledge Amount
pledge0btn.addEventListener('click', () => {
    console.log('$0 pledged');
    backProjModal.style.display="none";
    thankyouModal.style.display = "initial";
    addToMoneyDonated(0);
});

pledge25btn.addEventListener('click', () => {
    newPledge25();
});

pledge75btn.addEventListener('click', () => {
    newPledge75();
});

pledge200btn.addEventListener('click', () => {
    newPledge200();
});

   // Close Thank you Modal
thankYouGotItBtn.addEventListener('click', () => {
    thankyouModal.style.display="none";
    modalBackground.style.display="none";
    closePledge(pledge0);
    closePledge(pledge25);
    closePledge(pledge75);
    closePledge(pledge200);
    pledge0Title.style.color="black";
    pledge0Border.style.border="1px solid rgba(0,0,0,0.5)";
    pledge25Title.style.color="black";
    pledge25Border.style.border="1px solid rgba(0,0,0,0.5)";
    pledge75Title.style.color="black";
    pledge75Border.style.border="1px solid rgba(0,0,0,0.5)";
    pledge200Title.style.color="black";
    pledge200Border.style.border="1px solid rgba(0,0,0,0.5)";
})

    //click outside to close modal
modalBackground.addEventListener('click', () => {
    backProjModal.style.display = 'none';
    modalBackground.style.display="none";
    closePledge(pledge0);
    closePledge(pledge25);
    closePledge(pledge75);
    closePledge(pledge200);
    
    pledge0Title.style.color="black";
    pledge0Border.style.border="1px solid rgba(0,0,0,0.5)";
    pledge25Title.style.color="black";
    pledge25Border.style.border="1px solid rgba(0,0,0,0.5)";
    pledge75Title.style.color="black";
    pledge75Border.style.border="1px solid rgba(0,0,0,0.5)";
    pledge200Title.style.color="black";
    pledge200Border.style.border="1px solid rgba(0,0,0,0.5)";

    thankyouModal.style.display = "none";

});

//UPDATE PAGE

    //UPDATE HOW MANY LEFT

        //Pledge 25 Left
let pledge25LeftMainTracker = document.querySelector('.pledge25-left');
let pledge25LeftModuleTracker = document.querySelector('.modal-pledge25-left');
pledge25LeftMainTracker.innerHTML = 5;
pledge25LeftModuleTracker.innerHTML = 5;

        //Pledge 75 Left
let pledge75LeftMainTracker = document.querySelector('.pledge75-left');
let pledge75LeftModuleTracker = document.querySelector('.modal-pledge75-left');
pledge75LeftMainTracker.innerHTML = 5;
pledge75LeftModuleTracker.innerHTML = 5;

        //Pledge 200 left
let pledge200LeftMainTracker = document.querySelector('.pledge200-left');
let pledge200LeftModuleTracker = document.querySelector('.modal-pledge200-left');
pledge200LeftMainTracker.innerHTML = 5;
pledge200LeftModuleTracker.innerHTML = 5;

function updateHowManyLeft(a, b) {
    a.innerHTML -= 1;
    b.innerHTML -= 1;
    
    if (pledge25LeftMainTracker.innerHTML == 0) {
        let pledge25Btn = document.getElementById('pledge25-btn-main');
        pledge25Btn.innerHTML = "Out of Stock";
        pledge25Btn.style.backgroundColor = "hsl(0, 0%, 48%)";
        pledge25Btn.disabled = true;
        pledge25Btn.style.cursor = "default";
        document.querySelector('.pledge25').style.opacity = "0.65";

    }
    if (pledge75LeftMainTracker.innerHTML == 0) {
        let pledge75Btn = document.getElementById('pledge75-btn-main');
        pledge75Btn.innerHTML = "Out of Stock";
        pledge75Btn.style.backgroundColor = "hsl(0, 0%, 48%)";
        pledge75Btn.disabled = true;
        pledge75Btn.style.cursor = "default";
        document.querySelector('.pledge75').style.opacity = "0.65";
    }
    if (pledge200LeftMainTracker.innerHTML == 0) {
        let pledge200Btn = document.getElementById('pledge200-btn-main');
        pledge200Btn.innerHTML = "Out of Stock";
        pledge200Btn.style.backgroundColor = "hsl(0, 0%, 48%)";
        pledge200Btn.disabled = true;
        pledge200Btn.style.cursor = "default";
        document.querySelector('.pledge200').style.opacity = "0.65";
    }
};

    //UPDATE DAYS LEFT
const daysLeft = new Date(2021, 4, 1);
function updateDaysLeft(){
    const now = new Date();
    const remainingTime = Math.floor((daysLeft - now) / 86400000);

    document.getElementById('time-left-days').innerHTML = remainingTime; 

    if (remainingTime === 0 || remainingTime < 0) {
        document.getElementById('time-left-days').innerHTML = "Campaign Over"
    }
};
updateDaysLeft();

    //UPDATE CAMPAIGN AMOUNT NEEDED
let campaignAmountNeeded = 1000;

const campaignAmountNeededTracker = document.getElementById('money-needed');
campaignAmountNeededinDollars = campaignAmountNeeded.toLocaleString();
campaignAmountNeededTracker.innerHTML = campaignAmountNeededinDollars;











    //HOW TO FIX???
        // Make entire div clickable?
        // Make pledges scalable?
        // Close pledge when selected again
        // Why doesn't input field empty after button click?
        // select multiple items with same class name (pledgeleft)?


//TO DO
    //make color change highlight function