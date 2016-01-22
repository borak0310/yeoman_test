'use strict';

/**
 * @ngdoc function
 * @name yeomanTestApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the yeomanTestApp
 */
angular.module('yeomanTestApp')
  .controller('ContactCtrl', ['$scope','$http','contactService',function ($scope,$http,contactService) {
    $scope.greatting = {name:" ... ",salutation:" ... "};

    //呼叫 方式1 - 直接由 Controller 觸發
    $scope.callRestExample = function () {
      console.log('call spring rest .. ');
      var url = "https://angularjs.org/greet.php?callback=JSON_CALLBACK&name=Super%20Hero";
      $http({
        method: 'JSONP',
        url: url
      }).then(function (response) {
        console.log(response.data);
        $scope.greatting = response.data;
      }, function (error) {
        console.log(error);
      });
      console.log('call spring rest done .. ');
    }

    //呼叫 方式 2 - 使用 factory
    //如果要給不同頁面共用時使用此方法
    $scope.callRestFactory = function () {
      console.log('callRestFactory .. ');
      //接收回傳物件
      var result = contactService.getData();
      //一定要用 then 才會等待呼叫WS回傳資訊
      // 不然會直接跑完程式後,WS資訊才回來造成頁面無資訊
      result.then(function(payload) {
          $scope.greatting = payload.data;
      });
      console.log('call spring rest done .. ');
    }
  }]);
