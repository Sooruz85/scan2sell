import { Html, Head, Main, NextScript } from 'next/document';
import { generateNonce } from '../utils/security';

export default function Document() {
  const nonce = generateNonce();

  return (
    <Html lang="fr">
      <Head nonce={nonce}>
        {/* Les balises meta et autres éléments head seront injectés ici */}
      </Head>
      <body>
        <Main />
        <NextScript nonce={nonce} />
      </body>
    </Html>
  );
}
