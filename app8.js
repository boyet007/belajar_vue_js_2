new Vue({
    el:'#app',
    data: {
        clicknum: 0,
        name: ''
    },
    methods: {
        // buttonclickonce: function() {
        //     this.clicknum++;

        showinputvalue: function(event) {
            this.name = event.target.value;
        }

        }
    
})