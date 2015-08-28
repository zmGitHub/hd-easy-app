// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'hdeasy.controllers', 'hdeasy.services',
    'hdeasy.jobservices', 'hdeasy.jobcontrollers',
    'hdeasy.employeeservices', 'hdeasy.employeecontrollers',
    'hdeasy.usercontrollers', 'hdeasy.userservices','selectAddress'])

.run(function($ionicPlatform) {
        'use strict';

        $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(['$ionicConfigProvider', function($ionicConfigProvider) {
        'use strict';

    $ionicConfigProvider.tabs.position('bottom'); // other values: top

}])

.config(function($stateProvider, $urlRouterProvider) {
        'use strict';


        // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
    $stateProvider

    .state('submitJob', {
        url: "/submitJob",
        templateUrl: "templates/submitJob.html",
        controller: 'submitJobCtrl'
    })

    .state('submitProfile', {
        url: "/submitProfile",
        templateUrl: "templates/submitProfile.html",
        controller:'submitProfileCtrl'
    })

    .state('registration', {
        url: "/registration",
        templateUrl: "templates/registration.html",
        controller: 'registrationCtrl'
    })

    .state('registration-s2', {
        url: "/registration-s2",
        templateUrl: "templates/registration-s2.html",
        controller: 'registrationCtrl'
    })


    // setup an abstract state for the tabs directive
      .state('hd', {
          url: "/hd",
          abstract: true,
          templateUrl: "templates/tabs.html"
      })

    // Each tab has its own nav history stack:

    .state('hd.dash', {
        url: '/dash',
        views: {
            'hd-dash': {
                templateUrl: 'templates/hd-dash.html'
            }
        }
    })



      .state('hd.employee-detail', {
          url: '/employee/:Id',
          views: {
              'hd-dash': {
                  templateUrl: 'templates/hd-employeedetail.html',
                  controller: 'employeeDetailCtrl'

              }
          }
      })


    .state('hd.joblist', {
        url: '/joblist',
        views: {
            'hd-joblist': {
                templateUrl: 'templates/hd-joblist.html'

            }
        }
    })


      .state('hd.job-detail', {
          url: '/job/:Id',
          views: {
              'hd-joblist': {
                  templateUrl: 'templates/hd-jobdetail.html',
                  controller: 'jobDetailCtrl'


              }
          }
      })







    .state('hd.employeelist', {
        url: '/employeelist',
        views: {
            'hd-employeelist': {
                templateUrl: 'templates/hd-employeelist.html',
                controller: 'ChatsCtrl'
            }
        }
    })


     //views 1. href 2. view name match with list name

    .state('hd.chats', {
        url: '/chats',
        views: {
            'hd-chats': {
                templateUrl: 'templates/tab-chats.html',
                controller: 'ChatsCtrl'
            }
        }
    })
      .state('hd.chat-detail', {
          url: '/chats/:chatId',
          views: {
              'hd-chats': {
                  templateUrl: 'templates/chat-detail.html',
                  controller: 'ChatDetailCtrl'
              }
          }
      })

    .state('hd.account', {
        url: '/account',
        views: {
            'hd-account': {
                templateUrl: 'templates/hd-account.html',
                controller: 'AccountCtrl'
            }
        }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/hd/dash');

});
