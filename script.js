/* =========================================================
   ANTIQUE ASSOCIATION
   PREMIUM WEBSITE JAVASCRIPT
========================================================= */


/* =========================================================
   SCROLL PROGRESS
========================================================= */

const progress =
    document.getElementById("progress");


function updateProgress(){

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    if(scrollHeight <= 0){

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
    {passive:true}
);

updateProgress();



/* =========================================================
   HEADER EFFECT
========================================================= */

const header =
    document.querySelector("header");


function updateHeader(){

    if(window.scrollY > 50){

        header.style.background =
            "rgba(255,255,255,.97)";

        header.style.boxShadow =
            "0 15px 40px rgba(0,0,0,.12)";

    }

    else{

        header.style.background =
            "rgba(255,255,255,.92)";

        header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.06)";

    }

}


window.addEventListener(
    "scroll",
    updateHeader,
    {passive:true}
);



/* =========================================================
   REVEAL ANIMATIONS
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".section-heading," +
        ".glass-card," +
        ".dark-card," +
        ".value-card," +
        ".stat-card," +
        ".leader-card," +
        ".initiative-card," +
        ".event," +
        ".gallery-item," +
        ".contact-card"
    );


revealElements.forEach(
    element => {

        element.classList.add(
            "reveal"
        );

    }
);


function revealOnScroll(){

    const trigger =
        window.innerHeight - 90;


    revealElements.forEach(
        element => {

            const top =
                element.getBoundingClientRect().top;


            if(top < trigger){

                element.classList.add(
                    "active"
                );

            }

        }
    );

}


window.addEventListener(
    "scroll",
    revealOnScroll,
    {passive:true}
);

revealOnScroll();



/* =========================================================
   PARTICLES
========================================================= */

const canvas =
    document.getElementById("particles");

const ctx =
    canvas.getContext("2d");


let particles = [];


function resizeCanvas(){

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



function createParticles(){

    particles = [];

    const amount =
        Math.min(
            65,
            Math.floor(
                window.innerWidth / 20
            )
        );


    for(let i = 0; i < amount; i++){

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
                Math.random() * .35 + .05

        });

    }

}


createParticles();



function animateParticles(){

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    particles.forEach(
        particle => {

            particle.x +=
                particle.speedX;

            particle.y +=
                particle.speedY;


            if(
                particle.x < -10
            ){

                particle.x =
                    canvas.width + 10;

            }


            if(
                particle.x >
                canvas.width + 10
            ){

                particle.x = -10;

            }


            if(
                particle.y < -10
            ){

                particle.y =
                    canvas.height + 10;

            }


            if(
                particle.y >
                canvas.height + 10
            ){

                particle.y = -10;

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
                `rgba(196,154,74,${particle.opacity})`;


            ctx.fill();

        }
    );


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


function updateActiveNavigation(){

    let current = "";


    sections.forEach(
        section => {

            const top =
                section.offsetTop - 180;

            const bottom =
                top +
                section.offsetHeight;


            if(
                window.scrollY >= top &&
                window.scrollY < bottom
            ){

                current =
                    section.id;

            }

        }
    );


    navLinks.forEach(
        link => {

            link.classList.remove(
                "active"
            );


            if(
                link.getAttribute("href") ===
                "#" + current
            ){

                link.classList.add(
                    "active"
                );

            }

        }
    );

}


window.addEventListener(
    "scroll",
    updateActiveNavigation,
    {passive:true}
);

updateActiveNavigation();



/* =========================================================
   SMOOTH ANCHOR SCROLL
========================================================= */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(
        link => {

            link.addEventListener(
                "click",
                event => {

                    const targetID =
                        link.getAttribute(
                            "href"
                        );


                    if(
                        !targetID ||
                        targetID === "#"
                    ){

                        return;

                    }


                    const target =
                        document.querySelector(
                            targetID
                        );


                    if(!target){

                        return;

                    }


                    event.preventDefault();


                    const headerHeight =
                        header.offsetHeight;


                    const position =
                        target.getBoundingClientRect().top +
                        window.scrollY -
                        headerHeight -
                        15;


                    window.scrollTo({

                        top:position,

                        behavior:"smooth"

                    });

                }
            );

        }
    );



/* =========================================================
   STAT COUNTERS
========================================================= */

const statCounters =
    document.querySelectorAll(
        ".stat-card h3[data-target]"
    );


let countersStarted = false;


function startCounters(){

    if(countersStarted){

        return;

    }


    const stats =
        document.querySelector(
            ".stats-grid"
        );


    if(!stats){

        return;

    }


    const position =
        stats.getBoundingClientRect().top;


    if(
        position >
        window.innerHeight - 100
    ){

        return;

    }


    countersStarted = true;


    statCounters.forEach(
        counter => {

            const target =
                parseInt(
                    counter.dataset.target
                );


            if(isNaN(target)){

                return;

            }


            if(target === 2026){

                counter.textContent =
                    "2026";

                return;

            }


            let value = 0;


            const duration = 1100;

            const interval = 20;

            const steps =
                duration / interval;

            const increment =
                target / steps;


            const timer =
                setInterval(
                    () => {

                        value += increment;


                        if(
                            value >= target
                        ){

                            counter.textContent =
                                target + "+";

                            clearInterval(
                                timer
                            );

                        }

                        else{

                            counter.textContent =
                                Math.floor(value) +
                                "+";

                        }

                    },
                    interval
                );

        }
    );

}


window.addEventListener(
    "scroll",
    startCounters,
    {passive:true}
);

startCounters();



/* =========================================================
   HERO EMBLEM PARALLAX
========================================================= */

const hero =
    document.querySelector(
        ".hero"
    );


const emblem =
    document.querySelector(
        ".main-emblem"
    );


if(hero && emblem){

    hero.addEventListener(
        "mousemove",
        event => {

            const x =
                (event.clientX /
                window.innerWidth - .5) * 10;

            const y =
                (event.clientY /
                window.innerHeight - .5) * 10;


            emblem.style.transform =
                `translate(${x}px,${y}px)`;

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

        updateActiveNavigation();

        createParticles();

    }
);
