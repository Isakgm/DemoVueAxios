const baseurl = "https://actorone.azurewebsites.net/api/actor"

const app = Vue.createApp({ 
    data() { 
        return {
             intro: 'Welcome to my Vue template',
             actorList:[],
             actor: null,

             } 
            }, 
            methods: {
                 myMethod(){
                    
                  }, 
                  getAllActors(){
                    console.log("Er i metoden getAllActors");

                    axios.get(baseurl)
                    .then(
                        response => {
                            this.actorList = response.data
                            console.log(response)
                            
                        }
                    )
                    .catch(
                        error => {
                            console.log(error)
                        }
                    )
                  },
                  getById(){
                    console.log("Er i metoden getById");

                    

                    axios.get(`https://actorone.azurewebsites.net/api/actor/${getById}`)
                    .then(
                        response => {
                            this.actorList = response.data
                            console.log(response)
                            
                        }
                    )
                    .catch(
                        error => {
                            console.log(error)
                        }
                    )
                  }
                }, 
                computed: { 
                    myComputed() { 
                        return ''
                     }, 
                    } 
                });

