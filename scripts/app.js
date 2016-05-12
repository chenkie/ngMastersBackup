// angular.module('ngClassifieds', ['ngMaterial', 'ui.router', 'firebase'])
// 	.config(function($mdThemingProvider, $stateProvider, $urlRouterProvider) {

// 		$mdThemingProvider
// 			.theme('default')
// 			.primaryPalette('blue-grey')
// 			.accentPalette('orange');


// 		$urlRouterProvider.otherwise('/auth');

// 	     $stateProvider
// 	        .state('auth', {
// 	          url: '/auth',
// 	          templateUrl: 'components/auth/auth.tpl.html',
// 	          controller: 'authCtrl'
// 	        })

// 		$stateProvider
// 			.state('masters', {
// 				url: '/masters',
// 				templateUrl: 'components/classifieds.tpl.html',
// 				controller: 'classifiedsCtrl' 

// 			});
// 	});

angular.module('ngClassifieds', ['ngMaterial', 'ui.router', 'firebase'])


	.run(["$rootScope", "$state", function($rootScope, $state) {
	$rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
	  // We can catch the error thrown when the $requireAuth promise is rejected
	  // and redirect the user back to the home page
	  if (error === "AUTH_REQUIRED") {
	    $state.go("auth");
	  }
	});
	}])




	.config(function($mdThemingProvider, $stateProvider, $urlRouterProvider) {

		$mdThemingProvider
			.theme('default')
			.primaryPalette('blue-grey')
			.accentPalette('orange');


		$urlRouterProvider.otherwise('/auth');

	     $stateProvider
	        .state('auth', {
	          url: '/auth',
	          templateUrl: 'components/auth/auth.tpl.html',
	          controller: 'authCtrl'
	        });

		$stateProvider
			.state('masters', {
				url: '/masters',
				templateUrl: 'components/classifieds.tpl.html',
				controller: 'classifiedsCtrl',
				resolve: {
			      // controller will not be loaded until $requireAuth resolves
			      // Auth refers to our $firebaseAuth wrapper in the example above
			      "currentAuth": ["auth", function(auth) {
			        // $requireAuth returns a promise so the resolve waits for it to complete
			        // If the promise is rejected, it will throw a $stateChangeError (see above)
			        return auth.ref.$requireAuth();
			      }]
			    }


			});
	});
