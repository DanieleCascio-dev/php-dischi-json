const { createApp } = Vue;

createApp({
  created() {
    axios.get(this.apiUrl).then((resp) => {
      console.log(resp);
      this.dischiList = resp.data;
      console.log(this.dischiList);
    });
  },
  data() {
    return {
      apiUrl: "server.php",
      dischiList: "",
    };
  },
}).mount("#app");
