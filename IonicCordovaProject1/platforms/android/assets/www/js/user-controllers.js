angular.module('hdeasy.usercontrollers', ['ngCityPicker'])

// configuring our routes 
// =============================================================================
.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider


        // route to show our basic form (/form)
        .state('testform', {
            url: '/testform',
            templateUrl: 'templates/testform.html',
            controller: 'myController'
        })


        // route to show our basic form (/form)
        .state('form', {
            url: '/form',
            templateUrl: 'templates/form.html',
            controller: 'formController'
        })

        // nested states 
        // each of these sections will have their own view
        // url will be nested (/form/profile)
        .state('form.reg1', {
            url: '/reg1',
            templateUrl: 'templates/form-reg1.html'
        })

        // url will be /form/interests
        .state('form.reg2', {
            url: '/reg2',
            templateUrl: 'templates/form-reg2.html'
        })

})



.controller('myController', ['$scope', function ($scope) {
    $scope.params = {
        outputModel: null,
        open: false,
        // inputModel:"440106",
        inputModel: ['广东', '广州', '天河']
    }
}])




.controller('formController', function ($scope, $state) {

    // we will store all of our form data in this object
    $scope.formData = {};
     
    // function to process the form
    $scope.processForm = function() {
       
        //if success, will save localstorage and go the before clicked state
        $state.go(goingState);
    };
     
});
