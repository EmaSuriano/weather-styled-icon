import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';
import 'babel-polyfill';

const beforeScreenshot = async page => {
  await page.evaluate(() =>
    document.querySelectorAll('[data-animation]').forEach(({ style }) => {
      style.animation = 'stop'; // eslint-disable-line no-param-reassign
    }),
  );
};

const getMatchOptions = () => ({
  failureThreshold: 0.2,
  failureThresholdType: 'percent',
});

initStoryshots({
  suite: 'Image storyshots',
  test: imageSnapshot({
    storybookUrl: 'http://localhost:6006/',
    beforeScreenshot,
    getMatchOptions,
  }),
});
