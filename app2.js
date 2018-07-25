// Vue.component('todo-item', {
//     props: ['todo'],
//     template: '<li>{{ todo.text }}</li>'
// })

var app = new Vue ({
    el: '#app',

    data: {
    //     seen: false
    // }
    //data: //{
        // groceryList: [
        //     { id: 0, text: 'Vegetables'},
        //     { id: 1, text: 'Cheese'},
        //     { id: 2, text: 'Whatever lah'},
        // ]

        // number: 1
        name: 'Wynne'

     
    },
    methods: { 
        // doSomething: function (event){
        //     alert('hallo ' + this.name)
        //     alert(event.target.tagMname)

        say: function(msg, event){
            
            console.log(event.isTrusted);
            event.preventDefault()
        }
    }
})