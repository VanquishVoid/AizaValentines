function yesResponse() {
    window.location.href = 'valens.html'; // ✅ Redirects to Yes page
}

function moveNoButton() {
    const button = document.querySelector(".no");
    const x = Math.random() * (window.innerWidth - 200);
    const y = Math.random() * (window.innerHeight - 100);
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}
