import { TonConnectButton } from '@tonconnect/ui-react';
import RouterView from '@/router/routerConfig'
import { useState, useEffect, useMemo } from 'react'
import { changeTheme } from '@/utils/index'
import { useTranslation } from 'react-i18next'
import { Navigate, Route, Router, Routes } from 'react-router-dom'
import { createNavigator, useBackButtonIntegration, useNavigatorIntegration } from '@tma.js/react-router-integration'
import { useBackButton } from '@tma.js/sdk-react'
function App() {
  const { i18n } = useTranslation()
  const tmaNavigator = useMemo(createNavigator, [])
  const [location, navigator] = useNavigatorIntegration(tmaNavigator)
  const backButton = useBackButton()
  useBackButtonIntegration(tmaNavigator, backButton)
  useEffect(() => {
    changeTheme('dark')
    localStorage.setItem('lan', 'en')
    i18n.changeLanguage('en')
  }, [])
  return (
    <Router location={location} navigator={navigator}>
      <Routes>
        <RouterView />
      </Routes>
    </Router>
  )
}

export default App
