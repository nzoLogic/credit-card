console.log('app.js online');
angular.module('creditCard',[])
  .controller('config', config);

  function config(){
    console.log('angular mf')
    var vm = this;
    vm.newton = "delicious. seriously though, I cannot control myself around the newton contained in fig";
  }
