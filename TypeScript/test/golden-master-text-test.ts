import { Conjure } from '../app/models/conjure';
import { Objet } from '../app/models/objet';
import { ObjetRoseDoree } from '../app/models/objetRoseDoree';
import { PassCoulisseMetallica } from '../app/models/passCoulisseMetallica';
import { Sulfura } from '../app/models/sulfura';
import { VieuxBrie } from '../app/models/vieuxBrie';
import { RoseDoree } from '../app/rose-doree';

const objets = [
  new ObjetRoseDoree("Veste de dexterite +5", 10, 20), //
  new VieuxBrie("Vieux Brie", 2, 0), //
  new ObjetRoseDoree("Elixir de la Mangouste", 5, 7), //
  new Sulfura("Sulfuras, Main de Ragnaros", 0, 80), //
  new Sulfura("Sulfuras, Main de Ragnaros", -1, 80),
  new PassCoulisseMetallica("Pass pour les coulisses d'un concert de Metallica", 15, 20),
  new PassCoulisseMetallica("Pass pour les coulisses d'un concert de Metallica", 10, 49),
  new PassCoulisseMetallica("Pass pour les coulisses d'un concert de Metallica", 5, 49),
  // Cet objet Conjure ne fonctionne pas correctement pour le moment
  new Conjure("Gateau de Mana Conjure", 3, 6)];


const roseDoree = new RoseDoree(objets);

let jours: number = 2;
if (process.argv.length > 2) {
  jours = +process.argv[2];
}

for (let i = 0; i < jours; i++) {
  console.log("-------- jour " + i + " --------");
  console.log("nom, joursRestantsAvantPeremption, qualite");
  objets.forEach(element => {
    console.log(element.nom + ' / Péremption dans ' + element.joursRestantsAvantPeremption + ' jours / Qualité : ' + element.qualite);

  });
  console.log();
  roseDoree.miseAJourqualite();
}
