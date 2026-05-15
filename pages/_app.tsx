import 'nextra-theme-docs/style.css'
import type { AppProps } from 'next/app'
import '../app/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
