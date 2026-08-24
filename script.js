/* =========================================================
   ANTIQUE ASSOCIATION
   MAIN JAVASCRIPT
   Safe • Lightweight • Fail-Safe
========================================================= */

"use strict";


/* =========================================================
   DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /*
        Every feature is isolated.
        If one feature fails, the rest of the website continues.
    */

    safeRun(initLoader);
    safeRun(initHeader);
    safeRun(initMobileMenu);
    safeRun(initRevealAnimations);
    safeRun(initCounters);
    safeRun(initActiveNavigation);
    safeRun(initSmoothLinks);
    safeRun(initCurrentYear);

});


/* =========================================================
   SAFE FUNCTION RUNNER
========================================================= */

function safeRun(callback) {

    try {

        if (typeof callback === "function") {
            callback();
        }

    } catch (error) {

        console.warn(
            "Antique Association:",
            callback.name,
            "could not initialize.",
            error
        );

    }

}


/* =========================================================
   PAGE LOADER
========================================================= */

function initLoader() {

    const loader = document.getElementById("page-loader");

    if (!loader) {
        return;
    }


    /*
        IMPORTANT:

        The loader has a timeout fallback.

        Even if another script or browser feature
        behaves unexpectedly, the user will never
        be trapped on the loading screen.
    */

    const hideLoader = () => {

        if (!loader.classList.contains("loaded")) {
            loader.classList.add("loaded");
        }

    };


    /*
        Normal loading.
    */

    if (document.readyState === "complete") {

        setTimeout(hideLoader, 250);

    } else {

        window.addEventListener(
            "load",
            () => {
                setTimeout(hideLoader, 250);
            },
            {
                once: true
            }
        );

    }


    /*
        Absolute fallback.

        The page WILL become visible after 2.5 seconds.
    */

    setTimeout(hideLoader, 2500);

}


/* =========================================================
   HEADER SCROLL EFFECT
========================================================= */

function initHeader() {

    const header =
        document.getElementById("site-header");

    if (!header) {
        return;
    }


    const updateHeader = () => {

        if (window.scrollY > 35) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    };


    updateHeader();


    window.addEventListener(
        "scroll",
        updateHeader,
        {
            passive: true
        }
    );

}


/* =========================================================
   MOBILE MENU
========================================================= */

function initMobileMenu() {

    const toggle =
        document.getElementById("menu-toggle");

    const menu =
        document.getElementById("nav-menu");

    if (!toggle || !menu) {
        return;
    }


    const navLinks =
        menu.querySelectorAll(".nav-link, .nav-button");


    const closeMenu = () => {

        menu.classList.remove("open");

        toggle.classList.remove("active");

        toggle.setAttribute(
            "aria-expanded",
            "false"
        );

        document.body.classList.remove("menu-open");

    };


    const openMenu = () => {

        menu.classList.add("open");

        toggle.classList.add("active");

        toggle.setAttribute(
            "aria-expanded",
            "true"
        );

        document.body.classList.add("menu-open");

    };


    toggle.addEventListener("click", () => {

        const isOpen =
            menu.classList.contains("open");


        if (isOpen) {

            closeMenu();

        } else {

            openMenu();

        }

    });


    navLinks.forEach(link => {

        link.addEventListener(
            "click",
            closeMenu
        );

    });


    /*
        Close menu when clicking outside.
    */

    document.addEventListener("click", event => {

        const clickedInsideMenu =
            menu.contains(event.target);

        const clickedToggle =
            toggle.contains(event.target);


        if (
            menu.classList.contains("open") &&
            !clickedInsideMenu &&
            !clickedToggle
        ) {

            closeMenu();

        }

    });


    /*
        Close menu with Escape.
    */

    document.addEventListener("keydown", event => {

        if (
            event.key === "Escape" &&
            menu.classList.contains("open")
        ) {

            closeMenu();

        }

    });


    /*
        Reset mobile menu if window becomes desktop size.
    */

    window.addEventListener(
        "resize",
        () => {

            if (window.innerWidth > 760) {
                closeMenu();
            }

        }
    );

}


/* =========================================================
   REVEAL ANIMATIONS
========================================================= */

function initRevealAnimations() {

    const elements =
        document.querySelectorAll(".reveal");


    if (!elements.length) {
        return;
    }


    /*
        If IntersectionObserver isn't supported,
        simply show everything.
    */

    if (
        !("IntersectionObserver" in window)
    ) {

        elements.forEach(element => {
            element.classList.add("visible");
        });

        return;
    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
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
   NUMBER COUNTERS
========================================================= */

function initCounters() {

    const counters =
        document.querySelectorAll(
            "[data-count]"
        );


    if (!counters.length) {
        return;
    }


    /*
        Reduced motion users get the final number directly.
    */

    const reduceMotion =
        window.matchMedia &&
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (reduceMotion) {

        counters.forEach(counter => {

            counter.textContent =
                formatNumber(
                    Number(counter.dataset.count)
                );

        });

        return;
    }


    if (
        !("IntersectionObserver" in window)
    ) {

        counters.forEach(counter => {

            counter.textContent =
                formatNumber(
                    Number(counter.dataset.count)
                );

        });

        return;
    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }


                    const counter =
                        entry.target;

                    animateCounter(counter);

                    observer.unobserve(counter);

                });

            },
            {
                threshold: 0.8
            }
        );


    counters.forEach(counter => {

        observer.observe(counter);

    });

}


/* =========================================================
   COUNTER ANIMATION
========================================================= */

function animateCounter(counter) {

    const target =
        Number(counter.dataset.count);


    if (
        !Number.isFinite(target) ||
        target < 0
    ) {

        counter.textContent = "0";

        return;
    }


    const duration = 1500;

    const startTime =
        performance.now();


    const update = currentTime => {

        const elapsed =
            currentTime - startTime;


        const progress =
            Math.min(
                elapsed / duration,
                1
            );


        /*
            Smooth ease-out.
        */

        const eased =
            1 - Math.pow(
                1 - progress,
                3
            );


        const current =
            Math.floor(
                target * eased
            );


        counter.textContent =
            formatNumber(current);


        if (progress < 1) {

            requestAnimationFrame(update);

        } else {

            counter.textContent =
                formatNumber(target);

        }

    };


    requestAnimationFrame(update);

}


/* =========================================================
   NUMBER FORMATTER
========================================================= */

function formatNumber(number) {

    if (!Number.isFinite(number)) {
        return "0";
    }


    return new Intl.NumberFormat(
        "en-IN"
    ).format(number);

}


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

function initActiveNavigation() {

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );

    const links =
        document.querySelectorAll(
            ".nav-link"
        );


    if (
        !sections.length ||
        !links.length
    ) {

        return;

    }


    if (
        !("IntersectionObserver" in window)
    ) {

        return;

    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }


                    const currentId =
                        entry.target.id;


                    links.forEach(link => {

                        link.classList.remove(
                            "active"
                        );


                        const href =
                            link.getAttribute(
                                "href"
                            );


                        if (
                            href ===
                            `#${currentId}`
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
                    "-30% 0px -60% 0px",
                threshold: 0
            }
        );


    sections.forEach(section => {

        observer.observe(section);

    });

}


/* =========================================================
   SMOOTH ANCHOR LINKS
========================================================= */

function initSmoothLinks() {

    const links =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    links.forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute("href");


                /*
                    Ignore empty "#"
                */

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


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });

}


/* =========================================================
   CURRENT YEAR
========================================================= */

function initCurrentYear() {

    const year =
        document.getElementById(
            "current-year"
        );


    if (!year) {
        return;
    }


    year.textContent =
        new Date().getFullYear();

}


/* =========================================================
   KEYBOARD ACCESSIBILITY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        /*
            Allow users to close mobile menu
            with Escape even if another initialization
            failed.
        */

        if (event.key !== "Escape") {
            return;
        }


        const menu =
            document.getElementById(
                "nav-menu"
            );

        const toggle =
            document.getElementById(
                "menu-toggle"
            );


        if (!menu || !toggle) {
            return;
        }


        menu.classList.remove("open");

        toggle.classList.remove("active");

        toggle.setAttribute(
            "aria-expanded",
            "false"
        );

        document.body.classList.remove(
            "menu-open"
        );

    }
);


/* =========================================================
   GLOBAL ERROR PROTECTION
========================================================= */

window.addEventListener(
    "error",
    event => {

        /*
            We deliberately don't stop the website.

            This prevents a non-critical JavaScript
            error from breaking the entire experience.
        */

        console.warn(
            "Antique Association encountered a non-critical error:",
            event.error || event.message
        );

    }
);


/* =========================================================
   FINAL INITIALIZATION MESSAGE
========================================================= */

console.log(
    "%cANTIQUE ASSOCIATION",
    "color:#c9a227;font-size:18px;font-weight:bold;"
);

console.log(
    "%cCommunity • Service • Unity",
    "color:#f0d477;font-size:12px;"
);
