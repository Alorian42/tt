<template>
  <div class="about">
    <h2>Здравствуй, {{ login }}</h2>
    <div class="wrapper">
      <div class="chat-menu">
        <div class="chat-menu-header">Комнаты:</div>
        <chat-menu :rooms="rooms" @select="selectRoom"></chat-menu>
      </div>
      <div class="chat-items">
        <div class="chat-items-empty" v-if="!selectedRoom">
          Выберите комнату для общения
        </div>
        <chat-items v-else :history="history"></chat-items>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import store from '@/store';
import {
  computed, defineComponent,
} from 'vue';
import ChatMenu from '@/components/ChatMenu.vue';
import ChatItems from '@/components/ChatItems.vue';

export default defineComponent({
  components: {
    ChatMenu,
    ChatItems,
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
      max-height: 100%;
      overflow: auto;

      background-color: #282e33;
      color: #eeecec;

      &-header {
        background-color: #181c1f;
        font-size: 14px;
        padding: 15px;
      }
    }

    &-items {
      width: 75%;
      max-height: 100%;
      overflow: auto;

      background-color: #18191d;

      &-empty {
        color: #e9eaea;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
      }
    }
  }
}
</style>
