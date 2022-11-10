import { Routers } from './routers';
import { ThemeProvider } from 'styled-components';
import { theme } from './global/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routers />
    </ThemeProvider>
  );
}

export default App;
