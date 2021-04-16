import axios, { AxiosResponse } from 'axios';
import { IMessage, IRoom, ISettings } from '../types';

export default class Server {
  public static baseUrl = process.env.VUE_APP_API_URL;

  public static async settings(): Promise<ISettings> {
    const res: AxiosResponse<{
      result: ISettings
    }> = await axios.get(`${this.baseUrl}/settings`);

    return res.data.result;
  }

  public static async rooms(): Promise<Array<IRoom>> {
    const res: AxiosResponse<{
      result: Array<IRoom>
    }> = await axios.get(`${this.baseUrl}/rooms`);

    return res.data.result;
  }

  public static async history(roomName: string): Promise<Array<IMessage>> {
    const res: AxiosResponse<{
      result: Array<IMessage>
    }> = await axios.get(`${this.baseUrl}/rooms/${roomName}/history`);

    return res.data.result;
  }
}
