(function() {
  
  "use strict";
  
  angular
    .module('ngClassifieds')
    .factory('auth', function($firebaseAuth) {
        
      var ref = new Firebase('https://ngmasters.firebaseio.com/');
    
      return {
        ref: $firebaseAuth(ref),
        user: ref.getAuth()
      }
      
    });
  
})();