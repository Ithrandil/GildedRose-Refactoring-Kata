import { Objet } from './objet';

export class Sulfura extends Objet {
    constructor(nom, joursRestantsAvantPeremption, qualite) {
        super(nom, joursRestantsAvantPeremption, qualite);
        this.qualite = 80;
    }
}