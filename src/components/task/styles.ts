import { StyleSheet } from 'react-native';

import theme from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 345,
    minHeight: 64,
    borderRadius: 6,
    marginBottom: 8,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: theme.colors.gray500,
  },
  completedButtonContainer: {
    width: '14%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  completedButton: {
    width: 18,
    height: 18,
    //backgroundColor: theme.colors.purple,

    borderStyle: 'solid',
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: theme.colors.blue,

  },
  taskContainer: {
    width: '72%',
  },
  task: {
    color: theme.colors.gray100,
  },
  deleteTaskContainer: {
    width: '14%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteTask: {

  }
});