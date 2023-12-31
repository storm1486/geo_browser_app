import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import globalstyles from "../../../shared/globalStyles";

const RadioButton = ({ label, selected, onSelect }) => {
  return (
    <TouchableOpacity
      style={styles.radioButtonContainer}
      onPress={onSelect}
      activeOpacity={1}
    >
      <View style={styles.outerCircle}>
        {selected ? <View style={styles.innerCircle} /> : null}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const RadioButtonQuestion = ({ question, options, onAnswerChange }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = (option) => {
    setSelectedOption(option);
    if (onAnswerChange) {
      onAnswerChange(option);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={globalstyles.question}>{question}</Text>
      {options.map((option) => (
        <RadioButton
          key={option}
          label={option}
          selected={option === selectedOption}
          onSelect={() => handleSelect(option)}
        />
      ))}
    </View>
  );
};

const styles = {
  container: {
    // Container styles
  },

  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    // Additional styles for radio button container
  },
  outerCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    // Additional styles for outer circle
  },
  innerCircle: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: "#000",
    // Additional styles for inner circle
  },
  label: {
    marginLeft: 10,
    // Label styles
  },
};

export default RadioButtonQuestion;
