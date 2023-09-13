import { useMemo, useState } from "react";
import { Alert } from "react-native";

export default function useController({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [formLogin, setFormLogin] = useState({
    username: "",
    password: "",
  });

  const onChangeText = (type) => (value) => {
    setFormLogin({ ...formLogin, [type]: value });
  };

  // Submit form login (username & password)
  const onSubmit = () => {
    requestAnimationFrame(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        Alert.alert("Success", `Welcome ${formLogin?.username}`, [
          {
            text: "OK",
            // Setelah login, pindah ke halaman Catalog
            onPress: () => {
              navigation.navigate("CATALOG_SCREEN");
            },
          },
        ]);
      }, 1000);
    });
  };

  // Disable button jika username & password kurang dari 3 kata.
  const isDisableBtn = useMemo(() => {
    const { username, password } = formLogin;
    if (username.length >= 3 && password.length >= 3) {
      return false;
    }
    return true;
  }, [formLogin.username, formLogin.password]);

  return { formLogin, loading, isDisableBtn, onChangeText, onSubmit };
}
