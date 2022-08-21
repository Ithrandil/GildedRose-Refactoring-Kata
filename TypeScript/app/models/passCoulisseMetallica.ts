import { Objet } from './objet';

export class PassCoulisseMetallica extends Objet {

    constructor(nom, joursRestantsAvantPeremption, qualite) {
        super(nom, joursRestantsAvantPeremption, qualite);
        if (qualite > 50) {
            qualite = 50;
        }
        if (qualite < 0) {
            qualite = 0;
        }
    }

    static update(objet) {
        objet.qualite++;
        objet.joursRestantsAvantPeremption--;
        objet.joursRestantsAvantPeremption <= 10 ? objet.qualite++ : null;
        objet.joursRestantsAvantPeremption <= 5 ? objet.qualite++ : null;
        objet.qualite = objet.joursRestantsAvantPeremption <= 0 ? 0 : objet.qualite;
        objet.qualite = objet.qualite > 50 ? 50 : objet.qualite;
        if (objet.qualite < 0) {
            objet.qualite = 0;
        }
    }
}