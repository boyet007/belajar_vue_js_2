var vm = new Vue({
    el:'#databinding',
    data: {
        name: ''
    },
    methods: {

    },
    filters: {
        countletters: function(value) {
            return value.length;
        }
    }
});