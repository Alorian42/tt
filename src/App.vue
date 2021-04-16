<template>
  <h1>Nane Tada Team</h1>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import store from './store';

export default defineComponent({
  setup() {
    store.dispatch('getSettings');
    store.dispatch('getRooms');
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  background-color: #282e33;
}

h1 {
  font-size: 26px;
  height: 31px;
  margin: 10px;
  color: #e9eaea;
}

h2 {
  font-size: 20px;
  height: 23px;
  margin: 5px;
  color: #e9eaea;
}
</style>
