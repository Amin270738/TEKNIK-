/* =========================
   LOADING SCREEN
========================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        document.querySelector(".loader")
            .classList.add("hide");

    }, 1500);

});


/* =========================
   NAVBAR
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =========================
   SCROLL PROGRESS
========================= */

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const height =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        (scrollTop / height) * 100;

    document.querySelector(
        ".scroll-progress"
    ).style.width = progress + "%";

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================
   LIGHTBOX
========================= */

const lightbox =
    document.querySelector(".lightbox");

const lightboxImage =
    document.querySelector(".lightbox img");

const counter =
    document.querySelector(".lightbox-counter");

const closeButton =
    document.querySelector(".close-lightbox");

const photos =
    document.querySelectorAll(
        ".main-photo img, .memory-card img, .random-card img"
    );


photos.forEach((photo, index) => {

    photo.addEventListener("click", () => {

        lightboxImage.src = photo.src;

        counter.textContent =
            `${String(index + 1).padStart(2, "0")} / ${String(photos.length).padStart(2, "0")}`;

        lightbox.classList.add("active");

        document.body.classList.add("no-scroll");

    });

});


function closeLightbox() {

    lightbox.classList.remove("active");

    document.body.classList.remove("no-scroll");

}


closeButton.addEventListener(
    "click",
    closeLightbox
);


lightbox.addEventListener(
    "click",
    (event) => {

        if (event.target === lightbox) {
            closeLightbox();
        }

    }
);


document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {
            closeLightbox();
        }

    }
);


/* =========================
   PARTICLES
========================= */

const particles =
    document.querySelector(".particles");

for (let i = 0; i < 30; i++) {

    const particle =
        document.createElement("div");

    particle.className = "particle";

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.animationDuration =
        8 + Math.random() * 15 + "s";

    particle.style.animationDelay =
        Math.random() * 10 + "s";

    particle.style.opacity =
        .1 + Math.random() * .4;

    particles.appendChild(particle);

}


/* =========================
   IMAGE PARALLAX
========================= */

const heroImage =
    document.querySelector(".hero-image");

window.addEventListener("scroll", () => {

    const y =
        window.scrollY * 0.25;

    heroImage.style.transform =
        `scale(1.03) translateY(${y}px)`;

});