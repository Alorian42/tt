/* eslint-disable camelcase */
export interface ISettings {
  [key: string]: string | number,
  max_message_length: number,
  max_room_title_length: number,
  max_username_length: number,
  uptime: number,
}

export interface IUser {
  username: string,
}

export interface IMessage {
  room: string,
  created: string,
  sender: IUser,
  text: string,
}

export interface IRoom {
  name: string,
  last_message: IMessage,
}

export interface IStoreState {
  settings: ISettings,
  login: string,
  rooms: Array<IRoom>,
  selectedRoom: null | string,
  history: Array<IMessage>,
}
