'use client'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '../lib/store'
import { useRef } from 'react'

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}