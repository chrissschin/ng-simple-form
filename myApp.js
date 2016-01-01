angular.module('myApp', [])
  .directive('optIn', function() {
    return {
      restrict : 'E',
      transclude : true,
      templateUrl : 'optIn.html',
      replace : true
    }
  })
