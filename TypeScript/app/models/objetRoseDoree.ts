import { Objet } from './objet';

export class ObjetRoseDoree extends Objet {
    constructor(nom, joursRestantsAvantPeremption, qualite) {
        super(nom, joursRestantsAvantPeremption, qualite);
    }

    static update(objet) {
        objet.joursRestantsAvantPeremption--;
        if (objet.joursRestantsAvantPeremption <= 0) {
            objet.qualite = objet.qualite - 2;
        } else {
            objet.qualite--;
        }
        if (objet.qualite < 0) {
            objet.qualite = 0;
        }
    }
}