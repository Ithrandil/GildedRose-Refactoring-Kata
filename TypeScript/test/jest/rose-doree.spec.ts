import { Objet, RoseDoree } from '@/rose-doree';

describe("Rose Doree", () => {
  // Tests sur les fonctionnalités existantes
  it("Devrait diminuer la qualité de l'objet chaque jour", () => {
    const roseDoree = new RoseDoree([new Objet("Bière", 20, 30)]);
    const objets = roseDoree.miseAJourqualite();
    expect(objets[0].qualite).toBe(29);
  });

  it("Devrait diminuer le nombre de 'jour restant avant peremption' chaque jour", () => {
    const roseDoree = new RoseDoree([new Objet("Bière", 20, 30)]);
    const objets = roseDoree.miseAJourqualite();
    expect(objets[0].joursRestantsAvantPeremption).toBe(19);
  });

  it("Devrait diminuer la 'qualité' de 2 si il n'y a plus de 'jours restants avant péremption'", () => {
    const roseDoree = new RoseDoree([new Objet("Bière", 0, 30)]);
    const objets = roseDoree.miseAJourqualite();
    expect(objets[0].qualite).toBe(28);
  });

  it("Devrait ne pas diminuer la 'qualité' en dessous de 0", () => {
    const roseDoree = new RoseDoree([new Objet("Bière", 30, 0)]);
    const objets = roseDoree.miseAJourqualite();
    expect(objets[0].qualite).toBe(0);
  });

  it("Devrait ne pas dépasser 50 en 'qualité'", () => {
    const roseDoree = new RoseDoree([new Objet("Pass pour les coulisses d'un concert de Metallica", 30, 50)]);
    const objets = roseDoree.miseAJourqualite();
    expect(objets[0].qualite).toBe(50);
  });

  it("Devrait ne pas faire perdre de 'qualité' à 'Sulfuras, Main de Ragnaros'", () => {
    const roseDoree = new RoseDoree([new Objet("Sulfuras, Main de Ragnaros", 30, 20)]);
    const objets = roseDoree.miseAJourqualite();
    expect(objets[0].qualite).toBe(20);
  });

  it("Devrait augmenter la 'qualité' de 'Pass pour les coulisses d'un concert de Metallica' chaque jour", () => {
    const roseDoree = new RoseDoree([new Objet("Pass pour les coulisses d'un concert de Metallica", 30, 20)]);
    const objets = roseDoree.miseAJourqualite();
    expect(objets[0].qualite).toBe(21);
  });

  it("Devrait augmenter la 'qualité' de 'Pass pour les coulisses d'un concert de Metallica' de 2 quand la 'péremption' est de 10 jours ou moins mais plus de 5", () => {
    const roseDoree = new RoseDoree([new Objet("Pass pour les coulisses d'un concert de Metallica", 10, 20)]);
    const objets = roseDoree.miseAJourqualite();
    expect(objets[0].qualite).toBe(22);
  });
