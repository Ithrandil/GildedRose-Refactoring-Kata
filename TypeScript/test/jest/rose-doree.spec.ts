import { Objet, RoseDoree } from '@/rose-doree';

describe("Rose Doree", () => {
  // Tests sur les fonctionnalités existantes
  it("Devrait diminuer la qualité de l'objet chaque jour", () => {
    const roseDoree = new RoseDoree([new Objet("Bière", 20, 20)]);
    const objets = roseDoree.miseAJourqualite();
    expect(objets[0].qualite).toBe(19);
  });

  it("Devrait diminuer le nombre de 'jour restant avant peremption' chaque jour", () => {
    const roseDoree = new RoseDoree([new Objet("Bière", 20, 20)]);
    const objets = roseDoree.miseAJourqualite();
    expect(objets[0].joursRestantsAvantPeremption).toBe(19);
  });

  it("Devrait diminuer la 'qualité' de 2 si il n'y a plus de 'jours restants avant péremption'", () => {
    const roseDoree = new RoseDoree([new Objet("Bière", 0, 20)]);
    const objets = roseDoree.miseAJourqualite();
    expect(objets[0].qualite).toBe(18);
  });
