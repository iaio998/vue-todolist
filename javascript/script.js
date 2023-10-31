const { createApp } = Vue;

const miaApp = createApp({
  data() {
    return {
      tasks: [
        {
          id: 1,
          text: "Lavare i piatti",
          done: true,
        },
        {
          id: 2,
          text: "Fare la spesa",
          done: false,
        },
        {
          id: 3,
          text: "Portare a spasso il cane",
          done: false,
        },
      ],
    };
  },
});

miaApp.mount("#app");
