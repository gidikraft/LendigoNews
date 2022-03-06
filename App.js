import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from './src/navigation/RootNavigation';
import { useFonts, Dosis_200ExtraLight, Dosis_400Regular, Dosis_700Bold } from '@expo-google-fonts/dosis';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import AppLoading from 'expo-app-loading';
import { CONSTANTS } from './src/utils/Constants';

const {
  PRIMARY_COLOR,
  PLACEHOLDER_COLOR,
  ACCENT_COLOR
} = CONSTANTS

const appTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: PRIMARY_COLOR,
    accent: ACCENT_COLOR,
    placeholder: PLACEHOLDER_COLOR,
  },
};

export default function App() {
  let [fontsLoaded] = useFonts({
    Dosis_200ExtraLight,
    Dosis_400Regular,
    Dosis_700Bold,

  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <PaperProvider theme={appTheme}>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </PaperProvider>
    
    
  );
}

