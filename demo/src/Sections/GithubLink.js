import React from 'react';
import GithubCorner from 'react-github-corner';
import palette from './palette';

const GithubLink = () => (
  <GithubCorner
    href="https://github.com/EmaSuriano/weather-styled-icon"
    bannerColor={palette.desire}
    octoColor={palette.honeyDrew}
    size={80}
    direction="right"
  />
);

export default GithubLink;
