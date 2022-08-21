export class Objet {
    nom: string;
    joursRestantsAvantPeremption: number;
    qualite: number;

    constructor(nom, joursRestantsAvantPeremption, qualite) {
        this.nom = nom;
        this.joursRestantsAvantPeremption = joursRestantsAvantPeremption;
        this.qualite = qualite;
    }
}