<template>
  <div class="todo-list">
    <h3>Todo List</h3>
    <input type="text" class="input-new-item" @keyup.enter="addNewItemToList" />

    <ul>
      <ListItem
        v-for="(item, index) in list"
        :key="index"
        :item="item"
        :index="index"
        @delete-item="deleteItem"
      />
    </ul>
  </div>
</template>

<script>
import ListItem from "./ListItem.vue";

export default {
  name: "TodoList",

  components: {
    ListItem,
  },

  data() {
    return {
      list: [{ label: "Fazer almoço", checked: false }],
    };
  },

  created() {
    const itemsInLocalStorage = JSON.parse(localStorage.getItem("list"));
    this.list = itemsInLocalStorage ? itemsInLocalStorage : [];
  },

  methods: {
    addNewItemToList(event) {
      const newItem = event.target.value;

      // push -> adiciona no fim da lista
      // unshift -> adiciona no início da lista
      this.list.unshift({
        label: newItem,
        checked: false,
      });

      event.target.value = "";
    },
    deleteItem(index) {
      this.list.splice(index, 1);
    },
    updateLocalStorage() {
      // LocalStorage
      // Armazenando
      localStorage.setItem("list", JSON.stringify(this.list));
    },
  },

  watch: {
    list() {
      this.updateLocalStorage();
    },
  },
};
</script>

<style scoped>
.todo-list {
  width: 500px;
  margin: auto;
}

.input-new-item {
  width: 80%;
  height: 30px;
}

ul {
  list-style: none;
  padding: 0;
  width: 80%;
  margin: 20px auto;
  text-align: left;
}
</style>
