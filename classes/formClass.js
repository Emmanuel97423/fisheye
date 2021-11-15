export class Form {
    constructor(firstName, lastName, email, message) {
        this._firstName = firstName
        this._lastName = lastName
        this._email = email
        this._message = message
    }
    //Vérification du prénom
    get validateFirstName() {
        return this.checkFirstName();
    }
    //Vérification du nom
    get validateLastName() {
        return this.checkLastName();
    }
    //Vérification de l'email
    get validateEmail() {
        return this.checkEmail();
    }




    //Méthodes
    checkFirstName() {
        if (this.first.length < 2) {
            this.validate = false;

            return "Veuillez entrer 2 caractères ou plus.";
        } else {
            this.validate = true;
        }
    }
    checkLastName() {
        if (this.last.length < 2) {
            this.validate = false;
            return "Veuillez entrer 2 caractères ou plus.";
        } else {
            this.validate = true;
        }
    }
    checkEmail() {
        let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const test = re.test(this.email);
        if (!test) {
            this.validate = false;
            return "Veuillez entrer une adresse email valide";
        } else {
            this.validate = true;
        }
    }
}