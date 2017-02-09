// INTERACTIVE DIRECTIVE
// The directive contains the three options restrict, scope, and templateUrl that we saw before in the 'appInfo' directive.
//     It also contains a fourth option link. The link is used to create interactive directives that respond to user actions.
//     scope refers to the directive's scope. Any new properties attached to $scope will become available to use in the directive's template.
//     element refers to the directive's HTML element.
// attrs contains the element's attributes.
//
// Inside the link function, there are two properties buttonText and installed, and the function download().
//
// The template uses Angular's built-in ng-click directive. When the button is clicked, ng-click will tell AngularJS to run the download() function in the directive.
//
// The download() function uses the scope.installed property to check if an app is installed. When an app is installed, download() does three things:
//
//     toggles the .btn-active class
// changes the button text to "Uninstall"
// changes scope.installed to true

app.directive('installApp', function() {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'js/directives/installApp.html',

        link: function(scope, element, attrs) {
            scope.buttonText = "Install",
                scope.installed = false,

                scope.download = function() {
                    element.toggleClass('btn-active')
                    if(scope.installed) {
                        scope.buttonText = "Install";
                        scope.installed = false;
                    } else {
                        scope.buttonText = "Uninstall";
                        scope.installed = true;
                    }
                }
        }
    };
});