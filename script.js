/* =========================================================
   ANTIQUE ASSOCIATION
   script.js
   PART 3 — INTERACTION ENGINE
========================================================= */


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
    initRippleButtons();
    initActiveNavigation();
    initParallax();
    initCardTilt();

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

                loader.style.display = "none";

            }, 900);

        }, 700);

    });

}


/* =========================================================
   03. HEADER SCROLL EFFECT
========================================================= */

function initHeader() {

    const header =
        document.getElementById("mainHeader");

    if (!header) return;

    function updateHeader() {

        if (window.scrollY > 40) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }

    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );

    updateHeader();

}


/* =========================================================
   04. MOBILE NAVIGATION
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


    navLinks.querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                closeMenu
            );

        });


    document.addEventListener(
        "click",
        event => {

            if (
                !navLinks.contains(event.target) &&
                !menuBtn.contains(event.target)
            ) {

                closeMenu();

            }

        }
    );


    window.addEventListener(
        "resize",
        () => {

            if (window.innerWidth > 850) {

                closeMenu();

            }

        }
    );

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

        const pageHeight =
            document.documentElement.scrollHeight
            -
            window.innerHeight;

        if (pageHeight <= 0) {

            progress.style.width = "0%";

            return;

        }

        const percentage =
            Math.min(
                100,
                Math.max(
                    0,
                    (scrollTop / pageHeight) * 100
                )
            );

        progress.style.width =
            percentage + "%";

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
        !("IntersectionObserver" in window)
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
                rootMargin: "0px 0px -40px 0px"
            }
        );


    elements.forEach(element => {

        observer.observe(element);

    });

}


/* =========================================================
   07. ANIMATED NUMBERS
========================================================= */

function initCounters() {

    const counters =
        document.querySelectorAll(
            ".stat-card .number"
        );

    if (!counters.length) return;


    function animateCounter(element) {

        const target =
            Number(
                element.dataset.target || 0
            );

        const duration = 1600;

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


            const eased =
                1 -
                Math.pow(
                    1 - progress,
                    3
                );


            const current =
                Math.floor(
                    target * eased
                );


            element.textContent =
                current.toLocaleString();


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


    if (
        !("IntersectionObserver" in window)
    ) {

        counters.forEach(
            animateCounter
        );

        return;

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
                threshold: 0.5
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
                    * 1.8
                    + .4,

                speed:
                    Math.random()
                    * .35
                    + .08,

                opacity:
                    Math.random()
                    * .35
                    + .08,

                drift:
                    (
                        Math.random()
                        - .5
                    ) * .15

            });

        }

    }


    function draw() {

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
                    + 10;

            }


            if (
                particle.x <
                -10
            ) {

                particle.x =
                    window.innerWidth
                    + 10;

            }


            if (
                particle.x >
                window.innerWidth
                + 10
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
            requestAnimationFrame(draw);

    }


    resize();

    createParticles();

    draw();


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

                draw();

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
                ) {

                    return;

                }


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


                const offset =
                    header
                        ? header.offsetHeight + 20
                        : 20;


                const position =
                    target.getBoundingClientRect()
                        .top
                    +
                    window.scrollY
                    -
                    offset;


                window.scrollTo({

                    top: position,

                    behavior: "smooth"

                });


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
   10. BUTTON RIPPLE EFFECT
========================================================= */

function initRippleButtons() {

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


                ripple.style.position =
                    "absolute";

                ripple.style.width =
                    size + "px";

                ripple.style.height =
                    size + "px";

                ripple.style.left =
                    (
                        event.clientX
                        -
                        rect.left
                        -
                        size / 2
                    )
                    + "px";

                ripple.style.top =
                    (
                        event.clientY
                        -
                        rect.top
                        -
                        size / 2
                    )
                    + "px";

                ripple.style.borderRadius =
                    "50%";

                ripple.style.background =
                    "rgba(255,255,255,.22)";

                ripple.style.transform =
                    "scale(0)";

                ripple.style.pointerEvents =
                    "none";

                ripple.style.transition =
                    "transform .6s ease, opacity .6s ease";


                button.appendChild(
                    ripple
                );


                requestAnimationFrame(() => {

                    ripple.style.transform =
                        "scale(2)";

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
   11. ACTIVE NAVIGATION
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
                            )
                            ===
                            "#" + id
                        ) {

                            link.classList.add(
                                "active"
                            );

                        }

                    });

                });

            },
            {
                threshold: 0,
                rootMargin:
                    "-35% 0px -55% 0px"
            }
        );


    sections.forEach(section => {

        sectionObserver.observe(
            section
        );

    });

}


/* =========================================================
   12. HERO PARALLAX
========================================================= */

function initParallax() {

    const hero =
        document.querySelector(
            ".hero"
        );

    if (!hero) return;


    const orbs =
        hero.querySelectorAll(
            ".hero-orb"
        );

    const rings =
        hero.querySelectorAll(
            ".hero-ring"
        );


    if (
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches
    ) {

        return;

    }


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
                (orb, index) => {

                    const speed =
                        index === 0
                            ? 0.08
                            : 0.13;


                    orb.style.transform =
                        `translateY(${scroll * speed}px)`;

                }
            );


            rings.forEach(
                (ring, index) => {

                    const speed =
                        index === 0
                            ? 0.04
                            : -0.05;


                    ring.style.transform =
                        `translateY(${scroll * speed}px)`;

                }
            );

        },
        { passive: true }
    );

}


/* =========================================================
   13. PREMIUM CARD TILT
========================================================= */

function initCardTilt() {

    if (
        window.matchMedia(
            "(pointer: coarse)"
        ).matches
    ) {

        return;

    }


    if (
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches
    ) {

        return;

    }


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
                        y - centerY
                    )
                    /
                    25;


                const rotateY =
                    (
                        centerX - x
                    )
                    /
                    25;


                card.style.transform =
                    `
                    translateY(-10px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    scale(1.01)
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
   14. KEYBOARD ACCESSIBILITY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

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


/* =========================================================
   15. DYNAMIC YEAR
========================================================= */

document
    .querySelectorAll(
        "[data-current-year]"
    )
    .forEach(element => {

        element.textContent =
            new Date()
                .getFullYear();

    });


/* =========================================================
   16. PAGE READY
========================================================= */

window.setTimeout(() => {

    document.body.classList.add(
        "page-ready"
    );

}, 100);


/* =========================================================
   ANTIQUE ASSOCIATION
   INTERACTION ENGINE COMPLETE
========================================================= */
