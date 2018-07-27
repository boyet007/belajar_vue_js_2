import axios from 'axios';
new Vue  ({
    el: '#app',
    data: {
        selectedFile: null
    },
    methods : {
        onFileSelected(event) {
            //console.log(event);
            this.selectedFile = event.target.files[0]
        },
        onUpload() {
            const
            axios.post('')
        }
    }
});