import { StyleSheet } from 'react-native';
import * as Gs from '../../styles';
import { IStyleProps } from './Btn.model';

const S = StyleSheet.create({
  btnBox: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: Gs.colors.textColor,
    fontSize: 16,
    fontWeight: 700,
  },
});

const btnBoxStyle = (p: IStyleProps) => ({
  ...S.btnBox,
  backgroundColor: p.BgColor || Gs.colors.buttonColor,
});

const btnStyle = (p: IStyleProps) => ({
  ...S.btn,
  paddingVertical: p.padding ? 0 : 10,
  paddingHorizontal: p.padding ? 0 : 20,
  padding: p.padding ? Number(p.padding) : 0,
});

const btnTextStyle = (p: IStyleProps) => ({
  ...S.btnText,
  color: p.color || Gs.colors.textColor,
});

export { btnStyle, btnBoxStyle, btnTextStyle };
