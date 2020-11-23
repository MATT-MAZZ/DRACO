const btn = document.querySelector('.alt_menu');
const menu = document.querySelector('.alt_menu_hidden');

btn.addEventListener("click", () => {
    menu.classList.toggle('alt_menu_show')
});

 

let experiences = document.querySelectorAll('.scroll_experiences');
let achievements = document.querySelectorAll('.scroll_achievements');
let skills = document.querySelectorAll('.scroll_skills');

let experiencesTo = document.querySelector("#experiences");
let achievementsTo = document.querySelector("#achievements");
let skillsTo = document.querySelector("#skills");
                                                               
function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop - 100,
        behavior: "smooth"
    })
}

experiences.forEach(function(item) {
    item.addEventListener('click', function() {
        scrollTo(experiencesTo);
    });
});

achievements.forEach(function(item) {
    item.addEventListener('click', function() {
        scrollTo(achievementsTo);
    });
});

skills.forEach(function(item) {
    item.addEventListener('click', function() {
        scrollTo(skillsTo);
    });
});
