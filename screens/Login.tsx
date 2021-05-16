import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import VisionIcon from "../assets/vision.svg";
import VisionLowIcon from "../assets/vision-low.svg";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../queries/login";

interface props {
  setToken: (token: string) => void;
}

export default function Login({ setToken }: props) {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login, { loading: mutationLoading }] = useMutation(LOGIN);

  const handleClick = () => {
    setVisible(!visible);
  };

  const handleLogin = () => {
    login({ variables: { email, password } }).then((res) => {
      console.log(res.data.loginUser.token);
      setEmail("");
      setPassword("");
      setToken("eeeee");
    });
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Welcome back</Text>
        <Text style={styles.subtitle}>
          Log in and stay in touch with everyone!
        </Text>
      </View>

      <View>
        <Text style={styles.label}>e-mail address</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(e) => setEmail(e)}
          />
        </View>

        <Text style={styles.label}>password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            secureTextEntry={!visible}
            value={password}
            onChangeText={(e) => setPassword(e)}
          />
          <Pressable onPress={handleClick}>
            {visible ? <VisionLowIcon /> : <VisionIcon />}
          </Pressable>
        </View>
      </View>

      <Pressable
        onPress={handleLogin}
        style={styles.button}
        disabled={mutationLoading}
      >
        <Text style={styles.buttonText}>
          {mutationLoading ? "loading..." : "Log in"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B6DEFD",
    color: "white",
    padding: 20,
    paddingTop: 76,
    paddingBottom: 87,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 36,
    fontFamily: "Poppins-700",
    color: "#5603AD",
  },
  subtitle: {
    fontSize: 22,
    fontFamily: "Poppins-700",
    color: "white",
  },
  inputContainer: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: "Poppins-400",
  },
  vision: {
    marginLeft: 10,
  },
  label: {
    color: "white",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#5603AD",
    alignItems: "center",
    justifyContent: "center",
    height: 63,
    borderRadius: 10,
    width: 241,
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 19,
    fontFamily: "Poppins-600",
  },
});
