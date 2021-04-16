<template>
  <div class="rooms-wrapper">
    <div
      v-for="room in rooms"
      :key="room.name"
      class="rooms-item"
      @click="select(room)"
    >
      {{ room.name }}
    </div>
  </div>
</template>

<script lang="ts">
import { IRoom } from '@/types';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ChatMenu',
  props: {
    rooms: {
      default: () => [],
      type: Array,
    },
  },
  emits: ['select'],
  setup(props, { emit }) {
    return {
      select(room: IRoom) {
        emit('select', room.name);
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.rooms {
  &-item {
    transition: .3s;
    cursor: pointer;
    padding: 10px 5px;
    font-size: 12px;

    &:hover {
      transition: .3s;
      background-color: var(--black-background-color);
    }
  }
}
</style>
