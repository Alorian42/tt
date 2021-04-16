<template>
  <div class="history-item" :class="{
    'history-item-output': output,
  }">
    <div class="history-item-text">
      {{ text }}
    </div>
    <div class="history-item-date">
      {{ formattedDate }}
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'ChatItem',
  props: {
    text: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    output: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const formattedDate = computed(() => new Date(props.date).toLocaleString());
    return {
      formattedDate,
    };
  },
});
</script>

<style lang="scss" scoped>
.history-item {
  background-color: #33393f;
  max-width: 50vw;
  border-radius: 25px;
  margin: 10px;
  padding: 5px;
  width: 100%;

  &-text {
    color: #e9eaea;
  }

  &-date {
    color: #7f8a91;
  }

  &-output {
    margin-left: auto;
    background-color: #2a2f33;
  }
}
</style>
