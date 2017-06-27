if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('js/').then(function(registration) {
    console.log('スコープをServiceWorkerに登録成功: ', registration.scope);
  }).catch(function(err) {
    console.log('ServiceWorkerに登録失敗: ', err);
  });
}