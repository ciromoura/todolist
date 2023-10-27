import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  FlatList,
  Image,
} from "react-native";

import { PlusCircle } from "phosphor-react-native";

import rocket from "../../assets/rocket.png";
import tologo from "../../assets/to.png";
import dologo from "../../assets/do.png";

import { styles } from "./styles";
import { Task } from "../../components/Task";

export default function Home() {
  const [task, setTask] = useState<string[]>([]);
  const [taskText, setTaskText] = useState("");

  function handleTaskAdd() {
    if (task.includes(taskText)) {
      setTaskText("");
      return Alert.alert("Erro!", "Tarefa já existe.");
    }

    setTask((prevState) => [...prevState, taskText]);
    setTaskText("");
  }

  function handleTaskRemove(name: string) {
    Alert.alert("Atenção!", `Deseja remover ${name}?`, [
      {
        text: "Sim",
        onPress: () =>
          setTask((prevState) =>
            prevState.filter((participant) => participant !== name)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.blackBackground}>
        <View style={styles.logo}>
          <Image source={rocket} />
          <Image source={tologo} />
          <Image source={dologo} />
        </View>
      </View>

      <View style={styles.grayBackground}>
        <View style={styles.newTaskForm}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={"#808080"}
            onChangeText={setTaskText}
            value={taskText}
          />
          <TouchableOpacity style={styles.buttonNew} onPress={handleTaskAdd}>
            <PlusCircle size={24} color={"#F2F2F2"} />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <View style={styles.info}>
            <View style={styles.created}>
              <Text style={styles.textCreated}>Criadas</Text>
              <Text style={styles.counter}>0</Text>
            </View>
            <View style={styles.done}>
              <Text style={styles.textDone}>Concluídas</Text>
              <Text style={styles.counter}>0</Text>
            </View>
          </View>

          <View style={styles.tasks}>
            <FlatList
              data={task}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <Task
                  key={item}
                  title={item}
                  onRemove={() => handleTaskRemove(item)}
                />
              )}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={() => (
                <Text style={styles.listEmptyText}>
                  Nenhuma tarefa. Adicione tarefas a sua lista.
                </Text>
              )}
            />
          </View>
        </View>
      </View>
    </View>
  );
}