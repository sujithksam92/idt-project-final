var app = angular.module('weatherApp', ['angular-loading-bar']);

console.log("Built By Sujith Using AngularJS");

app.controller('weatherControl', function($http,$scope){
	$scope.items = {};
	$scope.assetName = '';
	$scope.totalCount = 0;
	$scope.cityName = '';
	$scope.searchWeather = function(){
		var searchTerm = $scope.assetName;
			$http.get(`http://api.openweathermap.org/data/2.5/forecast?q=${searchTerm}&cnt=5&units=imperial&APPID=3f303374e26f676219d103a2c45de60b`).success(function(data){
			$scope.cityName = data.city.name;
			$scope.items = data.list;
			$scope.totalCount = data.cnt;
			console.log(data);
		});
	};
});