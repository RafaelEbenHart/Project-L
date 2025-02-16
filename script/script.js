fetch("../data/dummy.json")
    .then(response => response.json())
    .then(data => displayCards(data))
    .catch(error => console.error("Error:", error));

function displayCards(data) {
    const container = document.getElementById("card-container");

    if (!container) {
        console.error("Elemen #card-container tidak ditemukan!");
        return;
    }

    data.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.location}</h3>
        <p>${item.name}</p>
        <span>
            <i class="${item.icon}"></i>
            <p>${item.rate}</p>
            <p>${item.statusRate}</p>
        </span>
        `;

        container.appendChild(card);
    });
}


