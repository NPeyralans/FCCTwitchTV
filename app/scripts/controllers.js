angular.module('twitchtvApp')

    .controller('mainCtrl', ['$scope', '$http', 'mainFactory', function($scope, $http, mainFactory) {
        
        //$scope.title = mainFactory.getTitle();
        
        $scope.users = mainFactory.getUsers();
        console.log('Users passed to GetData: ' + $scope.users);
        
        $scope.urls = mainFactory.getUrls($scope.users);
        console.log('urls in ctrl' + $scope.urls);
        
        //$scope.usersData = mainFactory.getData($scope.users);

        //console.log('usersData in ctrl\n' + $scope.usersData);
        
        // See if they are online
        

        
        
        
        
        
        
        
    }]);