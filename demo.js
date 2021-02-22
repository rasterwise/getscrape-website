var app = new Vue({
  el: '#app',
  data () {
    return { 
        url: 'https://www.apple.com',
        result: null, 
        loading: false,
        loaded: false
    };
  },

  methods: {
    getResult(){
      var passedUrl = this.url
      var httpBool = passedUrl.includes("https://") || passedUrl.includes("http://"); 
      if(httpBool == false) {
        alert("Sorry. The URL needs a protocol (http:// or https://). Please add a protocol to the URL you're passing.");
        return;
      }
      this.loading = true;    
      axios
        .get('https://us-west3-waveguide-189221.cloudfunctions.net/getscrape_mainfunction?url='+this.url+'&extract=links', { crossdomain: true })  
        .then(response => {
            this.result = response.data;
      })
      .catch(error => {
        console.log(error)
        this.errored = true;
      })
      .finally(() => {
          this.loading = false;
          this.loaded = true;  
       })
    },
  },
})

