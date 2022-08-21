export enum NomObjet {
  VIEUX_BRIE = "Vieux Brie",
  PASS_COULISSE_METALLICA = "Pass pour les coulisses d'un concert de Metallica",
  SULFURAS = "Sulfuras, Main de Ragnaros",
  BIERE = "Bière",
}

export class Objet {
  nom: string;
  joursRestantsAvantPeremption: number;
  qualite: number;

  constructor(nom, joursRestantsAvantPeremption, qualite) {
    this.nom = nom;
    this.joursRestantsAvantPeremption = joursRestantsAvantPeremption;
    this.qualite = qualite;
  }
}

export class RoseDoree {
  objets: Array<Objet>;

  constructor(objets = [] as Array<Objet>) {
    this.objets = objets;
  }

  miseAJourqualite() {
    this.objets.forEach(objet => {
      if (objet.nom === NomObjet.SULFURAS) {
        objet.qualite = 80;
        return;
      }
      if (objet.nom != NomObjet.VIEUX_BRIE && objet.nom != NomObjet.PASS_COULISSE_METALLICA) {
        if (objet.qualite > 0) {
          if (objet.nom != NomObjet.SULFURAS) {
            objet.qualite = objet.qualite - 1
          }
        }
      } else {
        if (objet.qualite < 50) {
          objet.qualite = objet.qualite + 1
          if (objet.nom == NomObjet.PASS_COULISSE_METALLICA) {
            if (objet.joursRestantsAvantPeremption < 11) {
              if (objet.qualite < 50) {
                objet.qualite = objet.qualite + 1
              }
            }
            if (objet.joursRestantsAvantPeremption < 6) {
              if (objet.qualite < 50) {
                objet.qualite = objet.qualite + 1
              }
            }
          }
        }
      }
      if (objet.nom != NomObjet.SULFURAS) {
        objet.joursRestantsAvantPeremption = objet.joursRestantsAvantPeremption - 1;
      }
      if (objet.joursRestantsAvantPeremption < 0) {
        if (objet.nom != NomObjet.VIEUX_BRIE) {
          if (objet.nom != NomObjet.PASS_COULISSE_METALLICA) {
            if (objet.qualite > 0) {
              if (objet.nom != NomObjet.SULFURAS) {
                objet.qualite = objet.qualite - 1
              }
            }
          } else {
            objet.qualite = 0;
          }
        } else {
          if (objet.qualite < 50) {
            objet.qualite = objet.qualite + 1
          }
        }
      }
    });

    return this.objets;
  }
}
