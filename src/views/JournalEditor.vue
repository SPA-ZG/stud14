<template>
    <div>
      <h1>{{ isNewEntry ? 'Create New Entry' : 'Edit Entry' }}</h1>
      <div>
        <entry-form :entry="entry" :is-new-entry="isNewEntry" @save="saveEntry"></entry-form>
      </div>
      <div>
      <button v-if="!isNewEntry" @click="deleteEntry">Delete Entry</button>
    </div>
    <div>
    <router-link class="custom-link" to="/">Back to Entries</router-link>
    </div>
    </div>
  </template>
  
  <script>
import EntryForm from '@/components/EntryForm.vue';
import { useStore } from '../store';

export default {
  components: {
    EntryForm,
  },
  data() {
    return {
      entry: { id: null, title: '', content: '' },
    };
  },
  computed: {
    isNewEntry() {
      return this.entry.id === null;
    },
  },
  methods: {
    saveEntry(updatedEntry) {
      if (this.isNewEntry) {
        const newId = generateNumericId();
        updatedEntry.id = newId;
        useStore().addEntry(updatedEntry);
      } else {
        useStore().updateEntry(updatedEntry);
      }

      this.$router.push('/');
    },
    deleteEntry() {
      if (confirm('Are you sure you want to delete this entry?')) {
        useStore().deleteEntry(this.entry.id);
        this.$router.push('/');
      }
    },
  },
  created() {
    const entryId = this.$route.params.id;
    if (entryId) {
      this.entry = useStore().entries.find((entry) => entry.id === parseInt(entryId, 10));
    }
  },
};

// Placeholder function for generating a unique numeric ID
function generateNumericId() {
  return Math.floor(Math.random() * 1000);
}
  </script>
  
<style scoped>
form {
display: inline-block;
margin: 20px;
text-align: center;
}

label {
display: block;
margin-top: 10px;
font-weight: bold;
}

input[type="text"],
textarea {
width: 100%;
padding: 10px;
margin-top: 5px;
border: 1px solid #ccc;
border-radius: 5px;
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

.custom-link {
    text-decoration: none;
    padding: 5px 10px;
    background-color: #007BFF;
    color: #fff;
    border-radius: 5px;
    margin: 10px;
    display: inline-block;
  }
</style>
