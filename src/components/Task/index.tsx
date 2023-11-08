import { Text, View, TouchableOpacity } from "react-native";

import { Trash, Circle, CheckCircle } from "phosphor-react-native";

import { styles } from "./styles";

type Props = {
  onCheck?: () => void;
  onRemove?: () => void;
  title: string;
  status: boolean;
};

export function Task({ onCheck, onRemove, title, status }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonCheck} onPress={onCheck}>
        {!status && <Circle size={24} color={"#1E6F9F"} />}
        {status && <CheckCircle size={24} color={"#8284FA"} weight="fill" />}
      </TouchableOpacity>
      <Text style={[styles.item, status && styles.itemInvalid]}>{title}</Text>
      <TouchableOpacity style={styles.buttonDelete} onPress={onRemove}>
        <Trash size={24} color={"#808080"} />
      </TouchableOpacity>
    </View>
  );
}
