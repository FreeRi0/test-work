import { defineStore } from "pinia";
import axios from "axios";

export const useDataStore = defineStore("data", {
  state: () => ({
    data: [],
    users: [],
  }),
  actions: {
    async getUsers() {
      if (this.users.length > 0) return false;
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
      } catch (error) {
        console.log("an error occured " + error);
      }
    },

    async getData() {
      if (this.data.length > 0) return false;
      try {
        setTimeout(async () => {
          const responseData = await axios.get(
            "https://jsonplaceholder.typicode.com/posts",
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          this.data = responseData.data;
        }, 1000);
      } catch (error) {
        console.log("an error occured " + error);
      }
    },

    async searchUsers(query) {
      const searchUsersResponse = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?userId=${query}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      this.data = searchUsersResponse.data;
    },
  },
});
