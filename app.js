var app = angular.module('dhammahome', []);

app.controller('MainCtrl', function($scope) {
	$scope.mp3_folder = './mp3/';
	$scope.mp3_lists = [];
	
	$scope.mp3_lists.push({title: 'กล่าวเกริ่นนำ', file:'00 กล่าวเกริ่นนำ ธ.ต.mp3'});
	for(var num = 1; num <= 85; num++){
		var file_name = 'ตอนที่ ' + addZ(num) + '.mp3';
		$scope.mp3_lists.push({title: 'ตอนที่ ' + num, file: file_name});
	}
	$scope.mp3_lists.push({title: 'กล่าวปิดท้าย ธรรมเตือนใจ', file:'00 กล่าวเกริ่นนำ ธ.ต.mp3'});
  
	function addZ(n) {
		return (n<10? '0' : n<100? '0' : '') + n;
	}
});
