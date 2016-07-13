angular.module('twitchtvApp')

    .factory('mainFactory', ['$http', function($http) {
        
        var mainFac = {};
        
        /* Test function to verify angular linking
        mainFac.getTitle = function() {
            console.log('gettitle');
            return "THIS IS TEH TITEL";
        } */
        
        
        
        return mainFac;
        
    }]);