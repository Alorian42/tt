<template>
  <div class="wrapper">
    <div class="login-input">
      <span>Представьтесь: </span>
      <login-input v-model="name" :max-len="settings.max_username_length"></login-input>
    </div>
    <button class="login-button" @click="login" :disabled="name.length === 0">Пустите меня!</button>
  </div>
</template>

<script lang="ts">
import {
  computed, ComputedRef, defineComponent, ref,
} from 'vue';
import LoginInput from '@/components/LoginInput.vue';
import router from '@/router';
import store from '@/store';
import { ISettings } from '@/types';

export default defineComponent({
  name: 'Home',
  components: {
    LoginInput,
  },
  setup() {
    const name = ref('');
    const settings: ComputedRef<ISettings> = computed(() => store.getters.settings);

    return {
      name,
      settings,
      async login() {
        if (!name.value) {
          return;
        }

        await store.dispatch('login', name.value);

        router.push({
          name: 'chat',
        });
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .login {
    &-input {
      width: 100%;

      span {
        font-size: 20px;
        font-weight: bold;
      }

      input {
        padding: 10px 5px;
        font-size: 24px;
      }
    }

    &-button {
      background-color: #0096ff;
      color: #ffffff;
      font-size: 26px;
      border: none;
      border-radius: 5px;
      cursor: pointer;

      margin-top: 15px;

      &:disabled {
        background-color: #001829;
        cursor: not-allowed;
      }
    }
  }
}
</style>
