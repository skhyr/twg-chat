type RoomsType = {
    rooms: SingleRoomType[],
    user: UserType, 
}

type SingleRoomType = {
    id: string,
    name: string, 
    roomPic: string,
}

type RoomType = {
    id: string,
    messages: Message[],
    name: string,
    roomPic: string,
    user: UserType
}

type Message = {
    body: string,
    id: ID,
    insertedAt: string,
    user: UserType,
}

type UserType = {
    email: string,
    firstName: string,
    id: ID,
    lastName: string,
    profilePic: string,
    role: string,
}

type ID = string;

export { RoomsType, SingleRoomType, UserType, ID, RoomType, Message }