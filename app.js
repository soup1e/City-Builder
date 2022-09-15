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

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
display();
displayCity();
displayAttractions();
