var app = new Vue({
    el: '#app',
    data: {
        countries_list: [],
    },
    mounted() {
        axios
            .get('https://restcountries.eu/rest/v2/region/americas')
            .then(response => (
                console.log(response)
                ))
    }
})