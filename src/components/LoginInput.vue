<template>
  <input type="text" :value="modelValue" @input="input">
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
