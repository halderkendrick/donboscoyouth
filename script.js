document.addEventListener("DOMContentLoaded", function () {
    fetch("backend/fetch_news.php")
        .then(response => response.json())
        .then(data => {
            let newsContainer = document.getElementById("news-container");
            data.forEach(news => {
                let div = document.createElement("div");
                div.innerHTML = `<h3>${news.title}</h3><p>${news.description}</p>`;
                newsContainer.appendChild(div);
            });
        });

    fetch("backend/fetch_events.php")
        .then(response => response.json())
        .then(data => {
            let eventsContainer = document.getElementById("events-container");
            data.forEach(event => {
                let div = document.createElement("div");
                div.innerHTML = `<h3>${event.title}</h3><p>${event.date}</p>`;
                eventsContainer.appendChild(div);
            });
        });
});

function toggleMenu() {
    let nav = document.getElementById("nav-menu");
    nav.classList.toggle("show");
}
