<template>
  <div>
    <h2>Здравствуй, {{ login }}</h2>
    <div class="wrapper">
      <div class="chat-menu">
        <div class="chat-menu-header chat-menu-header-create">Создать комнату</div>
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
    <div class="chat-input">
      <textarea placeholder="Введите сообщение" v-model="text"></textarea>
    </div>
  </div>
</template>

<script lang="ts">
import store from '@/store';
import {
  computed, defineComponent, ref,
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
    const text = ref('');

    return {
      login,
      rooms,
      selectedRoom,
      history,
      text,
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
  height: calc(100vh - 79px - 150px); // вычитаем высоту верхнего и нижнего баров

  .chat {
    &-menu {
      width: 25%;
      max-height: 100%;
      overflow: auto;

      background-color: var(--dark-background-color);
      color: var(--white-color);

      &-header {
        background-color: var(--black-background-color);
        font-size: 14px;
        padding: 15px;

        &-create {
          transition: .3s;
          cursor: pointer;

          &:hover {
            transition: .3s;
            background-color: var(--dark-blue-background-color);

          }
        }
      }
    }

    &-items {
      width: 75%;
      max-height: 100%;
      overflow: auto;

      background-color: var(--black-background-color);

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

.chat-input {
  height: 150px;

  textarea {
    width: 99.6%;
    height: 140px;
    resize: none;

    background-color: var(--dark-background-color);
    color: var(--white-color);

    border: none;
    outline: none;
  }
}
</style>
