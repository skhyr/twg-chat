import React from "react";
import { Composer } from "react-native-gifted-chat";


export default function GiftedComposer(props: any) {
  return (
    <Composer
      {...props}
      textInputStyle={{
        backgroundColor: "white",
        borderBottomRightRadius: 0,
        borderRadius: 12,
        marginTop: 15,
        marginBottom: 12,
        paddingHorizontal: 12,
      }}
    />
  );
}
