/* =========================================================
   ANTIQUE ASSOCIATION
   PREMIUM INTERACTION ENGINE
   Stable / Lightweight / GitHub Pages Ready
========================================================= */

"use strict";


/* =========================================================
   APP
========================================================= */

const AntiqueApp = {

    init() {

        this.cache();

        this.navigation();

        this.header();

        this.scrollReveal();

        this.counters();

        this.faq();

        this.membershipForm();

        this.backToTop();

        this.cursor();

        this.parallax();

        this.smoothScroll();

        this.loaded();

    },


    /* =====================================================
       CACHE DOM
    ====================================================== */

    cache() {

        this.headerElement =
            document.getElementById("header");

        this.menuToggle =
            document.getElementById("menuToggle");

        this.navMenu =
            document.getElementById("navMenu");

        this.backTop =
            document.getElementById("backTop");

        this.form =
            document.getElementById("membershipForm");

        this.success =
            document.getElementById("formSuccess");

        this.revealElements =
            document.querySelectorAll(".reveal");

        this.countersElements =
            document.querySelectorAll(".counter");

        this.sections =
            document.querySelectorAll("main section[id]");

        this.navLinks =
            document.querySelectorAll(".nav-link");

    },


    /* =====================================================
       PAGE LOAD
    ====================================================== */

    loaded() {

        /*
         * IMPORTANT:
         * No blocking preloader.
         *
         * The website becomes usable immediately.
         */

        document.body.classList.add("page-ready");

    },


    /* =====================================================
       NAVIGATION
    ====================================================== */

    navigation() {

        if (!this.menuToggle || !this.navMenu) {
            return;
        }


        this.menuToggle.addEventListener(
            "click",
            () => {

                const open =
                    this.navMenu.classList.toggle("open");

                this.menuToggle.setAttribute(
                    "aria-expanded",
                    String(open)
                );

                document.body.classList.toggle(
                    "menu-open",
                    open
                );

            }
        );


        const links =
            this.navMenu.querySelectorAll("a");


        links.forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    this.navMenu.classList.remove(
                        "open"
                    );

                    this.menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    document.body.classList.remove(
                        "menu-open"
                    );

                }
            );

        });


        /*
         * Close mobile menu with ESC
         */

        document.addEventListener(
            "keydown",
            event => {

                if (event.key !== "Escape") {
                    return;
                }

                this.navMenu.classList.remove(
                    "open"
                );

                this.menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                document.body.classList.remove(
                    "menu-open"
                );

            }
        );

    },


    /* =====================================================
       HEADER
    ====================================================== */

    header() {

        if (!this.headerElement) {
            return;
        }


        const update = () => {

            if (window.scrollY > 40) {

                this.headerElement.classList.add(
                    "scrolled"
                );

            } else {

                this.headerElement.classList.remove(
                    "scrolled"
                );

            }

        };


        update();


        window.addEventListener(
            "scroll",
            update,
            { passive: true }
        );

    },


    /* =====================================================
       SCROLL REVEAL
    ====================================================== */

    scrollReveal() {

        if (!this.revealElements.length) {
            return;
        }


        /*
         * Accessibility:
         * If the user prefers reduced motion,
         * show everything immediately.
         */

        const reducedMotion =
            window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;


        if (reducedMotion) {

            this.revealElements.forEach(
                element => {

                    element.classList.add(
                        "visible"
                    );

                }
            );

            return;
        }


        const observer =
            new IntersectionObserver(
                entries => {

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
                    threshold: 0.08,
                    rootMargin:
                        "0px 0px -50px 0px"
                }
            );


        this.revealElements.forEach(
            element => {

                observer.observe(element);

            }
        );

    },


    /* =====================================================
       COUNTERS
    ====================================================== */

    counters() {

        if (!this.countersElements.length) {
            return;
        }


        const animate = element => {

            const target =
                Number(element.dataset.target);


            if (
                !Number.isFinite(target) ||
                target < 0
            ) {
                return;
            }


            const duration = 1500;

            const start =
                performance.now();


            const update = now => {

                const progress =
                    Math.min(
                        (now - start) /
                        duration,
                        1
                    );


                /*
                 * Smooth easing
                 */

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

            };


            requestAnimationFrame(update);

        };


        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (!entry.isIntersecting) {
                            return;
                        }


                        animate(entry.target);


                        observer.unobserve(
                            entry.target
                        );

                    });

                },
                {
                    threshold: 0.5
                }
            );


        this.countersElements.forEach(
            counter => {

                observer.observe(counter);

            }
        );

    },


    /* =====================================================
       FAQ
    ====================================================== */

    faq() {

        const items =
            document.querySelectorAll(
                ".faq-item"
            );


        if (!items.length) {
            return;
        }


        items.forEach(item => {

            const button =
                item.querySelector(
                    ".faq-question"
                );


            if (!button) {
                return;
            }


            button.addEventListener(
                "click",
                () => {

                    const alreadyOpen =
                        item.classList.contains(
                            "active"
                        );


                    /*
                     * Close all FAQ items
                     */

                    items.forEach(
                        other => {

                            other.classList.remove(
                                "active"
                            );

                        }
                    );


                    /*
                     * Open selected item
                     */

                    if (!alreadyOpen) {

                        item.classList.add(
                            "active"
                        );

                    }

                }
            );

        });

    },


    /* =====================================================
       MEMBERSHIP FORM
    ====================================================== */

    membershipForm() {

        if (!this.form) {
            return;
        }


        const name =
            document.getElementById(
                "fullName"
            );

        const email =
            document.getElementById(
                "email"
            );

        const phone =
            document.getElementById(
                "phone"
            );

        const interest =
            document.getElementById(
                "interest"
            );

        const message =
            document.getElementById(
                "message"
            );

        const consent =
            document.getElementById(
                "consent"
            );


        const clearErrors = () => {

            this.form
                .querySelectorAll(
                    ".form-group.invalid"
                )
                .forEach(group => {

                    group.classList.remove(
                        "invalid"
                    );

                });


            this.form
                .querySelectorAll(
                    ".error-message"
                )
                .forEach(error => {

                    error.textContent = "";

                });

        };


        const error = (
            field,
            text
        ) => {

            if (!field) {
                return;
            }


            const group =
                field.closest(
                    ".form-group"
                );


            if (!group) {
                return;
            }


            group.classList.add(
                "invalid"
            );


            const messageElement =
                group.querySelector(
                    ".error-message"
                );


            if (messageElement) {

                messageElement.textContent =
                    text;

            }

        };


        this.form.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                clearErrors();


                let valid = true;


                /* NAME */

                if (
                    !name ||
                    name.value.trim().length < 2
                ) {

                    error(
                        name,
                        "Please enter your full name."
                    );

                    valid = false;

                }


                /* EMAIL */

                if (
                    !email ||
                    !this.validEmail(
                        email.value.trim()
                    )
                ) {

                    error(
                        email,
                        "Please enter a valid email."
                    );

                    valid = false;

                }


                /* PHONE */

                const phoneDigits =
                    phone
                        ? phone.value.replace(
                            /\D/g,
                            ""
                        )
                        : "";


                if (
                    phoneDigits.length < 8
                ) {

                    error(
                        phone,
                        "Please enter a valid phone number."
                    );

                    valid = false;

                }


                /* INTEREST */

                if (
                    !interest ||
                    !interest.value
                ) {

                    error(
                        interest,
                        "Please select an area."
                    );

                    valid = false;

                }


                /* CONSENT */

                if (
                    !consent ||
                    !consent.checked
                ) {

                    valid = false;

                    if (consent) {
                        consent.focus();
                    }

                }


                if (!valid) {

                    const firstInvalid =
                        this.form.querySelector(
                            ".invalid input, .invalid select"
                        );


                    if (firstInvalid) {

                        firstInvalid.focus();

                    }

                    return;

                }


                /*
                 * Collect application data.
                 *
                 * This is ready for connecting to a
                 * backend / Formspree / Google Apps Script
                 * later.
                 */

                const application = {

                    name:
                        name.value.trim(),

                    email:
                        email.value.trim(),

                    phone:
                        phone.value.trim(),

                    interest:
                        interest.value,

                    message:
                        message
                            ? message.value.trim()
                            : "",

                    submittedAt:
                        new Date().toISOString()

                };


                console.log(
                    "Antique Association Membership:",
                    application
                );


                /*
                 * Show success message
                 */

                if (this.success) {

                    this.success.classList.add(
                        "show"
                    );

                }


                this.form.reset();


                /*
                 * Automatically hide success
                 * after a few seconds.
                 */

                setTimeout(() => {

                    if (this.success) {

                        this.success.classList.remove(
                            "show"
                        );

                    }

                }, 6000);

            }
        );

    },


    /* =====================================================
       EMAIL VALIDATOR
    ====================================================== */

    validEmail(email) {

        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
            email
        );

    },


    /* =====================================================
       BACK TO TOP
    ====================================================== */

    backToTop() {

        if (!this.backTop) {
            return;
        }


        const update = () => {

            this.backTop.classList.toggle(
                "show",
                window.scrollY > 600
            );

        };


        window.addEventListener(
            "scroll",
            update,
            { passive: true }
        );


        this.backTop.addEventListener(
            "click",
            () => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );


        update();

    },


    /* =====================================================
       CUSTOM CURSOR
    ====================================================== */

    cursor() {

        const dot =
            document.getElementById(
                "cursorDot"
            );

        const ring =
            document.getElementById(
                "cursorRing"
            );


        if (!dot || !ring) {
            return;
        }


        /*
         * Disable custom cursor on touch devices.
         */

        if (
            !window.matchMedia(
                "(pointer: fine)"
            ).matches
        ) {

            dot.style.display = "none";
            ring.style.display = "none";

            return;

        }


        let x = 0;
        let y = 0;

        let ringX = 0;
        let ringY = 0;


        document.addEventListener(
            "mousemove",
            event => {

                x = event.clientX;
                y = event.clientY;


                dot.style.transform =
                    `translate(${x}px, ${y}px)`;

            }
        );


        const animate = () => {

            ringX +=
                (x - ringX) * 0.15;

            ringY +=
                (y - ringY) * 0.15;


            ring.style.left =
                `${ringX}px`;

            ring.style.top =
                `${ringY}px`;


            requestAnimationFrame(
                animate
            );

        };


        animate();


        document
            .querySelectorAll(
                "a, button, input, textarea, select"
            )
            .forEach(element => {

                element.addEventListener(
                    "mouseenter",
                    () => {

                        ring.classList.add(
                            "hover"
                        );

                    }
                );


                element.addEventListener(
                    "mouseleave",
                    () => {

                        ring.classList.remove(
                            "hover"
                        );

                    }
                );

            });

    },


    /* =====================================================
       PARALLAX
    ====================================================== */

    parallax() {

        const emblem =
            document.querySelector(
                ".hero-emblem"
            );


        if (!emblem) {
            return;
        }


        /*
         * Disable on mobile and reduced motion.
         */

        if (
            window.innerWidth <= 800 ||
            window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches
        ) {

            return;

        }


        let ticking = false;


        window.addEventListener(
            "scroll",
            () => {

                if (ticking) {
                    return;
                }


                ticking = true;


                requestAnimationFrame(
                    () => {

                        const offset =
                            window.scrollY * 0.08;


                        if (offset < 100) {

                            emblem.style.transform =
                                `translateY(${offset}px)`;

                        }


                        ticking = false;

                    }
                );

            },
            { passive: true }
        );

    },


    /* =====================================================
       SMOOTH SCROLL
    ====================================================== */

    smoothScroll() {

        document
            .querySelectorAll(
                'a[href^="#"]'
            )
            .forEach(link => {

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


                        if (!target) {
                            return;
                        }


                        event.preventDefault();


                        const header =
                            this.headerElement
                                ? this.headerElement
                                    .offsetHeight
                                : 0;


                        const position =
                            target.offsetTop -
                            header;


                        window.scrollTo({
                            top: position,
                            behavior: "smooth"
                        });

                    }
                );

            });

    }

};


/* =========================================================
   START APPLICATION
========================================================= */

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        () => AntiqueApp.init(),
        { once: true }
    );

} else {

    AntiqueApp.init();

}
