import { Conjure } from './models/conjure';
import { NomObjet } from './models/nomObjet';
import { Objet } from './models/objet';
import { ObjetRoseDoree } from './models/objetRoseDoree';
import { PassCoulisseMetallica } from './models/passCoulisseMetallica';
import { Sulfura } from './models/sulfura';
import { VieuxBrie } from './models/vieuxBrie';

export class RoseDoree {
  objets: Array<Objet>;

  constructor(objets = [] as Array<Objet>) {
    this.objets = objets;
  }

  miseAJourqualite() {
    this.objets.forEach(objet => {
      switch (objet.constructor) {
        case Sulfura:
          break;
        case Conjure:
          Conjure.update(objet);
          break;
        case PassCoulisseMetallica:
          PassCoulisseMetallica.update(objet);
          break;
        case VieuxBrie:
          VieuxBrie.update(objet);
          break;
        case ObjetRoseDoree:
          ObjetRoseDoree.update(objet);
          break;
        default:
          throw new Error("CREER UNE CLASSE QUI ETEND OBJET")
      }
    });

    return this.objets;
  }
}
