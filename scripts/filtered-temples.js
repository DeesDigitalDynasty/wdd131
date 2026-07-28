//Hamburger Menu

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("#navigation");

navigation.classList.add("hide");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("hide");

    menuButton.textContent =
        navigation.classList.contains("hide") ? "☰" : "✕";
});


//Footer


document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;


//Temple Data


const temples = [

{
templeName:"Aba Nigeria",
location:"Aba, Nigeria",
dedicated:"2005, August, 7",
area:11500,
imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
},

{
templeName:"Manti Utah",
location:"Manti, Utah, United States",
dedicated:"1888, May, 21",
area:74792,
imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
},

{
templeName:"Payson Utah",
location:"Payson, Utah, United States",
dedicated:"2015, June, 7",
area:96630,
imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
},

{
templeName:"Yigo Guam",
location:"Yigo, Guam",
dedicated:"2020, May, 2",
area:6861,
imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
},

{
templeName:"Washington D.C.",
location:"Kensington, Maryland, United States",
dedicated:"1974, November, 19",
area:156558,
imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
},

{
templeName:"Lima Perú",
location:"Lima, Perú",
dedicated:"1986, January, 10",
area:9600,
imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
},

{
templeName:"Mexico City Mexico",
location:"Mexico City, Mexico",
dedicated:"1983, December, 2",
area:116642,
imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
},

//Additional Temples

{
templeName:"Accra Ghana",
location:"Accra, Ghana",
dedicated:"2004, January, 11",
area:17500,
imageUrl:"images/accra-four.webp"
},

{
templeName:"Salt Lake",
location:"Salt Lake City, Utah",
dedicated:"1893, April, 6",
area:253015,
imageUrl:"images/salt_lake_temple.webp"
},

{
templeName:"Rome Italy",
location:"Rome, Italy",
dedicated:"2019, March, 10",
area:41010,
imageUrl:"images/rome_italy_temple.webp"
}

];

//Card Generator


const gallery = document.querySelector(".gallery");

function displayTemples(templeList) {

    gallery.innerHTML = "";

    const fragment = document.createDocumentFragment();

    templeList.forEach((temple) => {

        const card = document.createElement("section");
        card.classList.add("card");

        card.innerHTML = `

        <h3>${temple.templeName}</h3>

        <p><strong>Location:</strong> ${temple.location}</p>

        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>

        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>

        <img
            src="${temple.imageUrl}"
            alt="${temple.templeName}"
            loading="lazy"
            decoding="async"
            width="400"
            height="250">

        `;

        fragment.appendChild(card);

    });

    gallery.appendChild(fragment);

}


//Navigation Filters


document.querySelector("#home").addEventListener("click",(e)=>{

e.preventDefault();

displayTemples(temples);

});


document.querySelector("#old").addEventListener("click",(e)=>{

e.preventDefault();

displayTemples(

temples.filter(

temple=>new Date(temple.dedicated).getFullYear()<1900

)

);

});


document.querySelector("#new").addEventListener("click",(e)=>{

e.preventDefault();

displayTemples(

temples.filter(

temple=>new Date(temple.dedicated).getFullYear()>2000

)

);

});


document.querySelector("#large").addEventListener("click",(e)=>{

e.preventDefault();

displayTemples(

temples.filter(

temple=>temple.area>90000

)

);

});


document.querySelector("#small").addEventListener("click",(e)=>{

e.preventDefault();

displayTemples(

temples.filter(

temple=>temple.area<10000

)

);

});


//Initial Display

displayTemples(temples);