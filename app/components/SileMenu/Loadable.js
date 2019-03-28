/**
 *
 * Asynchronously loads the component for SileMenu
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
