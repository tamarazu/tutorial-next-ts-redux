import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { Store } from 'redux'
import { createWrapper, Context } from 'next-redux-wrapper'
import { State } from '../store/reducers/counter'
import store from '../store/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}


const makestore = () => store;
const wrapper = createWrapper(makestore);
export default wrapper.withRedux(MyApp)
