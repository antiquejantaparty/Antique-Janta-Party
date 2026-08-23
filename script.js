/* =========================================================
   ANTIQUE ASSOCIATION
   script.js
   PART 3 — INTERACTION & ANIMATION ENGINE
========================================================= */

"use strict";


/* =========================================================
   01. DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    initLoader();
    initHeader();
    initMobileMenu();
    initScrollProgress();
    initRevealAnimations();
    initCounters();
    initParticles();
    initSmoothNavigation();
    initActiveNavigation();
    initCardTilt();
    initButtonEffects();
    initParallax();
    initBackToTop();
    initKeyboardAccessibility();

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

        }, 650);

    });

}


/* =========================================================
   03. HEADER
========================================================= */

function initHeader() {

    const header = document.getElementById("mainHeader");

    if (!header) return;

    const updateHeader = () => {

        if (window.scrollY > 40) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    };

    updateHeader();

    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );

}


/* =========================================================
   04. MOBILE MENU
========================================================= */

function initMobileMenu() {

    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    if (!menuBtn || !navLinks) return;


    function closeMenu() {

        navLinks.classList.remove("open");

        menuBtn.classList.remove("active");

        menuBtn.setAttribute(
            "aria-expanded",
            "false"
        );

    }


    menuBtn.addEventListener("click", () => {

        const opened =
            navLinks.classList.toggle("open");

        menuBtn.classList.toggle(
            "active",
            opened
        );

        menuBtn.setAttribute(
            "aria-expanded",
            String(opened)
        );

    });


    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener(
            "click",
            closeMenu
        );

    });


    document.addEventListener("click", event => {

        if (
            !navLinks.contains(event.target) &&
            !menuBtn.contains(event.target)
        ) {

            closeMenu();

        }

    });


    window.addEventListener("resize", () => {

        if (window.innerWidth > 850) {

            closeMenu();

        }

    });

}


/* =========================================================
   05. SCROLL PROGRESS
========================================================= */

function initScrollProgress() {

    const progress =
        document.getElementById("scrollProgress");

    if (!progress) return;


    function updateProgress() {

        const scrollTop =
            window.scrollY;

        const pageHeight =
            document.documentElement.scrollHeight
            -
            window.innerHeight;

        if (pageHeight <= 0) {

            progress.style.width = "0%";

            return;

        }

        const percentage =
            (scrollTop / pageHeight) * 100;

        progress.style.width =
            Math.min(100, percentage) + "%";

    }


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

    const elements =
        document.querySelectorAll(
            ".reveal, .reveal-left, .reveal-right"
        );

    if (!elements.length) return;


    if (
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches
    ) {

        elements.forEach(element => {

            element.classList.add("active");

        });

        return;

    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) return;

                    entry.target.classList.add(
                        "active"
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


    elements.forEach(element => {

        observer.observe(element);

    });

}


/* =========================================================
   07. ANIMATED STAT COUNTERS
========================================================= */

function initCounters() {

    const counters =
        document.querySelectorAll(
            ".number[data-target]"
        );

    if (!counters.length) return;


    const duration = 1800;


    function animateCounter(counter) {

        const target =
            Number(
                counter.dataset.target
            );


        if (
            Number.isNaN(target)
        ) return;


        const startTime =
            performance.now();


        function update(currentTime) {

            const elapsed =
                currentTime - startTime;

            const progress =
                Math.min(
                    elapsed / duration,
                    1
                );


            /*
             * Smooth ease-out
             */

            const eased =
                1 -
                Math.pow(
                    1 - progress,
                    3
                );


            const value =
                Math.floor(
                    eased * target
                );


            counter.textContent =
                value.toLocaleString();


            if (progress < 1) {

                requestAnimationFrame(
                    update
                );

            } else {

                counter.textContent =
                    target.toLocaleString();

            }

        }


        requestAnimationFrame(update);

    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting)
                        return;

                    animateCounter(
                        entry.target
                    );

                    observer.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.65
            }
        );


    counters.forEach(counter => {

        observer.observe(counter);

    });

}


/* =========================================================
   08. PARTICLE SYSTEM
========================================================= */

function initParticles() {

    const canvas =
        document.getElementById(
            "particles"
        );

    if (!canvas) return;


    const ctx =
        canvas.getContext("2d");


    if (!ctx) return;


    let particles = [];

    let animationFrame;


    const reduceMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (reduceMotion) {

        canvas.style.display = "none";

        return;

    }


    function resizeCanvas() {

        const ratio =
            Math.min(
                window.devicePixelRatio || 1,
                2
            );


        canvas.width =
            window.innerWidth * ratio;

        canvas.height =
            window.innerHeight * ratio;

        canvas.style.width =
            window.innerWidth + "px";

        canvas.style.height =
            window.innerHeight + "px";


        ctx.setTransform(
            ratio,
            0,
            0,
            ratio,
            0,
            0
        );

    }


    function createParticles() {

        particles = [];


        const amount =
            Math.min(
                65,
                Math.max(
                    22,
                    Math.floor(
                        window.innerWidth / 24
                    )
                )
            );


        for (
            let i = 0;
            i < amount;
            i++
        ) {

            particles.push({

                x:
                    Math.random()
                    *
                    window.innerWidth,

                y:
                    Math.random()
                    *
                    window.innerHeight,

                size:
                    Math.random()
                    *
                    2
                    +
                    0.4,

                speed:
                    Math.random()
                    *
                    0.35
                    +
                    0.08,

                opacity:
                    Math.random()
                    *
                    0.32
                    +
                    0.08,

                drift:
                    (
                        Math.random()
                        -
                        0.5
                    )
                    *
                    0.18

            });

        }

    }


    function drawParticles() {

        ctx.clearRect(
            0,
            0,
            window.innerWidth,
            window.innerHeight
        );


        particles.forEach(particle => {

            particle.y -=
                particle.speed;

            particle.x +=
                particle.drift;


            if (
                particle.y <
                -10
            ) {

                particle.y =
                    window.innerHeight + 10;

                particle.x =
                    Math.random()
                    *
                    window.innerWidth;

            }


            if (
                particle.x <
                -10
            ) {

                particle.x =
                    window.innerWidth + 10;

            }


            if (
                particle.x >
                window.innerWidth + 10
            ) {

                particle.x = -10;

            }


            ctx.beginPath();

            ctx.arc(
                particle.x,
                particle.y,
                particle.size,
                0,
                Math.PI * 2
            );


            ctx.fillStyle =
                `rgba(
                    18,
                    107,
                    73,
                    ${particle.opacity}
                )`;


            ctx.fill();

        });


        animationFrame =
            requestAnimationFrame(
                drawParticles
            );

    }


    resizeCanvas();

    createParticles();

    drawParticles();


    let resizeTimeout;


    window.addEventListener(
        "resize",
        () => {

            clearTimeout(
                resizeTimeout
            );


            resizeTimeout =
                setTimeout(() => {

                    resizeCanvas();

                    createParticles();

                }, 150);

        }
    );


    /*
     * Stop animation when page is hidden.
     * Saves CPU and battery.
     */

    document.addEventListener(
        "visibilitychange",
        () => {

            if (
                document.hidden
            ) {

                cancelAnimationFrame(
                    animationFrame
                );

            } else {

                drawParticles();

            }

        }
    );

}


/* =========================================================
   09. SMOOTH NAVIGATION
========================================================= */

function initSmoothNavigation() {

    const links =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    links.forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute(
                        "href"
                    );


                if (
                    !targetId ||
                    targetId === "#"
                ) return;


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) return;


                event.preventDefault();


                const header =
                    document.getElementById(
                        "mainHeader"
                    );


                const headerHeight =
                    header
                        ? header.offsetHeight
                        : 0;


                const targetPosition =
                    target.getBoundingClientRect()
                        .top
                    +
                    window.scrollY
                    -
                    headerHeight
                    -
                    15;


                window.scrollTo({

                    top:
                        Math.max(
                            0,
                            targetPosition
                        ),

                    behavior:
                        "smooth"

                });


                /*
                 * Update URL without jumping.
                 */

                history.replaceState(
                    null,
                    "",
                    targetId
                );

            }
        );

    });

}


/* =========================================================
   10. ACTIVE NAVIGATION
========================================================= */

function initActiveNavigation() {

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );

    const links =
        document.querySelectorAll(
            ".nav-links a[href^='#']"
        );


    if (
        !sections.length ||
        !links.length
    ) return;


    const sectionObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        !entry.isIntersecting
                    ) return;


                    const id =
                        entry.target.id;


                    links.forEach(link => {

                        link.classList.remove(
                            "active"
                        );


                        if (
                            link.getAttribute(
                                "href"
                            ) ===
                            `#${id}`
                        ) {

                            link.classList.add(
                                "active"
                            );

                        }

                    });

                });

            },
            {
                rootMargin:
                    "-35% 0px -55% 0px",
                threshold: 0
            }
        );


    sections.forEach(section => {

        sectionObserver.observe(
            section
        );

    });

}


/* =========================================================
   11. PREMIUM CARD TILT
========================================================= */

function initCardTilt() {

    /*
     * Disable on touch devices.
     */

    if (
        window.matchMedia(
            "(hover: none)"
        ).matches
    ) return;


    const cards =
        document.querySelectorAll(
            ".premium-card"
        );


    cards.forEach(card => {

        card.addEventListener(
            "mousemove",
            event => {

                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateX =
                    (
                        (y - centerY)
                        /
                        centerY
                    )
                    *
                    -2.5;


                const rotateY =
                    (
                        (x - centerX)
                        /
                        centerX
                    )
                    *
                    2.5;


                card.style.transform =
                    `
                    translateY(-10px)
                    perspective(900px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    scale(1.015)
                    `;

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
   12. BUTTON RIPPLE EFFECT
========================================================= */

function initButtonEffects() {

    const buttons =
        document.querySelectorAll(
            ".btn, .nav-join"
        );


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            event => {

                const ripple =
                    document.createElement(
                        "span"
                    );


                ripple.className =
                    "click-ripple";


                const rect =
                    button.getBoundingClientRect();


                ripple.style.left =
                    (
                        event.clientX -
                        rect.left
                    )
                    +
                    "px";


                ripple.style.top =
                    (
                        event.clientY -
                        rect.top
                    )
                    +
                    "px";


                button.appendChild(
                    ripple
                );


                setTimeout(() => {

                    ripple.remove();

                }, 700);

            }
        );

    });

}


/* =========================================================
   13. HERO PARALLAX
========================================================= */

function initParallax() {

    if (
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches
    ) return;


    if (
        window.matchMedia(
            "(hover: none)"
        ).matches
    ) return;


    const hero =
        document.querySelector(
            ".hero"
        );


    if (!hero) return;


    const orbOne =
        hero.querySelector(
            ".hero-orb.one"
        );


    const orbTwo =
        hero.querySelector(
            ".hero-orb.two"
        );


    const ringOne =
        hero.querySelector(
            ".ring-one"
        );


    const ringTwo =
        hero.querySelector(
            ".ring-two"
        );


    let ticking = false;


    function updateParallax() {

        const scroll =
            window.scrollY;


        if (
            scroll >
            window.innerHeight
        ) {

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


        ticking = false;

    }


    window.addEventListener(
        "scroll",
        () => {

            if (!ticking) {

                requestAnimationFrame(
                    updateParallax
                );

                ticking = true;

            }

        },
        { passive: true }
    );

}


/* =========================================================
   14. BACK TO TOP
========================================================= */

function initBackToTop() {

    const button =
        document.createElement(
            "button"
        );


    button.type = "button";

    button.className =
        "back-to-top";

    button.setAttribute(
        "aria-label",
        "Back to top"
    );

    button.innerHTML = "↑";


    document.body.appendChild(
        button
    );


    function updateVisibility() {

        if (
            window.scrollY >
            window.innerHeight * 0.7
        ) {

            button.classList.add(
                "visible"
            );

        } else {

            button.classList.remove(
                "visible"
            );

        }

    }


    window.addEventListener(
        "scroll",
        updateVisibility,
        { passive: true }
    );


    button.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}


/* =========================================================
   15. KEYBOARD ACCESSIBILITY
========================================================= */

function initKeyboardAccessibility() {

    document.addEventListener(
        "keydown",
        event => {

            /*
             * Escape closes mobile menu.
             */

            if (
                event.key === "Escape"
            ) {

                const menuBtn =
                    document.getElementById(
                        "menuBtn"
                    );


                const navLinks =
                    document.getElementById(
                        "navLinks"
                    );


                if (
                    menuBtn &&
                    navLinks
                ) {

                    navLinks.classList.remove(
                        "open"
                    );

                    menuBtn.classList.remove(
                        "active"
                    );

                    menuBtn.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }

        }
    );

}


/* =========================================================
   16. WINDOW LOAD POLISH
========================================================= */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "loaded"
        );

    }
);


/* =========================================================
   END
========================================================= */
