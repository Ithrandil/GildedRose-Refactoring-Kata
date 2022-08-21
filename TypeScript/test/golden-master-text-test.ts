import { Objet, RoseDoree } from '../app/rose-doree';

const objets = [
  new Objet("Veste de dexterite +5", 10, 20), //
  new Objet("Vieux Brie", 2, 0), //
  new Objet("Elixir de la Mangouste", 5, 7), //
  new Objet("Sulfuras, Main de Ragnaros", 0, 80), //
  new Objet("Sulfuras, Main de Ragnaros", -1, 80),
  new Objet("Pass pour les coulisses d'un concert de Metallica", 15, 20),
  new Objet("Pass pour les coulisses d'un concert de Metallica", 10, 49),
  new Objet("Pass pour les coulisses d'un concert de Metallica", 5, 49),
  // Cet objet Conjure ne fonctionne pas correctement pour le moment
  new Objet("Gateau de Mana Conjure", 3, 6)];


const roseDoree = new RoseDoree(objets);

let jours: number = 2;
if (process.argv.length > 2) {
  jours = +process.argv[2];
}

for (let i = 0; i < jours; i++) {
  console.log("-------- jour " + i + " --------");
  console.log("nom, joursRestantsAvantPeremption, qualite");
  objets.forEach(element => {
    console.log(element.nom + ' ' + element.joursRestantsAvantPeremption + ' ' + element.qualite);

  });
  console.log();
  roseDoree.miseAJourqualite();
}
