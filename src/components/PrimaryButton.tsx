import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface PrimaryButtonProps {
  onPress: () => void;
  label: string;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

export default function PrimaryButton({
  onPress,
  label,
  style,
  labelStyle,
}: PrimaryButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.primaryButtonContainer, style]}>
      <Text style={[styles.primaryButtonText, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  primaryButtonContainer: {
    borderRadius: 26,
    overflow: 'hidden',
    backgroundColor: 'orange',
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20, // Ajustar el espacio a cada lado del texto
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});
