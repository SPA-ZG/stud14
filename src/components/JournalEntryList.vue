<template>
    <div>
      <h1>Journal Entries</h1>
      <div>
        <ul>
          <li v-for="entry in entries" :key="entry.id">
            <router-link :to="{ name: 'journalEditor', params: { id: entry.id.toString() }}" class="custom-link">{{ entry.title }}</router-link>
          </li>
        </ul>
        <router-link :to="{ name: 'journalEditorN' }" class="custom-link create-entry-link">Create New Entry</router-link>
      </div>
    </div>
  </template>
  
  <script>
  import { useStore } from '../store';
  
  export default {
    computed: {
      entries() {
        return useStore().entries;
      },
    },
  };
  </script>
  
  <style scoped>
  h1 {
    text-align: center;
    margin-top: 20px;
  }
  
  div {
    text-align: center;
    margin-top: 20px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin: 10px 0;
  }
  
  .custom-link {
    text-decoration: none;
    padding: 5px 10px;
    background-color: #007BFF;
    color: #fff;
    border-radius: 5px;
    margin: 10px;
    display: inline-block;
  }
  
  .custom-link:hover {
    background-color: #0056b3;
    color: #fff;
  }
  
  .create-entry-link {
    background-color: #1a1b33;
  }
  </style>
  