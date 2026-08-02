// Review Counter using localStorage

// Get the current review count from localStorage
let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

//Increment the count
reviewCount++;

//Save the updated count
localStorage.setItem("reviewCount", reviewCount);

//Display the updated count
document.querySelector("#reviewCount").textContent = reviewCount;

//Footer

document.querySelector("#currentyear").textContent =
new Date().getFullYear();

document.querySelector("#lastModified").textContent =
`Last Modification: ${document.lastModified}`;