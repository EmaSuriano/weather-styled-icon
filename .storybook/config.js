import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

// Option defaults:
setOptions({
  name: 'Weather Styled Icon',
  url: 'https://github.com/EmaSuriano/weather-styled-icon',
  showAddonPanel: false,
  sortStoriesByKind: true,
});

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  requireAll(require.context('../stories', true, /.stories.js$/));
}
configure(loadStories, module);
