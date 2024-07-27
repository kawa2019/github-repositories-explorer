import { TextInput } from "react-native-paper";
import React from "react";

interface UiInputType {
  value: string;
  label: string;
  onUpdate: (value: string) => void;
}

export default function UiInput(props: UiInputType): React.JSX.Element {
  const { value, label, onUpdate } = props;

  return <TextInput label={label} value={value} onChangeText={onUpdate} />;
}
