import { StyleSheet } from 'react-native';

import theme from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.colors.gray600,
    alignItems: 'center',
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
  },
  titleImage: {
    width: 110,
    height: 32,
  },

  form: {
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
  buttonPlus: {
    marginBottom: -8,

  },

  gaugesContainer: {
    width: '100%',

    paddingLeft: 24,
    paddingRight: 24,

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginBottom: 20,
  },
  counterContainer: {
    flexDirection: 'row',
  },
  counterCreatedText: {
    color: theme.colors.blueDark,
    fontWeight: 'bold',
  },
  counterCompletedText: {
    color: theme.colors.purpleDark,
    fontWeight: 'bold',
  },
  counterValueContainer: {
    width: 25,
    height: 19,

    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 8,
    marginLeft: 8,

    backgroundColor: theme.colors.gray400,
  },
  counterValueText: {
    color: theme.colors.gray100,
    fontSize: 12,
    fontWeight: '600',
  },

  listEmptyComponentContainer: {
    width: 345,
    
    borderTopColor: theme.colors.gray400,
    borderTopWidth: .5,

    alignItems: 'center',
  },
  listEmptyImage: {
    width: 56,
    height: 56,

    marginTop: 46,
    marginBottom: 16,
  },
  listEmptyTextTop: {
    color: theme.colors.gray300,

    fontWeight: 'bold',
  },
  listEmptyTextBottom: {
    color: theme.colors.gray300
  },

});