'use strict';

require ('./_home.scss');

module.exports = ['$log', '$uibModal', HomeController];

function HomeController($log, $uibModal){
  $log.debug('init homeCtrl');

  this.business = {};

  this.open = function(businessData) {
    let businessJSON = angular.toJson(businessData);
    let modalInstance = $uibModal.open({
      component: 'preview-modal',
      resolve: {
        businessData: function(){
          return businessJSON;
        },
      },
    });

    return modalInstance;
  };
}
