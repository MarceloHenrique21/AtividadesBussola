import { getRandomObjects, chooseRandomProducts} from '../src/TDD/RandomArray';

describe('getRandomObjects', () => {
  test('deve retornar um array com objetos aleatórios', () => {
    const array = [
      { id: 1, nome: 'Objeto 1' },
      { id: 2, nome: 'Objeto 2' },
      { id: 3, nome: 'Objeto 3' },
      { id: 4, nome: 'Objeto 4' },
      { id: 5, nome: 'Objeto 5' },
    ];
    const numberOfRandomObjects = 3;

    const result = getRandomObjects(array, numberOfRandomObjects);

    expect(result.length).toBe(numberOfRandomObjects);
    expect(array).toContainEqual(result[0]);
    expect(array).toContainEqual(result[1]);
    expect(array).toContainEqual(result[2]);
  });

  test('deve retornar um array vazio se o número de objetos aleatórios for 0', () => {
    const array = [
      { id: 1, nome: 'Objeto 1' },
      { id: 2, nome: 'Objeto 2' },
      { id: 3, nome: 'Objeto 3' },
    ];
    const numberOfRandomObjects = 0;

    const result = getRandomObjects(array, numberOfRandomObjects);

    expect(result.length).toBe(0);
  });
});

describe('chooseRandomProducts', () => {
  test('deve retornar um array com produtos aleatórios', () => {
    const productList = [
      { nome: 'Produto 1' },
      { nome: 'Produto 2' },
      { nome: 'Produto 3' },
      { nome: 'Produto 4' },
      { nome: 'Produto 5' },
    ];
    const itensQuantity = 3;

    const result = chooseRandomProducts(productList, itensQuantity);

    expect(result.length).toBe(itensQuantity);
    expect(productList).toContainEqual(result[0]);
    expect(productList).toContainEqual(result[1]);
    expect(productList).toContainEqual(result[2]);
  });

  test('deve retornar um array vazio se a quantidade de itens for 0', () => {
    const productList = [
      { nome: 'Produto 1' },
      { nome: 'Produto 2' },
      { nome: 'Produto 3' },
    ];
    const itensQuantity = 0;

    const result = chooseRandomProducts(productList, itensQuantity);

    expect(result.length).toBe(0);
  });
});
