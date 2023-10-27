import { Text, View, TouchableOpacity } from "react-native";

import { Trash, Circle, CheckCircle } from "phosphor-react-native";

import { styles } from "./styles";

type Props = {
  onCheck?: () => void;
  title: string;
  onRemove?: () => void;
};

export function Task({ onCheck, title, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonCheck} onPress={onCheck}>
        <Circle size={24} color={"#808080"} />
      </TouchableOpacity>
      <Text style={styles.item}>{title}</Text>
      <TouchableOpacity style={styles.buttonDelete} onPress={onRemove}>
        <Trash size={24} color={"#808080"} />
      </TouchableOpacity>
    </View>
  );
}
