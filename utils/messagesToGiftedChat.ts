import { Message } from "../types/api";
import { giftedMessage } from "../types/giftedMessage";
import formatDate from "./formatDate";

export default function messagesToGiftedChat(
  messages: Message[]
): giftedMessage[] {
  return messages
    .map((message) => ({
      _id: message.id,
      text: message.body,
      createdAt: formatDate(message.insertedAt),
      user: {
        _id: message.user.id,
        name: `${message.user.firstName}`,
        avatar: message.user.profilePic,
      },
    }))
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
}
