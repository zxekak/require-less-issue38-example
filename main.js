(function(){
  require.config({
    baseUrl: '.',
   map: {
      '*': {
         'less':     'lib/require-less/less'}
      }
  });

define(['components/module'],function(){});

}());