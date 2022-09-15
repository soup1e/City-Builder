/* Imports */

/* Get DOM Elements */
const cityName = document.getElementById('name-city');
const climate = document.getElementById('select-climate');
const architecture = document.getElementById('select-architecture');
const attractionInput = document.getElementById('input-attraction');
const addButton = document.getElementById('add-button');
const cityDisplay = document.getElementById('city-display');
const NameDisplay = document.getElementById('name-display');
const attractionList = document.getElementById('list-attraction');

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
    city.climate = climate.input;
    displayCity();
});

// EVENT LISTENER FOR architecture
architecture.addEventListener('change', () => {
    city.architecture = architecture.input;
    displayCity();
});

cityName.value = city.name;
climate.value = city.climate;
architecture.value = city.architecture;

function displayCity() {
    cityDisplay.classList.value = '';
    cityDisplay.classList.add(city.climate, city.architecture);
    NameDisplay.textContent = city.name;
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
    // if (attraction.value === '') {
    //     return;
    // }
    city.attraction.push(attraction);
    displayAttractions();
});
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
displayCity();
displayAttractions();
