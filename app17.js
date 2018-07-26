var myproduct = {'id':1, name:'book', 'price': 20.00};

var vm = new Vue({
    el: '#app',
    data: {
        counter: 1,
        products: myproduct
    }
});

// vm.products.qty = '1';

Vue.set(myproduct, 'qty', 1);
console.log(vm);
vm.$watch('counter', function(nval, oval){
    alert('counter is incremented: ' + oval  + ' to ' + nval + '1');
});

// vm.$watch('counter', function(nval, oval){
//     alert('Counter is incremented : ' + oval + ' to ' + nval + '!');
// });
// setTimeout(
//     function(){
//         vm.counter = 20;
//     }, 2000
// );