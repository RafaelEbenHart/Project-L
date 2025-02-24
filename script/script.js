const jsonFiles = [
    { file: "../data/dummyInternational.json", containerId: "cardInternational" },
    { file: "../data/dummyDomestic.json", containerId: "cardDomestic" },
    { file: "../data/dummyVisit.json", containerId: "cardVisit" }
];

function fetchAndDisplayData({ file, containerId }) {
    fetch(file)
        .then(response => response.json())
        .then(data => displayCards(data, containerId))
        .catch(error => console.error(`Error fetching ${file}:`, error));
}

function displayCards(data, containerId) {
    const container = document.getElementById(containerId);

    if (!container) {
        console.error(`Elemen #${containerId} tidak ditemukan!`);
        return;
    }

    data.forEach(item => {
        const card = document.createElement("div");

        if (containerId === "cardVisit") {
            card.classList.add("cardVisit");
            card.innerHTML = `
            <div class="visitContainer">
                <img src="${item.image}" alt="${item.name}">
                <div class="overlay">
                    <p>${item.name}</p>
                </div>
            </div>
            `;
        } else {
            card.classList.add("card");
            card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.location}</h3>
            <p>${item.name}</p>
            <span class="card-span">
                <i class="${item.icon}"></i>
                <p>${item.rate}</p>
                <p>${item.statusRate}</p>
            </span>
            `;
        }

        card.addEventListener("click",function(){
            window.location.href=`detail.html?id=${item.id}`;
        });

        container.appendChild(card);
    });

}

jsonFiles.forEach(fetchAndDisplayData);
