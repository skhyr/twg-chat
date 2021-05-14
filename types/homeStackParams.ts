import { Message } from "./api";

export type HomeStackParamsList = {
  Home: undefined,
  Chat: {
    id: string,
    messages: Message[],
  },
};
