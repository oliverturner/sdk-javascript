var chai = require('chai');
var should = chai.should();
var nock = require('nock');
var nockBack = nock.back;
var All = require('../../../../lib/discovery/v1/event/all');

describe('discovery.v1.event.all', function() {
  before(function() {
    nockBack.fixtures = './test/fixtures/discovery/v1';
  });

  describe('success', function() {
    it('should find an event', function(done) {
      nockBack('event/all-200.json', {}, function(nockDone) {
        var all = All('mock-api-key');
        all()
        .then(function(events) {
          events[0].name.should.equal('OSEA Membership Registration');
          nockDone();
          done();
        });
      });
    });
  });
});
