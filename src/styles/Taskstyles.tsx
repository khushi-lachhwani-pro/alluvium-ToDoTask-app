import {
  Platform,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

// Define the interface for Button props, extending TouchableOpacityProps
interface IButtonProps extends TouchableOpacityProps {
  text: string;
  textStyle?: StyleProp<TextStyle>; // Custom text style
  style?: StyleProp<ViewStyle>; // Custom container style
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  input: {
    flex: 1,
    padding: 5,
    borderRadius: 10,
    fontSize: 16,
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'Roboto',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  filterContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    justifyContent: 'space-evenly',
    gap: 10,
  },
  filterButton: {
    flex: 1,
    elevation: 5,
    padding: 5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#eee',
  },
  activeFilterButton: {
    backgroundColor: '#4caf50',
  },
  filterText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'Roboto',
  },
  activeFilterText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  taskList: {
    paddingBottom: 100,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 1,
  },
  taskText: {
    flex: 1,
    fontSize: 16,
    marginHorizontal: 10,
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'Roboto',
  },
  taskTextCompleted: {
    textDecorationLine: 'line-through',
    color: '#999',
    fontStyle: 'italic',
  },
  emptyState: {
    textAlign: 'center',
    color: '#999',
    marginTop: 40,
    fontSize: 16,
    fontStyle: 'italic',
  },
  emptyStateContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 40,
  },
  emptyImage: {
    width: 180,
    height: 180,
    marginBottom: 20,
    opacity: 0.7,
  },
  emptyStateText: {
    textAlign: 'center',
    color: '#999',
    fontSize: 16,
    fontStyle: 'italic',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    marginBottom: 8,
    padding: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },

  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },

  deleteButton: {
    backgroundColor: '#e74c3c',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10
  },
  completeButton: {
    padding: 10,
    backgroundColor: '#2ecc71',
    justifyContent: 'center',
    borderRadius: 10

  },

});

export const Button = (props: IButtonProps) => {
  const {text, textStyle, style, ...touchableProps} = props;

  return (
    <TouchableOpacity style={style} {...touchableProps}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};