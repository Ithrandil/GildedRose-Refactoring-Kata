import { Objet } from './objet';

export class PassCoulisseMetallica extends Objet {

    constructor(nom, joursRestantsAvantPeremption, qualite) {
        super(nom, joursRestantsAvantPeremption, qualite);
    }

    static update(objet) {
        objet.qualite++;
        objet.joursRestantsAvantPeremption <= 10 ? objet.qualite++ : null;
        objet.joursRestantsAvantPeremption <= 5 ? objet.qualite++ : null;
        objet.qualite = objet.joursRestantsAvantPeremption <= 0 ? 0 : objet.qualite;
    }
}