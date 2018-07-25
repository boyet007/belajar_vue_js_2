Vue.component('button-counter', {
    template: '<button v-on:click="displayLanguage(item)"><span style="font-size:25px;">{{ item }}</span></button>',
    data: function() {
        return {
            counter: 0
        }
    },
    props: ['item'],
    methods: {
        displayLanguage: function(lng){
            console.log('component: ' + lng);
            this.$emit('showlanguage', lng);
        }
    }
});

new Vue({
    el: '#app',
    data: {
        languageclicked: '',
        languages: ['Java', 'PHP', 'C++', 'Javascript', 'C#', 'Visual Basic']
    },
    methods: {
        languagedisp: function(a) {
            console.log('main: ' + a);
            this.languageclicked = a;          
        }
    },
})