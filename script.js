document.getElementById("startGame").addEventListener("click", () => {
    document.getElementById("menu").classList.add("hidden");
    document.getElementById("characterSelection").classList.remove("hidden");
});

document.querySelectorAll(".hero").forEach((hero) => {
    hero.addEventListener("click", (e) => {
        const selectedHero = e.target.getAttribute("data-hero");
        alert(`You selected ${selectedHero}! The battle begins.`);
        // Transition to the battle arena can be added here.
    });
});

document.getElementById("exit").addEventListener("click", () => {
    alert("Thank you for playing!");
    window.close(); // Only works in some environments.
});
