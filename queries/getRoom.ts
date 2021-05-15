import { gql } from "@apollo/client";
import { RoomType } from "../types/api";

export const GET_ROOM = gql`
  query Room($id: String!) {
    room(id: $id) {
      roomPic
      name
      messages {
        id
        insertedAt
        body
        user {
          id
          profilePic
        }
      }
    }
  }
`;

export type GET_ROOM_TYPE = { room: Partial<RoomType> } | undefined;
