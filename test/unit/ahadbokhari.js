import fluke from '../../src/fluke';

describe('fluke', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(fluke, 'greet');
      ahadbokhari.greet();
    });

    it('should have been run once', () => {
      expect(fluke.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(fluke.greet).to.have.always.returned('hello');
    });
  });
});
