import { NomObjet } from './models/nomObjet';
import { Objet } from './models/objet';

export class RoseDoree {
  objets: Array<Objet>;

  constructor(objets = [] as Array<Objet>) {
    this.objets = objets;
  }

  verificationQualiteMax(objet: Objet) {
    if (objet.qualite > 50) {
      objet.qualite = 50;
    }
    return objet;
  }

  qualitePassCoulisseMetallica(objet: Objet) {
    objet.qualite++;
    objet.joursRestantsAvantPeremption <= 10 ? objet.qualite++ : null;
    objet.joursRestantsAvantPeremption <= 5 ? objet.qualite++ : null;
    objet.qualite = objet.joursRestantsAvantPeremption <= 0 ? 0 : objet.qualite;
    return objet;
  }

  miseAJourqualite() {
    this.objets.forEach(objet => {
      switch (objet.nom) {
        case NomObjet.SULFURAS:
          break;
        case NomObjet.PASS_COULISSE_METALLICA:
          objet = this.qualitePassCoulisseMetallica(objet);
          objet = this.verificationQualiteMax(objet);
          break;
        case NomObjet.VIEUX_BRIE:
          objet.qualite++;
          objet = this.verificationQualiteMax(objet);
          break;
        default:
          objet.joursRestantsAvantPeremption--;
          if (objet.joursRestantsAvantPeremption <= 0) {
            objet.qualite = objet.qualite - 2;
          } else {
            objet.qualite--;
          }
          if (objet.qualite < 0) {
            objet.qualite = 0;
          }
          objet = this.verificationQualiteMax(objet);

          break;
      }
    });

    return this.objets;
  }
}
