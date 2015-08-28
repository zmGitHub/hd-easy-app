angular.module('hdeasy.userservices', [])

.factory('userService', function ($http) {
  
    return {
        getUser: function (user) {
            var url = baseUrl + "getUser.php?id=" + user.Id;
            return $http.get(url);
        },
        setJob: function (formdata) {

            var url = baseUrl + "setJob.php"; 
           
            return $http({
                method: 'POST',
                url: url,
                data: formdata
            });
        }

    };
}


);
