/* =========================================================
   ANTIQUE ASSOCIATION
   PREMIUM ANTIQUE GOLD DESIGN SYSTEM
========================================================= */

/* =========================================================
   ROOT VARIABLES
========================================================= */

:root {
    --gold: #c9a227;
    --gold-light: #f0d477;
    --gold-bright: #ffe9a3;
    --gold-dark: #8d6d16;

    --black: #080807;
    --black-soft: #0d0c09;
    --black-card: #12110d;
    --black-card-2: #17150f;

    --white: #f7f4ea;
    --white-soft: #c9c4b5;
    --muted: #8e897b;

    --border: rgba(201, 162, 39, 0.22);
    --border-strong: rgba(201, 162, 39, 0.48);

    --shadow: 0 25px 80px rgba(0, 0, 0, 0.55);

    --radius-small: 10px;
    --radius-medium: 18px;
    --radius-large: 28px;

    --container: 1240px;

    --transition: 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}


/* =========================================================
   RESET
========================================================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    scroll-padding-top: 100px;
}

body {
    min-height: 100vh;
    background:
        radial-gradient(
            circle at 15% 10%,
            rgba(201, 162, 39, 0.07),
            transparent 28%
        ),
        radial-gradient(
            circle at 85% 45%,
            rgba(201, 162, 39, 0.05),
            transparent 30%
        ),
        var(--black);

    color: var(--white);

    font-family: "Inter", sans-serif;

    line-height: 1.6;

    overflow-x: hidden;
}

body.menu-open {
    overflow: hidden;
}

a {
    color: inherit;
    text-decoration: none;
}

button {
    font: inherit;
}

img {
    max-width: 100%;
    display: block;
}


/* =========================================================
   PAGE LOADER
========================================================= */

.page-loader {
    position: fixed;
    inset: 0;

    z-index: 99999;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 25px;

    background: var(--black);

    transition:
        opacity 0.7s ease,
        visibility 0.7s ease;
}

.page-loader.loaded {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
}

.loader-emblem {
    width: 105px;
    height: 105px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid var(--gold);

    border-radius: 50%;

    position: relative;

    box-shadow:
        0 0 0 10px rgba(201, 162, 39, 0.05),
        0 0 50px rgba(201, 162, 39, 0.15);

    animation: loaderPulse 2s infinite ease-in-out;
}

.loader-emblem::before,
.loader-emblem::after {
    content: "";

    position: absolute;

    inset: -7px;

    border: 1px solid rgba(201, 162, 39, 0.22);

    border-radius: 50%;
}

.loader-emblem::after {
    inset: -15px;
    border-color: rgba(201, 162, 39, 0.08);
}

.loader-emblem span {
    color: var(--gold-light);

    font-family: "Cinzel", serif;

    font-size: 29px;

    font-weight: 800;

    letter-spacing: 2px;
}

.loader-line {
    width: 170px;
    height: 2px;

    background: rgba(255, 255, 255, 0.08);

    overflow: hidden;
}

.loader-line span {
    display: block;

    width: 45%;
    height: 100%;

    background: var(--gold);

    animation: loaderLine 1.3s infinite ease-in-out;
}

.page-loader p {
    font-family: "Cinzel", serif;

    font-size: 11px;

    letter-spacing: 4px;

    color: var(--gold-light);
}


/* =========================================================
   LOADER ANIMATIONS
========================================================= */

@keyframes loaderPulse {

    0%,
    100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.06);
    }
}

@keyframes loaderLine {
    0% {
        transform: translateX(-120%);
    }

    100% {
        transform: translateX(350%);
    }
}


/* =========================================================
   BACKGROUND EFFECTS
========================================================= */

.background-effects {
    position: fixed;

    inset: 0;

    z-index: -1;

    pointer-events: none;

    overflow: hidden;
}

.gold-orb {
    position: absolute;

    width: 500px;
    height: 500px;

    border-radius: 50%;

    background:
        radial-gradient(
            circle,
            rgba(201, 162, 39, 0.055),
            transparent 68%
        );

    filter: blur(5px);

    animation: orbFloat 12s infinite ease-in-out;
}

.orb-one {
    top: -220px;
    left: -180px;
}

.orb-two {
    right: -250px;
    top: 35%;
    animation-delay: -4s;
}

.orb-three {
    bottom: -280px;
    left: 30%;
    animation-delay: -8s;
}

@keyframes orbFloat {

    0%,
    100% {
        transform: translate(0, 0);
    }

    50% {
        transform: translate(30px, -25px);
    }
}


/* =========================================================
   HEADER
========================================================= */

.site-header {
    position: fixed;

    top: 0;
    left: 0;

    width: 100%;

    z-index: 1000;

    transition:
        background var(--transition),
        border-color var(--transition),
        backdrop-filter var(--transition);
}

.site-header.scrolled {
    background: rgba(8, 8, 7, 0.86);

    backdrop-filter: blur(20px);

    border-bottom: 1px solid var(--border);
}

.navbar {
    width: min(
        calc(100% - 50px),
        var(--container)
    );

    min-height: 90px;

    margin: auto;

    display: flex;

    justify-content: space-between;

    align-items: center;
}


/* =========================================================
   BRAND
========================================================= */

.brand {
    display: flex;

    align-items: center;

    gap: 13px;

    transition: transform var(--transition);
}

.brand:hover {
    transform: translateY(-2px);
}

.brand-emblem {
    width: 48px;
    height: 48px;

    display: flex;

    justify-content: center;
    align-items: center;

    border: 1px solid var(--gold);

    border-radius: 50%;

    background:
        radial-gradient(
            circle,
            rgba(201, 162, 39, 0.16),
            transparent 70%
        );

    position: relative;
}

.brand-emblem::before {
    content: "";

    position: absolute;

    inset: 4px;

    border: 1px solid rgba(201, 162, 39, 0.3);

    border-radius: 50%;
}

.brand-emblem span {
    font-family: "Cinzel", serif;

    color: var(--gold-light);

    font-size: 14px;

    font-weight: 800;

    letter-spacing: 1px;
}

.brand-text {
    display: flex;

    flex-direction: column;

    line-height: 1;
}

.brand-text strong {
    font-family: "Cinzel", serif;

    font-size: 16px;

    letter-spacing: 2px;

    color: var(--white);
}

.brand-text small {
    margin-top: 5px;

    font-size: 8px;

    letter-spacing: 3px;

    color: var(--gold);

    font-weight: 700;
}


/* =========================================================
   NAVIGATION
========================================================= */

.nav-menu {
    display: flex;

    align-items: center;

    gap: 7px;
}

.nav-link {
    position: relative;

    padding: 10px 13px;

    color: var(--white-soft);

    font-size: 12px;

    font-weight: 600;

    transition: color var(--transition);
}

.nav-link::after {
    content: "";

    position: absolute;

    left: 13px;
    right: 13px;

    bottom: 4px;

    height: 1px;

    background: var(--gold);

    transform: scaleX(0);

    transform-origin: center;

    transition: transform var(--transition);
}

.nav-link:hover,
.nav-link.active {
    color: var(--gold-light);
}

.nav-link:hover::after,
.nav-link.active::after {
    transform: scaleX(1);
}


/* =========================================================
   BUTTONS
========================================================= */

.primary-button,
.secondary-button,
.outline-button,
.nav-button {
    display: inline-flex;

    align-items: center;

    justify-content: center;

    gap: 12px;

    min-height: 48px;

    padding: 0 22px;

    border-radius: 8px;

    font-size: 12px;

    font-weight: 700;

    letter-spacing: 0.4px;

    transition:
        transform var(--transition),
        background var(--transition),
        color var(--transition),
        border-color var(--transition),
        box-shadow var(--transition);
}

.primary-button {
    background: linear-gradient(
        135deg,
        var(--gold-light),
        var(--gold)
    );

    color: #161207;

    box-shadow:
        0 10px 30px rgba(201, 162, 39, 0.15);
}

.primary-button:hover {
    transform: translateY(-4px);

    box-shadow:
        0 16px 35px rgba(201, 162, 39, 0.25);
}

.primary-button span {
    font-size: 17px;

    transition: transform var(--transition);
}

.primary-button:hover span {
    transform: translateX(4px);
}

.secondary-button,
.outline-button {
    border: 1px solid var(--border-strong);

    color: var(--gold-light);

    background: rgba(201, 162, 39, 0.035);
}

.secondary-button:hover,
.outline-button:hover {
    transform: translateY(-4px);

    border-color: var(--gold);

    background: rgba(201, 162, 39, 0.09);
}

.nav-button {
    margin-left: 8px;

    min-height: 40px;

    padding: 0 18px;

    border: 1px solid var(--gold);

    color: var(--gold-light);
}

.nav-button:hover {
    background: var(--gold);

    color: #151207;

    transform: translateY(-2px);
}


/* =========================================================
   MOBILE MENU BUTTON
========================================================= */

.menu-toggle {
    display: none;

    width: 45px;
    height: 45px;

    border: 1px solid var(--border);

    background: transparent;

    border-radius: 8px;

    cursor: pointer;

    flex-direction: column;

    justify-content: center;
    align-items: center;

    gap: 5px;
}

.menu-toggle span {
    width: 20px;
    height: 1px;

    background: var(--gold-light);

    transition: var(--transition);
}

.menu-toggle.active span:nth-child(1) {
    transform: translateY(6px) rotate(45deg);
}

.menu-toggle.active span:nth-child(2) {
    opacity: 0;
}

.menu-toggle.active span:nth-child(3) {
    transform: translateY(-6px) rotate(-45deg);
}


/* =========================================================
   GENERAL SECTION
========================================================= */

.section {
    width: min(
        calc(100% - 50px),
        var(--container)
    );

    margin: auto;

    padding: 130px 0;
}

.section-heading {
    max-width: 760px;

    margin-bottom: 65px;
}

.section-label {
    display: inline-flex;

    align-items: center;

    gap: 10px;

    margin-bottom: 17px;

    color: var(--gold);

    font-size: 10px;

    font-weight: 800;

    letter-spacing: 3px;
}

.section-label::before {
    content: "";

    width: 28px;
    height: 1px;

    background: var(--gold);
}

.section-heading h2 {
    font-family: "Cinzel", serif;

    font-size: clamp(30px, 4vw, 52px);

    line-height: 1.15;

    letter-spacing: -1px;
}

.section-heading h2 span {
    color: var(--gold-light);
}

.section-heading p {
    max-width: 650px;

    margin-top: 20px;

    color: var(--muted);

    font-size: 15px;
}


/* =========================================================
   HERO
========================================================= */

.hero-section {
    min-height: 100vh;

    width: min(
        calc(100% - 50px),
        var(--container)
    );

    margin: auto;

    padding-top: 140px;
    padding-bottom: 90px;

    display: grid;

    grid-template-columns: 1.1fr 0.9fr;

    align-items: center;

    gap: 60px;

    position: relative;
}

.hero-content {
    position: relative;

    z-index: 2;
}

.hero-badge {
    display: inline-flex;

    align-items: center;

    gap: 9px;

    padding: 8px 13px;

    border: 1px solid var(--border);

    border-radius: 50px;

    background: rgba(201, 162, 39, 0.035);

    color: var(--gold-light);

    font-size: 9px;

    letter-spacing: 2px;

    font-weight: 800;
}

.badge-dot {
    width: 6px;
    height: 6px;

    border-radius: 50%;

    background: var(--gold);

    box-shadow:
        0 0 12px var(--gold);
}

.hero-title {
    max-width: 750px;

    margin-top: 28px;

    font-family: "Cinzel", serif;

    font-size: clamp(
        48px,
        7vw,
        86px
    );

    line-height: 0.98;

    letter-spacing: -3px;
}

.hero-title span {
    display: block;

    color: var(--gold-light);

    background:
        linear-gradient(
            110deg,
            var(--gold-light),
            var(--gold),
            #fff1b0
        );

    -webkit-background-clip: text;
    background-clip: text;

    -webkit-text-fill-color: transparent;
}

.hero-description {
    max-width: 640px;

    margin-top: 27px;

    color: var(--white-soft);

    font-size: 15px;

    line-height: 1.9;
}

.hero-actions {
    display: flex;

    align-items: center;

    gap: 13px;

    margin-top: 34px;
}

.hero-stats {
    display: flex;

    gap: 42px;

    margin-top: 55px;
}

.hero-stat {
    display: flex;

    flex-direction: column;
}

.hero-stat strong {
    font-family: "Cinzel", serif;

    color: var(--gold-light);

    font-size: 27px;
}

.hero-stat span {
    margin-top: 3px;

    color: var(--muted);

    font-size: 10px;

    text-transform: uppercase;

    letter-spacing: 1px;
}


/* =========================================================
   HERO VISUAL
========================================================= */

.hero-visual {
    min-height: 580px;

    position: relative;

    display: flex;

    justify-content: center;
    align-items: center;
}

.hero-ring {
    position: absolute;

    border-radius: 50%;

    border: 1px solid var(--border);
}

.ring-one {
    width: 430px;
    height: 430px;

    animation: rotateRing 30s linear infinite;
}

.ring-two {
    width: 520px;
    height: 520px;

    border-color: rgba(201, 162, 39, 0.08);

    animation: rotateRingReverse 40s linear infinite;
}

.ring-one::before,
.ring-one::after {
    content: "";

    position: absolute;

    width: 7px;
    height: 7px;

    background: var(--gold);

    border-radius: 50%;

    box-shadow:
        0 0 15px var(--gold);
}

.ring-one::before {
    top: 15px;
    left: 50%;
}

.ring-one::after {
    bottom: 70px;
    right: 25px;
}

@keyframes rotateRing {
    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(360deg);
    }
}

@keyframes rotateRingReverse {
    from {
        transform: rotate(360deg);
    }

    to {
        transform: rotate(0);
    }
}

.hero-emblem {
    width: 260px;
    height: 260px;

    border-radius: 50%;

    display: flex;

    justify-content: center;
    align-items: center;

    background:
        radial-gradient(
            circle,
            rgba(201, 162, 39, 0.15),
            rgba(201, 162, 39, 0.025) 60%,
            transparent 70%
        );

    border: 1px solid var(--gold);

    box-shadow:
        0 0 0 15px rgba(201, 162, 39, 0.025),
        0 0 80px rgba(201, 162, 39, 0.12);
}

.emblem-inner {
    width: 215px;
    height: 215px;

    border-radius: 50%;

    border: 1px solid rgba(201, 162, 39, 0.3);

    display: flex;

    justify-content: center;
    align-items: center;

    flex-direction: column;
}

.emblem-inner strong {
    font-family: "Cinzel", serif;

    font-size: 78px;

    line-height: 1;

    color: var(--gold-light);

    letter-spacing: 5px;
}

.emblem-small {
    font-size: 8px;

    letter-spacing: 3px;

    color: var(--muted);

    font-weight: 700;
}


/* =========================================================
   FLOATING CARDS
========================================================= */

.floating-card {
    position: absolute;

    display: flex;

    align-items: center;

    gap: 12px;

    padding: 13px 17px;

    border: 1px solid var(--border);

    border-radius: 12px;

    background:
        rgba(15, 14, 10, 0.86);

    backdrop-filter: blur(15px);

    box-shadow: var(--shadow);

    animation: floatingCard 5s infinite ease-in-out;
}

.floating-card > span {
    width: 38px;
    height: 38px;

    display: flex;

    justify-content: center;
    align-items: center;

    border-radius: 9px;

    background: rgba(201, 162, 39, 0.1);

    font-size: 18px;
}

.floating-card div {
    display: flex;

    flex-direction: column;
}

.floating-card strong {
    font-size: 12px;

    color: var(--white);
}

.floating-card small {
    margin-top: 2px;

    color: var(--muted);

    font-size: 8px;
}

.card-top {
    top: 85px;
    right: 0;
}

.card-bottom {
    bottom: 90px;
    left: 5px;

    animation-delay: -2.5s;
}

@keyframes floatingCard {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-12px);
    }
}


/* =========================================================
   SCROLL INDICATOR
========================================================= */

.scroll-indicator {
    position: absolute;

    bottom: 20px;
    left: 50%;

    transform: translateX(-50%);

    display: flex;

    flex-direction: column;

    align-items: center;

    gap: 9px;

    color: var(--muted);

    font-size: 8px;

    letter-spacing: 2px;
}

.scroll-indicator i {
    display: block;

    width: 1px;
    height: 40px;

    background: linear-gradient(
        to bottom,
        var(--gold),
        transparent
    );

    animation: scrollLine 2s infinite ease-in-out;
}

@keyframes scrollLine {

    0%,
    100% {
        transform: scaleY(0.5);
        transform-origin: top;
    }

    50% {
        transform: scaleY(1);
        transform-origin: top;
    }
}


/* =========================================================
   ABOUT
========================================================= */

.about-grid {
    display: grid;

    grid-template-columns:
        1.35fr
        1fr
        1fr;

    grid-template-rows: auto auto;

    gap: 18px;
}

.about-card {
    padding: 34px;

    min-height: 240px;

    border: 1px solid var(--border);

    border-radius: var(--radius-medium);

    background:
        linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.025),
            rgba(201, 162, 39, 0.015)
        );

    position: relative;

    overflow: hidden;

    transition:
        transform var(--transition),
        border-color var(--transition),
        background var(--transition);
}

.about-card:hover {
    transform: translateY(-7px);

    border-color: var(--border-strong);

    background:
        linear-gradient(
            145deg,
            rgba(201, 162, 39, 0.06),
            rgba(255, 255, 255, 0.02)
        );
}

.about-card.featured {
    grid-row: span 2;

    min-height: 498px;

    display: flex;

    flex-direction: column;

    justify-content: center;

    background:
        radial-gradient(
            circle at 80% 20%,
            rgba(201, 162, 39, 0.11),
            transparent 40%
        ),
        var(--black-card);
}

.card-icon {
    width: 58px;
    height: 58px;

    display: flex;

    justify-content: center;
    align-items: center;

    border-radius: 14px;

    background: rgba(201, 162, 39, 0.08);

    border: 1px solid var(--border);

    font-size: 25px;

    margin-bottom: 25px;
}

.about-card h3 {
    font-family: "Cinzel", serif;

    font-size: 24px;
}

.about-card p {
    margin-top: 12px;

    color: var(--muted);

    font-size: 13px;

    line-height: 1.8;
}

.text-link {
    margin-top: 30px;

    color: var(--gold-light);

    font-size: 11px;

    font-weight: 700;

    letter-spacing: 0.5px;
}

.card-number {
    font-family: "Cinzel", serif;

    color: rgba(201, 162, 39, 0.35);

    font-size: 15px;

    letter-spacing: 2px;

    margin-bottom: 30px;
}


/* =========================================================
   ACTIVITIES
========================================================= */

.activities-section {
    position: relative;
}

.activities-grid {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 18px;
}

.activity-card {
    min-height: 350px;

    padding: 32px;

    border: 1px solid var(--border);

    border-radius: var(--radius-medium);

    background: var(--black-card);

    position: relative;

    overflow: hidden;

    transition:
        transform var(--transition),
        border-color var(--transition),
        box-shadow var(--transition);
}

.activity-card::before {
    content: "";

    position: absolute;

    width: 150px;
    height: 150px;

    top: -80px;
    right: -80px;

    border-radius: 50%;

    background:
        radial-gradient(
            circle,
            rgba(201, 162, 39, 0.12),
            transparent 70%
        );

    transition: transform var(--transition);
}

.activity-card:hover {
    transform: translateY(-8px);

    border-color: var(--border-strong);

    box-shadow:
        0 25px 60px rgba(0, 0, 0, 0.35);
}

.activity-card:hover::before {
    transform: scale(2);
}

.activity-number {
    position: absolute;

    top: 25px;
    right: 27px;

    color: rgba(201, 162, 39, 0.35);

    font-family: "Cinzel", serif;

    font-size: 11px;

    letter-spacing: 1px;
}

.activity-icon {
    width: 58px;
    height: 58px;

    display: flex;

    justify-content: center;
    align-items: center;

    border: 1px solid var(--border);

    border-radius: 14px;

    background: rgba(201, 162, 39, 0.07);

    font-size: 24px;

    margin-bottom: 30px;
}

.activity-card h3 {
    font-family: "Cinzel", serif;

    font-size: 21px;
}

.activity-card p {
    margin-top: 13px;

    color: var(--muted);

    font-size: 12px;

    line-height: 1.8;
}

.activity-link {
    display: inline-block;

    margin-top: 27px;

    color: var(--gold-light);

    font-size: 10px;

    font-weight: 800;

    letter-spacing: 0.7px;
}


/* =========================================================
   QUOTE
========================================================= */

.quote-section {
    width: min(
        calc(100% - 50px),
        1100px
    );

    margin: 30px auto 100px;

    padding: 90px 40px;

    text-align: center;

    border-top: 1px solid var(--border);

    border-bottom: 1px solid var(--border);

    position: relative;
}

.quote-mark {
    display: block;

    color: var(--gold);

    font-family: Georgia, serif;

    font-size: 75px;

    line-height: 0.6;

    opacity: 0.65;
}

.quote-content blockquote {
    max-width: 850px;

    margin: 20px auto 0;

    font-family: "Cinzel", serif;

    font-size: clamp(
        25px,
        4vw,
        42px
    );

    line-height: 1.35;
}

.quote-content blockquote span {
    color: var(--gold-light);
}

.quote-line {
    width: 45px;
    height: 1px;

    margin: 25px auto 12px;

    background: var(--gold);
}

.quote-content p {
    color: var(--muted);

    font-size: 10px;

    letter-spacing: 2px;
}


/* =========================================================
   EVENTS
========================================================= */

.split-heading {
    max-width: none;

    display: flex;

    justify-content: space-between;

    align-items: flex-end;

    gap: 30px;
}

.events-list {
    border-top: 1px solid var(--border);
}

.event-item {
    display: grid;

    grid-template-columns: 100px 1fr 50px;

    align-items: center;

    gap: 30px;

    padding: 30px 10px;

    border-bottom: 1px solid var(--border);

    transition:
        padding var(--transition),
        background var(--transition);
}

.event-item:hover {
    padding-left: 25px;
    padding-right: 25px;

    background: rgba(201, 162, 39, 0.025);
}

.event-date {
    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    width: 72px;
    height: 72px;

    border: 1px solid var(--border);

    border-radius: 12px;
}

.event-date strong {
    font-family: "Cinzel", serif;

    color: var(--gold-light);

    font-size: 24px;

    line-height: 1;
}

.event-date span {
    margin-top: 4px;

    color: var(--muted);

    font-size: 8px;

    letter-spacing: 2px;
}

.event-info > span {
    color: var(--gold);

    font-size: 8px;

    font-weight: 800;

    letter-spacing: 2px;
}

.event-info h3 {
    margin-top: 5px;

    font-family: "Cinzel", serif;

    font-size: 20px;
}

.event-info p {
    margin-top: 5px;

    color: var(--muted);

    font-size: 11px;
}

.event-arrow {
    width: 40px;
    height: 40px;

    display: flex;

    justify-content: center;
    align-items: center;

    border: 1px solid var(--border);

    border-radius: 50%;

    color: var(--gold);

    transition:
        background var(--transition),
        color var(--transition),
        transform var(--transition);
}

.event-item:hover .event-arrow {
    background: var(--gold);

    color: var(--black);

    transform: translateX(5px);
}


/* =========================================================
   MEMBERSHIP
========================================================= */

.membership-section {
    padding-top: 80px;
}

.membership-box {
    min-height: 390px;

    padding: 65px;

    border-radius: var(--radius-large);

    border: 1px solid var(--border-strong);

    background:
        radial-gradient(
            circle at 85% 50%,
            rgba(201, 162, 39, 0.15),
            transparent 35%
        ),
        linear-gradient(
            135deg,
            #131209,
            #0c0c09
        );

    display: flex;

    align-items: center;

    justify-content: space-between;

    overflow: hidden;

    position: relative;
}

.membership-box::before {
    content: "";

    position: absolute;

    inset: 15px;

    border: 1px solid rgba(201, 162, 39, 0.08);

    border-radius: 20px;

    pointer-events: none;
}

.membership-content {
    max-width: 650px;

    position: relative;

    z-index: 2;
}

.membership-content h2 {
    font-family: "Cinzel", serif;

    font-size: clamp(
        32px,
        5vw,
        58px
    );

    line-height: 1.08;
}

.membership-content h2 span {
    display: block;

    color: var(--gold-light);
}

.membership-content p {
    max-width: 580px;

    margin: 20px 0 30px;

    color: var(--muted);

    font-size: 13px;

    line-height: 1.8;
}

.membership-symbol {
    width: 300px;
    height: 300px;

    border-radius: 50%;

    border: 1px solid rgba(201, 162, 39, 0.2);

    display: flex;

    justify-content: center;
    align-items: center;

    position: relative;

    flex-shrink: 0;
}

.membership-symbol::before {
    content: "";

    position: absolute;

    inset: 25px;

    border: 1px solid rgba(201, 162, 39, 0.2);

    border-radius: 50%;
}

.membership-symbol::after {
    content: "";

    position: absolute;

    inset: -30px;

    border: 1px solid rgba(201, 162, 39, 0.07);

    border-radius: 50%;
}

.membership-symbol div {
    font-family: "Cinzel", serif;

    color: var(--gold-light);

    font-size: 75px;

    font-weight: 800;

    letter-spacing: 5px;
}


/* =========================================================
   FOOTER
========================================================= */

.site-footer {
    margin-top: 70px;

    border-top: 1px solid var(--border);

    background: #060605;
}

.footer-main {
    width: min(
        calc(100% - 50px),
        var(--container)
    );

    margin: auto;

    padding: 70px 0;

    display: grid;

    grid-template-columns: 2fr 1fr 1fr 1fr;

    gap: 50px;
}

.footer-brand p {
    max-width: 270px;

    margin-top: 20px;

    color: var(--muted);

    font-size: 11px;

    line-height: 1.8;
}

.footer-column {
    display: flex;

    flex-direction: column;

    gap: 11px;
}

.footer-column h4 {
    margin-bottom: 10px;

    color: var(--gold-light);

    font-family: "Cinzel", serif;

    font-size: 12px;

    letter-spacing: 1px;
}

.footer-column a {
    color: var(--muted);

    font-size: 11px;

    transition:
        color var(--transition),
        transform var(--transition);
}

.footer-column a:hover {
    color: var(--gold-light);

    transform: translateX(4px);
}

.footer-bottom {
    width: min(
        calc(100% - 50px),
        var(--container)
    );

    margin: auto;

    padding: 22px 0;

    border-top: 1px solid rgba(255, 255, 255, 0.05);

    display: flex;

    justify-content: space-between;

    gap: 20px;

    color: #656155;

    font-size: 9px;

    letter-spacing: 0.5px;
}


/* =========================================================
   REVEAL ANIMATION
========================================================= */

.reveal {
    opacity: 0;

    transform: translateY(30px);

    transition:
        opacity 0.8s ease,
        transform 0.8s cubic-bezier(
            0.22,
            1,
            0.36,
            1
        );
}

.reveal.visible {
    opacity: 1;

    transform: translateY(0);
}


/* =========================================================
   SELECTION
========================================================= */

::selection {
    background: var(--gold);

    color: var(--black);
}


/* =========================================================
   SCROLLBAR
========================================================= */

::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: var(--black);
}

::-webkit-scrollbar-thumb {
    background: var(--gold-dark);

    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: var(--gold);
}


/* =========================================================
   RESPONSIVE — TABLET
========================================================= */

@media (max-width: 1050px) {

    .nav-link {
        padding-left: 8px;
        padding-right: 8px;
    }

    .hero-section {
        grid-template-columns: 1fr;

        padding-top: 150px;

        text-align: center;
    }

    .hero-content {
        display: flex;

        flex-direction: column;

        align-items: center;
    }

    .hero-description {
        margin-left: auto;
        margin-right: auto;
    }

    .hero-visual {
        min-height: 520px;
    }

    .activities-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }

    .footer-main {
        grid-template-columns:
            1.5fr 1fr 1fr;
    }

    .footer-column:last-child {
        grid-column: 2 / 3;
    }
}


/* =========================================================
   RESPONSIVE — MOBILE
========================================================= */

@media (max-width: 760px) {

    .navbar {
        min-height: 75px;

        width: min(
            calc(100% - 30px),
            var(--container)
        );
    }

    .menu-toggle {
        display: flex;
    }

    .nav-menu {
        position: fixed;

        top: 75px;
        right: 15px;
        left: 15px;

        padding: 25px;

        display: flex;

        flex-direction: column;

        align-items: stretch;

        gap: 4px;

        background:
            rgba(12, 11, 8, 0.97);

        backdrop-filter: blur(20px);

        border: 1px solid var(--border);

        border-radius: 16px;

        box-shadow: var(--shadow);

        opacity: 0;

        visibility: hidden;

        transform: translateY(-15px);

        transition:
            opacity var(--transition),
            visibility var(--transition),
            transform var(--transition);
    }

    .nav-menu.open {
        opacity: 1;

        visibility: visible;

        transform: translateY(0);
    }

    .nav-link {
        padding: 14px;

        border-bottom: 1px solid rgba(
            255,
            255,
            255,
            0.04
        );
    }

    .nav-link::after {
        display: none;
    }

    .nav-button {
        margin: 12px 0 0;
    }

    .section {
        width: min(
            calc(100% - 30px),
            var(--container)
        );

        padding: 85px 0;
    }

    .hero-section {
        width: min(
            calc(100% - 30px),
            var(--container)
        );

        min-height: auto;

        padding-top: 125px;

        padding-bottom: 70px;

        gap: 20px;
    }

    .hero-title {
        font-size: clamp(
            42px,
            13vw,
            62px
        );

        letter-spacing: -2px;
    }

    .hero-description {
        font-size: 13px;

        line-height: 1.8;
    }

    .hero-actions {
        flex-direction: column;

        width: 100%;
    }

    .hero-actions a {
        width: 100%;
    }

    .hero-stats {
        width: 100%;

        justify-content: space-between;

        gap: 10px;

        margin-top: 42px;
    }

    .hero-stat strong {
        font-size: 22px;
    }

    .hero-stat span {
        font-size: 8px;
    }

    .hero-visual {
        min-height: 390px;
    }

    .hero-emblem {
        width: 190px;
        height: 190px;
    }

    .emblem-inner {
        width: 158px;
        height: 158px;
    }

    .emblem-inner strong {
        font-size: 55px;
    }

    .ring-one {
        width: 290px;
        height: 290px;
    }

    .ring-two {
        width: 350px;
        height: 350px;
    }

    .floating-card {
        padding: 9px;

        gap: 8px;
    }

    .floating-card > span {
        width: 32px;
        height: 32px;
    }

    .floating-card small {
        display: none;
    }

    .card-top {
        top: 35px;
        right: 0;
    }

    .card-bottom {
        bottom: 35px;
        left: 0;
    }

    .scroll-indicator {
        display: none;
    }

    .about-grid {
        grid-template-columns: 1fr;
    }

    .about-card.featured {
        grid-row: auto;

        min-height: 360px;
    }

    .about-card {
        min-height: 210px;
    }

    .activities-grid {
        grid-template-columns: 1fr;
    }

    .activity-card {
        min-height: 300px;
    }

    .quote-section {
        width: min(
            calc(100% - 30px),
            1100px
        );

        margin-bottom: 40px;

        padding: 65px 20px;
    }

    .quote-content blockquote {
        font-size: 25px;
    }

    .split-heading {
        flex-direction: column;

        align-items: flex-start;
    }

    .event-item {
        grid-template-columns:
            70px 1fr;

        gap: 18px;
    }

    .event-date {
        width: 60px;
        height: 60px;
    }

    .event-date strong {
        font-size: 20px;
    }

    .event-arrow {
        display: none;
    }

    .event-info h3 {
        font-size: 16px;
    }

    .event-info p {
        font-size: 10px;
    }

    .membership-box {
        padding: 45px 25px;

        min-height: 450px;
    }

    .membership-symbol {
        position: absolute;

        width: 220px;
        height: 220px;

        right: -70px;
        bottom: -60px;

        opacity: 0.35;
    }

    .membership-symbol div {
        font-size: 55px;
    }

    .footer-main {
        width: min(
            calc(100% - 30px),
            var(--container)
        );

        grid-template-columns: 1fr 1fr;

        gap: 40px 25px;

        padding: 55px 0;
    }

    .footer-brand {
        grid-column: 1 / -1;
    }

    .footer-column:last-child {
        grid-column: auto;
    }

    .footer-bottom {
        width: min(
            calc(100% - 30px),
            var(--container)
        );

        flex-direction: column;

        text-align: center;

        align-items: center;
    }
}


/* =========================================================
   VERY SMALL SCREENS
========================================================= */

@media (max-width: 420px) {

    .brand-text strong {
        font-size: 13px;
    }

    .brand-text small {
        font-size: 7px;
    }

    .brand-emblem {
        width: 42px;
        height: 42px;
    }

    .hero-title {
        font-size: 40px;
    }

    .hero-stats {
        gap: 5px;
    }

    .hero-stat strong {
        font-size: 19px;
    }

    .hero-stat span {
        font-size: 7px;
    }

    .membership-box {
        padding: 40px 20px;
    }
}


/* =========================================================
   ACCESSIBILITY
========================================================= */

@media (prefers-reduced-motion: reduce) {

    html {
        scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;

        animation-iteration-count: 1 !important;

        transition-duration: 0.01ms !important;
    }
}
