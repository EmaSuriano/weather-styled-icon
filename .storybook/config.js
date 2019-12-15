import { configure } from '@storybook/react';

const loadStories = () => {
  require('../stories/Cloudy.stories.js');
  require('../stories/Rain.stories.js');
  require('../stories/Snow.stories.js');
  require('../stories/Sunny.stories.js');
};

configure(loadStories, module);
