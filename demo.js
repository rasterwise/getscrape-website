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
        .get('https://0lkdyh572d.execute-api.us-west-2.amazonaws.com/public/get-scrape-demo?url='+this.url+'&extract=links', { crossdomain: true })  
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

