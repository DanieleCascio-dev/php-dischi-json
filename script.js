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
      selectedDisk: [],
      showDisk: false,
    };
  },
  methods: {
    getInfo(index) {
      axios
        .get(this.apiUrl, {
          params: {
            id: index,
          },
        })
        .then((resp) => {
          this.showDisk = true;
          this.selectedDisk = resp.data;
        });
    },
  },
}).mount("#app");
