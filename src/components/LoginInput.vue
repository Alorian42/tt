<template>
  <input type="text" :value="modelValue" @input="input" :maxlength="maxLen">
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoginInput',
  props: {
    modelValue: {
      default: '',
      type: String,
    },
    maxLen: {
      default: 505,
      type: Number,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    return {
      input(event: InputEvent) {
        emit('update:modelValue', (event.target as HTMLInputElement).value);
      },
    };
  },
});
</script>
