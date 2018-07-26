new Vue ({
    el: '#databinding',
    data: {
        items: [],
        styleobj: {
            width: '30%',
            padding: '12px 20px',
            margin: '8px 0',
            boxSizing: 'border-box'
        }
    },
    methods: {
        showInputValue: function(event) {
            this.items.push(event.target.value);
            console.log(this.items);
        }
    }
});