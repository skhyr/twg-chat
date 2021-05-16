export interface giftedMessage {
  _id: number | string;
  text: string;
  createdAt: number | Date;
  user: {
    _id: number | string;
    name: string;
    avatar: string;
  };
}
