// ===== ScholarGuide AI Premium v4 =====

// Scholarship Finder
function openCountryPage() {

const country =
document.getElementById("countrySelect").value;

if(country !== ""){
window.location.href = country;
}

}

// AI Eligibility Checker
function checkEligibility(){

const education =
document.getElementById("education").value;

const percentage =
parseFloat(document.getElementById("percentage").value);

const result =
document.getElementById("result");

if(isNaN(percentage)){
result.innerHTML = "⚠️ Please enter your percentage.";
return;
}

if(percentage >= 85){
result.innerHTML =
"🎉 Great! You are eligible for many scholarships.";
}

else if(percentage >= 70){
result.innerHTML =
"✅ You may qualify for several scholarships.";
}

else{
result.innerHTML =
"📚 Improve your percentage for better scholarship opportunities.";
}

}
