/* =========================================================
   ANTIQUE ASSOCIATION
   PREMIUM WEBSITE SCRIPT
========================================================= */


/* =========================================================
   SCROLL PROGRESS
========================================================= */

const progress = document.getElementById("progress");

function updateProgress() {

    const scrollTop =
        document.documentElement.scrollTop ||
        document.body.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    if (scrollHeight <= 0) {
        progress.style.width = "0%";
        return;
    }

    const percentage =
        (scrollTop / scrollHeight) * 100;

    progress.style.width =
        percentage + "%";
}

window.addEventListener(
    "scroll",
    updateProgress,
    { passive: true }
);

updateProgress();


/* =========================================================
   HEADER SCROLL EFFECT
========================================================= */

const header =
    document.getElementById("header");

function updateHeader() {

    if (window.scrollY > 40) {

        header.style.background =
            "rgba(255,252,245,.97)";

        header.style.boxShadow =
            "0 15px 40px rgba(70,50,20,.12)";

    } else {

        header.style.background =
            "rgba(255,252,245,.90)";

        header.style.boxShadow =
            "0 10px 35px rgba(60,45,20,.06)";
    }
}

window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
);


/* =========================================================
   REVEAL ANIMATIONS
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".section-heading, " +
        ".about-card, " +
        ".value-card, " +
        ".stat-card, " +
        ".leader-card, " +
        ".initiative-card, " +
        ".event-card, " +
        ".glass-card, " +
        ".gallery-box, " +
        ".contact-card"
    );


revealElements.forEach((element) => {

    element.classList.add("reveal");

});


function revealOnScroll() {

    const trigger =
        window.innerHeight - 90;

    revealElements.forEach((element) => {

        const position =
            element.getBoundingClientRect().top;

        if (position < trigger) {

            element.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    revealOnScroll,
    { passive: true }
);

revealOnScroll();


/* =========================================================
   PARTICLE SYSTEM
========================================================= */

const canvas =
    document.getElementById("particles");

const ctx =
    canvas.getContext("2d");

let particles = [];

function resizeCanvas() {

    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;
}

resizeCanvas();

window.addEventListener(
    "resize",
    resizeCanvas
);


/* CREATE PARTICLES */

function createParticles() {

    particles = [];

    const amount =
        Math.min(
            65,
            Math.floor(window.innerWidth / 22)
        );

    for (let i = 0; i < amount; i++) {

        particles.push({

            x:
                Math.random() *
                canvas.width,

            y:
                Math.random() *
                canvas.height,

            radius:
                Math.random() * 2 + .5,

            speedX:
                (Math.random() - .5) * .35,

            speedY:
                (Math.random() - .5) * .35,

            opacity:
                Math.random() * .35 + .08

        });

    }
}

createParticles();


/* DRAW PARTICLES */

function animateParticles() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    particles.forEach((particle) => {

        particle.x +=
            particle.speedX;

        particle.y +=
            particle.speedY;


        if (particle.x < -10)
            particle.x =
                canvas.width + 10;

        if (particle.x > canvas.width + 10)
            particle.x = -10;


        if (particle.y < -10)
            particle.y =
                canvas.height + 10;

        if (particle.y > canvas.height + 10)
            particle.y = -10;


        ctx.beginPath();

        ctx.arc(
            particle.x,
            particle.y,
            particle.radius,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
            `rgba(170,125,45,${particle.opacity})`;

        ctx.fill();

    });

    requestAnimationFrame(
        animateParticles
    );
}

animateParticles();


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );

const sections =
    document.querySelectorAll(
        "section[id]"
    );


function updateActiveNav() {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 180;

        const sectionBottom =
            sectionTop +
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {

            currentSection =
                section.id;
        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        const target =
            link.getAttribute("href");

        if (
            target ===
            "#" + currentSection
        ) {

            link.classList.add("active");
        }

    });

}

window.addEventListener(
    "scroll",
    updateActiveNav,
    { passive: true }
);

updateActiveNav();


/* =========================================================
   SMOOTH NAVIGATION
========================================================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach((link) => {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }

                const target =
                    document.querySelector(
                        targetId
                    );

                if (!target) {
                    return;
                }

                event.preventDefault();

                const headerHeight =
                    header.offsetHeight;

                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    headerHeight -
                    15;

                window.scrollTo({

                    top: targetPosition,

                    behavior: "smooth"

                });

            }
        );

    });


/* =========================================================
   STAT COUNTERS
========================================================= */

const statElements =
    document.querySelectorAll(
        ".stat-card strong"
    );

let countersStarted = false;


function startCounters() {

    if (countersStarted)
        return;

    const statsSection =
        document.querySelector(
            ".stats-grid"
        );

    if (!statsSection)
        return;


    const position =
        statsSection.getBoundingClientRect().top;


    if (
        position >
        window.innerHeight - 100
    ) {
        return;
    }


    countersStarted = true;


    statElements.forEach((element) => {

        const original =
            element.textContent.trim();

        const number =
            parseInt(
                original.replace(/\D/g, "")
            );


        if (isNaN(number)) {
            return;
        }


        let current = 0;

        const hasPlus =
            original.includes("+");


        const duration = 1200;

        const interval = 20;

        const steps =
            duration / interval;

        const increment =
            number / steps;


        const timer =
            setInterval(() => {

                current += increment;

                if (current >= number) {

                    element.textContent =
                        number +
                        (hasPlus ? "+" : "");

                    clearInterval(timer);

                } else {

                    element.textContent =
                        Math.floor(current) +
                        (hasPlus ? "+" : "");

                }

            }, interval);

    });

}


window.addEventListener(
    "scroll",
    startCounters,
    { passive: true }
);

startCounters();


/* =========================================================
   MOUSE PARALLAX ON HERO EMBLEM
========================================================= */

const hero =
    document.querySelector(".hero");

const emblem =
    document.querySelector(".hero-emblem");


if (hero && emblem) {

    hero.addEventListener(
        "mousemove",
        (event) => {

            const x =
                (event.clientX /
                    window.innerWidth -
                    .5) * 12;

            const y =
                (event.clientY /
                    window.innerHeight -
                    .5) * 12;

            emblem.style.transform =
                `translate(${x}px, ${y}px)`;
        }
    );


    hero.addEventListener(
        "mouseleave",
        () => {

            emblem.style.transform =
                "translate(0,0)";
        }
    );

}


/* =========================================================
   INITIALISE
========================================================= */

window.addEventListener(
    "load",
    () => {

        updateProgress();

        updateHeader();

        revealOnScroll();

        updateActiveNav();

        createParticles();

    }
);
