import { defineStore } from "pinia";
import axios from "axios";

export const useDataStore = defineStore("data", {
  state: () => ({
    data: [],
    users: [],
  }),
  actions: {
    async getUsers() {

      try {
        const responseUsers = await axios.get(
          "https://jsonplaceholder.typicode.com/users",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        this.users = responseUsers.data;
        console.log('users', this.users);
        return this.users;
      } catch (error) {
        console.log("an error occured " + error);
      }
    },

    async getData() {

      try {
          const responseData = await axios.get(
            "https://jsonplaceholder.typicode.com/posts",
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          this.data = responseData.data;
          return this.data;
      } catch (error) {
        console.log("an error occured " + error);
      }
    },
  },
});
