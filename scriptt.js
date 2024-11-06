"use strict";
// script.ts
document.addEventListener('DOMContentLoaded', () => {
    const skillsContainer = document.getElementById('skills');
    const languagesContainer = document.getElementById('languages');
    const achievementContainer = document.getElementById('achievement');
    const interestContainer = document.getElementById('interest');
    const educationContainer = document.getElementById('education');
    const newsecContainer = document.getElementById('newsec');
    // Function to add a skill
    window.addskill = function () {
        const skillDiv = document.createElement('div');
        skillDiv.innerHTML = `<span><input type="checkbox" class="input-checkbox"></span>
                              <span><i class="fas fa-chevron-circle-right"></i></span>
                              <span contenteditable="true">write your skill here</span>`;
        skillsContainer.appendChild(skillDiv);
    };
    // Function to remove a skill
    window.remskill = function (event) {
        event.preventDefault();
        const skills = skillsContainer.children;
        if (skills.length > 0) {
            skillsContainer.removeChild(skills[skills.length - 1]);
        }
    };
    // Similar functions can be created for addLang, remLang, addAch, remAch, addInt, remInt, addedu, remedu, addsec, remsec
    // Example for adding education
    window.addedu = function () {
        const eduDiv = document.createElement('div');
        eduDiv.className = 'edublock';
        eduDiv.innerHTML = `<span><input type="checkbox" class="input-checkbox"></span>
                            <span class="education-head" contenteditable="true">YOUR DEGREE</span>
                            <div><span contenteditable="true">Institute name</span> - 
                            <span contenteditable="true">Passing Year</span></div>`;
        educationContainer.appendChild(eduDiv);
    };
    // Function to toggle visibility
    window.toggleSection = function (sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.style.display = section.style.display === 'none' ? 'block' : 'none';
        }
    };
});
