// ===== Scholarship Search =====

function searchScholarship(){

let search = document.getElementById("searchBox").value.toLowerCase();

const pages = {
"germany":"daad.html",
"usa":"usa.html",
"united states":"usa.html",
"uk":"chevening.html",
"united kingdom":"chevening.html",
"canada":"canada.html",
"korea":"gks.html",
"south korea":"gks.html",
"japan":"mext.html",
"china":"csc.html",
"australia":"australia.html",
"turkiye":"turkiye.html",
"turkey":"turkiye.html",
"europe":"europe.html"
};

if(pages[search]){
window.location.href = pages[search];
}else{
alert("Scholarship not found.");
}

}

// ===== Country Select =====

function openCountryPage(){

let page = document.getElementById("countrySelect").value;

if(page!=""){
window.location.href = page;
}

}

// ===== Smart Eligibility Checker =====

function checkEligibility(){

let education = document.getElementById("education").value;
let percentage = Number(document.getElementById("percentage").value);
let country = document.getElementById("country").value;
let result = document.getElementById("result");

if(education=="" || percentage==0 || country==""){
result.style.display="block";
result.innerHTML="⚠ Please fill all fields.";
return;
}

let score = 0;

if(percentage>=95){
score=98;
}
else if(percentage>=90){
score=92;
}
else if(percentage>=80){
score=85;
}
else if(percentage>=70){
score=72;
}
else{
score=55;
}

result.style.display="block";

result.innerHTML=`
<h3>🎯 Eligibility Score: ${score}%</h3>

<p><b>🎓 Education:</b> ${education}</p>

<p><b>🌍 Preferred Country:</b> ${country}</p>

<p><b>💰 Funding:</b> Fully Funded Scholarships Available</p>

<p><b>📄 Documents:</b> Passport, Academic Transcript, SOP, Recommendation Letter</p>

<p><b>💡 Recommendation:</b> Continue preparing a strong application and apply before the deadline.</p>
`;

}

// ===== AI Assistant =====

function askAI(){

alert("🚀 AI Assistant will be available in the next update.");

}
