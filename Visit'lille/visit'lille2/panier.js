const radio = document.querySelectorAll("input[type=radio]");

radio.forEach((item) =>
    item.addEventListener("click", (e) => {
        console.log("yes");
        document.body.classList.remove("carteBleue", "PAYPAL", "debitCompte")
    }))