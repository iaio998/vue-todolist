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
      lastId: 3,
      todoText: "",
    };
  },
  methods: {
    // getIndex(id, array) {
    //   return array.findIndex((el) => el.id === id);
    // },
    removeTask(i) {
      this.tasks.splice(i, 1);
    },
    addTask() {
      this.lastId++;
      const newTask = {
        id: this.lastId,
        text: this.todoText,
        status: false,
      };
      this.tasks.unshift(newTask);
      this.todoText = "";
    },
  },
});

miaApp.mount("#app");
