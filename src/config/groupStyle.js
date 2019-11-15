
import { StyleSheet } from 'react-native';
import { p } from './normalize';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  web: {
    flex: 2,
  },
  inputBox: {
  },
  circle: {
    width: p(22),
    height: p(22),
    borderWidth: 1,
    borderColor: 'lightblue',
    marginLeft: p(12),
    marginRight: p(8),
    borderRadius: p(13),
    backgroundColor: 'red',
    marginVertical: p(7)
  },
  horizontal: {
    flexDirection: 'row',
    marginLeft: 15,
  },
  textInput: {
    fontSize: p(13),
    borderTopWidth: 0.5,
    borderTopColor: '#a0a0a0',
    borderBottomColor: '#a0a0a0',
    padding: p(4),
    paddingHorizontal: p(24),
    fontFamily: 'Muli-Light',
    borderLeftColor: '#18ffff',
  },

  colorText: {
    fontSize: p(13),
    fontFamily: 'Muli-Light',
    color: '#a0a0a0',
    margin: p(22),
    marginBottom: p(12)
  },
  bar: {
    width: 1,
    height: p(20),
    backgroundColor: '#a0a0a0',
    marginLeft: p(12),
    marginRight: p(14)
  },
  avatar: {
    width: p(50),
    height: p(50),
    borderRadius: p(26),
    borderWidth: 0.5,
    borderColor: '#a0a0a0',
    marginRight: p(12)
  }
})