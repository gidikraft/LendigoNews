import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from './src/navigation/RootNavigation';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const appTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
    placeholder: '#707070',
  },
};

export default function App() {
  return (
    <PaperProvider theme={appTheme}>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </PaperProvider>
    
    
  );
}

