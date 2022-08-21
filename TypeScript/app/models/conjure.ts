import { Objet } from './objet';

export class Conjure extends Objet {
    constructor(nom, joursRestantsAvantPeremption, qualite) {
        super(nom, joursRestantsAvantPeremption, qualite);
    }

    static update(objet) {
        objet.joursRestantsAvantPeremption--;
        objet.qualite = objet.joursRestantsAvantPeremption <= 0 ? objet.qualite - 4 : objet.qualite - 2;
    }
}