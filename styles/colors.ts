const colors: Record<string, string> = {
  background: '#0F172A',
  panel: '#1E293B',
  inputBackground: '#334155',
  inputBorder: '#64748B',
  textColor: '#F1F5F9',
  errorColor: '#F87171',
  buttonColor: '#3B82F6',
  goalTextColor: '#E2E8F0',
  goalBorderColor: '#475569',
  checked: '#00FF00',
  rippleColor: '#dddddddd',
};

const android_ripple = {
  android_ripple: {
    color: colors.rippleColor,
    borderless: false,
  },
};

export { colors, android_ripple };
