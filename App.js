import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import CustomButton from "./Button";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
} from "react-native";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [msg, setMsg] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your To-do List</Text>
      <View style={styles.inputArea}>
        <TextInput
          onChange={(event) => setMsg(event.target.value)}
          value={msg}
          style={styles.input}
          placeholder="Enter message"
        />
        <CustomButton
          onPress={() => {
            setMessages((prevValue) => {
              setTimeout(() => setMsg(""), 200);
              return [...prevValue, msg];
            });
          }}
          style={styles.button}
          textStyle={styles.buttonText}
          text="➡"
        />
      </View>
      {messages.map((message, index) => {
        return (
          <View key={index} style={styles.message}>
            <Text style={[styles.messageText]}>{message}</Text>
            <CustomButton
              onPress={(event) => {
                event.target.parentElement.parentElement.parentElement.remove();
              }}
              text="🗑️"
              textStyle={styles.buttonText}
              style={styles.utilBtn}
            />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  utilBtn: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  heading: {
    fontFamily: "Lucida Handwriting",
    color: "#0e6efe",
    fontSize: 35,
    alignSelf: "center",
  },
  input: {
    width: "90%",
    backgroundColor: "whitesmoke",
    border: "2px solid #0e6efe",
    fontSize: 25,
    textAlign: "center",
    borderRadius: 10,
    height: "10vh",
    zIndex: 1,
  },
  message: {
    borderRadius: 10,
    alignSelf: "center",
    display: "flex",
    padding: "1rem",
    marginTop: "2rem",
    backgroundColor: "#0e6efe",
    width: "40%",
    flexDirection: "row",
    alignItems: "center",
  },
  messageText: {
    color: "white",
    fontSize: 25,
    flex: 2,
    fontFamily: "Lucida Handwriting",
  },
  defaultText: {
    fontFamily: "Consolas",
    fontSize: 25,
    fontWeight: "400",
  },
  hidden: {
    display: "none",
  },
  show: {
    display: "flex",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 35,
    color: "white",
    width: "100%",
    height: "100%",
  },
  button: {
    textAlign: "center",
    borderRadius: 10,
    backgroundColor: "#0e6efe",
    height: "10vh",
    width: "150%",
  },
  inputArea: {
    flexDirection: "row",
    display: "flex",
    width: "50%",
    alignSelf: "center",
    marginTop: "5rem",
  },
});
