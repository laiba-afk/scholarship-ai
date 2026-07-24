// ===============================
// ScholarGuide AI v2
// ===============================

// Country Dropdown
function openCountryPage() {

const page = document.getElementById("countrySelect").value;

if(page !== ""){
window.location.href = page;
}

}

// Search Scholarship
function searchScholarship(){

const country = document
.getElementById("searchBox")
.value
.toLowerCase()
.trim();

if(country=="germany"){
window.location.href="daad.html";
}

else if(country=="usa" || country=="united states"){
window.location.href="usa.html";
}

else if(country=="united kingdom" || country=="uk"){
window.location.href="chevening.html";
}

else if(country=="canada"){
window.location.href="canada.html";
}

else if(country=="south korea" || country=="korea"){
window.location.href="gks.html";
}

else if(country=="japan"){
window.location.href="mext.html";
}

else if(country=="china"){
window.location.href="csc.html";
}

else if(country=="australia"){
window.location.href="australia.html";
}

else if(country=="turkey" || country=="türkiye"){
window.location.href="turkiye.html";
}

else if(country=="europe"){
window.location.href="europe.html";
}

else{

alert("❌ Scholarship not found!");

}

}
// ===============================
// AI Eligibility Checker
// ===============================

function checkEligibility(){

const education = document.getElementById("education").value;
const percentage = parseInt(document.getElementById("percentage").value);

let result = "";

if(isNaN(percentage)){
result = "❌ Please enter your percentage.";
}

else if(percentage >= 90){

result = "🎉 Excellent! You have a strong chance for many fully funded scholarships.";

}

else if(percentage >= 75){

result = "✅ Good! You may be eligible for several international scholarships.";

}

else if(percentage >= 60){

result = "📚 You can still apply for many scholarships. Keep improving your profile.";

}

else{

result = "💪 Don't worry! Improve your academics and extracurricular activities.";

}

document.getElementById("result").innerHTML = result;

}

// ===============================
// Future AI Assistant
// ===============================

function askAI(){

alert("🤖 AI Assistant is coming soon!");

}
