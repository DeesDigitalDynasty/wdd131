const cars = [
    { id: "supra-mk4", name: "Toyota Supra MK4", manufacturer: "Toyota", hp: 320, engine: "2JZ-GTE", country: "Japan", image: "images/supra.webp" },
    { id: "silvia-s15", name: "Nissan Silvia S15", manufacturer: "Nissan", hp: 250, engine: "SR20DET", country: "Japan", image: "images/silvia-s15.webp" },
    { id: "rx7-fd", name: "Mazda RX-7 FD", manufacturer: "Mazda", hp: 276, engine: "13B-REW Rotary", country: "Japan", image: "images/rx7.webp" },
    { id: "350z", name: "Nissan 350Z", manufacturer: "Nissan", hp: 306, engine: "VQ35HR", country: "Japan", image: "images/350z.webp" },
    { id: "brz", name: "Subaru BRZ", manufacturer: "Subaru", hp: 228, engine: "FA24", country: "Japan", image: "images/brz.webp" },
    { id: "mustang-rtr", name: "Ford Mustang RTR", manufacturer: "Ford", hp: 1115, engine: "Roush Yates V8", country: "USA", image: "images/mustang.webp" },
    { id: "bmw-m4", name: "BMW M4 Drift Car", manufacturer: "BMW", hp: 1000, engine: "S58 Twin-Turbo", country: "Germany", image: "images/bmw-m4.webp" }
];

document.addEventListener("DOMContentLoaded", () => {
    const carContainer = document.querySelector("#car-container");
    const filterSelect = document.querySelector("#manufacturer-filter");

    let favorites = JSON.parse(localStorage.getItem("apex_fav_cars")) || [];

    function renderCars(carList) {
        if (!carContainer) return;
        carContainer.innerHTML = "";

        carList.forEach(car => {
            const isFav = favorites.includes(car.id);
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <img src="${car.image}" alt="${car.name}" loading="lazy" width="300" height="200">
                <div class="card-body">
                    <h2 class="card-title">${car.name}</h2>
                    <ul class="card-stats">
                        <li><strong>Manufacturer:</strong> ${car.manufacturer}</li>
                        <li><strong>Horsepower:</strong> ${car.hp} HP</li>
                        <li><strong>Engine:</strong> ${car.engine}</li>
                        <li><strong>Origin:</strong> ${car.country}</li>
                    </ul>
                    <button class="btn-fav ${isFav ? 'active' : ''}" data-id="${car.id}">
                        ${isFav ? '★ Favorited' : '☆ Add to Favorites'}
                    </button>
                </div>
            `;
            carContainer.appendChild(card);
        });

        attachFavoriteListeners();
    }

    function attachFavoriteListeners() {
        document.querySelectorAll(".btn-fav").forEach(button => {
            button.addEventListener("click", (e) => {
                const carId = e.target.getAttribute("data-id");
                if (favorites.includes(carId)) {
                    favorites = favorites.filter(id => id !== carId);
                } else {
                    favorites.push(carId);
                }
                localStorage.setItem("apex_fav_cars", JSON.stringify(favorites));
                renderCars(getSelectedFilteredCars());
            });
        });
    }

    function getSelectedFilteredCars() {
        const val = filterSelect ? filterSelect.value : "all";
        return val === "all" ? cars : cars.filter(c => c.manufacturer === val);
    }

    if (filterSelect) {
        filterSelect.addEventListener("change", () => {
            renderCars(getSelectedFilteredCars());
        });
    }

    renderCars(cars);
});