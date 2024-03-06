<template>
  <div class="wrapper">
    <vItem v-for="item in props.items" :item="item" :key="item.id" />
  </div>
</template>

<script setup>
import vItem from "./v-item.vue";
import { defineProps } from "vue";
const props = defineProps({
items: {
    type: Array,
    required: true,
  },
});
</script>
<style lang="scss" scoped>
.wrapper {
  margin-top: 40px;
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-row-gap: 25px;
  grid-column-gap: 25px;
  justify-items: center;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 575px) {
    grid-template-columns: 1fr;
  }
}
</style>
