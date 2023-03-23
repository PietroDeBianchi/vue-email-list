const { createApp } = Vue

createApp({
  data() {
    return {
      x: 10,
      emailList: [],
    }
  },
  mounted() {

    for(let i = 0; i < this.x; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then( (response) => {
           this.emailList.push(response.data.response);
        }
    );
    }

  }
}).mount('#app')