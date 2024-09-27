import { createPinia, defineStore } from 'pinia';

export const pinia = createPinia();

// Retrieve the entries from local storage if available, otherwise use default values
const storedEntries = JSON.parse(localStorage.getItem('entries')) || [
  { id: 1, title: 'Entry 1', content: 'Lorem ipsum 1' },
  { id: 2, title: 'Entry 2', content: 'Lorem ipsum 2' },
  // Add more entries as needed
];

// Define the store
export const useStore = defineStore({
  id: 'main',

  state: () => ({
    entries: storedEntries,
  }),

  actions: {
    addEntry(newEntry) {
      this.entries.push(newEntry);
      this.saveToLocalStorage();
    },

    updateEntry(updatedEntry) {
      const index = this.entries.findIndex((entry) => entry.id === updatedEntry.id);
      if (index !== -1) {
        this.entries.splice(index, 1, updatedEntry);
        this.saveToLocalStorage();
      }
    },

    deleteEntry(entryId) {
      const index = this.entries.findIndex((entry) => entry.id === entryId);
      if (index !== -1) {
        this.entries.splice(index, 1);
        this.saveToLocalStorage();
      }
    },

    saveToLocalStorage() {
      localStorage.setItem('entries', JSON.stringify(this.entries));
    },
  },
});
