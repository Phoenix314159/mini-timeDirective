angular.module('timeApp').directive('showTime',function () {
   return{
       restrict: 'E',
       template: '<div>The current time is:&nbsp; {{time}} </div>',
       link: function (scope, element, attrs) {
           let currentTime = new Date();
           scope.time = currentTime.toString();

       }

   }
});
