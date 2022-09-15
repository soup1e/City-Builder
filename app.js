/* Imports */

/* Get DOM Elements */
const cityName = document.getElementById('name-city');
const climate = document.getElementById('select-climate');
const architecture = document.getElementById('select-architecture');
const attractionInput = document.getElementById('input-attraction');
const addButton = document.getElementById('add-button');
const attractionList = document.getElementById('input-attraction');
const cityDrawing = document.getElementById('cityDrawing');
/* State */

const city = {
    name: 'default',
    climate: 'default',
    architecture: 'default',
    attraction: [],
};

cityName.addEventListener('input', () => {
    cityName.value = city.name;
    displayCity();
});

// EVENT LISTENER FOR CLIMATE
climate.addEventListener('change', () => {
    climate.input = city.climate;
    displayCity();
});

// EVENT LISTENER FOR architecture
architecture.addEventListener('change', () => {
    architecture.input = city.architecture;
    displayCity();
});

/* Events */
addButton.addEventListener('click', () => {
    const attraction = attractionInput.value;
    // No blank attractions
    if (attraction.value === '') {
        return;
    }
    city.attraction.push(attraction);
    displayAttractions();
});

function displayAttractions() {
    attractionList.innerHTML = '';

    for (const attraction of city.attractions) {
        const li = document.createElement('li');
        li.textContent = attraction;
        attractionList.append(li);
    }
}

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
displayCity();
