console.log('app.js online');
angular.module('creditCard',[])
  .controller('config', config);

  function config(){
    console.log('angular mf')
    var vm = this;
    vm.creditCard = {
      number: 5500000000000000,
      mm: '',
      yyyy: '',
      cvc: ''
    };
    vm.submitCard = function(data){
      console.log(data)
    }
  }
