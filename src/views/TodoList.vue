<template>

<div>
    
  <div class="d-flex">

    <v-text-field
      v-model="newTaskTitle"
      @click:append="addTask"
      @keyup.enter="addTask"
      class="pa-3"
      outlined
      
      label="Ajouter une tache"
      append-icon="mdi-plus"
      hide-details
      clearable>
    </v-text-field>

    <v-select
    :items="categories"
    name="category"
    label="Select a category"
    v-model="category">
      <template v-slot:item="{item}">
        {{item.name}}
      </template>    
      <template v-slot:selection="{item}">
        {{item.name}}
      </template>
    </v-select>
  </div>
</div>
</template>

<script>

import store from '../plugins/vuex';
import taskService from '../services/taskService';


export default {
  name: "todolist",
  store: store,
  data() {
    return {
      newTaskTitle: "coucou",
      categories:[],
      category: "",
      tasks: [
        {
          id: 1,
          title: "debout",
          done: false,
        },
        {
          id: 2,
          title: "faire café",
          done: true,
        },
        {
          id: 3,
          title: "boire café",
          done: false,
        },
      ],
    };
  },
      created(){
         this.loadCategories();
    }, 

  methods: {
    doneTask(id) {
      let task = this.tasks.filter((task) => task.id === id)[0];
      task.done = !task.done;
    },
    addTask() {
      let newTask = {
        id: Date.now(),
        title: this.newTaskTitle,
        done: false,
      };
      this.tasks.push(newTask);
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    async loadCategories(){
          this.categories = await taskService.loadTaskCategories();
      },
     
  },
   computed: {
      user() {
      return this.$store.state.user;
    }
  }
};
</script>
