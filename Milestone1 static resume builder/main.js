"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const toggleSkillsButton = document.getElementById("toggle-skills");
    const skillsSection = document.getElementById("skills");
    if (toggleSkillsButton && skillsSection) {
        toggleSkillsButton.addEventListener("click", () => {
            if (skillsSection.style.display === "none") {
                skillsSection.style.display = "block";
                toggleSkillsButton.textContent = "Hide Skills";
            }
            else {
                skillsSection.style.display = "none";
                toggleSkillsButton.textContent = "Show Skills";
            }
        });
    }
});
