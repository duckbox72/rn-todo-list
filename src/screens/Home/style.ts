import { StyleSheet } from 'react-native';

import theme from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray600,
    alignItems: 'center',
    //justifyContent: 'center',
  },
  titleBackground: {
    width: '100%',
    height: 173,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: theme.colors.gray700,

  },
  titleContainer: {
    width: 110,
    height:32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.gray200
  },
  form: {
    //width: '100%',



    flexDirection: 'row',
    marginTop: -27,
    marginRight: 24,
    marginBottom: 32,
    marginLeft: 24,
  },
  textInput: {
    flex: 1,
    height: 56,
    backgroundColor: theme.colors.gray500,
    borderRadius: 5,
    color: '#FFF',

    fontSize: 16,
    padding: 16,
    marginRight: 6,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: theme.colors.blueDark,

    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF'
  },
});