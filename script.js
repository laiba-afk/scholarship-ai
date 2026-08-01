// ===== ScholarGuide AI - Smart Eligibility Checker =====

function checkEligibility() {

    const education = document.getElementById("education").value;
    const percentage = Number(document.getElementById("percentage").value);
    const english = document.getElementById("english").value;
    const country = document.getElementById("country").value;
    const result = document.getElementById("result");

    // Validation
    if (education === "" || !percentage || percentage < 0 || percentage > 100 || country === "") {
        result.style.display = "block";

        result.innerHTML = `
            <div class="ai-result">
                <h3>⚠️ Complete Your Details</h3>
                <p>Please select your education, enter a valid percentage and choose a country.</p>
            </div>
        `;

        return;
    }

    // Scholarship database
    const scholarships = {
        "Germany": {
            name: "DAAD Scholarship",
            page: "daad.html",
            flag: "🇩🇪",
            minimum: 70
        },

        "USA": {
            name: "Fulbright",
            page: "usa.html",
            flag: "🇺🇸",
            minimum: 75
        },

        "United Kingdom": {
            name: "Chevening Scholarship",
            page: "chevening.html",
            flag: "🇬🇧",
            minimum: 70
        },

        "Canada": {
            name: "Vanier Scholarship",
            page: "canada.html",
            flag: "🇨🇦",
            minimum: 75
        },

        "South Korea": {
            name: "GKS Scholarship",
            page: "gks.html",
            flag: "🇰🇷",
            minimum: 80
        },

        "Japan": {
            name: "MEXT Scholarship",
            page: "mext.html",
            flag: "🇯🇵",
            minimum: 75
        },

        "China": {
            name: "CSC Scholarship",
            page: "csc.html",
            flag: "🇨🇳",
            minimum: 70
        },

        "Australia": {
            name: "Australia Awards",
            page: "australia.html",
            flag: "🇦🇺",
            minimum: 70
        },

        "Türkiye": {
            name: "Türkiye Scholarships",
            page: "turkiye.html",
            flag: "🇹🇷",
            minimum: 70
        }
    };

    const scholarship = scholarships[country];

    if (!scholarship) {
        result.style.display = "block";
        result.innerHTML = `
            <div class="ai-result">
                <h3>⚠️ No scholarship found</h3>
                <p>We don't have a scholarship listed for this country yet.</p>
            </div>
        `;
        return;
    }

    // ===== Smart Match Score =====

    let score = 0;

    // Academic score
    if (percentage >= 95) {
        score += 60;
    } else if (percentage >= 90) {
        score += 55;
    } else if (percentage >= 85) {
        score += 50;
    } else if (percentage >= 80) {
        score += 45;
    } else if (percentage >= 70) {
        score += 35;
    } else if (percentage >= 60) {
        score += 25;
    } else {
        score += 15;
    }

    // English test
    if (english !== "" && english !== "Not Yet") {
        score += 20;
    } else {
        score += 10;
    }

    // Education level
    if (education === "Class 12") {
        score += 10;
    } else if (education === "Bachelor's") {
        score += 10;
    } else if (education === "Master's") {
        score += 10;
    }

    // Country preference
    score += 10;

    // Maximum 100
    score = Math.min(score, 100);

    // Match label
    let matchLabel;
    let emoji;

    if (score >= 80) {
        matchLabel = "Strong Match";
        emoji = "🟢";
    } else if (score >= 65) {
        matchLabel = "Possible Match";
        emoji = "🟡";
    } else {
        matchLabel = "Needs Improvement";
        emoji = "🔴";
    }

    // Minimum academic requirement warning
    let academicMessage = "";

    if (percentage >= scholarship.minimum) {
        academicMessage = `
            <p>✅ Your percentage is above our basic screening threshold.</p>
        `;
    } else {
        academicMessage = `
            <p>⚠️ Your percentage is below our basic screening threshold for this recommendation.</p>
        `;
    }

    // ===== Display Result =====

    result.style.display = "block";

    result.innerHTML = `
        <div class="ai-result">

            <h3>🤖 ScholarGuide AI Result</h3>

            <h2>${emoji} ${score}% Match</h2>

            <h3>${matchLabel}</h3>

            <hr>

            <p>
                <b>🎓 Education:</b> ${education}
            </p>

            <p>
                <b>📊 Percentage:</b> ${percentage}%
            </p>

            <p>
                <b>🌍 Country:</b> ${country}
            </p>

            <p>
                <b>🇬🇧 English Test:</b>
                ${english || "Not selected"}
            </p>

            ${academicMessage}

            <hr>

            <h3>⭐ Recommended Scholarship</h3>

            <p style="font-size:18px;">
                ${scholarship.flag}
                <b>${scholarship.name}</b>
            </p>

            <p>
                💰 Funding: Check the official scholarship requirements.
            </p>

            <a href="${scholarship.page}" class="primary-btn">
                View Scholarship →
            </a>

            <p style="font-size:13px; margin-top:15px;">
                ⚠️ This is an initial matching tool, not a final eligibility decision.
                Always verify the official scholarship requirements.
            </p>

        </div>
    `;
}


// ===== ScholarGuide AI Assistant =====

function askAI() {

    const questionInput = document.getElementById("aiQuestion");
    const answer = document.getElementById("aiAnswer");

    const question = questionInput.value.trim().toLowerCase();

    if (question === "") {
        answer.innerHTML = `
            <p>💬 Please ask me something first!</p>
        `;
        return;
    }

    let response = "";

    if (
        question.includes("best scholarship") ||
        question.includes("best for me")
    ) {
        response = `
            <h3>🎓 Find Your Best Scholarship</h3>
            <p>
                Your best scholarship depends on your education level,
                academic percentage, country and programme requirements.
            </p>
            <p>💡 Try our Smart Eligibility Checker.</p>
        `;
    }

    else if (question.includes("germany")) {
        response = `
            <h3>🇩🇪 Germany Scholarships</h3>
            <p>
                DAAD provides scholarship opportunities for international students.
                Requirements vary by programme.
            </p>
            <a href="daad.html" class="primary-btn">View DAAD →</a>
        `;
    }

    else if (
        question.includes("usa") ||
        question.includes("united states") ||
        question.includes("america")
    ) {
        response = `
            <h3>🇺🇸 Fulbright</h3>
            <p>
                Fulbright offers opportunities for eligible international students
                and researchers in the USA.
            </p>
            <a href="usa.html" class="primary-btn">View Fulbright →</a>
        `;
    }

    else if (
        question.includes("uk") ||
        question.includes("united kingdom") ||
        question.includes("britain")
    ) {
        response = `
            <h3>🇬🇧 Chevening</h3>
            <p>
                Chevening is a UK government scholarship programme
                for eligible international students.
            </p>
            <a href="chevening.html" class="primary-btn">View Chevening →</a>
        `;
    }

    else if (question.includes("canada")) {
        response = `
            <h3>🇨🇦 Canada Scholarships</h3>
            <p>
                Explore Canadian scholarship opportunities and check
                each programme's official requirements.
            </p>
            <a href="canada.html" class="primary-btn">View Canada →</a>
        `;
    }

    else if (
        question.includes("korea") ||
        question.includes("gks")
    ) {
        response = `
            <h3>🇰🇷 GKS Scholarship</h3>
            <p>
                The Global Korea Scholarship supports eligible international
                students studying in South Korea.
            </p>
            <a href="gks.html" class="primary-btn">View GKS →</a>
        `;
    }

    else if (
        question.includes("japan") ||
        question.includes("mext")
    ) {
        response = `
            <h3>🇯🇵 MEXT Scholarship</h3>
            <p>
                MEXT is a Japanese government scholarship programme
                for eligible international students.
            </p>
            <a href="mext.html" class="primary-btn">View MEXT →</a>
        `;
    }

    else if (
        question.includes("china") ||
        question.includes("csc")
    ) {
        response = `
            <h3>🇨🇳 CSC Scholarship</h3>
            <p>
                The Chinese Government Scholarship provides opportunities
                for international students.
            </p>
            <a href="csc.html" class="primary-btn">View CSC →</a>
        `;
    }

    else if (question.includes("australia")) {
        response = `
            <h3>🇦🇺 Australia Awards</h3>
            <p>
                Australia Awards provides opportunities for eligible students
                from participating countries.
            </p>
            <a href="australia.html" class="primary-btn">
                View Australia Awards →
            </a>
        `;
    }

    else if (
        question.includes("turkey") ||
        question.includes("turkiye")
    ) {
        response = `
            <h3>🇹🇷 Türkiye Scholarships</h3>
            <p>
                Türkiye Scholarships offers opportunities for eligible
                international students.
            </p>
            <a href="turkiye.html" class="primary-btn">
                View Türkiye Scholarships →
            </a>
        `;
    }

    else if (
        question.includes("europe") ||
        question.includes("erasmus")
    ) {
        response = `
            <h3>🇪🇺 Erasmus Mundus</h3>
            <p>
                Erasmus Mundus Joint Masters provide opportunities through
                international joint programmes in Europe.
            </p>
            <a href="europe.html" class="primary-btn">
                View Erasmus Mundus →
            </a>
        `;
    }

    else if (question.includes("document")) {
        response = `
            <h3>📄 Common Documents</h3>
            <p>
                Scholarships may request academic transcripts,
                identification documents, recommendation letters,
                and a statement of purpose.
            </p>
            <p>⚠️ Requirements vary by scholarship.</p>
        `;
    }

    else if (
        question.includes("fully funded") ||
        question.includes("funded")
    ) {
        response = `
            <h3>💰 Fully Funded Scholarships</h3>
            <p>
                ScholarGuide AI lists major opportunities such as
                GKS, DAAD, CSC, MEXT and others.
            </p>
            <p>
                Always verify exactly what expenses are covered
                on the official scholarship website.
            </p>
        `;
    }

    else {
        response = `
            <h3>🤖 ScholarGuide AI</h3>
            <p>
                I can help you explore scholarships, countries,
                eligibility and application documents.
            </p>

            <p>Try asking:</p>

            <p>🎓 Which scholarship is best for me?</p>
            <p>🇩🇪 Tell me about Germany scholarships</p>
            <p>📄 What documents do I need?</p>
            <p>💰 Which scholarships are fully funded?</p>
        `;
    }

    answer.innerHTML = response;
}


// ===== Quick Questions =====

function quickAsk(question) {

    document.getElementById("aiQuestion").value = question;

    askAI();
}


// ===== Scholarship Search =====

function searchScholarship() {

    const searchBox = document.getElementById("searchBox");
    const countrySelect = document.getElementById("countrySelect");

    const search = searchBox.value.trim().toLowerCase();

    if (search === "") {
        alert("Please enter a country to search.");
        return;
    }

    const countries = {
        germany: "daad.html",
        usa: "usa.html",
        america: "usa.html",
        "united states": "usa.html",
        uk: "chevening.html",
        "united kingdom": "chevening.html",
        canada: "canada.html",
        korea: "gks.html",
        "south korea": "gks.html",
        japan: "mext.html",
        china: "csc.html",
        australia: "australia.html",
        turkey: "turkiye.html",
        turkiye: "turkiye.html",
        europe: "europe.html"
    };

    if (countries[search]) {
        window.location.href = countries[search];
        return;
    }

    alert("🔎 Scholarship for this country is not available yet.");
}


// ===== Country Dropdown =====

function openCountryPage() {

    const select = document.getElementById("countrySelect");

    if (select.value !== "") {
        window.location.href = select.value;
    }
}
