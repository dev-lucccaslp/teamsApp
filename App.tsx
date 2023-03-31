import { ThemeProvider } from 'styled-components';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { ActivityIndicator } from 'react-native';

import { Groups } from '@screens/Groups';
import { Loading } from '@components/Loading';
import theme from '@theme/index';

export default function App() {
 const [ fontsLoaded ] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <>
    <ThemeProvider theme={theme}>
      { fontsLoaded ? <Groups /> : <Loading/>}
    </ThemeProvider>
    </>
  );
}
