<template>
  <div class="wrapper">
    <div class="login-input">
      <span>Представьтесь: </span>
      <login-input v-model="name"></login-input>
    </div>
    <button class="login-button" @login="login" :disabled="name.length === 0">Пустите меня!</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import LoginInput from '@/components/LoginInput.vue';
import router from '../router/index';

export default defineComponent({
  name: 'Home',
  components: {
    LoginInput,
  },
  setup() {
    const name = ref('');

    return {
      name,
      login() {
        if (!name.value) {
          return;
        }

        router.push({
          name: 'chat',
          params: {
            login: name.value,
          },
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

      margin-top: 15px;

      &:disabled {
        background-color: #001829;
      }
    }
  }
}
</style>
