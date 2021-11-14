import { ThemeProvider } from 'styled-components';
import { myTheme } from "../src/style/theme";
import "../src/index.css"
export const decorators = [
  (Story) => (
    <ThemeProvider theme={myTheme}>
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}