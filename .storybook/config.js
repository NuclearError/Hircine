import { configure } from '@storybook/react';

function importAll (r) {
  r.keys().forEach(r);
}


function loadStories() {
  importAll(require.context('../src', true, /stories\.js$/));
}

configure(loadStories, module);
