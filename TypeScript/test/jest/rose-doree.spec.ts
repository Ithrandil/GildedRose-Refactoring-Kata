import { Conjure } from '@/models/conjure';
import { NomObjet } from '@/models/nomObjet';
import { Objet } from '@/models/objet';
import { ObjetRoseDoree } from '@/models/objetRoseDoree';
import { PassCoulisseMetallica } from '@/models/passCoulisseMetallica';
import { Sulfura } from '@/models/sulfura';
import { VieuxBrie } from '@/models/vieuxBrie';
import { RoseDoree } from '@/rose-doree';

describe("Rose Doree", () => {
  // Tests sur les fonctionnalités existantes
  it("Devrait diminuer la qualité de l'objet chaque jour", () => {
    const roseDoree = new RoseDoree([new ObjetRoseDoree(NomObjet.BIERE, 20, 30)]);
    const objets = roseDoree.miseAJourqualite();
    expect(objets[0].qualite).toBe(29);
  });

  it("Devrait diminuer le nombre de 'jour restant avant peremption' chaque jour", () => {
    const roseDoree = new RoseDoree([new ObjetRoseDoree(NomObjet.BIERE, 20, 30)]);
    const objets = roseDoree.miseAJourqualite();
    expect(objets[0].joursRestantsAvantPeremption).toBe(19);
  });

  it("Devrait diminuer la 'qualité' de 2 si il n'y a plus de 'jours restants avant péremption'", () => {
    const roseDoree = new RoseDoree([new ObjetRoseDoree(NomObjet.BIERE, 0, 30)]);
    const objets = roseDoree.miseAJourqualite();
    expect(objets[0].qualite).toBe(28);
  });

  it("Devrait ne pas diminuer la 'qualité' en dessous de 0", () => {
    const roseDoree = new RoseDoree([new ObjetRoseDoree(NomObjet.BIERE, 30, 0)]);
    const objets = roseDoree.miseAJourqualite();
    expect(objets[0].qualite).toBe(0);
  });

  it("Devrait augmenter la 'qualité' du 'Vieux Brie' chaque jour", () => {
    const roseDoree = new RoseDoree([new VieuxBrie(NomObjet.VIEUX_BRIE, 30, 20)]);
    const objets = roseDoree.miseAJourqualite();
    expect(objets[0].qualite).toBe(21);
  });

  it("Devrait ne pas dépasser 50 en 'qualité'", () => {
    const roseDoree = new RoseDoree([new PassCoulisseMetallica(NomObjet.PASS_COULISSE_METALLICA, 30, 50)]);
    const objets = roseDoree.miseAJourqualite();
    expect(objets[0].qualite).toBe(50);
  });

  it("Devrait ne pas faire perdre de 'qualité' à 'Sulfuras, Main de Ragnaros'", () => {
    const roseDoree = new RoseDoree([new Sulfura(NomObjet.SULFURAS, 30, 11)]);
    const objets = roseDoree.miseAJourqualite();
    expect(objets[0].qualite).toBe(80);
  });

  it("Devrait toujours avoir une 'qualité' de 80 pour 'Sulfuras, Main de Ragnaros'", () => {
    const roseDoree = new RoseDoree([new Sulfura(NomObjet.SULFURAS, 30, 11)]);
    const objets = roseDoree.miseAJourqualite();
    expect(objets[0].qualite).toBe(80);
  });

  // it("Devrait ne pas avoir de 'date de péremption' pour 'Sulfuras, Main de Ragnaros'", () => {
  //   const roseDoree = new RoseDoree([new Objet(NomObjet.SULFURAS, 30, 70)]);
  //   const objets = roseDoree.miseAJourqualite();
  //   expect(objets[0].joursRestantsAvantPeremption).toBe(undefined);
  // });

  it("Devrait augmenter la 'qualité' de 'Pass pour les coulisses d'un concert de Metallica' chaque jour", () => {
    const roseDoree = new RoseDoree([new PassCoulisseMetallica(NomObjet.PASS_COULISSE_METALLICA, 30, 20)]);
    const objets = roseDoree.miseAJourqualite();
    expect(objets[0].qualite).toBe(21);
  });

  it("Devrait augmenter la 'qualité' de 'Pass pour les coulisses d'un concert de Metallica' de 2 quand la 'péremption' est de 10 jours ou moins mais plus de 5", () => {
    const roseDoree = new RoseDoree([new PassCoulisseMetallica(NomObjet.PASS_COULISSE_METALLICA, 10, 20)]);
    const objets = roseDoree.miseAJourqualite();
    expect(objets[0].qualite).toBe(22);
  });

  it("Devrait augmenter la 'qualité' de 'Pass pour les coulisses d'un concert de Metallica' de 3 quand la 'péremption' est de 5 jours ou moins", () => {
    const roseDoree = new RoseDoree([new PassCoulisseMetallica(NomObjet.PASS_COULISSE_METALLICA, 5, 20)]);
    const objets = roseDoree.miseAJourqualite();
    expect(objets[0].qualite).toBe(23);
  });

  it("Devrait passer la 'qualité' de 'Pass pour les coulisses d'un concert de Metallica' à 0 si la 'date de péremption atteint' 0", () => {
    const roseDoree = new RoseDoree([new PassCoulisseMetallica(NomObjet.PASS_COULISSE_METALLICA, 0, 20)]);
    const objets = roseDoree.miseAJourqualite();
    expect(objets[0].qualite).toBe(0);
  });

  // it("Devrait ne pas modifier la classe 'Objet' (Open-closed Principle)", () => {
  //   expect(objets[0]).toBe("");
  // });

  // Test sur les nouvelles fonctionnalités
  it("Devrait diminuer la qualité deux fois plus vite un 'Objet' ayant la 'caractéristique' 'Conjuré'", () => {
    const roseDoree = new RoseDoree([new Conjure(NomObjet.GATEAU_MANA_CONJURE, 10, 20)]);
    const objets = roseDoree.miseAJourqualite();
    expect(objets[0].qualite).toBe(18);
  });

  it("Devrait diminuer la qualité deux fois plus vite un 'Objet' ayant la 'caractéristique' 'Conjuré' même périmé", () => {
    const roseDoree = new RoseDoree([new Conjure(NomObjet.GATEAU_MANA_CONJURE, 0, 20)]);
    const objets = roseDoree.miseAJourqualite();
    expect(objets[0].qualite).toBe(16);
  });
});
