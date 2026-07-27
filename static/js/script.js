/* ===========================================
   ELEMENTS
=========================================== */

const form = document.querySelector(".prediction-form");
const meter = document.querySelector("#profileMeter");
const scoreText = document.querySelector("#profileScore");

/* ===========================================
   HELPERS
=========================================== */

function getNumber(name, fallback = 0) {

    const field = form?.querySelector(`[name="${name}"]`);

    const value = parseFloat(field?.value);

    return isNaN(value) ? fallback : value;

}

function getValue(name) {

    return form?.querySelector(`[name="${name}"]`)?.value || "";

}

/* ===========================================
   ANIMATE NUMBER
=========================================== */

function animateScore(target){

    let current = 0;

    const timer = setInterval(()=>{

        current++;

        scoreText.innerHTML =
            `${current}% Profile Strength`;

        if(current>=target){

            clearInterval(timer);

        }

    },12);

}

/* ===========================================
   CALCULATE SCORE
=========================================== */

function calculatePreviewScore(){

    if(!form) return;

    const income = getNumber("annual_income");

    const paid = getNumber("emi_paid_off");

    const due = getNumber("emi_past_dues");

    const loans = getNumber("number_of_loans");

    const age = getNumber("days_birth");

    const work = getNumber("days_employed");

    const family = getNumber("family_members",1);

    let score = 40;

    /* Income */

    if(income>500000){

        score+=20;

    }else if(income>250000){

        score+=15;

    }else if(income>100000){

        score+=10;

    }else{

        score-=5;

    }

    /* Paid EMI */

    score += paid>=5 ? 15 :

             paid>=2 ? 8 : 0;

    /* Pending EMI */

    if(due==0){

        score+=15;

    }else if(due<=2){

        score+=5;

    }else{

        score-=15;

    }

    /* Loans */

    if(loans<=2){

        score+=10;

    }else if(loans<=5){

        score+=4;

    }else{

        score-=8;

    }

    /* Employment */

    if(work>=5){

        score+=10;

    }else if(work>=2){

        score+=5;

    }

    /* Age */

    if(age>=25 && age<=55){

        score+=8;

    }

    /* Car */

    if(getValue("own_car")==="Yes"){

        score+=3;

    }

    /* House */

    if(getValue("own_realty")==="Yes"){

        score+=5;

    }

    /* Income Type */

    if(

        [

            "Working",

            "Commercial associate",

            "State servant"

        ].includes(

            getValue("income_type")

        )

    ){

        score+=6;

    }

    /* Family */

    if(family>5){

        score-=5;

    }

    score=Math.max(0,Math.min(score,100));

    /* Progress Bar */

    meter.style.width = score+"%";

    meter.style.transition="1s";

    /* Color */

    if(score<40){

        meter.style.background="#ef4444";

    }

    else if(score<70){

        meter.style.background="#facc15";

    }

    else{

        meter.style.background="#10b981";

    }

    animateScore(score);

    return score;

}

/* ===========================================
   LIVE UPDATE
=========================================== */

if(form){

form.addEventListener(

"input",

calculatePreviewScore

);

form.addEventListener(

"change",

calculatePreviewScore

);

calculatePreviewScore();

}
.primary-button,
.secondary-button{

position:relative;

overflow:hidden;

}

.ripple{

position:absolute;

border-radius:50%;

transform:scale(0);

background:rgba(255,255,255,.4);

animation:ripple .7s linear;

pointer-events:none;

}

@keyframes ripple{

to{

transform:scale(4);

opacity:0;

}

}
/* RESULT STATUS */

.result-card.approved{

border:2px solid #10b981;

box-shadow:0 0 35px rgba(16,185,129,.4);

}

.result-card.rejected{

border:2px solid #ef4444;

box-shadow:0 0 35px rgba(239,68,68,.35);

}

button:disabled{

cursor:not-allowed;

filter:brightness(.9);

}
/* Scroll Progress */

#scrollProgress{

position:fixed;

top:0;

left:0;

height:4px;

width:0;

z-index:99999;

background:linear-gradient(90deg,#8b5cf6,#06b6d4);

}

/* Back To Top */

#topBtn{

position:fixed;

right:30px;

bottom:30px;

width:55px;

height:55px;

border:none;

border-radius:50%;

background:linear-gradient(135deg,#3b82f6,#8b5cf6);

color:white;

font-size:24px;

cursor:pointer;

opacity:0;

transform:translateY(20px);

transition:.4s;

box-shadow:0 0 25px rgba(59,130,246,.35);

z-index:999;

}

#topBtn.show{

opacity:1;

transform:translateY(0);

}

#topBtn:hover{

transform:scale(1.1);

}

/* Floating Particles */

.particle{

position:fixed;

bottom:-30px;

width:8px;

height:8px;

border-radius:50%;

background:rgba(6,182,212,.4);

animation:particleMove linear infinite;

pointer-events:none;

z-index:-1;

}

@keyframes particleMove{

0%{

transform:translateY(0) scale(1);

opacity:0;

}

20%{

opacity:1;

}

100%{

transform:translateY(-110vh) scale(.2);

opacity:0;

}

}
