import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';
import 'babel-polyfill';

const stopAnimations = async (page) => {
  await page.evaluate(() =>
    document.querySelectorAll('[data-animation]').forEach(({ style }) => {
      style.animation = 'stop'; // eslint-disable-line no-param-reassign
    }),
  );
};

initStoryshots({
  suite: 'Visual Testing',
  test: imageSnapshot({
    storybookUrl: 'http://localhost:6006/',
    beforeScreenshot: stopAnimations,
  }),
});
