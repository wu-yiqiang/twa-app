import { TonConnectButton } from '@tonconnect/ui-react';
import RouterView from '@/router/routerConfig'
import { useState, useEffect, Suspense } from 'react'
import { Switch, Router, Link } from 'react-router-dom'
import { changeTheme } from '@/utils/index'
import { useTranslation } from 'react-i18next'
function App() {
  const { i18n } = useTranslation()
  useEffect(() => {
    changeTheme('dark')
    localStorage.setItem('lan', 'en')
    i18n.changeLanguage('en')
  }, [])
  return (
    <Suspense>
      <Switch>
        <RouterView />
      </Switch>
    </Suspense>
  )
}

export default App
