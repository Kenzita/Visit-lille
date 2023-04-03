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
 *                       Connexion
 **********************************************************/
const inputEmail = document.getElementById("add");
const inputPassword = document.getElementById("pw");
const connexionBtn = document.getElementById("sub");

const typeText = document.querySelectorAll("input");
let inputs = [email, password];

alert("biroute");
connexionBtn.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.setItem("connexion", "non connecté")
    for (const client of dataClient) {
        if (inputEmail.value === client.email && inputPassword.value === client.password) {
            profil = client;
            alert("Connection établie !")
            localStorage.setItem("connexion", "connecté")
        } else {
            for (const _input of inputs) {
                if (inputs.value == "") {
                    alert(`le champ ${inputs.parameter}n'est pas renseigné`)
                }

            }
        }
    }
})

if (inputs.value == "") {

} else {

}