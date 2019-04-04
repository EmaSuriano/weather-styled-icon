import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

const beforeScreenshot = async page => {
  await page.evaluate(() =>
    document
      .querySelectorAll('[data-animation="true"]')
      .forEach(({ style }) => (style.animation = 'stop')),
  );
};

initStoryshots({
  suite: 'Image storyshots',
  test: imageSnapshot({
    storybookUrl: 'http://localhost:6006/',
    beforeScreenshot,
  }),
});
