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

  color: var(--light-background-color);
}

body {
  --light-background-color: #2c3e50;
  --dark-background-color: #282e33;
  --dark-blue-background-color: #19232b;
  --black-background-color: #181c1f;
  --gray-background-color: #33393f;
  --output-background-color: #2a2f33;
  --white-color: #e9eaea;
  --gray-color: #7f8a91;

  margin: 0;
  background-color: var(--dark-background-color);
}

h1 {
  font-size: 26px;
  height: 31px;
  margin: 10px;
  color: var(--white-color);
}

h2 {
  font-size: 20px;
  height: 23px;
  margin: 5px;
  color: var(--white-color);
}
</style>
