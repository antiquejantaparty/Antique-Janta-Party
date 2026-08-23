/* =============================================================
   ANTIQUE ASSOCIATION
   INTERACTIONS & ANIMATIONS
============================================================= */

"use strict";


/* =============================================================
   DOM READY
============================================================= */

document.addEventListener("DOMContentLoaded", () => {

    initPreloader();
    initNavigation();
    initScrollHeader();
    initRevealAnimations();
    initCounters();
    initFAQ();
    initMembershipForm();
    initBackToTop();
    initCursor();
    initSmoothLinks();

});


/* =============================================================
   PRELOADER
============================================================= */

function initPreloader() {

    const preloader = document.getElementById("preloader");

    if (!preloader) {
        return;
    }

    window.addEventListener("load", () => {

        setTimeout(() => {
            preloader.classList.add("hidden");
        }, 700);

    });

}


/* =============================================================
   NAVIGATION
============================================================= */

function initNavigation() {

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (!menuToggle || !navMenu) {
        return;
    }

    menuToggle.addEventListener("click", () => {

        const isOpen = navMenu.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        document.body.classList.toggle(
            "menu-open",
            isOpen
        );

    });


    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            document.body.classList.remove(
                "menu-open"
            );

        });

    });

}


/* =============================================================
   SCROLL HEADER
============================================================= */

function initScrollHeader() {

    const header = document.getElementById("header");

    if (!header) {
        return;
    }

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


/* =============================================================
   ACTIVE NAVIGATION
============================================================= */

function initSmoothLinks() {

    const sections = document.querySelectorAll(
        "main section[id]"
    );

    const navLinks = document.querySelectorAll(
        ".nav-link"
    );

    if (!sections.length || !navLinks.length) {
        return;
    }

    const updateActiveLink = () => {

        let current = "";

        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop - 160;

            if (window.scrollY >= sectionTop) {
                current = section.id;
            }

        });

        navLinks.forEach((link) => {

            link.classList.remove("active");

            const href = link.getAttribute("href");

            if (href === `#${current}`) {
                link.classList.add("active");
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


/* =============================================================
   REVEAL ON SCROLL
============================================================= */

function initRevealAnimations() {

    const elements = document.querySelectorAll(
        ".reveal"
    );

    if (!elements.length) {
        return;
    }

    if (
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches
    ) {

        elements.forEach((element) => {
            element.classList.add("visible");
        });

        return;

    }


    const observer = new IntersectionObserver(
        (entries, observerInstance) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("visible");

                observerInstance.unobserve(
                    entry.target
                );

            });

        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px"
        }
    );


    elements.forEach((element) => {
        observer.observe(element);
    });

}


/* =============================================================
   COUNTERS
============================================================= */

function initCounters() {

    const counters = document.querySelectorAll(
        ".counter"
    );

    if (!counters.length) {
        return;
    }


    const animateCounter = (element) => {

        const target = Number(
            element.dataset.target
        );

        if (!Number.isFinite(target)) {
            return;
        }

        const duration = 1600;
        const startTime = performance.now();


        const update = (currentTime) => {

            const elapsed =
                currentTime - startTime;

            const progress = Math.min(
                elapsed / duration,
                1
            );

            const eased =
                1 - Math.pow(1 - progress, 3);

            const value = Math.floor(
                target * eased
            );

            element.textContent =
                value.toLocaleString();

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.textContent =
                    target.toLocaleString();
            }

        };


        requestAnimationFrame(update);

    };


    const observer = new IntersectionObserver(
        (entries, observerInstance) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }

                animateCounter(entry.target);

                observerInstance.unobserve(
                    entry.target
                );

            });

        },
        {
            threshold: 0.5
        }
    );


    counters.forEach((counter) => {
        observer.observe(counter);
    });

}


/* =============================================================
   FAQ
============================================================= */

function initFAQ() {

    const faqItems = document.querySelectorAll(
        ".faq-item"
    );

    if (!faqItems.length) {
        return;
    }

    faqItems.forEach((item) => {

        const button =
            item.querySelector(".faq-question");

        if (!button) {
            return;
        }


        button.addEventListener("click", () => {

            const wasActive =
                item.classList.contains("active");


            faqItems.forEach((otherItem) => {

                otherItem.classList.remove(
                    "active"
                );

            });


            if (!wasActive) {
                item.classList.add("active");
            }

        });

    });

}


/* =============================================================
   MEMBERSHIP FORM
============================================================= */

function initMembershipForm() {

    const form =
        document.getElementById(
            "membershipForm"
        );

    const success =
        document.getElementById(
            "formSuccess"
        );

    if (!form) {
        return;
    }


    const fields = {
        fullName:
            document.getElementById("fullName"),

        email:
            document.getElementById("email"),

        phone:
            document.getElementById("phone"),

        interest:
            document.getElementById("interest"),

        consent:
            document.getElementById("consent")
    };


    const setError = (
        field,
        message
    ) => {

        if (!field) {
            return;
        }

        const group =
            field.closest(".form-group");

        if (group) {
            group.classList.add("invalid");

            const error =
                group.querySelector(
                    ".error-message"
                );

            if (error) {
                error.textContent = message;
            }
        }

    };


    const clearError = (field) => {

        if (!field) {
            return;
        }

        const group =
            field.closest(".form-group");

        if (group) {

            group.classList.remove(
                "invalid"
            );

            const error =
                group.querySelector(
                    ".error-message"
                );

            if (error) {
                error.textContent = "";
            }

        }

    };


    Object.values(fields).forEach((field) => {

        if (!field) {
            return;
        }

        field.addEventListener("input", () => {
            clearError(field);
        });

        field.addEventListener("change", () => {
            clearError(field);
        });

    });


    form.addEventListener("submit", (event) => {

        event.preventDefault();


        let valid = true;


        if (
            !fields.fullName ||
            fields.fullName.value.trim().length < 2
        ) {

            setError(
                fields.fullName,
                "Please enter your full name."
            );

            valid = false;

        }


        if (
            !fields.email ||
            !isValidEmail(
                fields.email.value.trim()
            )
        ) {

            setError(
                fields.email,
                "Please enter a valid email."
            );

            valid = false;

        }


        if (
            !fields.phone ||
            fields.phone.value
                .replace(/\D/g, "")
                .length < 8
        ) {

            setError(
                fields.phone,
                "Please enter a valid phone number."
            );

            valid = false;

        }


        if (
            !fields.interest ||
            !fields.interest.value
        ) {

            setError(
                fields.interest,
                "Please select an area of interest."
            );

            valid = false;

        }


        if (
            !fields.consent ||
            !fields.consent.checked
        ) {

            valid = false;

            if (fields.consent) {
                fields.consent.focus();
            }

        }


        if (!valid) {
            return;
        }


        /*
         * FRONT-END DEMO SUCCESS
         *
         * This validates the application locally.
         * A real database/email service can be connected later.
         */

        if (success) {

            success.classList.add("show");

            success.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });

        }


        form.reset();

        setTimeout(() => {

            if (success) {
                success.classList.remove(
                    "show"
                );
            }

        }, 6000);

    });

}


/* =============================================================
   EMAIL VALIDATION
============================================================= */

function isValidEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        email
    );

}


/* =============================================================
   BACK TO TOP
============================================================= */

function initBackToTop() {

    const backTop =
        document.getElementById("backTop");

    if (!backTop) {
        return;
    }


    const updateButton = () => {

        if (window.scrollY > 600) {
            backTop.classList.add("show");
        } else {
            backTop.classList.remove("show");
        }

    };


    window.addEventListener(
        "scroll",
        updateButton,
        { passive: true }
    );


    backTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    updateButton();

}


/* =============================================================
   CUSTOM CURSOR
============================================================= */

function initCursor() {

    const dot =
        document.getElementById("cursorDot");

    const ring =
        document.getElementById("cursorRing");

    if (!dot || !ring) {
        return;
    }


    const finePointer =
        window.matchMedia(
            "(pointer: fine)"
        ).matches;


    if (!finePointer) {
        return;
    }


    let mouseX = -100;
    let mouseY = -100;

    let ringX = -100;
    let ringY = -100;


    document.addEventListener(
        "mousemove",
        (event) => {

            mouseX = event.clientX;
            mouseY = event.clientY;

            dot.style.transform =
                `translate(${mouseX}px, ${mouseY}px)`;

        }
    );


    const animateRing = () => {

        ringX += (mouseX - ringX) * 0.16;
        ringY += (mouseY - ringY) * 0.16;

        ring.style.left = `${ringX}px`;
        ring.style.top = `${ringY}px`;

        requestAnimationFrame(
            animateRing
        );

    };


    animateRing();


    const interactiveElements =
        document.querySelectorAll(
            "a, button, input, textarea, select"
        );


    interactiveElements.forEach((element) => {

        element.addEventListener(
            "mouseenter",
            () => {
                ring.classList.add("hover");
            }
        );

        element.addEventListener(
            "mouseleave",
            () => {
                ring.classList.remove("hover");
            }
        );

    });

}
