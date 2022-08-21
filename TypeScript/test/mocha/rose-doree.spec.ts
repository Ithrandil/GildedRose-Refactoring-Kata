import { Objet, RoseDoree } from '@/rose-doree';
import { expect } from 'chai';

describe('Gilded Rose', () => {
  it('should foo', () => {
    const roseDoree = new RoseDoree([new Objet('foo', 0, 0)]);
    const objets = roseDoree.miseAJourqualite();
    expect(objets[0].nom).to.equal('fixme');
  });
});
