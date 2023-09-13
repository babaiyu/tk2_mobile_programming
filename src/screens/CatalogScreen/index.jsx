import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Card, Text } from "react-native-paper";
import styles from "../../styles";
import useController from "./useController";

export default function CatalogScreen() {
  const { catalogs } = useController();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.section}>
          {catalogs.map((item) => (
            <Card key={item?.id} style={{ marginBottom: 20 }}>
              <Card.Cover
                source={item?.img}
                resizeMode="cover"
                style={styles.imgCatalog}
              />
              <Card.Content>
                <Text variant="titleLarge">{item?.title}</Text>
                <Text variant="bodyMedium" numberOfLines={4}>
                  {item?.description}
                </Text>
              </Card.Content>
            </Card>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
