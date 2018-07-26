var vm=new Vue({
    el: '#databinding',
    data: {},
    methods: {}
});

const Vue = require('vue').default;

var myMixin = {
    created: function() {
        this.startmixin()
    },
    methods: {
        startmixin: function() {
            alert('welcome to mixin example');
        }
    }
};

var Component = Vue.extends({
    mixins: [myMixin]
});
var component = new Component();