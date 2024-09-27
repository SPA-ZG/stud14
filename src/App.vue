<template>
    <div>
      <h1>{{ message }}</h1>
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    data() {
      return {
        message: 'Hello!',
        count: 0,
        componentData: 'Data from parent',
      };
    },
    methods: {
      increment() {
        this.count++;
      },
      handleCustomEvent(data) {
        console.log('Custom event emitted with data:', data);
      },
    },
  };
  </script>
  
  <style scoped>
  h1 {
  color: blue;
  text-align: center;
  margin-top: 20px;
}

p, div {
  text-align: center;
  margin-top: 10px;
}

button {
  padding: 10px 20px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #0056b3;
}
  </style>
  