import { Objet, RoseDoree } from '@/rose-doree';

describe("Rose Doree", () => {
  // Tests sur les fonctionnalités existantes
  it("Devrait diminuer la qualité de l'objet chaque jour", () => {
    const roseDoree = new RoseDoree([new Objet("Bière", 20, 20)]);
    const objets = roseDoree.miseAJourqualite();
    expect(objets[0].qualite).toBe(19);
  });
});
