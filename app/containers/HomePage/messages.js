/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Homepage',
  },
  description: {
    id: `${scope}.description`,
    defaultMessage:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora adipisci labore, dolor recusandae, pariatur optio temporibus odio et hic rem eveniet sint similique magnam. Minus similique perferendis error ut quidem.',
  },
  instruction: {
    id: `${scope}.instruction`,
    defaultMessage: 'Find User',
  },
});
