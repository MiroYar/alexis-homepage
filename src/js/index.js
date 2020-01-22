import '../modules/nav/.nav003/nav003.js';

import { setEventsForTeamSection } from '../modules/other-sections/.ourteam003/ourteam003.js';

window.addEventListener('load', setEventsForTeamSection);

import '../modules/feedbackpanels/.feedbackpanel003/feedbackpanel003.js';

import { Scrolled } from '../modules/other/.scrolled/scrolled';
new Scrolled('.feedbackpanel__text-wrap').init();
