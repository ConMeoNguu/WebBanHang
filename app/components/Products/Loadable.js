/**
 *
 * Asynchronously loads the component for Products
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
