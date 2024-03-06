<template>
  <div class="card">
    <div class="card-content">
      <p class="card-title">
        {{ item.title }}
      </p>
      <div class="content">
        {{ item.body }}
      </div>
      <p class="card-author">{{ user.name }}</p>
    </div>
  </div>
</template>
<script setup>
import { defineProps, ref } from "vue";
import { useDataStore } from "../store/data.js";
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const dataStore = useDataStore();
const item = ref(props.item);

const user = dataStore.users.find((el) => el.id == item.value.userId);
</script>
<style lang="scss">
.card {
  box-shadow: none;
  &-title {
    font-size: 20px;
    font-weight: 600;
    color: dodgerblue;
    text-transform: inherit;
    margin-bottom: 12px;
  }
  &-author {
    color: grey;
  }
}
</style>
