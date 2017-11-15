'use strict';

class Cafe {
    constructor (name, address, site, src) {
        this.name = name;
        this.address = address;
        this.site = site;
        this.src = src;
    }
    rateWork(space, outlets, atmosphere) {
        this.space = space;
        this.outlets = outlets;
        this.atmosphere = atmosphere;
        this.work = Math.ceil((space + outlets + atmosphere) / 3);
    }
    rateMenu(quality, variety, price) {
        this.quality = quality;
        this.variety = variety;
        this.price = price;
        this.menu = Math.ceil((quality + variety + price) / 3);
    }
    rateComm(kids, local, neighborhood) {
        this.kids = kids;
        this.local = local;
        this.neighborhood = neighborhood;
        this.comm = Math.ceil((kids + local + neighborhood) / 3);
    }
    rateOverall() {
        this.overall = ((this.work + this.menu + this.comm ) / 3).toFixed(1);
    }
}

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

if (document.getElementById('index') != null) {
    const landingForm = document.getElementById ('landing-form');

    landingForm.addEventListener('submit', function(){
        const userName = document.getElementById('username').value;
        localStorage.setItem('username', JSON.stringify(userName));
        //'username' is the key, therefore must be used to access past this point
    });
}

//This will render the username onto the search page
if (document.getElementById('search') != null) {
    const newUser = JSON.parse(localStorage.username);
    const greeting = document.getElementById('greeting');
    greeting.textContent = 'Hello, ' + newUser + '. Find your space.';
}

//Render cafes on SEARCH page
if (document.getElementById('search') != null) {
    for ( let i = 0; i < cafes.length; i++){
        const searchPage = document.getElementById('thumbnail-wrapper');
        const cafeBlock = document.createElement('div');
        cafeBlock.setAttribute('class', 'cafeBlock');
        cafeBlock.style.backgroundImage = url(cafes[i].src);
        searchPage.appendChild(cafeBlock);
    }
}




// This will render the cafe items to the search page

// create div for thumbnail
// add attribute class
// set att value 'class name'

// create div for h1 overall rating
// add attribute for id
// att text content === overall