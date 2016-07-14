angular.module('twitchtvApp')

    .controller('mainCtrl', ['$scope', '$http', 'mainFactory', function($scope, $http, mainFactory) {
        
        //$scope.title = mainFactory.getTitle();
        
        $scope.users = mainFactory.getUsers();
        //console.log('Users passed to GetData: ' + $scope.users);
        
        $scope.urls = mainFactory.getUrls($scope.users);
        //console.log('urls in ctrl' + $scope.urls);
        
        $scope.userData = mainFactory.getData($scope.urls);
                
        // RETURNS UNDEFINED:
        console.log('usersData in ctrl\n' + $scope.usersData);
        
        /*
        $scope.userData = [];
        $scope.promises = [];
        
        for (var i = 0; i <  $scope.urls.length; i++) {
            $scope.promises[i] = $http.get($scope.urls[i]);
            $scope.promises[i].then(function(payload) {
                $scope.userData[i] = payload.data._links.self;
                //payload.data._links.channel;
            })
        };
        */


        //$scope.usersData = mainFactory.getData($scope.urls);
        
        //$scope.fccObject = mainFactory.getFCC();
        //console.log($scope.fccObject[1]);
        
    }]);