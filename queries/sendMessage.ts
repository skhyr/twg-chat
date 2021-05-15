import { gql } from "@apollo/client";

export const SEND_MESSAGE = gql`
  mutation sendMessage($body: String!, $roomId: String!) {
    sendMessage(body: $body, roomId: $roomId) {
      body
      insertedAt
      id
      user {
        id
      }
    }
  }
`;
