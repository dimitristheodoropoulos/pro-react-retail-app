import type { Preview } from '@storybook/react'
import '../src/index.css'; // Η διαδρομή προς το CSS σου
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;