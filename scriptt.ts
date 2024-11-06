// script.ts
document.addEventListener('DOMContentLoaded', () => {
    const skillsContainer = document.getElementById('skills') as HTMLElement;
    const languagesContainer = document.getElementById('languages') as HTMLElement;
    const achievementContainer = document.getElementById('achievement') as HTMLElement;
    const interestContainer = document.getElementById('interest') as HTMLElement;
    const educationContainer = document.getElementById('education') as HTMLElement;
    const newsecContainer = document.getElementById('newsec') as HTMLElement;

    // Function to add a skill
    (window as any).addskill = function () {
        const skillDiv = document.createElement('div');
        skillDiv.innerHTML = `<span><input type="checkbox" class="input-checkbox"></span>
                              <span><i class="fas fa-chevron-circle-right"></i></span>
                              <span contenteditable="true">write your skill here</span>`;
        skillsContainer.appendChild(skillDiv);
    };

    // Function to remove a skill
    (window as any).remskill = function (event: Event) {
        event.preventDefault();
        const skills = skillsContainer.children;
        if (skills.length > 0) {
            skillsContainer.removeChild(skills[skills.length - 1]);
        }
    };

    // Similar functions can be created for addLang, remLang, addAch, remAch, addInt, remInt, addedu, remedu, addsec, remsec
    // Example for adding education
    (window as any).addedu = function () {
        const eduDiv = document.createElement('div');
        eduDiv.className = 'edublock';
        eduDiv.innerHTML = `<span><input type="checkbox" class="input-checkbox"></span>
                            <span class="education-head" contenteditable="true">YOUR DEGREE</span>
                            <div><span contenteditable="true">Institute name</span> - 
                            <span contenteditable="true">Passing Year</span></div>`;
        educationContainer.appendChild(eduDiv);
    };

    // Function to toggle visibility
    (window as any).toggleSection = function (sectionId: string) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.style.display = section.style.display === 'none' ? 'block' : 'none';
        }
    };
});
