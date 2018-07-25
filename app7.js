new Vue({
    el: '#app',
    data: {
        num1: 100,
        num2: 200,
        total: 0
    },
    methods: {
        displaynumbers: function(event) {
            console.log(event);
            return this.total = this.num1 + this.num2;
        }
    }
})