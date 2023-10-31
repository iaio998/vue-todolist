const { createApp } = Vue;

const miaApp = createApp({
  data() {
    return {
      tasks: [
        {
          id: 1,
          text: "Procacciare cervelli",
          done: true,
        },
        {
          id: 2,
          text: "Intagliare le zucche",
          done: false,
        },
        {
          id: 3,
          text: "Affilare i denti",
          done: false,
        },
      ],
    };
  },
});

miaApp.mount("#app");
