/* =========================================================
   ANTIQUE ASSOCIATION
   script.js
   PREMIUM INTERACTION SYSTEM
========================================================= */


/* =========================================================
   01. DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    initLoader();
    initHeader();
    initMobileMenu();
    initScrollProgress();
    initScrollReveal();
    initCounters();
    initParticles();
    initSmoothScroll();
    initActiveNavigation();
    initCardTilt();
    initButtonRipple();
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

            setTimeout(() => {
                loader.remove();
            }, 900);

        }, 700);

    });

}


/* =========================================================
   03. HEADER
========================================================= */

function initHeader() {

    const header = document.getElementById("mainHeader");

    if (!header) return;

    function updateHeader() {

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

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

    const menuBtn =
        document.getElementById("menuBtn");

    const navLinks =
        document.getElementById("navLinks");

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

        const open =
            navLinks.classList.toggle("open");

        menuBtn.classList.toggle(
            "active",
            open
        );

        menuBtn.setAttribute(
            "aria-expanded",
            String(open)
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
        document.getElementById(
            "scrollProgress"
        );

    if (!progress) return;


    function updateProgress() {

        const scrollTop =
            window.scrollY;

        const scrollHeight =
            document.documentElement.scrollHeight
            -
            document.documentElement.clientHeight;


        if (scrollHeight <= 0) {

            progress.style.width = "0%";
            return;

        }


        const percentage =
            (scrollTop / scrollHeight) * 100;


        progress.style.width =
            `${Math.min(100, percentage)}%`;

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

function initScrollReveal() {

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

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "active"
                        );

                        observer.unobserve(
                            entry.target
                        );

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
   07. ANIMATED COUNTERS
========================================================= */

function initCounters() {

    const counters =
        document.querySelectorAll(
            ".stat-card .number[data-target]"
        );


    if (!counters.length) return;


    function animateCounter(element) {

        const target =
            Number(
                element.dataset.target
            );


        if (
            Number.isNaN(target)
        ) return;


        const duration = 1600;

        const startTime =
            performance.now();


        function update(currentTime) {

            const progress =
                Math.min(
                    (currentTime - startTime)
                    /
                    duration,
                    1
                );


            const eased =
                1 -
                Math.pow(
                    1 - progress,
                    3
                );


            const value =
                Math.floor(
                    target * eased
                );


            element.textContent =
                value.toLocaleString();


            if (progress < 1) {

                requestAnimationFrame(
                    update
                );

            } else {

                element.textContent =
                    target.toLocaleString();

            }

        }


        requestAnimationFrame(update);

    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

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
                threshold: .7
            }
        );


    counters.forEach(counter => {

        observer.observe(counter);

    });

}


/* =========================================================
   08. ACTIVE NAVIGATION
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


    if (!sections.length || !links.length)
        return;


    const sectionObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        const id =
                            entry.target.id;


                        links.forEach(link => {

                            link.classList.remove(
                                "active"
                            );


                            if (
                                link.getAttribute(
                                    "href"
                                ) === `#${id}`
                            ) {

                                link.classList.add(
                                    "active"
                                );

                            }

                        });

                    }

                });

            },
            {
                threshold: .35
            }
        );


    sections.forEach(section => {

        sectionObserver.observe(section);

    });

}


/* =========================================================
   09. SMOOTH SCROLL
========================================================= */

function initSmoothScroll() {

    const links =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    links.forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetID =
                    link.getAttribute(
                        "href"
                    );


                if (
                    !targetID ||
                    targetID === "#"
                ) return;


                const target =
                    document.querySelector(
                        targetID
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


                const position =
                    target.getBoundingClientRect()
                        .top
                    +
                    window.scrollY
                    -
                    headerHeight
                    -
                    15;


                window.scrollTo({

                    top: position,

                    behavior: "smooth"

                });

            }
        );

    });

}


/* =========================================================
   10. PARTICLE SYSTEM
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


    function resize() {

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
            `${window.innerWidth}px`;

        canvas.style.height =
            `${window.innerHeight}px`;


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
                    25,
                    Math.floor(
                        window.innerWidth / 22
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

                radius:
                    Math.random()
                    *
                    1.8
                    +
                    .4,

                speed:
                    Math.random()
                    *
                    .35
                    +
                    .08,

                opacity:
                    Math.random()
                    *
                    .35
                    +
                    .08,

                drift:
                    (
                        Math.random()
                        -
                        .5
                    )
                    *
                    .25

            });

        }

    }


    function animate() {

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
                    window.innerHeight
                    +
                    10;

            }


            if (
                particle.x <
                -10
            ) {

                particle.x =
                    window.innerWidth
                    +
                    10;

            }


            if (
                particle.x >
                window.innerWidth
                +
                10
            ) {

                particle.x = -10;

            }


            ctx.beginPath();


            ctx.arc(
                particle.x,
                particle.y,
                particle.radius,
                0,
                Math.PI * 2
            );


            ctx.fillStyle =
                `rgba(18,107,73,${particle.opacity})`;


            ctx.fill();

        });


        animationFrame =
            requestAnimationFrame(
                animate
            );

    }


    resize();

    createParticles();

    animate();


    window.addEventListener(
        "resize",
        () => {

            resize();

            createParticles();

        }
    );


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

                animate();

            }

        }
    );

}


/* =========================================================
   11. PREMIUM CARD TILT
========================================================= */

function initCardTilt() {

    const cards =
        document.querySelectorAll(
            ".premium-card"
        );


    if (
        window.matchMedia(
            "(hover: none)"
        ).matches
    ) return;


    cards.forEach(card => {

        card.addEventListener(
            "mousemove",
            event => {

                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX
                    -
                    rect.left;


                const y =
                    event.clientY
                    -
                    rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateX =
                    (
                        centerY - y
                    )
                    /
                    25;


                const rotateY =
                    (
                        x - centerX
                    )
                    /
                    25;


                card.style.transform =
                    `
                    translateY(-10px)
                    perspective(800px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    scale(1.015)
                    `;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "";

            }
        );

    });

}


/* =========================================================
   12. BUTTON RIPPLE
========================================================= */

function initButtonRipple() {

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


                const rect =
                    button.getBoundingClientRect();


                const size =
                    Math.max(
                        rect.width,
                        rect.height
                    );


                ripple.style.width =
                    `${size}px`;

                ripple.style.height =
                    `${size}px`;


                ripple.style.position =
                    "absolute";

                ripple.style.borderRadius =
                    "50%";

                ripple.style.background =
                    "rgba(255,255,255,.25)";

                ripple.style.pointerEvents =
                    "none";

                ripple.style.left =
                    `${event.clientX - rect.left - size / 2}px`;

                ripple.style.top =
                    `${event.clientY - rect.top - size / 2}px`;

                ripple.style.transform =
                    "scale(0)";

                ripple.style.opacity =
                    "1";

                ripple.style.transition =
                    "transform .6s ease, opacity .6s ease";


                button.appendChild(ripple);


                requestAnimationFrame(() => {

                    ripple.style.transform =
                        "scale(1.8)";

                    ripple.style.opacity =
                        "0";

                });


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

    const hero =
        document.querySelector(
            ".hero"
        );


    if (!hero) return;


    const orbs =
        hero.querySelectorAll(
            ".hero-orb, .hero-ring"
        );


    if (
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches
    ) return;


    window.addEventListener(
        "scroll",
        () => {

            const scroll =
                window.scrollY;


            if (
                scroll >
                window.innerHeight
            ) return;


            orbs.forEach(
                (element, index) => {

                    const speed =
                        index % 2 === 0
                            ? .08
                            : -.05;


                    element.style.translate =
                        `0 ${scroll * speed}px`;

                }
            );

        },
        {
            passive: true
        }
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


    button.className =
        "back-to-top";


    button.setAttribute(
        "aria-label",
        "Back to top"
    );


    button.innerHTML =
        "↑";


    document.body.appendChild(
        button
    );


    function update() {

        if (
            window.scrollY >
            600
        ) {

            button.classList.add(
                "show"
            );

        } else {

            button.classList.remove(
                "show"
            );

        }

    }


    window.addEventListener(
        "scroll",
        update,
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


    update();

}


/* =========================================================
   15. KEYBOARD ACCESSIBILITY
========================================================= */

function initKeyboardAccessibility() {

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                const navLinks =
                    document.getElementById(
                        "navLinks"
                    );

                const menuBtn =
                    document.getElementById(
                        "menuBtn"
                    );


                if (
                    navLinks &&
                    menuBtn
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
   16. YEAR AUTO UPDATE
========================================================= */

const currentYear =
    new Date().getFullYear();


document
    .querySelectorAll(
        "[data-current-year]"
    )
    .forEach(element => {

        element.textContent =
            currentYear;

    });


/* =========================================================
   17. PAGE VISIBILITY
========================================================= */

document.addEventListener(
    "visibilitychange",
    () => {

        if (
            document.hidden
        ) {

            document.body.classList.add(
                "page-hidden"
            );

        } else {

            document.body.classList.remove(
                "page-hidden"
            );

        }

    }
);


/* =========================================================
   ANTIQUE ASSOCIATION
   END OF SCRIPT
========================================================= */
