(function() {

"use strict";

angular
	.module("ngClassifieds")
	.factory("classifiedsFactory", function($http, $firebaseArray) {

		// function getMastersData() {

		// 	return $http.get('data/masters.json');
		// }

		var ref = new Firebase ('https://ngmasters.firebaseio.com/');

		return {

		//	getClassifieds: getMastersData

		ref: $firebaseArray(ref)

		}

	});



}) ();
