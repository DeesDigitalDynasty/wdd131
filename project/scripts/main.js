/* ==========================================================================
   Apex Drift Society - Main Script
   Author: Oludayo Oluboyede
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // Hamburger Navigation Toggle
    const hamburgerBtn = document.querySelector("#hamburger-btn");
    const navMenu = document.querySelector("#nav-menu");

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener("click", () => {
            navMenu.classList.toggle("open");
            const isExpanded = navMenu.classList.contains("open");
            hamburgerBtn.setAttribute("aria-expanded", isExpanded);
            hamburgerBtn.textContent = isExpanded ? "✕" : "☰";
        });
    }

    // Footer Dynamic Metadata
    const yearSpan = document.querySelector("#currentyear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    const lastModParagraph = document.querySelector("#lastModified");
    if (lastModParagraph) {
        lastModParagraph.textContent = `Last Modified: ${document.lastModified}`;
    }
});