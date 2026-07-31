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

}// ===== ScholarGuide AI Assistant =====

function askAI(){

    let question = document.getElementById("aiQuestion").value
        .trim()
        .toLowerCase();

    let answer = document.getElementById("aiAnswer");

    if(question === ""){
        answer.innerHTML = `
            <p>💬 Please ask me something first!</p>
        `;
        return;
    }

    let response = "";

    if(question.includes("best scholarship") || question.includes("best for me")){
        response = `
            <h3>🎓 Finding the Best Scholarship</h3>
            <p>The best scholarship depends on your education level, country, percentage and scholarship requirements.</p>
            <p>💡 Start with the Eligibility Checker above to find a suitable opportunity.</p>
        `;
    }

    else if(question.includes("germany")){
        response = `
            <h3>🇩🇪 Germany Scholarships</h3>
            <p>DAAD offers many scholarship opportunities for international students.</p>
            <p>💡 Check the official requirements before applying.</p>
            <a href="daad.html" class="primary-btn">View DAAD →</a>
        `;
    }
else if(question.includes("usa") || question.includes("united states") || question.includes("america")){
    response = `
        <h3>🇺🇸 Fulbright Scholarship</h3>
        <p>Fulbright offers scholarship opportunities for international students and researchers in the USA.</p>
        <a href="usa.html" class="primary-btn">View Fulbright →</a>
    `;
}

else if(question.includes("uk") || question.includes("united kingdom") || question.includes("britain")){
    response = `
        <h3>🇬🇧 Chevening Scholarship</h3>
        <p>Chevening is a UK government scholarship programme for eligible international students.</p>
        <a href="chevening.html" class="primary-btn">View Chevening →</a>
    `;
}

else if(question.includes("canada")){
    response = `
        <h3>🇨🇦 Canada Scholarships</h3>
        <p>Explore scholarship opportunities in Canada and check each programme's specific eligibility requirements.</p>
        <a href="canada.html" class="primary-btn">View Canada →</a>
    `;
}

else if(question.includes("japan") || question.includes("mext")){
    response = `
        <h3>🇯🇵 MEXT Scholarship</h3>
        <p>MEXT is a Japanese government scholarship programme for international students.</p>
        <a href="mext.html" class="primary-btn">View MEXT →</a>
    `;
}

else if(question.includes("australia")){
    response = `
        <h3>🇦🇺 Australia Awards</h3>
        <p>Australia Awards provides opportunities for eligible students from participating countries.</p>
        <a href="australia.html" class="primary-btn">View Australia Awards →</a>
    `;
}

else if(question.includes("turkey") || question.includes("turkiye")){
    response = `
        <h3>🇹🇷 Türkiye Scholarships</h3>
        <p>Türkiye Scholarships offers opportunities for international students to study in Türkiye.</p>
        <a href="turkiye.html" class="primary-btn">View Türkiye Scholarships →</a>
    `;
}

else if(question.includes("europe") || question.includes("erasmus")){
    response = `
        <h3>🇪🇺 Erasmus Mundus</h3>
        <p>Erasmus Mundus Joint Masters provide opportunities to study through international joint programmes in Europe.</p>
        <a href="europe.html" class="primary-btn">View Erasmus Mundus →</a>
    `;
}
    else if(question.includes("document")){
        response = `
            <h3>📄 Common Documents</h3>
            <p>Commonly requested documents can include academic transcripts, proof of identity, recommendation letters and a statement of purpose.</p>
            <p>⚠️ Requirements vary by scholarship.</p>
        `;
    }

    else if(question.includes("fully funded") || question.includes("funded")){
        response = `
            <h3>💰 Fully Funded Scholarships</h3>
            <p>ScholarGuide AI lists opportunities such as GKS, DAAD, CSC, MEXT and other major scholarship programs.</p>
            <p>Always verify exactly what expenses are covered by the official scholarship.</p>
        `;
    }

    else if(question.includes("korea") || question.includes("gks")){
        response = `
            <h3>🇰🇷 GKS Scholarship</h3>
            <p>The Global Korea Scholarship supports international students studying in South Korea.</p>
            <a href="gks.html" class="primary-btn">View GKS →</a>
        `;
    }

    else if(question.includes("china") || question.includes("csc")){
        response = `
            <h3>🇨🇳 CSC Scholarship</h3>
            <p>The Chinese Government Scholarship provides opportunities for international students to study in China.</p>
            <a href="csc.html" class="primary-btn">View CSC →</a>
        `;
    }

    else {
        response = `
            <h3>🤖 ScholarGuide AI</h3>
            <p>I can help you explore scholarships, countries, eligibility and application documents.</p>
            <p>Try asking:</p>
            <p>🎓 Which scholarship is best for me?</p>
            <p>🇩🇪 Tell me about Germany scholarships</p>
            <p>📄 What documents do I need?</p>
        `;
    }

    answer.innerHTML = response;
}


// ===== Quick AI Questions =====

function quickAsk(question){

    document.getElementById("aiQuestion").value = question;

    askAI();

}


        
