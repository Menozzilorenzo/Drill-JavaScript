/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let jour = document.getElementById("dob-day").value;
        let mois = document.getElementById("dob-month").value;
        let annee = document.getElementById("dob-year").value;
        function calculate_age(dob){
            let diff_ms = Date.now() - dob.getTime();
            let age_dt = new Date(diff_ms);
            return(Math.abs(age_dt.getUTCFullYear() - 1970));
        }
        alert(calculate_age(new Date(annee, mois, jour)));
    });
})();

        /*let today = new Date();
        let date = today.getFullYear() + `-` + (today.getMonth() +1) + `-` + today.getDate();
        console.log(date);
        let diff = Math.abs(date - birthDate());
        console.log(diff);*/