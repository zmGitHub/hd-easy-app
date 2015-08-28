angular.module('hdeasy.jobcontrollers', [])



.controller('submitJobCtrl',

    function ($scope, jobService) {

        $scope.formData = {};

        $scope.processForm = function () {
            
            jobService.setJob($scope.formData).success(function (response) {
                $scope.result = response.records;
                alert($scope.result)
                //if true change state//alert($scope.result);
            });
        };
    }
)

.controller('getAllJobController',
    function ($scope, jobService,$ionicPopover) {
        jobService.getAllJob().success(function (response) {
              $scope.jobs = response.records;
        });

        //jobService.getTwitts().then(function(twitts){
        //    $scope.jobs = twitts;
        //});
        //Ҫ��ʱ���popoverģ��
        $ionicPopover.fromTemplateUrl("yaoqiuPopover.html", {
            scope: $scope
        }).then(function(popover){
            $scope.yaoqiuPopover = popover;
        });
        //Ҫ��ʱ��popover
        $scope.openYaoqiuTimePopover=function($event){
            $scope.yaoqiuPopover.show($event);
        }
        //���Ҫ��ʱ���ÿһ������
        $scope.selectShijian=function(num){
            alert(num);
            $scope.shijian=num;
            $scope.yaoqiuPopover.hide();
        }
        //Ҫ��ʱ�ε�popoverģ��
        $ionicPopover.fromTemplateUrl("yaoqiuShiduanPopover.html", {
            scope: $scope
        }).then(function(popover){
            $scope.yaoqiuShiduanPopover = popover;
        });
        //Ҫ��ʱ��popover
        $scope.openYaoqiuShiduanPopover=function($event){
            $scope.yaoqiuShiduanPopover.show($event);
        }
        //���Ҫ��ʱ�ε�ÿһ������
        $scope.selectShiduan=function(num){
            alert(num);
            $scope.shiduan=num;
            $scope.yaoqiuShiduanPopover.hide();
        }
        //下拉刷新
        $scope.doRefresh = function(){
            alert("doRefresh");
            jobService.getAllJobRefresh().success(function (response) {
                $scope.jobs = $scope.jobs.concat(response.records);
                //$scope.jobs = response.records;
            });
        };
        $scope.loadMore = function(){
            alert("loadMore");
            jobService.getMoreTwitts().then(function(olderTwitts){
                $scope.twitts = $scope.twitts.concat(olderTwitts);
            }).finally(function() {
                // Stop the ion-infinite-scroll from spinning
                $scope.$broadcast('scroll.infiniteScrollComplete');
            });
        };
    })

.controller('jobDetailCtrl',
    function ($scope, jobService, $stateParams) {

        jobService.getJob($stateParams).success(function (response) {
            $scope.job = response.records;
            //to prepare the data model
            //$scope.job[0].topic = "";
        });
    }
);
