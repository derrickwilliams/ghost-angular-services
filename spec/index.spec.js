describe('ghostAuthorization', function() {
  var
    authService,
    injector;

  beforeEach(module('ghost.services'));
  
  beforeEach(inject(function($injector, ghostAuthorization) {
    injector = $injector;
    authService = ghostAuthorization;
  }));

  describe('authorize', function() {
    it('exists', function() {
      expect(authService.authorize).toBeDefined();
    });
  });

  it('works', function() {
    var 
      backend = injector.get('$httpBackend'),
      baseUrl = injector.get('GHOST_API_BASE_URL');
    
    backend.when('POST', baseUrl)
      .respond({ msg: 'You did it' });

    authService
      .authorize({
        username: 'derrickawilliams@gmail.com',
        password: 'chasingghost'
      })
      .then(function(results){
        
      })
      .then(function(results) {
        debugger
      })
      .catch(function(err) {
        debugger
      });

    backend.expect('POST', baseUrl, {
      username: 'derrickawilliams@gmail.com',
      password: 'chasingghost'
    });

    backend.flush();
  });
});