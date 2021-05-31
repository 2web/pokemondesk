import toCapitalizeFirstLetter from './toCapitalizeFirstLetter';

describe('When call this func with string param, then return capital first letter and small others', () => {
  test('When all letters are small then return first capital and small others', () => {
    const str = toCapitalizeFirstLetter('test');

    expect(str).toEqual('Test');
  });

  test('When first letter are capital then return first capital and small others', () => {
    const str = toCapitalizeFirstLetter('Test');

    expect(str).toEqual('Test');
  });

  test('When second letter are capital then return first capital and small others', () => {
    const str = toCapitalizeFirstLetter('tEst');

    expect(str).toEqual('Test');
  });

  test('When second letter are small and others are capital then return first capital and small others', () => {
    const str = toCapitalizeFirstLetter('TeST');

    expect(str).toEqual('Test');
  });

  test('When all letters are capital then return first capital and small others', () => {
    const str = toCapitalizeFirstLetter('TEST');

    expect(str).toEqual('Test');
  });
});