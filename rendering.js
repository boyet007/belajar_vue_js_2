var vm = new Vue({
    el: '#app',
    data: {
        show:true,
        styleobj: {
            backgroundColor: '#2196F3!important',
            cursor: 'pointer',
            padding: '18px 26px',
            verticalAlign: 'middle',
        }
    },
    methods: {
            showData: function() {
                this.show = !this.show;
            }
    }
})