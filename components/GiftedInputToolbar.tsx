import React from "react";
import { InputToolbar } from "react-native-gifted-chat";

export default function GiftedInputToolbar(props: any) {
  return (
    <InputToolbar
      {...props}
      containerStyle={{
        backgroundColor: "#B6DEFD",
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        borderTopWidth: 0,
      }}
      primaryStyle={{
        justifyContent: "center",
        alignItems: "center",
      }}
    />
  );
}
