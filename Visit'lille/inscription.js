class Personne {
    constructor(nom, prenom, email, password) {
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.password = password;
    }
}
let dataClient = []
let stringDataClient = localStorage.getItem("dataClient");
if (stringDataClient) {
    dataClient = JSON.parse(stringDataClient);
}



/**********************************************************
*                       Inscription
 **********************************************************/

const inputPrenom = document.getElementById("forname");
const inputNom = document.getElementById("name");
const inputEmail = document.getElementById("add2");
const inputPassword = document.getElementById("pw2");
const inputPasswordConfirm = document.getElementById("pw3");
const submitBtn = document.getElementById("insc");

const typeText = document.querySelectorAll("input");
//console.log("typeText");
let inputs = [inputPrenom, inputNom, inputEmail, inputPassword, inputPasswordConfirm];

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (inputPassword.value === inputPasswordConfirm.value && inputs.parameter.value != "") {
        dataClient.push(
            new Personne(
                inputNom.value,
                inputPrenom.value,
                inputEmail.value,
                inputPassword.value
            )
        )
        alert("Inscription réussie !");

    } else {
        for (const _input of inputs) {
            if (inputs.value = null) {
                alert(`le champ ${inputs.parameter}n'est pas renseigné`)
            } else {
            }
            alert("Le mot de passe et sa confirmation ne sont pas identiques !")
        }
        console.log(dataClient);
        localStorage.setItem("dataClient", JSON.stringify(dataClient));
    }
    // dataClient : [ {""nom" : "machin", "prenom": "truc"    }]
})