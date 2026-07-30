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
// ===== Quick AI Questions =====

function quickAsk(question){

    document.getElementById("aiQuestion").value = question;

    askAI();

}
    const question = document
        .getElementById("aiQuestion")
        .value
        .toLowerCase()
        .trim();

    const answer = document.getElementById("aiAnswer");

    if(question === ""){

        answer.innerHTML = `
        <p>💬 Please ask me something first!</p>
        `;

        return;
    }


    let response = "";


    if(
        question.includes("best scholarship") ||
        question.includes("which scholarship")
    ){

        response = `
        <h3>🎯 Finding the right scholarship</h3>
        <p>
        The best scholarship depends on your education level,
        academic performance, country preference and programme.
        </p>
        <p>
        💡 Try our <b>Smart Eligibility Checker</b> above to
        find a matching opportunity.
        </p>
        `;

    }


    else if(
        question.includes("germany") ||
        question.includes("daad")
    ){

        response = `
        <h3>🇩🇪 DAAD Scholarship</h3>
        <p>
        DAAD offers different study, research and exchange
        opportunities in Germany.
        </p>
        <a href="daad.html" class="primary-btn">
        View DAAD →
        </a>
        `;

    }


    else if(
        question.includes("korea") ||
        question.includes("gks")
    ){

        response = `
        <h3>🇰🇷 GKS Scholarship</h3>
        <p>
        GKS is a major scholarship programme for international
        students interested in studying in South Korea.
        </p>
        <a href="gks.html" class="primary-btn">
        View GKS →
        </a>
        `;

    }


    else if(
        question.includes("china") ||
        question.includes("csc")
    ){

        response = `
        <h3>🇨🇳 CSC Scholarship</h3>
        <p>
        The Chinese Government Scholarship provides opportunities
        for international students in China.
        </p>
        <a href="csc.html" class="primary-btn">
        View CSC →
        </a>
        `;

    }


    else if(
        question.includes("documents") ||
        question.includes("document")
    ){

        response = `
        <h3>📄 Common Scholarship Documents</h3>
        <p>
        Requirements vary by scholarship, but commonly requested
        documents can include academic records, a CV, motivation
        letter, recommendations and identity documents.
        </p>
        `;

    }


    else if(
        question.includes("eligibility") ||
        question.includes("eligible")
    ){

        response = `
        <h3>✅ Check Your Eligibility</h3>
        <p>
        Your eligibility depends on the scholarship's exact
        requirements.
        </p>
        <p>
        🎯 Use the <b>Smart Eligibility Checker</b> above for
        an initial scholarship match.
        </p>
        `;

    }


    else if(
        question.includes("fully funded") ||
        question.includes("funding")
    ){

        response = `
        <h3>💰 Fully Funded Scholarships</h3>
        <p>
        Some scholarships may provide financial support such as
        tuition assistance, living support, insurance or travel
        benefits. The exact benefits vary by programme.
        </p>
        `;

    }


    else {

        response = `
        <h3>🤖 ScholarGuide AI</h3>
        <p>
        I can help you explore scholarships, eligibility,
        countries, funding and application documents.
        </p>
        <p>
        💡 Try asking:
        <br>
        “Which scholarship is best for me?”
        <br>
        “Tell me about GKS”
        <br>
        “What documents do I need?”
        </p>
        `;

    }


    answer.innerHTML = response;

}
