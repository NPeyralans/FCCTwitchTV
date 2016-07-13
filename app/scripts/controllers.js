angular.module('twitchtvApp')

    .controller('mainCtrl', ['$scope', '$http', 'mainFactory', function($scope, $http, mainFactory) {
        
        //$scope.title = mainFactory.getTitle();
        
        $scope.users = mainFactory.getUsers();
        console.log('Users passed to GetData: ' + $scope.users);
        
        $scope.usersData = mainFactory.getData($scope.users);
        if ($scope.usersData) {
            console.log($scope.usersData);
        } 
        //console.log('usersData in ctrl\n' + $scope.usersData);
        
        // See if they are online
        

        
        
        
        
        
        
        
    }]);