angular.module('twitchtvApp')

    .factory('mainFactory', ['$http', function($http) {
        
        var mainFac = {};
        
        /* Test function to verify angular linking
            mainFac.getTitle = function() {
                console.log('gettitle');
                return "THIS IS TEH TITEL";
        } */
        
        
        /*
        mainFac.getFCC = function() {                                  $http.get('https://api.twitch.tv/kraken/streams/freecodecamp').then(function(data) {
                    console.log(data);
                })
        }
        */
        
        mainFac.getUsers = function() {
            //console.log('inside getusers');
            return ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
        }
        
        
        
        mainFac.getUrls = function(users) {
            
            var urls = [];
            
            for (var i = 0; i < users.length; i++) {
                urls.push('https://api.twitch.tv/kraken/streams/' + users[i]);
                //console.log(urls[i] + 'was pushed in getURL service');
            }
            //console.log('Urls outside of for loop: ' + urls + '\n');
            //console.log('# of urls ' + urls.length);
            
            return urls;
        }
        
        mainFac.getData = function(urls) { 
            
            var userData = [];
            var testArray = [];
            
            for (var i = 0; i < urls.length; i++) {
                currentData = $http.get(urls[i]);
                console.log('currentData:\t' + currentData);
                
                userData.push(currentData);
                console.log('i: \t' + i);
                    
                /*    .then(function(data) {
                        userData.push(data);
                    })
                */
            };
            console.log('testArray :\t ' + testArray);
            console.log('userData in factory getData: ' + userData);
            return userData;
            
        }
        
        return mainFac;
        
    }]);