'use strict';

require('./_preview-modal.scss');

module.exports = {
  template: require('./preview-modal.html'),
  controller: ['$log', PreviewModalController],
  controllerAs: 'previewModalCtrl',
  bindings: {
    modalInstance: '<',
    resolve: '<',
  },
};

function PreviewModalController($log) {
  $log.debug('init previewModalCtrl');

  this.$onInit = function() {
    this.data = this.resolve.businessData;
    this.serialized = encodeURIComponent(this.data);
    this.url = `http://localhost:8080/#/app/?clone_id=12345&site=${this.serialized}`;
  };




  this.logToConsole = function() {
    console.log(this.data);
  };

  this.closeModal = function() {
    this.modalInstance.close();
  };
}
