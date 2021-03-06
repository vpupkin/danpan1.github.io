describe('login', function() {

  // beforeEach(module('DanMail'));
  beforeEach(angular.mock.module());
  // beforeEach(module('login'));
  

  describe('loginCtr', function() {

    var state, AuthService, login;

    beforeEach(inject(function(_AuthService_, _$state_, $controller) {
      AuthService = _AuthService_;
      state = _$state_;


      spyOn(AuthService, 'authorize')
        .and.returnValue(true);
      spyOn(AuthService, 'isAuthorized')
        .and.returnValue(true);
      spyOn(state, 'go')
        .and.returnValue(true);

      login = $controller('login', { $state: state, AuthService: AuthService });

    }));

    it('should call AuthService.isAuthorized before all', inject(function(state, AuthService) {

      // expect(state.go)
      // .toHaveBeenCalled();
      expect(AuthService.isAuthorized)
        .toHaveBeenCalled();

    }));


  });

});

