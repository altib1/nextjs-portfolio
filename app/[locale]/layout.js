import { appWithTranslation } from 'next-intl';

function RootLayout({ children }) {

  return appWithTranslation(children);

}

export default RootLayout;