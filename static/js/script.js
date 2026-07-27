const form = document.querySelector(".prediction-form");
const meter = document.querySelector("#profileMeter");
const scoreText = document.querySelector("#profileScore");

function numberValue(name, fallback = 0) {
    const field = form?.querySelector(`[name="${name}"]`);
    const value = Number.parseFloat(field?.value);
    return Number.isFinite(value) ? value : fallback;
}

function selectValue(name) {
    return form?.querySelector(`[name="${name}"]`)?.value || "";
}

function calculatePreviewScore() {
    if (!form || !meter || !scoreText) {
        return;
    }

    const income = numberValue("annual_income");
    const paid = numberValue("emi_paid_off");
    const dues = numberValue("emi_past_dues");
    const loans = numberValue("number_of_loans");
    const employment = numberValue("days_employed");
    const age = numberValue("days_birth");
    const family = numberValue("family_members", 1);

    let score = 45;

    score += income >= 250000 ? 18 : income >= 100000 ? 12 : income >= 50000 ? 7 : -8;
    score += paid >= 3 ? 14 : paid >= 1 ? 8 : 0;
    score += dues === 0 ? 12 : dues <= 2 ? 2 : -18;
    score += loans <= 2 ? 8 : loans <= 5 ? 2 : -10;
    score += employment >= 3 ? 8 : employment < 1 ? -4 : 0;
    score += age >= 23 && age <= 60 ? 5 : 0;
    score += selectValue("own_car") === "Yes" ? 3 : 0;
    score += selectValue("own_realty") === "Yes" ? 5 : 0;
    score += ["Working", "Commercial associate", "State servant"].includes(selectValue("income_type")) ? 5 : 0;
    score += family > 5 ? -5 : 0;

    const finalScore = Math.max(0, Math.min(100, Math.round(score)));
    meter.style.width = `${finalScore}%`;
    scoreText.textContent = `${finalScore}% profile strength`;

    return finalScore;
}

if (form) {
    form.addEventListener("input", calculatePreviewScore);
    form.addEventListener("change", calculatePreviewScore);
    form.addEventListener("submit", (event) => {
        if (!form.hasAttribute("data-static-predict")) {
            return;
        }

        event.preventDefault();

        const score = calculatePreviewScore();
        const approved = score >= 60;
        const result = document.querySelector("#staticResult");
        const card = result?.querySelector(".result-card");

        document.querySelector("#staticApplicant").textContent =
            form.querySelector('[name="applicant_name"]').value || "Applicant";
        document.querySelector("#staticBadge").textContent = approved
            ? "Credit Card Approved"
            : "Credit Card Rejected";
        document.querySelector("#staticRing").style.setProperty("--score", score);
        document.querySelector("#staticScore").textContent = `${score}%`;
        document.querySelector("#staticRisk").textContent =
            score >= 80 ? "Low Risk" : score >= 60 ? "Moderate Risk" : "High Risk";
        document.querySelector("#staticMessage").textContent = approved
            ? "The applicant profile shows healthy repayment behavior and acceptable financial risk."
            : "The applicant profile needs stronger repayment history or lower risk indicators before approval.";

        card.classList.toggle("approved", approved);
        card.classList.toggle("rejected", !approved);
        result.hidden = false;
        result.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    calculatePreviewScore();
}

document.querySelectorAll(".credit-card-preview").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `rotateX(${y * -8}deg) rotateY(${x * 10}deg) rotate(-3deg)`;
    });

    card.addEventListener("pointerleave", () => {
        card.style.transform = "rotate(-3deg)";
    });
});
