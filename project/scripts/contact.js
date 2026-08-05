document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector("#contact-form");
    const feedbackDiv = document.querySelector("#form-feedback");

    if (contactForm && feedbackDiv) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.querySelector("#full-name").value;
            const email = document.querySelector("#user-email").value;
            const favCar = document.querySelector("#fav-car-select").value;
            const experience = document.querySelector('input[name="experience"]:checked')?.value || "Novice";

            // Save recent form submission to localStorage
            const submission = { name, email, favCar, experience, date: new Date().toISOString() };
            localStorage.setItem("apex_last_contact", JSON.stringify(submission));

            // Template literal output for response confirmation
            feedbackDiv.innerHTML = `
                <div class="card card-body" style="background-color: #0B6E4F; color: #F9FAFB; margin-bottom: 1.5rem;">
                    <h2>Thank you, ${name}!</h2>
                    <p>Your inquiry has been received. We sent a confirmation to <strong>${email}</strong>.</p>
                    <p>Selected Favorite Machine: <strong>${favCar}</strong> (${experience} Level)</p>
                </div>
            `;

            contactForm.reset();
        });
    }
});