import {
    StyleSheet,
  } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    blackBackground: {
      width: "100%",
      height: "30%",
      backgroundColor: "#0D0D0D",
    },
    logo:{
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      alignContent: "center",
      flex: 1,
      gap: 4
    },
    grayBackground: {
      width: "100%",
      height: "70%",
      backgroundColor: "#1A1A1A",
      paddingHorizontal: 24,
    },
    newTaskForm: {
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      gap: 4,
      marginTop: -24,
      marginBottom: 32,
    },
    input: {
      padding: 16,
      alignItems: "center",
      borderRadius: 6,
      borderWidth: 1,
      borderColor: "#0D0D0D",
      backgroundColor: "#262626",
      flex: 1,
      color: "#808080",
    },
    buttonNew: {
      padding: 18,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 6,
      backgroundColor: "#1E6F9F",
    },
    content: {
      justifyContent: "flex-start",
      alignItems: "center",
      flexDirection: "column",
    },
    info: {
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      marginBottom: 32,
    },
    created: {
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      gap: 8,
    },
    done: {
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      gap: 8,
    },
    textCreated: {
      color: "#4EA8DE",
    },
    textDone: {
      color: "#8284FA",
    },
    counter: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 8,
      backgroundColor: "#333333",
      paddingVertical: 2,
      paddingHorizontal: 8,
      color: "#D9D9D9",
    },
    tasks: {
      justifyContent: "flex-start",
      width: "100%",
      flexDirection: "column",
    },
    listEmptyText:{
      color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 48
    }
  });
  