<template>
  <div class="about">
    <h2>Здравствуй, {{ login }}</h2>
    <div class="wrapper">
      <div class="chat-menu">
        <h3>Комнаты:</h3>
        <chat-menu :rooms="rooms" @select="selectRoom"></chat-menu>
      </div>
      <div class="chat-items">
        <template v-if="!selectedRoom">
          Выберите комнату для общения
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import store from '@/store';
import { computed, defineComponent } from 'vue';
import ChatMenu from '@/components/ChatMenu.vue';

export default defineComponent({
  components: {
    ChatMenu,
  },
  setup() {
    const login = computed(() => store.getters.login);
    const rooms = computed(() => store.getters.rooms);
    const selectedRoom = computed(() => store.getters.selectedRoom);
    const history = computed(() => store.getters.history);

    return {
      login,
      rooms,
      selectedRoom,
      history,
      async selectRoom(roomName: string) {
        store.dispatch('selectRoom', roomName);
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  height: calc(100vh - 79px); // вычитаем высоту топ-бара

  .chat {
    &-menu {
      width: 25%;
      height: 100%;

      background-color: yellow; // @TODO remove
    }

    &-items {
      width: 75%;
      height: 100%;

      background-color: purple; // @TODO remove
    }
  }
}
</style>
