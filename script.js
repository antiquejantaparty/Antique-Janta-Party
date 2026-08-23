/* =========================================================
   ANTIQUE ASSOCIATION
   script.js
   PART 4 — INTERACTION & ANIMATION ENGINE
========================================================= */


/* =========================================================
   01. DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    initLoader();
    initMobileMenu();
    initHeaderScroll();
    initScrollProgress();
    initRevealAnimations();
    initCounterAnimations();
    initSmoothNavigation();
    initParallaxEffects();
    initCardTilt();
    initActiveNavigation();

});


/* =========================================================
   02. PAGE LOADER
========================================================= */

function initLoader() {

    const loader = document.getElementById("pageLoader");

    if (!loader) return;

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.classList.add("hide");

            document.body.classList.add("page-loaded");

        }, 700);

    });

}


/* =========================================================
   03. MOBILE MENU
========================================================= */

function initMobileMenu() {

    const menuButton = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (!menuButton || !navLinks) return;

    menuButton.addEventListener("click", () => {

        menuButton.classList.toggle("active");
        navLinks.classList.toggle("open");

    });


    /* Close menu when navigation link is clicked */

    const links = navLinks.querySelectorAll("a");

    links.forEach(link => {

        link.addEventListener("click", () => {

            menuButton.classList.remove("active");
            navLinks.classList.remove("open");

        });

    });


    /* Close menu when clicking outside */

    document.addEventListener("click", event => {

        if (
            !navLinks.contains(event.target) &&
            !menuButton.contains(event.target)
        ) {

            menuButton.classList.remove("active");
            navLinks.classList.remove("open");

        }

    });

}


/* =========================================================
   04. HEADER SCROLL EFFECT
========================================================= */

function initHeaderScroll() {

    const header = document.querySelector("header");

    if (!header) return;

    const updateHeader = () => {

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    };

    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );

    updateHeader();

}


/* =========================================================
   05. SCROLL PROGRESS
========================================================= */

function initScrollProgress() {

    const progress = document.getElementById("scrollProgress");

    if (!progress) return;

    const updateProgress = () => {

        const scrollTop =
            window.scrollY;

        const documentHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        if (documentHeight <= 0) {

            progress.style.width = "0%";
            return;

        }

        const percentage =
            (scrollTop / documentHeight) * 100;

        progress.style.width =
            `${Math.min(percentage, 100)}%`;

    };

    window.addEventListener(
        "scroll",
        updateProgress,
        { passive: true }
    );

    updateProgress();

}


/* =========================================================
   06. SCROLL REVEAL
========================================================= */

function initRevealAnimations() {

    const elements = document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right"
    );

    if (!elements.length) return;


    /* Fallback */

    if (!("IntersectionObserver" in window)) {

        elements.forEach(element => {

            element.classList.add("active");

        });

        return;

    }


    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12,
            rootMargin: "0px 0px -50px 0px"
        }

    );


    elements.forEach(element => {

        observer.observe(element);

    });

}


/* =========================================================
   07. ANIMATED NUMBER COUNTERS
========================================================= */

function initCounterAnimations() {

    const counters =
        document.querySelectorAll(
            ".stat-card .number, .hero-stat-number"
        );

    if (!counters.length) return;


    const parseNumber = text => {

        const match =
            text.replace(/,/g, "")
                .match(/[\d.]+/);

        return match
            ? parseFloat(match[0])
            : 0;

    };


    const formatNumber = number => {

        if (Number.isInteger(number)) {

            return number.toLocaleString("en-IN");

        }

        return number.toFixed(1);

    };


    const animateCounter = element => {

        if (element.dataset.animated === "true")
            return;

        element.dataset.animated = "true";


        const original =
            element.textContent.trim();

        const target =
            parseNumber(original);

        const suffix =
            original.replace(
                /[\d.,\s]+/,
                ""
            );

        const duration = 1800;

        const startTime =
            performance.now();


        function update(currentTime) {

            const elapsed =
                currentTime - startTime;

            const progress =
                Math.min(elapsed / duration, 1);


            /* Smooth easing */

            const eased =
                1 - Math.pow(1 - progress, 3);


            const current =
                target * eased;


            element.textContent =
                formatNumber(current) +
                suffix;


            if (progress < 1) {

                requestAnimationFrame(update);

            } else {

                element.textContent =
                    formatNumber(target) +
                    suffix;

            }

        }


        requestAnimationFrame(update);

    };


    if (!("IntersectionObserver" in window)) {

        counters.forEach(counter => {

            const original =
                counter.textContent.trim();

            const target =
                parseNumber(original);

            const suffix =
                original.replace(
                    /[\d.,\s]+/,
                    ""
                );

            counter.textContent =
                formatNumber(target) + suffix;

        });

        return;

    }


    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        animateCounter(
                            entry.target
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.5
            }

        );


    counters.forEach(counter => {

        observer.observe(counter);

    });

}


/* =========================================================
   08. SMOOTH NAVIGATION
========================================================= */

function initSmoothNavigation() {

    const links =
        document.querySelectorAll(
            'a[href^="#"]'
        );

    links.forEach(link => {

        link.addEventListener("click", event => {

            const targetID =
                link.getAttribute("href");

            if (
                !targetID ||
                targetID === "#"
            ) {
                return;
            }


            const target =
                document.querySelector(targetID);

            if (!target) return;


            event.preventDefault();


            const header =
                document.querySelector("header");

            const headerHeight =
                header
                    ? header.offsetHeight
                    : 0;


            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                headerHeight -
                20;


            window.scrollTo({

                top: targetPosition,

                behavior: "smooth"

            });

        });

    });

}


/* =========================================================
   09. HERO PARALLAX
========================================================= */

function initParallaxEffects() {

    const hero =
        document.querySelector(".hero");

    if (!hero) return;


    const orbOne =
        document.querySelector(".hero-orb.one");

    const orbTwo =
        document.querySelector(".hero-orb.two");

    const ringOne =
        document.querySelector(".ring-one");

    const ringTwo =
        document.querySelector(".ring-two");

    const emblem =
        document.querySelector(".hero-emblem");


    if (
        !orbOne &&
        !orbTwo &&
        !ringOne &&
        !ringTwo &&
        !emblem
    ) {
        return;
    }


    let ticking = false;


    const updateParallax = () => {

        const scroll =
            window.scrollY;

        if (scroll > window.innerHeight * 1.2) {

            ticking = false;
            return;

        }


        if (orbOne) {

            orbOne.style.transform =
                `translateY(${scroll * 0.12}px)`;

        }


        if (orbTwo) {

            orbTwo.style.transform =
                `translateY(${scroll * -0.08}px)`;

        }


        if (ringOne) {

            ringOne.style.transform =
                `translateY(${scroll * 0.06}px)`;

        }


        if (ringTwo) {

            ringTwo.style.transform =
                `translateY(${scroll * -0.05}px)`;

        }


        if (emblem) {

            emblem.style.transform =
                `translateY(${scroll * 0.08}px)`;

        }


        ticking = false;

    };


    window.addEventListener(
        "scroll",
        () => {

            if (!ticking) {

                window.requestAnimationFrame(
                    updateParallax
                );

                ticking = true;

            }

        },
        { passive: true }
    );

}


/* =========================================================
   10. PREMIUM CARD TILT
========================================================= */

function initCardTilt() {

    const cards =
        document.querySelectorAll(
            ".premium-card"
        );


    /* Disable tilt on touch devices */

    if (
        window.matchMedia(
            "(hover: none)"
        ).matches
    ) {
        return;
    }


    cards.forEach(card => {

        card.addEventListener(
            "mousemove",
            event => {

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
                    ((y - centerY) /
                    centerY) * -3;


                const rotateY =
                    ((x - centerX) /
                    centerX) * 3;


                card.style.transform =
                    `translateY(-10px)
                     perspective(900px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform = "";

            }
        );

    });

}


/* =========================================================
   11. ACTIVE NAVIGATION
========================================================= */

function initActiveNavigation() {

    const sections =
        document.querySelectorAll(
            "section[id]"
        );

    const navLinks =
        document.querySelectorAll(
            ".nav-links a[href^='#']"
        );


    if (
        !sections.length ||
        !navLinks.length
    ) {
        return;
    }


    const updateActiveLink = () => {

        let currentSection = "";

        const scrollPosition =
            window.scrollY +
            window.innerHeight * 0.35;


        sections.forEach(section => {

            const top =
                section.offsetTop;

            const height =
                section.offsetHeight;

            if (
                scrollPosition >= top &&
                scrollPosition < top + height
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            const href =
                link.getAttribute("href");


            link.classList.remove(
                "active"
            );


            if (
                href ===
                `#${currentSection}`
            ) {

                link.classList.add(
                    "active"
                );

            }

        });

    };


    window.addEventListener(
        "scroll",
        updateActiveLink,
        { passive: true }
    );

    updateActiveLink();

}


/* =========================================================
   12. BUTTON RIPPLE EFFECT
========================================================= */

document.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                ".btn, .nav-join"
            );


        if (!button) return;


        const ripple =
            document.createElement(
                "span"
            );


        ripple.classList.add(
            "click-ripple"
        );


        const rect =
            button.getBoundingClientRect();


        ripple.style.left =
            `${event.clientX - rect.left}px`;

        ripple.style.top =
            `${event.clientY - rect.top}px`;


        button.appendChild(ripple);


        setTimeout(() => {

            ripple.remove();

        }, 700);

    }
);


/* =========================================================
   13. KEYBOARD ACCESSIBILITY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            const menuButton =
                document.querySelector(
                    ".menu-btn"
                );

            const navLinks =
                document.querySelector(
                    ".nav-links"
                );


            if (
                menuButton &&
                navLinks
            ) {

                menuButton.classList.remove(
                    "active"
                );

                navLinks.classList.remove(
                    "open"
                );

            }

        }

    }
);


/* =========================================================
   14. PAGE VISIBILITY
========================================================= */

document.addEventListener(
    "visibilitychange",
    () => {

        if (
            document.hidden
        ) {

            document.title =
                "Antique Association";

        } else {

            document.title =
                "Antique Association | Together We Serve";

        }

    }
);


/* =========================================================
   15. CONSOLE BRANDING
========================================================= */

console.log(
    "%c ANTIQUE ASSOCIATION ",
    `
    background: #126b49;
    color: #f2d879;
    font-size: 18px;
    font-weight: 900;
    padding: 10px 18px;
    border-radius: 8px;
    `
);

console.log(
    "%c Together • Serve • Inspire • Grow ",
    `
    color: #126b49;
    font-size: 13px;
    font-weight: 700;
    `
);
