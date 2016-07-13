angular.module('twitchtvApp')

    .factory('mainFactory', ['$http', function($http) {
        
        var mainFac = {};
        
        /* Test function to verify angular linking
            mainFac.getTitle = function() {
                console.log('gettitle');
                return "THIS IS TEH TITEL";
        } */
        
        mainFac.getFCC = function() {                                  $http.get('https://api.twitch.tv/kraken/streams/freecodecamp').then(function(data) {
                    console.log(data);
                })
        }
        
        mainFac.getUsers = function() {
            console.log('inside getusers');
            return ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
        }
        
        mainFac.getData = function(users) { 
            
            var userData = [];
            
            for (var i = 0; i < users.length; i++) {
                $http.get('https://api.twitch.tv/kraken/streams/' + users[i]).then(function(data) {
                        //console.log(data);
                        userData.push(data);
                    })
            };
            
            return userData;
            
        }
        
        return mainFac;
        
    }]);