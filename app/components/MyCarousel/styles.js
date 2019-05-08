import EStyleSheet from 'react-native-extended-stylesheet';
import { Platform } from 'react-native'

export default EStyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: (Platform.OS) === 'android' ? 20 : 0,
    backgroundColor: '#FFF8E1'
  }
});

