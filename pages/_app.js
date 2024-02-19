import { GeistProvider, CssBaseline } from '@geist-ui/react';
import '../public/style/main.css';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <GeistProvider>
      <CssBaseline />
      <Component {...pageProps} />
      <Analytics />
    </GeistProvider>
  );
}
export default MyApp;
