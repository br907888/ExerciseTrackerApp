import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";

export default function RepetitionExercise({ route, navigation }) {
  const { exercise } = route.params;
  const [count, setCount] = useState(0);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, textAlign: "center", fontWeight: "bold" }}>
        {exercise.name}
      </Text>
      <Text style={{ fontSize: 18, textAlign: "center", fontWeight: "bold" }}>
        Reps: {count}
      </Text>

      <Button
        title="Increase"
        onPress={() => setCount(count + 1)}
        containerStyle={{ marginTop: 10 }}
        buttonStyle={{ backgroundColor: "indigo" }}
      />
      <Button
        title="Reset"
        onPress={() => setCount(0)}
        containerStyle={{ marginTop: 10 }}
        buttonStyle={{ backgroundColor: "indigo" }}
      />

      <Button
        title="Suggested Exercise: Running"
        onPress={() =>
          navigation.navigate("DurationExercise", {
            exercise: { name: "Running", type: "Duration" },
          })
        }
        containerStyle={{ marginTop: 10 }}
        buttonStyle={{ backgroundColor: "indigo" }}
      />

      <Button
        title="Home"
        onPress={() => navigation.navigate("Home")}
        containerStyle={{ marginTop: 10 }}
        buttonStyle={{ backgroundColor: "indigo" }}
      />
    </View>
  );
}
