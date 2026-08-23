
/* =========================================================
   ANTIQUE ASSOCIATION
   MAIN JAVASCRIPT
   ========================================================= */


/* =========================================================
   01. DOM ELEMENTS
   ========================================================= */

const body = document.body;

const pageLoader = document.getElementById("pageLoader");

const siteHeader = document.getElementById("siteHeader");

const menuToggle = document.getElementById("menuToggle");

const mainNav = document.getElementById("mainNav");

const navLinks = document.querySelectorAll(".nav-link");

const counters = document.querySelectorAll(".counter");

const sections = document.querySelectorAll("main section[id]");


/* =========================================================
   02. PAGE LOADER
   ========================================================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        if (pageLoader) {
            pageLoader.classList.add("loaded");
        }

        body.classList.remove("loading");

    }, 700);

});


/* =========================================================
   03. HEADER SCROLL EFFECT
   ========================================================= */

function updateHeader() {

    if (!siteHeader) return;

    if (window.scrollY > 40) {

        siteHeader.classList.add("scrolled");

    } else {

        siteHeader.classList.remove("scrolled");

    }

}


window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
);

updateHeader();


/* =========================================================
   04. MOBILE NAVIGATION
   ========================================================= */

function openMobileMenu() {

    if (!menuToggle || !mainNav) return;

    menuToggle.classList.add("active");

    mainNav.classList.add("open");

    menuToggle.setAttribute(
        "aria-expanded",
        "true"
    );

}


function closeMobileMenu() {

    if (!menuToggle || !mainNav) return;

    menuToggle.classList.remove("active");

    mainNav.classList.remove("open");

    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );

}


function toggleMobileMenu() {

    if (!mainNav) return;

    const isOpen =
        mainNav.classList.contains("open");

    if (isOpen) {

        closeMobileMenu();

    } else {

        openMobileMenu();

    }

}


if (menuToggle) {

    menuToggle.addEventListener(
        "click",
        toggleMobileMenu
    );

}


/* Close menu after clicking a navigation link */

navLinks.forEach(link => {

    link.addEventListener(
        "click",
        closeMobileMenu
    );

});


/* Close menu if user clicks outside */

document.addEventListener(
    "click",
    (event) => {

        if (!mainNav || !menuToggle) return;

        const clickedInsideNav =
            mainNav.contains(event.target);

        const clickedToggle =
            menuToggle.contains(event.target);

        if (
            mainNav.classList.contains("open") &&
            !clickedInsideNav &&
            !clickedToggle
        ) {

            closeMobileMenu();

        }

    }
);


/* =========================================================
   05. ESCAPE KEY
   ========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            closeMobileMenu();

        }

    }
);


/* =========================================================
   06. ACTIVE NAVIGATION
   ========================================================= */

function updateActiveNavigation() {

    const scrollPosition =
        window.scrollY + 180;

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;

        const sectionBottom =
            sectionTop + sectionHeight;

        const sectionId =
            section.getAttribute("id");

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionBottom
        ) {

            navLinks.forEach(link => {

                link.classList.remove("active");

                const href =
                    link.getAttribute("href");

                if (
                    href === `#${sectionId}`
                ) {

                    link.classList.add("active");

                }

            });

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation,
    { passive: true }
);

updateActiveNavigation();


/* =========================================================
   07. SMOOTH ANCHOR SCROLLING
   ========================================================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener(
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
                    document.querySelector(targetId);

                if (!target) return;

                event.preventDefault();

                const headerOffset = 80;

                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    headerOffset;

                window.scrollTo({

                    top: targetPosition,

                    behavior: "smooth"

                });

            }
        );

    });


/* =========================================================
   08. SCROLL REVEAL SYSTEM
   ========================================================= */

const revealElements = document.querySelectorAll(
    ".about-main-card, " +
    ".mini-card, " +
    ".activity-card, " +
    ".event-card, " +
    ".gallery-item, " +
    ".value-card, " +
    ".membership-card, " +
    ".contact-card"
);


revealElements.forEach(element => {

    element.classList.add("reveal");

});


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add(
                    "visible"
                );

                observer.unobserve(
                    entry.target
                );

            });

        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -50px 0px"
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   09. STAGGERED CARD ANIMATIONS
   ========================================================= */

const cardGroups = [
    ".activity-card",
    ".event-card",
    ".value-card",
    ".gallery-item"
];


cardGroups.forEach(selector => {

    const cards =
        document.querySelectorAll(selector);

    cards.forEach((card, index) => {

        card.style.transitionDelay =
            `${index * 80}ms`;

    });

});


/* =========================================================
   10. COUNTER ANIMATION
   ========================================================= */

function animateCounter(counter) {

    const target =
        Number(
            counter.getAttribute("data-target")
        );

    if (
        Number.isNaN(target) ||
        target < 0
    ) {
        return;
    }


    const duration = 1700;

    const startTime =
        performance.now();


    function updateCounter(currentTime) {

        const elapsed =
            currentTime - startTime;

        const progress =
            Math.min(
                elapsed / duration,
                1
            );


        /*
         * Ease-out animation
         */
        const easedProgress =
            1 -
            Math.pow(
                1 - progress,
                3
            );


        const currentValue =
            Math.floor(
                easedProgress * target
            );


        counter.textContent =
            currentValue.toLocaleString();


        if (progress < 1) {

            requestAnimationFrame(
                updateCounter
            );

        } else {

            counter.textContent =
                target.toLocaleString();

        }

    }


    requestAnimationFrame(
        updateCounter
    );

}


const counterObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }


                const counter =
                    entry.target;


                if (
                    counter.dataset.animated === "true"
                ) {
                    return;
                }


                counter.dataset.animated =
                    "true";


                animateCounter(counter);


                observer.unobserve(counter);

            });

        },
        {
            threshold: 0.7
        }
    );


counters.forEach(counter => {

    counterObserver.observe(counter);

});


/* =========================================================
   11. PARALLAX HERO EFFECT
   ========================================================= */

const heroVisual =
    document.querySelector(".hero-visual");


const heroContent =
    document.querySelector(".hero-content");


function heroParallax() {

    if (
        !heroVisual ||
        window.innerWidth < 900
    ) {
        return;
    }


    const scroll =
        window.scrollY;


    if (scroll > window.innerHeight) {
        return;
    }


    const visualMovement =
        scroll * 0.08;


    const contentMovement =
        scroll * 0.035;


    heroVisual.style.transform =
        `translateY(${visualMovement}px)`;


    heroContent.style.transform =
        `translateY(${contentMovement}px)`;

}


window.addEventListener(
    "scroll",
    heroParallax,
    { passive: true }
);


/* =========================================================
   12. HOVER TILT EFFECT
   ========================================================= */

const tiltCards =
    document.querySelectorAll(
        ".activity-card, .mini-card"
    );


tiltCards.forEach(card => {

    card.addEventListener(
        "mousemove",
        event => {

            if (window.innerWidth < 900) {
                return;
            }


            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX - rect.left;


            const y =
                event.clientY - rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateX =
                ((y - centerY) / centerY) *
                -2.5;


            const rotateY =
                ((x - centerX) / centerX) *
                2.5;


            card.style.transform =
                `perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-7px)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform = "";

        }
    );

});


/* =========================================================
   13. GALLERY HOVER EFFECT
   ========================================================= */

const galleryItems =
    document.querySelectorAll(
        ".gallery-item"
    );


galleryItems.forEach(item => {

    item.addEventListener(
        "mousemove",
        event => {

            if (window.innerWidth < 900) {
                return;
            }


            const rect =
                item.getBoundingClientRect();


            const x =
                event.clientX - rect.left;


            const y =
                event.clientY - rect.top;


            const xPercent =
                (x / rect.width) * 100;


            const yPercent =
                (y / rect.height) * 100;


            item.style.setProperty(
                "--mouse-x",
                `${xPercent}%`
            );


            item.style.setProperty(
                "--mouse-y",
                `${yPercent}%`
            );

        }
    );

});


/* =========================================================
   14. BACK TO TOP
   ========================================================= */

const backToTop =
    document.querySelector(
        ".back-to-top"
    );


if (backToTop) {

    backToTop.addEventListener(
        "click",
        event => {

            event.preventDefault();

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}


/* =========================================================
   15. CURRENT YEAR
   ========================================================= */

const footerYear =
    document.querySelector(
        ".site-footer p"
    );


/*
 * The footer currently contains 2026 manually.
 * This keeps the year current automatically if the
 * website is used in future years.
 */

if (footerYear) {

    const currentYear =
        new Date().getFullYear();


    footerYear.innerHTML =
        footerYear.innerHTML.replace(
            /\b20\d{2}\b/,
            currentYear
        );

}


/* =========================================================
   16. BUTTON RIPPLE EFFECT
   ========================================================= */

const buttons =
    document.querySelectorAll(
        ".button, .nav-button"
    );


buttons.forEach(button => {

    button.addEventListener(
        "click",
        function (event) {

            const ripple =
                document.createElement(
                    "span"
                );


            const rect =
                button.getBoundingClientRect();


            const size =
                Math.max(
                    rect.width,
                    rect.height
                );


            const x =
                event.clientX -
                rect.left -
                size / 2;


            const y =
                event.clientY -
                rect.top -
                size / 2;


            ripple.style.position =
                "absolute";


            ripple.style.width =
                `${size}px`;


            ripple.style.height =
                `${size}px`;


            ripple.style.left =
                `${x}px`;


            ripple.style.top =
                `${y}px`;


            ripple.style.borderRadius =
                "50%";


            ripple.style.background =
                "rgba(255,255,255,0.25)";


            ripple.style.pointerEvents =
                "none";


            ripple.style.transform =
                "scale(0)";


            ripple.style.animation =
                "buttonRipple 0.6s ease-out";


            button.style.position =
                "relative";


            button.style.overflow =
                "hidden";


            button.appendChild(
                ripple
            );


            setTimeout(() => {

                ripple.remove();

            }, 650);

        }
    );

});


/* Add ripple animation */

const rippleStyle =
    document.createElement("style");


rippleStyle.textContent = `

    @keyframes buttonRipple {

        to {
            transform: scale(2);
            opacity: 0;
        }

    }

`;


document.head.appendChild(
    rippleStyle
);


/* =========================================================
   17. EVENT CARD INTERACTION
   ========================================================= */

const eventCards =
    document.querySelectorAll(
        ".event-card"
    );


eventCards.forEach(card => {

    card.addEventListener(
        "click",
        () => {

            const link =
                card.querySelector(
                    ".event-arrow"
                );


            if (link) {

                link.click();

            }

        }
    );

});


/* =========================================================
   18. RESIZE HANDLER
   ========================================================= */

let resizeTimer;


window.addEventListener(
    "resize",
    () => {

        clearTimeout(resizeTimer);


        resizeTimer =
            setTimeout(() => {

                if (
                    window.innerWidth > 760
                ) {

                    closeMobileMenu();

                }


                if (
                    window.innerWidth < 900 &&
                    heroVisual
                ) {

                    heroVisual.style.transform =
                        "";

                    if (heroContent) {

                        heroContent.style.transform =
                            "";

                    }

                }

            }, 150);

    }
);


/* =========================================================
   19. INITIALIZATION
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateHeader();

        updateActiveNavigation();

    }
);

