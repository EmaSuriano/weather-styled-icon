import { configure } from '@storybook/react';

// function requireAll(requireContext) {
//   return requireContext.keys().map(requireContext);
// }

// function loadStories() {
//   requireAll(require.context('../stories', true, /.stories.js$/));
// }

const loadStories = () => {
  require('../stories/Cloudy.stories.js');
  require('../stories/Rain.stories.js');
  require('../stories/Snow.stories.js');
  require('../stories/Sunny.stories.js');
};

configure(loadStories, module);

// configure(loadStories, module);
