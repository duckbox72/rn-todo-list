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
});