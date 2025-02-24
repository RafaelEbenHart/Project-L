const jsonFiles = ["../data/dummyDomestic.json", "../data/dummyInternational.json"];

let allDestinations = [];

function fetchAllData() {
    let fetchPromises = jsonFiles.map(file =>
        fetch(file)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => allDestinations = allDestinations.concat(data))
            .catch(error => console.error('There was a problem with the fetch operation:', error))
    );

    Promise.all(fetchPromises).then(() => displayDetail());
}

function displayDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const placeId = urlParams.get("id");

    const place = allDestinations.find(item => item.id === placeId);

    if (place) {
        document.getElementById("container-background").style.backgroundImage = `url('${place.image}')`;
        document.getElementById("place-image").src = place.image;
        document.getElementById("place-name").innerText = place.name;
        document.getElementById("place-location").innerText = place.location;
        document.getElementById("place-icon").className = place.icon;
        document.getElementById("place-rate").innerText = place.rate;
        document.getElementById("place-area").innerText = place.area;
        document.getElementById("place-description").innerText = place.description;
    } else {
        document.getElementById("detail-container").innerHTML = "<h2>Data tidak ditemukan</h2>";
    }
}

function goBack() {
    window.history.back();
}

fetchAllData();
