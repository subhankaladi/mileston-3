// function printpdf() {
//     const content = document.getElementById("resume");

//     // Hide all buttons and checkboxes before printing
//     document.querySelectorAll("#print button, .input-checkbox").forEach(el => el.classList.add("none"));
    
//     html2pdf(content, {
//         html2canvas: { scale: 1, logging: true, dpi: 500 }
//     }).then(() => {
//         // Restore all buttons and checkboxes after printing
//         document.querySelectorAll("#print button, .input-checkbox").forEach(el => el.classList.remove("none"));
//     });
// }

// // Generic add function to handle dynamic elements
// function addElement(parentId, templateHtml) {
//     const head = document.createElement('div');
//     document.getElementById(parentId).appendChild(head);
//     head.innerHTML = templateHtml;
//     saveresume();
// }

// // Generic remove function to handle checkbox-based deletion
// function removeElement(event, alertMsg) {
//     const allInputCheckboxes = event.target.parentElement.getElementsByClassName("input-checkbox");
//     const array = Array.from(allInputCheckboxes);
//     let itemRemoved = false;

//     if (array.length === 0) {
//         alert(alertMsg);
//     } else {
//         array.forEach(element => {
//             if (element.checked === true) {
//                 element.parentElement.parentElement.remove();
//                 itemRemoved = true;
//             }
//         });
//         if (!itemRemoved) alert("Please select the checkboxes to delete the required field!");
//     }
//     saveresume();
// }

// // Specific functions for adding and removing sections
// function addedu() {
//     addElement("education", '<div class="edublock"><span><input type="checkbox" class="input-checkbox"></span><span class="education-head" contenteditable="true">YOUR DEGREE</span><div><span contenteditable="true">Institute name</span> - <span contenteditable="true">Passing Year</span></div></div>');
// }
// function remedu(event) {
//     removeElement(event, "No fields are present to be deleted!");
// }

// function addskill() {
//     addElement("skills", '<div class="skill"><span><input type="checkbox" class="input-checkbox"></span><span><i class="fas fa-chevron-circle-right"></i></span><span contenteditable="true">write your skill here</span></div>');
// }
// function remskill(event) {
//     removeElement(event, "No skills to delete!");
// }

// function addLang() {
//     addElement("languages", '<div class="language"><span><input type="checkbox" class="input-checkbox"></span><span contenteditable="true">LANGNAME</span> - <span contenteditable="true">level u know</span></div>');
// }
// function remLang(event) {
//     removeElement(event, "No languages to delete!");
// }

// function addAch() {
//     addElement("achievement", '<div class="achieve"><span><input type="checkbox" class="input-checkbox"></span><span contenteditable="true">Write your achievement</span></div>');
// }
// function remAch(event) {
//     removeElement(event, "No achievements to delete!");
// }

// function addInt() {
//     addElement("interest", '<div class="achieve"><span><input type="checkbox" class="input-checkbox"></span><span contenteditable="true">Write interest</span></div>');
// }
// function remInt(event) {
//     removeElement(event, "No interests to delete!");
// }

// let maxNewSection = 1;
// function addsec() {
//     if (maxNewSection < 2) {
//         addElement("newsec", '<div><br><br><span><input type="checkbox" class="input-checkbox"></span><span class="title" contenteditable="true">NEW SECTION</span><br><br><div contenteditable="true">This is the description part of your new section. Try to stay within limit and write something which has less than 400 characters.</div></div>');
//         maxNewSection++;
//     } else {
//         alert("At most 2 NEW SECTION can be added!");
//     }
// }
// function remsec(event) {
//     removeElement(event, "No new sections to delete!");
//     maxNewSection--;
// }

// function saveresume() {
//     const sec = document.getElementById("print");
//     const info = document.getElementById("custinfo");
//     info.value = sec.innerHTML;
// }
