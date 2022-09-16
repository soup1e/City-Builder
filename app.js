/* Imports */

/* Get DOM Elements */
const cityName = document.getElementById('name-city');
const climate = document.getElementById('select-climate');
const architecture = document.getElementById('select-architecture');
const attractionInput = document.getElementById('input-attraction');
const addButton = document.getElementById('add-button');

const cityDisplay = document.getElementById('city-display');
const nameDisplay = document.getElementById('name-display');
const attractionList = document.getElementById('list-attraction');

const climateImg = document.getElementById('image-climate');
const architectureImg = document.getElementById('image-architecture');

const body = document.getElementById('body');
/* State */

const city = {
    name: '???',
    climate: 'Tropical',
    architecture: 'Medieval',
    attraction: [],
};

cityName.addEventListener('input', () => {
    city.name = cityName.value; // I didn't know that the input had to go first, im learning wow
    displayCity();
});

// EVENT LISTENER FOR CLIMATE
climate.addEventListener('change', () => {
    city.climate = climate.value;
    displayCity();
});

// EVENT LISTENER FOR architecture
architecture.addEventListener('change', () => {
    city.architecture = architecture.value;
    displayCity();
});

function display() {
    cityName.value = city.name;
    climate.value = city.climate;
    architecture.value = city.architecture;
}

function displayCity() {
    cityDisplay.classList.value = '';
    nameDisplay.textContent = city.name;
    cityDisplay.classList.add(city.climate, city.architecture);
    climateImg.src = 'assets/options/' + city.climate + '.jpg';
    architectureImg.src = 'assets/options/' + city.architecture + '.jpg';
    displayFont();
    displayBackground();
}

/* Events */

function displayAttractions() {
    attractionList.innerHTML = '';

    for (const attraction of city.attraction) {
        const li = document.createElement('li');
        li.textContent = attraction;
        attractionList.append(li);
    }
}

addButton.addEventListener('click', () => {
    const attraction = attractionInput.value;
    // No blank attractions
    if (attractionInput.value === '') {
        return;
    }

    city.attraction.push(attraction);
    displayAttractions();
    attractionInput.value = '';
});
// CHANGE FONT ON architecture CHANGE
function displayFont() {
    if (city.architecture === 'Medieval') {
        body.classList.add('Oswald');
        body.classList.remove('opensans');
        body.classList.remove('reem');
    } else if (city.architecture === 'Modern') {
        body.classList.add('reem');
        body.classList.remove('opensans');
        body.classList.remove('Oswald');
    } else if (city.architecture === 'Futuristic') {
        body.classList.add('opensans');
        body.classList.remove('reem');
        body.classList.remove('Oswald');
    }
}
// CHANGE BACKGROUND
function displayBackground() {
    if (city.climate === 'Tropical') {
        body.classList.add('tropical');
        body.classList.remove('climate');
        body.classList.remove('beach');
        body.classList.remove('alaska');
    } else if (city.climate === 'Dry') {
        body.classList.add('climate');
        body.classList.remove('tropical');
        body.classList.remove('beach');
        body.classList.remove('alaska');
    } else if (city.climate === 'Beach') {
        body.classList.add('beach');
        body.classList.remove('tropical');
        body.classList.remove('climate');
        body.classList.remove('alaska');
    } else if (city.climate === 'Alaska') {
        body.classList.add('alaska');
        body.classList.remove('tropical');
        body.classList.remove('climate');
        body.classList.remove('beach');
    }
}
// CHANGE
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
display();
displayCity();
displayAttractions();
displayFont();
displayBackground();
