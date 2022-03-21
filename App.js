import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from './src/navigation/RootNavigation';
import { useFonts, Dosis_200ExtraLight, Dosis_400Regular, Dosis_700Bold } from '@expo-google-fonts/dosis';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import { Store } from './src/redux/store';
import AppLoading from 'expo-app-loading';
import { Color } from './src/utils/Constants';

const appTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: Color.PRIMARY_COLOR,
    accent: Color.ACCENT_COLOR,
    placeholder: Color.PLACEHOLDER_COLOR,
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
    <StoreProvider store={Store}>
      <PaperProvider theme={appTheme}>
        <NavigationContainer>
          <RootStackNavigator />
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
    
  );
}

