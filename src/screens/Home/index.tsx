import React, { useState, useEffect } from "react";
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
import clipboard from "../../assets/clipboard.png";

import { styles } from "./styles";
import { Task } from "../../components/Task";

export default function Home() {
  const [isFocused, setFocused] = useState(false);
  const [tasks, setTasks] = useState<{ description: string; check: boolean }[]>(
    []
  );
  const [taskText, setTaskText] = useState("");
  const [countTasks, setCountTasks] = useState(0);
  const [checkTasks, setCheckTasks] = useState(0);

  function handleTaskAdd() {
    if (taskText == "") {
      return Alert.alert("Erro!", "Tarefa sem descrição.");
    }

    if (tasks.some((task) => task.description === taskText)) {
      setTaskText("");
      return Alert.alert("Erro!", "Tarefa já existe.");
    }

    const newTask = { description: taskText, check: false };
    setTasks([...tasks, newTask]);
    setTaskText("");
  }

  function handleTaskRemove(taskToRemove: {
    description: string;
    check: boolean;
  }) {
    Alert.alert(
      "Atenção!",
      `Deseja remover a tarefa: ${taskToRemove.description}?`,
      [
        {
          text: "Sim",
          onPress: () => {
            const updatedTasks = tasks.filter((task) => task !== taskToRemove);
            setTasks(updatedTasks);
          },
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]
    );
  }

  function handleTaskChangeStatus(taskToChange: {
    description: string;
    check: boolean;
  }) {
    const updatedTasks = tasks.filter((task) => task !== taskToChange);
    const newTask = {
      description: taskToChange.description,
      check: !taskToChange.check,
    };
    updatedTasks.push(newTask);
    setTasks(updatedTasks);
    !taskToChange.check
      ? setCheckTasks(checkTasks + 1)
      : setCheckTasks(checkTasks - 1);
  }

  useEffect(() => {
    let totalTasks = tasks.length;
    setCountTasks(totalTasks);
    let totalCheckTasks = tasks.filter((task) => task.check === true).length;
    setCheckTasks(totalCheckTasks);
  }, [tasks]);

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
            style={[
              styles.input,
              { borderColor: isFocused ? "#5E60CE" : "#0D0D0D" },
            ]}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={"#808080"}
            onChangeText={setTaskText}
            value={taskText}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
          <TouchableOpacity style={styles.buttonNew} onPress={handleTaskAdd}>
            <PlusCircle size={24} color={"#F2F2F2"} />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <View style={styles.info}>
            <View style={styles.created}>
              <Text style={styles.textCreated}>Criadas</Text>
              <Text style={styles.counter}>{countTasks}</Text>
            </View>
            <View style={styles.done}>
              <Text style={styles.textDone}>Concluídas</Text>
              <Text style={styles.counter}>{checkTasks}</Text>
            </View>
          </View>

          <View style={styles.tasks}>
            <FlatList
              data={tasks}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <Task
                  onCheck={() => handleTaskChangeStatus(item)}
                  title={item.description}
                  onRemove={() => handleTaskRemove(item)}
                  status={item.check}
                />
              )}
              showsVerticalScrollIndicator={true}
              ListEmptyComponent={() => (
                <View style={styles.listEmpty}>
                  <Image source={clipboard} />
                  <Text
                    style={[
                      styles.listEmptyText,
                      { fontWeight: "bold", marginTop: 16 },
                    ]}
                  >
                    Você ainda não tem tarefas cadastradas
                  </Text>
                  <Text style={styles.listEmptyText}>
                    Crie tarefas e organize seus itens a fazer
                  </Text>
                </View>
              )}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
