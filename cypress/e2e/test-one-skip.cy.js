describe('test', () => {
  it('test1', () => { })
  it.skip('test2', () => { })
  it('test3', () => {
    throw new Error('This test case should fail');
  })
})
