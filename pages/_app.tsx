import StoreProvider from '@/app/store-provider'
import '@/styles/globals.css'
import { AppProps } from 'next/app'
import React from 'react'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <StoreProvider>
      <Component {...pageProps} />
      <Toaster/>
    </StoreProvider>
  )
}
