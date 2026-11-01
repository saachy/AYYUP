/* ==============================
   OPENING
============================== */

document.body.style.overflow = "hidden";

function startExperience() {

    const intro = document.getElementById("intro");

    intro.classList.add("hide");

    document.body.style.overflowY = "auto";

}


/* ==============================
   20 FOTO GALLERY
============================== */

const galleryGrid = document.getElementById("galleryGrid");

const photoTitles = [

    "THE BEGINNING",
    "THE MOMENT",
    "THE JOURNEY",
    "THE VISION",
    "THE MEMORIES",

    "THE ENERGY",
    "THE MOMENTUM",
    "THE EXPERIENCE",
    "THE ADVENTURE",
    "THE LEGACY",

    "THE STORY",
    "THE PASSION",
    "THE DREAM",
    "THE FUTURE",
    "THE JOURNEY",

    "THE FREEDOM",
    "THE STYLE",
    "THE POWER",
    "THE MOMENT",
    "THE ENDLESS STORY"

];


for (let i = 1; i <= 20; i++) {

    const number = String(i).padStart(2, "0");

    const card = document.createElement("div");

    card.className = "photo-card";

    card.innerHTML = `

        <img
            src="images/foto${i}.jpg"
            alt="Photo ${i}"
            loading="lazy"
        >

        <div class="photo-info">

            <span>${number}</span>

            <p>${photoTitles[i - 1]}</p>

        </div>

    `;

    galleryGrid.appendChild(card);

}


/* ==============================
   SCROLL ANIMATION
============================== */

const observer = new IntersectionObserver(

    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.1
    }

);


function observeCards() {

    const cards = document.querySelectorAll(".photo-card");

    cards.forEach(function(card) {

        observer.observe(card);

    });

}

observeCards();


/* ==============================
   HERO 3D EFFECT
============================== */

const heroImage = document.querySelector(".hero-image");

document.addEventListener("mousemove", function(e) {

    if (window.innerWidth <= 768) return;

    const x = (window.innerWidth / 2 - e.clientX) / 40;

    const y = (window.innerHeight / 2 - e.clientY) / 40;

    heroImage.style.transform =

        `rotateY(${x}deg) rotateX(${-y}deg)`;

});


/* ==============================
   GALLERY 3D EFFECT
============================== */

document.addEventListener("mousemove", function(e) {

    if (window.innerWidth <= 768) return;

    const cards = document.querySelectorAll(".photo-card.show");

    cards.forEach(function(card) {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const inside =

            x >= 0 &&
            x <= rect.width &&
            y >= 0 &&
            y <= rect.height;

        if (!inside) return;

        const centerX = rect.width / 2;

        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 25;

        const rotateY = (centerX - x) / 25;

        card.style.transform =

            `perspective(1000px)
             rotateX(${-rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.02)`;

    });

});


/* ==============================
   RESET 3D
============================== */

document.querySelector(".gallery-grid").addEventListener(

    "mouseleave",

    function() {

        const cards = document.querySelectorAll(".photo-card");

        cards.forEach(function(card) {

            card.style.transform = "";

        });

    }

);