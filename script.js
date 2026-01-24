function SuivantForm() {
    const FirstName = document.getElementById("FirstName").value;
    const LastName = document.getElementById("LastName").value;
    const Email = document.getElementById("Email").value;
    const Phone = document.getElementById("PhoneNumber").value;
    if (FirstName === "" || LastName === "" || Email === "" || Phone === "") {
        document.getElementById("errorNone").textContent = "Veuillez remplir tous les champs";
        return false; // Empêche la navigation
    } else {
        // Stocker les données dans localStorage pour les utiliser sur la page suivante
        localStorage.setItem('appointmentData', JSON.stringify({
            firstName: FirstName,
            lastName: LastName,
            email: Email,
            phone: Phone
        }));
        return true; // Permet la navigation
    }
}