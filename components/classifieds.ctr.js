(function(){

"use strict";

angular
	.module("ngClassifieds")
	.controller("classifiedsCtrl", function($scope, $http, classifiedsFactory, $mdDialog, $mdMedia) {


		$scope.classifieds = classifiedsFactory.ref;

		$scope.classifieds.$loaded().then(function(classifieds) {
			$scope.names = getNames($scope.classifieds);
		});

		// classifiedsFactory.getClassifieds().then(function(mastersdata) {

		// 	$scope.classifieds = mastersdata.data;
		// 	$scope.names = getNames($scope.classifieds);
		// });

		
		/*	********************************************************************************************************************************	*/
			$scope.status = '  ';
 			$scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');

 			$scope.showAdvanced = function(ev) {
		    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
		    $mdDialog.show({
		      controller: DialogController,
		      templateUrl: 'components/dialog.tpl.html',
		      parent: angular.element(document.body),
		      targetEvent: ev,
		      clickOutsideToClose:true,
		      fullscreen: useFullScreen
		    });
		    
		    $scope.$watch(function() {
		      return $mdMedia('xs') || $mdMedia('sm');
		    }, function(wantsFullScreen) {
		      $scope.customFullscreen = (wantsFullScreen === true);
		    });
		  };

		  	function DialogController($scope, $mdDialog) {
			  
			  $scope.vanish = function() {
			    $mdDialog.cancel();
			  };
			  
			}

		/*	********************************************************************************************************************************	*/


		function getNames(classifieds) {
	
			var names = [];
			angular.forEach(classifieds, function(item) {
									
						names.push(item.name); 
					
				
			});
			
			return _.uniq(names);
			
		}

			// var data = [

			// {}

			// ]

			// var firebase = classifiedsFactory.ref;

			// angular.forEach(data, function(item) {
			// firebase.$add(item);

			// });


	});

})();