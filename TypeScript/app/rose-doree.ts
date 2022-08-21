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
    for (let i = 0; i < this.objets.length; i++) {
      if (this.objets[i].nom != "Vieux brie" && this.objets[i].nom != "Pass pour les coulisses d'un concert de Metallica") {
        if (this.objets[i].qualite > 0) {
          if (this.objets[i].nom != "Sulfuras, Main de Ragnaros") {
            this.objets[i].qualite = this.objets[i].qualite - 1
          }
        }
      } else {
        if (this.objets[i].qualite < 50) {
          this.objets[i].qualite = this.objets[i].qualite + 1
          if (this.objets[i].nom == "Pass pour les coulisses d'un concert de Metallica") {
            if (this.objets[i].joursRestantsAvantPeremption < 11) {
              if (this.objets[i].qualite < 50) {
                this.objets[i].qualite = this.objets[i].qualite + 1
              }
            }
            if (this.objets[i].joursRestantsAvantPeremption < 6) {
              if (this.objets[i].qualite < 50) {
                this.objets[i].qualite = this.objets[i].qualite + 1
              }
            }
          }
        }
      }
      if (this.objets[i].nom != "Sulfuras, Main de Ragnaros") {
        this.objets[i].joursRestantsAvantPeremption = this.objets[i].joursRestantsAvantPeremption - 1;
      }
      if (this.objets[i].joursRestantsAvantPeremption < 0) {
        if (this.objets[i].nom != "Vieux brie") {
          if (this.objets[i].nom != "Pass pour les coulisses d'un concert de Metallica") {
            if (this.objets[i].qualite > 0) {
              if (this.objets[i].nom != "Sulfuras, Main de Ragnaros") {
                this.objets[i].qualite = this.objets[i].qualite - 1
              }
            }
          } else {
            this.objets[i].qualite = this.objets[i].qualite - this.objets[i].qualite
          }
        } else {
          if (this.objets[i].qualite < 50) {
            this.objets[i].qualite = this.objets[i].qualite + 1
          }
        }
      }
    }

    return this.objets;
  }
}
