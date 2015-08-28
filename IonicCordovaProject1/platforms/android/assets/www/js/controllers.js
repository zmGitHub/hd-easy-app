angular.module('hdeasy.controllers', [])

.controller('commonCtrl', function ($scope, $ionicHistory) {
   
    $scope.mygoBack = function () {
        $ionicHistory.backView();

    };

})


.controller('DashCtrl', function ($scope,$state) {

    //checked login
    //var a = 1;

    $scope.changeState = function (status) {
      
        if (localStorage.getItem("user_id") == "" && status == 'post' ) { $state.go('submitJob'); }
        else if (localStorage.getItem("user_id") == "" && status == 'join') { $state.go('submitProfile'); }
        else if (localStorage.getItem("user_id") != "" && status == 'post') {
            goingState = 'submitJob';
            $state.go('form.reg1');
        }
        else if (localStorage.getItem("user_id") != "" && status == 'join') {
            //if have not profile then go submit profile
            goingState = 'submitProfile';
            $state.go('form.reg1');
        }
        
    };

})

.controller('ChatsCtrl', function ($scope, Chats) {

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})



.controller('AccountCtrl', function($scope) {
  $scope.settings = {
      enableFriends: true,
      isChecked: true
  };
});
