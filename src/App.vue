<template>
  <div class="app">
    <div class="container is-fluid">
      <div class="search">
        <input
          class="input"
          type="text"
          v-model="query"
          placeholder="Filter by name..."
        />

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M368 208A160 160 0 1 0 48 208a160 160 0 1 0 320 0zM337.1 371.1C301.7 399.2 256.8 416 208 416C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208c0 48.8-16.8 93.7-44.9 129.1L505 471c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L337.1 371.1z"
          />
        </svg>
      </div>
      <vList :items="filteredItems" />
    </div>
  </div>
</template>
<script setup>
import vList from "@/components/v-list.vue";
import { ref, onMounted, computed } from "vue";
import { useDataStore } from "./store/data.js";
const query = ref("");
const dataStore = useDataStore();
let users = ref([]);
let posts = ref([]);
const filteredItems = computed(() => {
  let str = query.value;
  let result = [];
  let res = users.value.filter((x) => x.name.includes(str));
  if (query.value.length !== 0) {
    res.forEach((user) => {
      result = posts.value.filter((item) => item.userId == user.id);
    });
  } else {
    result = posts.value;
  }
  return result;
});

onMounted(() => {
  const func = async () => {
    try {
      users.value = await dataStore.getUsers();
      posts.value = await dataStore.getData();
    } catch (error) {
      console.log("error", error);
    }
  };
  func();
});
</script>

<style style="scss">
.app {
  padding: 40px 0px 40px 0px;
  background-color: #f2f7fb;
  min-height: 100vh;
}

.input {
  padding: 13px 0px 10px 50px;
  border-radius: 5px;
  width: 60%;
  display: block;
  margin: 0px auto;
}
.search {
  position: relative;
  box-sizing: border-box;
  svg {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 10px;
    left: 21%;
    @media screen and (max-width: 1024px) {
      left: 21.5%;
    }

    @media screen and (max-width: 768px) {
      left: 22.5%;
    }
    @media screen and (max-width: 575px) {
      left: 23.5%;
    }
  }
}
.info {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}
</style>
