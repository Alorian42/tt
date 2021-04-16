<template>
  <div class="history-wrapper">
    <chat-item
      v-for="(message, index) in history"
      :key="`${message.text}__${index}`"
      class="history-item"
      :text="message.text"
      :date="message.created"
      :output="login === message.sender.username"
    ></chat-item>
  </div>
</template>

<script lang="ts">
import store from '@/store';
import { computed, defineComponent } from 'vue';
import ChatItem from './ChatItem.vue';

export default defineComponent({
  name: 'ChatItems',
  components: {
    ChatItem,
  },
  props: {
    history: {
      default: () => [],
      type: Array,
    },
  },
  setup() {
    const login = computed(() => store.getters.login);

    return {
      login,
    };
  },
});
</script>

<style lang="scss" scoped>
.rooms {
  &-item {
    transition: .3s;
    cursor: pointer;
    padding: 20px 10px;

    &:hover {
      transition: .3s;
      border: 1px solid gray;
    }
  }
}
</style>
