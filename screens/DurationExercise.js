import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";

export default function DurationExercise({ route, navigation }) {
  const { exercise } = route.params;
  const [timer, setTimer] = useState(0); // Timer in milliseconds
  const [running, setRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const startTimer = () => {
    if (!running) {
      setRunning(true);
      const id = setInterval(() => setTimer((t) => t + 10), 10); // Increment every 10ms
      setIntervalId(id);
    }
  };

  const pauseTimer = () => {
    if (running) {
      setRunning(false);
      clearInterval(intervalId);
    }
  };

  const resetTimer = () => {
    setRunning(false);
    clearInterval(intervalId);
    setTimer(0);
  };

  // Format time as MM:SS:MS
  const formatTime = (milliseconds) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    const ms = Math.floor((milliseconds % 1000) / 10); // Convert to 2-digit format
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}:${String(ms).padStart(2, "0")}`;
  };

  return (
    <View style={{ padding: 20, alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>{exercise.name}</Text>
      <Text style={{ fontSize: 36, marginVertical: 10 }}>
        {formatTime(timer)}
      </Text>

      <Button
        title={running ? "Running..." : "Start"}
        onPress={startTimer}
        containerStyle={{ marginTop: 10, width: 200 }}
        buttonStyle={{ backgroundColor: "indigo" }}
      />
      <Button
        title="Pause"
        onPress={pauseTimer}
        containerStyle={{ marginTop: 10, width: 200 }}
        disabled={!running}
        buttonStyle={{ backgroundColor: "indigo" }}
      />
      <Button
        title="Reset"
        onPress={resetTimer}
        containerStyle={{ marginTop: 10, width: 200 }}
        buttonStyle={{ backgroundColor: "indigo" }}
      />

      <Button
        title="Suggested Exercise: Push-Ups"
        onPress={() =>
          navigation.navigate("RepetitionExercise", {
            exercise: { name: "Push-Ups", type: "Repetition" },
          })
        }
        containerStyle={{ marginTop: 20, width: 200 }}
        buttonStyle={{ backgroundColor: "indigo" }}
      />

      <Button
        title="Home"
        onPress={() => navigation.navigate("Home")}
        containerStyle={{ marginTop: 10, width: 200 }}
        buttonStyle={{ backgroundColor: "indigo" }}
      />
    </View>
  );
}
