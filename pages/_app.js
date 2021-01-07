import { GeistProvider, CssBaseline } from '@geist-ui/react'
import "../public/style/main.css"

function MyApp({ Component, pageProps }) {
  return (
    <GeistProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  )
}
export default MyApp
