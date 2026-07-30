// ===== Smart Eligibility Checker =====

function checkEligibility(){

    let education = document.getElementById("education").value;
    let percentage = Number(document.getElementById("percentage").value);
    let english = document.getElementById("english").value;
    let country = document.getElementById("country").value;
    let result = document.getElementById("result");

    if(education === "" || percentage === 0 || country === ""){

        result.style.display = "block";

        result.innerHTML = `
        <h3>⚠️ Please complete your details</h3>
        <p>Select your education, enter your percentage and choose a country.</p>
        `;

        return;
    }


    // ===== Eligibility Score =====

    let score;

    if(percentage >= 95){
        score = 98;
    }
    else if(percentage >= 90){
        score = 92;
    }
    else if(percentage >= 80){
        score = 85;
    }
    else if(percentage >= 70){
        score = 72;
    }
    else if(percentage >= 60){
        score = 62;
    }
    else{
        score = 50;
    }


    // ===== Scholarship Matching =====

    const scholarships = {

        "Germany": {
            name: "DAAD Scholarship",
            page: "daad.html",
            flag: "🇩🇪"
        },

        "USA": {
            name: "Fulbright",
            page: "usa.html",
            flag: "🇺🇸"
        },

        "United Kingdom": {
            name: "Chevening Scholarship",
            page: "chevening.html",
            flag: "🇬🇧"
        },

        "Canada": {
            name: "Vanier Scholarship",
            page: "canada.html",
            flag: "🇨🇦"
        },

        "South Korea": {
            name: "GKS Scholarship",
            page: "gks.html",
            flag: "🇰🇷"
        },

        "Japan": {
            name: "MEXT Scholarship",
            page: "mext.html",
            flag: "🇯🇵"
        },

        "China": {
            name: "CSC Scholarship",
            page: "csc.html",
            flag: "🇨🇳"
        },

        "Australia": {
            name: "Australia Awards",
            page: "australia.html",
            flag: "🇦🇺"
        },

        "Türkiye": {
            name: "Türkiye Scholarships",
            page: "turkiye.html",
            flag: "🇹🇷"
        }

    };


    let scholarship = scholarships[country];


    // ===== Result =====

    result.style.display = "block";

    result.innerHTML = `

    <div class="ai-result">

        <h3>🤖 AI Eligibility Result</h3>

        <h2>🎯 ${score}% Match</h2>

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
        <b>🇬🇧 English Test:</b> ${english || "Not selected"}
        </p>

        <hr>

        <h3>
        ⭐ Recommended Scholarship
        </h3>

        <p style="font-size:18px;">
        ${scholarship.flag} <b>${scholarship.name}</b>
        </p>

        <p>
        💰 Funding: Check the official scholarship requirements
        </p>

        <p>
        💡 Your result is an initial match, not a final eligibility decision.
        Always check the official scholarship requirements.
        </p>

        <a href="${scholarship.page}" class="primary-btn">
        View Scholarship →
        </a>

    </div>

        `;

}

// ===== AI Assistant =====

function askAI(){

alert("🚀 AI Assistant will be available in the next update.");

}

