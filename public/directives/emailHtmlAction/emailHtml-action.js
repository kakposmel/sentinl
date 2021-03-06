import watcherEmailHtmlAction from './emailHtml-action.html';
import { app } from '../../app.module';

app.directive('emailHtmlAction', function ($rootScope) {
  function actionDirective(scope, element, attrs) {
    scope.action = {
      type: 'email HTML',
      status: {
        isHeaderOpen: false
      }
    };

    scope.removeAction = function () {
      $rootScope.$broadcast('action:removeAction', { name: attrs.name });
    };

  }

  return {
    restrict: 'E',
    template: watcherEmailHtmlAction,
    scope: true,
    link: actionDirective
  };
});
