angular.module('hdeasy.employeecontrollers', [])

.controller('submitProfileCtrl',

    function ($scope) {

             //var login_user_id = "1";
             //localStorage.setItem("user_id", login_user_id);
      

        if (!localStorage.getItem("user_id")) { console.log(localStorage.getItem("user_id")); }

    }
)


.controller('employeeCtrl',
    
    function ($scope, employeeService) {

        employeeService.getAllEmployee().success(function (response) {
            $scope.employee = response.records;
         });

    }
)

.controller('employeeDetailCtrl',
    function ($scope, employeeService, $stateParams) {

        employeeService.getEmployee($stateParams).success(function (response) {
            $scope.employee = response.records;
        });
    }
);


