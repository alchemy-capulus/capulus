'use strict';

const cafes = [];

const starbucks = new Cafe ('Starbucks', '1039 NW Couch St', 'http://www.Starbucks.com', 'assets/images/starbucks.jpeg');
starbucks.rateWork(4, 2, 3);
starbucks.rateMenu(3, 2, 4);
starbucks.rateComm(0, 0, 2);
starbucks.rateOverall();
cafes.push(starbucks);

const pearl = new Cafe ('Pearl Bakery', '102 NW 9th Ave', 'http://pearlbakery.com', 'assets/images/pearl.jpeg');
pearl.rateWork(3, 1, 5);
pearl.rateMenu(5, 3, 3);
pearl.rateComm(3, 5, 3);
pearl.rateOverall();
cafes.push(pearl);


const albina = new Cafe ('Albina', '4637 N Albina Ave', 'https://www.facebook.com/pages/Albina-Press-Coffeehouse/152791121399765', 'assets/images/albina.jpeg');
albina.rateWork (3, 3, 5);
albina.rateMenu (4, 3, 3);
albina.rateComm (1, 5, 5);
albina.rateOverall();
cafes.push(albina);


const rohst = new Cafe ('Rohst', '11254 SE 21st Avenue', 'http://www.rohstcoffee.com', 'assets/images/rohst.jpeg');
rohst.rateWork (2, 4, 4);
rohst.rateMenu (4, 5, 4);
rohst.rateComm (4, 5, 5);
rohst.rateOverall();
cafes.push(rohst);

const annas = new Cafe ('Anna Bannanas', '8716 N Lombard St', 'http://www.annabannanas.com', 'assets/images/annas.jpeg');
annas.rateWork (4, 4, 4);
annas.rateMenu (4, 3, 3);
annas.rateComm (5, 5, 5);
annas.rateOverall();
cafes.push(annas);

const barista = new Cafe ('Barista', '1725 NE Alberta St', 'http://www.baristapdx.com', 'assets/images/barista.jpeg');
barista.rateWork (2, 2, 3);
barista.rateMenu (2, 2, 4);
barista.rateComm (1, 3, 3);
barista.rateOverall();
cafes.push(barista);

// Store username to local from landing page
if (document.getElementById('index') != null) {
    const landingForm = document.getElementById ('landing-form');

    landingForm.addEventListener('submit', function(){
        const user = document.getElementById('username').value;
        localStorage.setItem('username', JSON.stringify(user));
        //'username' is the key, therefore must be used to access past this point
    });
}

//Render the username onto the search page
if (document.getElementById('search') != null) {
    console.log(localStorage.username);
    const newUser = JSON.parse(localStorage.username);
    const greeting = document.getElementById('greeting');
    greeting.textContent = 'Hello, ' + newUser + '. Find your space.';
}

//Render cafes on SEARCH page, save array of cafe instances to local
if (document.getElementById('search') != null) {
    for ( let i = 0; i < cafes.length; i++){
        const searchPage = document.getElementById('thumbnail-wrapper');
        const cafeBlock = document.createElement('div');
        cafeBlock.setAttribute('class', 'cafeBlock');
        cafeBlock.style.backgroundImage = 'url(' + cafes[i].src + ')';
        const cafeName = document.createElement('a');
        cafeName.textContent = cafes[i].name;
        cafeName.setAttribute('href', 'profile.html');
        cafeName.setAttribute('id', i);
        const cafeRating = document.createElement('span');
        cafeRating.textContent = cafes[i].overall;
        searchPage.appendChild(cafeBlock);
        cafeBlock.appendChild(cafeName);
        cafeBlock.appendChild(cafeRating);
        localStorage.setItem('cafes', JSON.stringify(cafes));
        cafeName.addEventListener('click', function(e){
            const id = e.target.id;
            localStorage.setItem('id' , JSON.stringify(id));
        });
    }
}

// take form input, return to user
if (document.getElementById('suggest-form') != null) {
    const suggestForm = document.getElementById('suggest-form');
    //add click handler for the suggestForm
    suggestForm.addEventListener('submit', function(e){
        e.preventDefault();
        const suggestName = document.getElementById('suggest-cafe-name').value;
        localStorage.setItem('suggestName', JSON.stringify(suggestName));
        const suggestAddress = document.getElementById('suggest-cafe-address').value;
        localStorage.setItem('suggestAddress', JSON.stringify(suggestAddress));
        const suggestSite = document.getElementById('suggest-cafe-site').value;
        localStorage.setItem('suggestSite', JSON.stringify(suggestSite));
        const suggestion = document.getElementById('suggestion-return');
        const suggestList = document.createElement('ul');
        const listItemName = document.createElement('li');
        listItemName.textContent = suggestName;
        const listItemAddress = document.createElement('li');
        listItemAddress.textContent = suggestAddress;
        const listItemSite = document.createElement('li');
        listItemSite.textContent = suggestSite;
        suggestList.appendChild(listItemName);
        suggestList.appendChild(listItemAddress);
        suggestList.appendChild(listItemSite);
        suggestion.appendChild(suggestList);
        //Need to move the rendering out of click handler, constants called w/in handler not scoped to outside. Fix this. Eventually. Stretch goal.
    });
}