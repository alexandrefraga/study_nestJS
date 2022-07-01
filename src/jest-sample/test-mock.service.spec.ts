import configTest from './configTest'

jest.mock('./configTest', () => ({
  // __esModule: true,
  default: jest.fn().mockReturnValue({ field: 'hello'}),
}))

console.log(configTest());



class TestMock {
  exec(data){ return data.field};
}

describe('Test Mock', () => {
  it('should ', () => {

    const resp = new TestMock().exec(configTest())
    expect(resp).toBe('hello')
  });
});
