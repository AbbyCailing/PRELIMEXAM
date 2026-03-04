function showCard() {
    const cover = document.getElementById("cover");
    const card = document.getElementById("card");

    // Fade out cover
    cover.classList.add("hidden");

    setTimeout(() => {
        card.classList.add("show");
    }, 1000); 
}