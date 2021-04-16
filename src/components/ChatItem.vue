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
  background-color: var(--gray-background-color);
  max-width: 50vw;
  border-radius: 25px;
  margin: 10px;
  padding: 5px;
  width: 100%;

  &-text {
    color: var(--white-color);
  }

  &-date {
    color: var(--gray-color);
  }

  &-output {
    margin-left: auto;
    background-color: var(--output-background-color);
  }
}
</style>
