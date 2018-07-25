var vm = new Vue({
    el: '#computed_props',
    data: {
        firstName: 'Wynne',
        lastName: 'Zong'
    },
    methods: {},
    computed: {
        fullName : {
            get: function() {
                console.log(this.firstName + " " + this.lastName);
                return this.firstName + " " + this.lastName;
            },
            set: function(name) {

                var fname = name.split(" ");
                this.firstName = fname[0];
                this.lastName = fname[1]

            }
        }
    }
            
    
    
});