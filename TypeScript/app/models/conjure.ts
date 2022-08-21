import { Objet } from './objet';

export class Conjure extends Objet {
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
        objet.joursRestantsAvantPeremption--;
        objet.qualite = objet.joursRestantsAvantPeremption <= 0 ? objet.qualite - 4 : objet.qualite - 2;
        objet.qualite = objet.qualite > 50 ? 50 : objet.qualite;
        if (objet.qualite < 0) {
            objet.qualite = 0;
        }
    }
}