(function() {
  
  "use strict";
  
  angular
    .module('ngClassifieds')
    .controller('authCtrl', function($scope, auth, $state) {
        
      
      $scope.createUser = function() {
        
        // If there is already a user logged in,
        // log them out before proceeding
        auth.ref.$unauth();
        
        auth.ref.$createUser({
          email: $scope.email,
          password: $scope.password
        }).then(function(userData) {
          $scope.login()
        }).catch(function(error) {
          $scope.error = error;
        });
      }
      
      $scope.login = function() {
        
        auth.ref.$authWithPassword({          
          email: $scope.email,
          password: $scope.password
        }).then(function(data) {
          $scope.email = null;
          $scope.password = null;
          $state.go('masters');
        }).catch(function(error) {
          console.log(error);
        });
      }
    
  });
  
})();