import { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';

interface BtnAtomProps {
  text: string;
  onPress: (e: GestureResponderEvent) => void;
  BgColor?: string;
  color?: string;
  padding?: string;
}

type IBtn = React.FC<BtnAtomProps>;

type IStyleProps = Omit<BtnAtomProps, 'onPress' | 'text'>;

export { IBtn, BtnAtomProps, IStyleProps };
