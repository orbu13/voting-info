window.onload = function() {
    const form =document.querySelector("form");
    form.onsubmit = function(event) {
        event.preventDefault();
        let atAge = document.getElementById("atage");
        atAge.setAttribute("class", "hidden");
        let underAge = document.getElementById("underage");
        underAge.setAttribute("class","hidden");
        const age = parseInt(document.querySelector("input#age").value);
        let at18 = document.getElementById("congratsOn18");
        at18.setAttribute("class", "hidden");
        if (age >= 18) {
            atAge.removeAttribute("class");
        } else if (age === 18) {
            at18.removeAttribute("class");
        } else {
            underAge.removeAttribute("class");
        }
    };
};