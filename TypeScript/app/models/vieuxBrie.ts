import { Objet } from './objet';

export class VieuxBrie extends Objet {
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
        objet.qualite = objet.qualite > 50 ? 50 : objet.qualite + 1;
        if (objet.qualite < 0) {
            objet.qualite = 0;
        }
    }
}