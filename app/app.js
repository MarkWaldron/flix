var app = angular.module('main', ['ui.router, js-data']);
console.log('inside app.js');

app.config(function(DSProvider, DSLocalStorageAdapterProvider) {
  DSLocalStorageAdapterProvider.defaults.basePath = '~/Library/Application Support/Shafreeky';
})
.run(function (DS, DSLocalStorageAdapter) {
  // the local storage adapter was already registered
  DS.adapters.ls === DSLocalStorageAdapter;
  // but we want to make it the default
  DS.registerAdapter('ls', DSLocalStorageAdapter, { default: true });
});
