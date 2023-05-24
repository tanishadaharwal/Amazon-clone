import { Provider } from 'react-redux'
import { store } from '../slices/store'
import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"

export default function App({
  Component, pageProps: { session, ...pageProps }
}) {
  return (
    
    <SessionProvider store={store} session={session}>
        <Provider store={store}>
        <Component {...pageProps}/>
        </Provider>
      
    </SessionProvider>
  )
}