import { Objet } from './objet';

export class VieuxBrie extends Objet {
    constructor(nom, joursRestantsAvantPeremption, qualite) {
        super(nom, joursRestantsAvantPeremption, qualite);
    }

    static update(objet) {
        objet.qualite++;
    }
}