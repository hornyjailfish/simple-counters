<script setup>
import { ref } from "vue";
import { useAttrs } from "vue";

const text = "clickmedaddy!";
const props = defineProps({
  counter: {
    type: Number,
    default: 0,
  },
  click: {
    type: Function,
  },
});
//const text = "clickmedaddy!";
</script>

<template>
  <button @click="click;">
    {{ counter > 0 ? text + " " + counter : text }}
  </button>
</template>
