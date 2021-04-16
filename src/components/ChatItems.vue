<template>
  <chat-item
    v-for="(message, index) in history"
    :key="`${message.text}__${index}`"
    :text="message.text"
    :date="message.created"
    :output="login === message.sender.username"
  ></chat-item>
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
