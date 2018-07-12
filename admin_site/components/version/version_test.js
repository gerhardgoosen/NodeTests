'use strict';

describe('adminApp.version module', function() {
  beforeEach(module('adminApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
