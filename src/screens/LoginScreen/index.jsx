import React from "react";
import { SafeAreaView } from "react-native";
import { TextInput, Button } from "react-native-paper";
import styles from "../../styles";
import useController from "./useController";

export default function LoginScreen(props) {
  const { formLogin, loading, isDisableBtn, onChangeText, onSubmit } =
    useController(props);

  return (
    <SafeAreaView style={[styles.container, styles.section, styles.center]}>
      <TextInput
        label="Username"
        mode="outlined"
        autoCapitalize="none"
        left={<TextInput.Icon icon="account-outline" />}
        value={formLogin?.username}
        onChangeText={onChangeText("username")}
        style={{ width: "100%" }}
      />
      <TextInput
        label="Password"
        mode="outlined"
        autoCapitalize="none"
        left={<TextInput.Icon icon="lock-outline" />}
        secureTextEntry
        value={formLogin?.password}
        onChangeText={onChangeText("password")}
        style={{ width: "100%" }}
      />
      <Button
        icon="login"
        mode="contained"
        loading={loading}
        disabled={isDisableBtn}
        onPress={onSubmit}
        style={{ marginTop: 24, width: "100%" }}
      >
        SIGN IN
      </Button>
    </SafeAreaView>
  );
}
