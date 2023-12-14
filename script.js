const { createApp } = Vue;

createApp({
  created() {
    axios.get(this.apiUrl).then((resp) => {
      console.log(resp);
    });
  },
  data() {
    return {
      apiUrl: "server.php",
      dischiList: "",
    };
  },
}).mount("#app");
