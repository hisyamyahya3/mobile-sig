var routes = [
  {path: '/', componentUrl: 'pages/home.html'},
  {path: '/place/', componentUrl: 'pages/place.html'},
  {path: '/category/:id', componentUrl: 'pages/category.html'},
  {path: '/detail-category/:id/:lintang/:bujur/:alamat', componentUrl: 'pages/detail-category.html'},
  {path: '(.*)', url: 'pages/404.html'},
];
