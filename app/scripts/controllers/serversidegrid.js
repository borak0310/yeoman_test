'use strict';

/**
 * @ngdoc function
 * @name yeomanTestApp.controller:ServersidegridCtrl
 * @description
 * # ServersidegridCtrl
 * Controller of the yeomanTestApp
 */
angular.module('yeomanTestApp')
  .controller('ServersidegridCtrl', function ($scope,$filter,$location, apiFactory, apiFactory2, ngTableParams) {

    //初始控制資料內容
    $scope.tableParams = new ngTableParams();

    //初始控制資料內容 測試呼叫 SERVER RESTFUL
    $scope.tableParams2 = new ngTableParams();

    //資料查詢條件
    $scope.filters = {
      serachStoreId: '',
      serachStoreName: ''
    };

    //清除資料
    $scope.clickClearData = function () {
      $scope.tableParams = new ngTableParams();
    }

    //清除資料
    $scope.clickClearData2 = function () {
      $scope.tableParams2 = new ngTableParams();
      $scope.filters = {
        serachStoreId: '',
        serachStoreName: ''
      };
    }

    //取得資料
    $scope.clickGridData = function () {
      console.log('clickGridData');
      $scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
        sorting: {
          name: 'asc'     // initial sorting
        }
      }, {
        total: 0,           // length of data
        getData: function ($defer, params) {
          apiFactory.apiFactorySearch((params.page() - 1) * params.count(), params.count(), params.filter(), params.sorting())
            .success(function (result) {
              console.log('result .. ');
              console.log('total:' + result.result.total);
              console.log('params.filter()' + params.filter());

              //範例因為是JSON FILE 我無法在後端過濾
              //實際SERVER SIDE 不用做 30 - 56 行 這段程式 , 因為會從SQL撈出來就過濾好的
              var firstRecord = (params.page() - 1) * params.count();
              var handlerData = [];
              var j = params.count();
              console.log('j: ' + j);

              // $filter('filter')(result.result.records, params.filter(), true) true 是指要完全一模一樣才行
              //不加則是模糊比對
              var filterDatas = result.result.records;
              //過濾民宿名稱
              filterDatas = $filter('filter')(filterDatas, params.filter().Name);
              //過濾電話號碼
              filterDatas = $filter('filter')(filterDatas, params.filter().Phone);

              //後端傳回來時先計算好的總數
              //params.total(result.result.total);

              //從JSONDATA計算過濾後的總數
              params.total(filterDatas.length);

              for (var i = 0; i < filterDatas.length; i++) {
                handlerData[i] = filterDatas[firstRecord + i];
                j--;
                if (j == 0 || (firstRecord + i) >= filterDatas.length) {
                  break;
                }
              }
              $defer.resolve(handlerData);
            });
        }
      });
    }


    //取得資料 2
    $scope.clickGridData2 = function () {
      console.log('clickGridData2');
      $scope.tableParams2 = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
        sorting: {
          name: 'asc'     // initial sorting
        }
      }, {
        total: 0,           // length of data
        getData: function ($defer, params) {
          apiFactory2.apiFactorySearch((params.page() - 1) * params.count(), params.count(), $scope.filters, params.sorting())
            .success(function (result) {
              console.log('result .. ');
              console.log('params.filter()' + params.filter());
              //後端傳回來時先計算好的總數
              params.total(result.total);
              $defer.resolve(result.result);
            }).error(function (data, status, headers, config) {
              $location.url('/error');
            });
        }
      });
    }
  })

  //NG TABLE LOADING CSS畫面
  .directive('loadingContainer', function () {
    return {
      restrict: 'A',
      scope: false,
      link: function (scope, element, attrs) {
        var loadingLayer = angular.element('<div class="loading">資料讀取中,請耐心等待 ... </div>');
        element.append(loadingLayer);
        element.addClass('loading-container');
        scope.$watch(attrs.loadingContainer, function (value) {
          loadingLayer.toggleClass('ng-hide', !value);
        });
      }
    };
  })

  // firstResult - user 於頁面點選顯示頁面的 起始第 X 筆
  // itemsPerPage -  每頁顯示幾X筆
  // filterByFields - 查詢條件
  // orderBy - 排序欄位
  .factory('apiFactory', function ($http) {
    return {
      apiFactorySearch: function (firstResult, itemsPerPage, filterByFields, orderBy) {
        var param = {
          "firstResult": firstResult,
          "itemsPerPage": itemsPerPage,
          "filterByFields": filterByFields,
          "orderBy": orderBy
        };
        //return $http.post('rest/members/filter', JSON.stringify(param));
        //return $http.get('http://data.ntpc.gov.tw/api/v1/rest/datastore/382000000A-000338-001', JSON.stringify(param));
        console.log('return resultJson .. ');
        return $http.get('/resource/jsondata.json', JSON.stringify(param));
      }
    }
  })

  .factory('apiFactory2', function ($http) {
    return {
      apiFactorySearch: function (firstResult, itemsPerPage, filterByFields, orderBy) {
        var param = {
          "firstResult": firstResult,
          "itemsPerPage": itemsPerPage,
          "filterByFields": filterByFields,
          "orderBy": orderBy
        };
        //return $http.post('rest/members/filter', JSON.stringify(param));
        //return $http.get('http://data.ntpc.gov.tw/api/v1/rest/datastore/382000000A-000338-001', JSON.stringify(param));
        console.log('return resultJson .. ');
        return $http.post('http://localhost:8080/restful-server/getStoreList', JSON.stringify(param));
      }
    }
  });


