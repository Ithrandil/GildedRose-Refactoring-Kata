import { Objet, RoseDoree } from '@/rose-doree';

describe('Rose Doree', () => {
  it('Devrait faire quelque chose', () => {
    const roseDoree = new RoseDoree([new Objet('quelque chose', 0, 0)]);
    const objets = roseDoree.miseAJourqualite();
    expect(objets[0].nom).toBe('Corrige Moi');
  });
});
