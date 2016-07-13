angular.module('twitchtvApp')

    .factory('mainFactory', ['$http', function($http) {
        
        var mainFac = {};
        
        mainFac.getTitle = function() {
            console.log('gettitle');
            return "THIS IS TEH TITEL";
        } 
        
        return mainFac;
        
    }]);