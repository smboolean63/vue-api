const app = new Vue({
    el: '#app',
    data: {
        numero: 0,
        mail: '',
        personaggio: '',
    },
    created() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/int')
        .then((res) => {
            // handle success
            this.numero = res.data.response;
        })

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((franco) => {
            this.mail = franco.data.response; 
        })

        axios.get('https://swapi.dev/api/people/1')
        .then((res) => {
            this.personaggio = res.data; 
        })
    }
});