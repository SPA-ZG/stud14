<template>
    <div>
      <label for="title">Title: <span class="required-indicator">*</span></label>
      <input v-model="localEntry.title" required />
      <label for="content">Content:</label>
      <div class="text">
        <textarea v-model="localEntry.content" required></textarea>
      </div>
      <button type="button" @click="saveEntry" :disabled="!localEntry.title">Save</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      entry: Object,
      isNewEntry: Boolean,
    },
    data() {
      return {
        localEntry: { ...this.entry }, // Create a local copy to avoid mutating props directly
      };
    },
    methods: {
      saveEntry() {
        // Check if the title is provided before saving
        if (this.localEntry.title) {
          // Emit an event to notify the parent about the changes
          this.$emit('save', this.localEntry);
        } else {
          // Optionally, you can show an error message or handle the case where the title is not provided.
          alert("Title is required!");
        }
      },
    },
  };
  </script>
  
  <style scoped>
    form {
      display: inline-block;
      margin: 20px;
      text-align: center;
    }
  
    .text {
      width: 50%;
      margin: 0 auto; /* Center-align the container */
    }
  
    label {
      display: block;
      margin-top: 10px;
      font-weight: bold;
    }
  
    .required-indicator {
      color: red;
      margin-left: 5px;
    }
  
    input[type="text"],
    textarea {
      width: 100%;
      padding: 10px;
      margin-top: 5px;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-sizing: border-box; /* Include padding and border in the width */
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
  
    button:disabled {
      background-color: #ccc; /* Change the color when the button is disabled */
      cursor: not-allowed;
    }
  
    button:hover:enabled {
      background-color: #0056b3;
    }
  
    router-link {
      display: block;
      text-align: center;
      margin-top: 10px;
      text-decoration: none;
      padding: 5px 10px;
      background-color: #007BFF;
      color: #fff;
      border-radius: 5px;
    }
  
    router-link:hover {
      background-color: #0056b3;
    }
  </style>
  