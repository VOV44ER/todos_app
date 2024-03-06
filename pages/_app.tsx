import StoreProvider from '@/app/store-provider'
import '@/styles/globals.css'
import { AppProps } from 'next/app'
import React from 'react'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  )
}
