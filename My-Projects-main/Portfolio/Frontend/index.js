
const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value,
    };

    try {
        const res = await fetch("https://portfolio-backend-pqbv.onrender.com/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const result = await res.json();
        alert(result.message || "Message sent!");
        form.reset();
    } catch (error) {
        alert("Failed to send message.");
    }
});


