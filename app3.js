// var vm = new Vue({
//     el: '#example',
//     data: {
//         message: 'Wynne'
//     },
//     methods: {
//         reservedMessage: function() {
//             return this.message.split('').reverse().join('')
//         },

//         sekarang: function(){
//             return Date.now()
//         }

        
//     },
//     computed: {
        
//     }
// })

var vm = new Vue({
    el: '#demo',
    data: {
        firstName: 'Foo',
        lastName: 'Bar',
        fullName: 'Foo Bar'
    },
    methods: {},
    computed: {},
    watch: {
        // firstName: function(val) {
        //     this.fullName = val + ' ' + this.lastName
        // },
        lastName: function() {
            this.fullName = this.firstName + ' ' + val
        }
    }
});