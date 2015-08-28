angular.module('hdeasy.employeeservices', [])

.factory('employeeService', function ($http) {
  

    return {
        getAllEmployee: function () {
            return $http.get(baseUrl + 'getAllEmployee.php');
        },
        getEmployee: function (employee) {
            var url = baseUrl + "getEmployee.php?id=" + employee.Id;
            return $http.get(url);
        }
    };
}


);
