import Server from '@/api/server';
import {
  IStoreState, ISettings, IRoom, IMessage,
} from '@/types';
import { createStore } from 'vuex';

export default createStore<IStoreState>({
  state: {
    settings: {
      max_message_length: 10500,
      max_room_title_length: 50,
      max_username_length: 50,
      uptime: 0,
    },
    login: 'Anonymus',
    rooms: [],
    history: [],
    selectedRoom: null,
  },
  getters: {
    settings: (state) => state.settings,
    login: (state) => state.login,
    rooms: (state) => state.rooms,
    history: (state) => state.history,
    selectedRoom: (state) => state.selectedRoom,
  },
  mutations: {
    settings(state, payload: ISettings) {
      state.settings = { ...payload };
    },
    login(state, payload: string) {
      state.login = payload;
    },
    rooms(state, payload: Array<IRoom>) {
      state.rooms = payload;
    },
    history(state, payload: Array<IMessage>) {
      state.history = payload;
    },
    selectedRoom(state, payload: string) {
      state.selectedRoom = payload;
    },
  },
  actions: {
    async getSettings({ commit }) {
      const settings = await Server.settings();

      commit('settings', settings);
    },
    async getRooms({ commit }) {
      const rooms = await Server.rooms();

      commit('rooms', rooms);
    },
    async getHistory({ commit }, payload: string) {
      const history = await Server.history(payload);

      commit('history', history);
    },
    login({ commit }, payload: string) {
      commit('login', payload);
    },
    selectRoom({ dispatch, commit }, payload: string) {
      commit('selectedRoom', payload);
      dispatch('getHistory', payload);
    },
  },
});
