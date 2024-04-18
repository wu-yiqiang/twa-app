import ReactDOM from 'react-dom/client'
import App from './App'
import { HashRouter, BrowserRouter } from 'react-router-dom'
import { TonConnectUIProvider } from '@tonconnect/ui-react'
import 'virtual:svg-icons-register'
import '@/assets/scss/dark.scss'
import '@/assets/scss/light.scss'
import 'amfe-flexible'
import './i18n'
const manifestUrl = 'https://leo-xinwang.github.io/my-twa/tonconnect-manifest.json';
ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <TonConnectUIProvider manifestUrl={manifestUrl}>
    <HashRouter>
      <App />
    </HashRouter>
  </TonConnectUIProvider>
)