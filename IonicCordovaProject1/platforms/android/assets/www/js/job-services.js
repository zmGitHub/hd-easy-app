angular.module('hdeasy.jobservices', [])

.factory('jobService', function ($http,$q, $timeout) {

        var service = {
            getAllJob: getAllJob,
            getAllJobRefresh: getAllJobRefresh,
            getJob: getJob,
            setJob: setJob
        };
        var twitts;
        function getAllJob(){
            twitts=$http.get(baseUrl + 'getAllJob.php?scrollCount=1');
            console.log(baseUrl + 'getAllJob.php?scrollCount=1');
            return twitts;
        }
        var num=2;
        function getAllJobRefresh(){
            alert(num);
            twitts=$http.get(baseUrl + 'getAllJob.php?scrollCount='+num);
            console.log(baseUrl + 'getAllJob.php?scrollCount='+num);
            //twitts=$http.get(baseUrl + 'getAllJob.php?scrollCount=2');
            //console.log(baseUrl + 'getAllJob.php?scrollCount=2');
            num++;
            return twitts;
        }
        function getJob(job){
            var url = baseUrl + "getJob.php?id=" + job.Id;
            return $http.get(url);
        }
        function setJob(formdata){
            var url = baseUrl + "setJob.php";

            return $http({
                method: 'POST',
                url: url,
                data: formdata
            });
        }
        return service;


    //return {
    //    getAllJob: function () {
    //        return $http.get(baseUrl + 'getAllJob.php');
    //    },
    //    getJob: function (job) {
    //        var url = baseUrl + "getJob.php?id=" + job.Id;
    //        return $http.get(url);
    //    },
    //    setJob: function (formdata) {
    //
    //        var url = baseUrl + "setJob.php";
    //
    //        return $http({
    //            method: 'POST',
    //            url: url,
    //            data: formdata
    //        });
    //    }
    //
    //};
}






);
