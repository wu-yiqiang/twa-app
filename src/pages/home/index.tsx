import { useState, useEffect } from 'react'
import * as React from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'
import './index.module.scss'
import SvgIcon from '@/components/SvgIcon'
import Item from '@/pages/home/item'
import Explore from '@/pages/home/explore'
import { useTranslation } from 'react-i18next' 
import { HashNavigator } from '@tma.js/sdk'
const navigator = new HashNavigator([{}], 0)
function Home(props: any) {
  const { t } = useTranslation()
  const [count, setCount] = useState(0.00)
  const [dotbefore, setDontbefore] = useState('0')
  const [dotafter, setDontafter] = useState('0')
  useEffect(() => {
    const num = 12.34
    var data = num.toString().split('.')
    setDontbefore(data[0] ? data[0] : '0')
    setDontafter(data[1] ? data[1] : '00')
  }, [])
  const gotoSend = () => {
    if (true) return  props.history.push('/crypto')
  }
  const gotoAddCrypto = () => {
    if (true) return props.history.push('/crypto')
  }
  const gotoExchange = () => {
    if (true) return props.history.push('/crypto')
  }
  const gotoShell = () => {
    if (true) return props.history.push('/crypto')
  }
  return (
    <div className="Home">
      <div className="banner">
        <div className="title">{t('home.title')}</div>
        <div className="count">
          <span className="dotbefore">${dotbefore}</span>
          <span className="dotafter">.{dotafter}</span>
        </div>
      </div>
      <div className="opts">
        <div className="send" onClick={gotoSend}>
          <SvgIcon size="0.8rem" svgName="send" />
          <span className="title">{t('home.send')}</span>
        </div>
        <div className="add" onClick={gotoAddCrypto}>
          <SvgIcon size="0.8rem" svgName="add" />
          <span className="title">{t('home.addCrypto')}</span>
        </div>
        <div className="exchange" onClick={gotoExchange}>
          <SvgIcon size="0.8rem" svgName="exchange" />
          <span className="title">{t('home.exchange')}</span>
        </div>
        <div className="shell" onClick={gotoShell}>
          <SvgIcon size="0.8rem" svgName="shell" />
          <span className="title">{t('home.shell')}</span>
        </div>
      </div>
      <div className="assets">
        <Item typename="logo" count="12" typecount="1 TON" title="Toncoin" />
        <Item typename="bit" count="12" typecount="10 BTC" title="Bitcoin" />
        <Item typename="dollar" count="12" typecount="1 USTD" title="Dollars" />
        <Item typename="dollar" count="12" typecount="1 USTD" title="Dollars" />
        <Item typename="dollar" count="12" typecount="1 USTD" title="Dollars" />
        <Item typename="dollar" count="12" typecount="1 USTD" title="Dollars" />
        <Item typename="dollar" count="12" typecount="1 USTD" title="Dollars" />
      </div>
      <div className="exploreBox">
        <div className="title">{t('home.exporeTitle')}</div>
        <div className="content">
          <Explore url="https" title={t('home.see.title')} urlStr={t('home.see.str')} pic="logo" colorClass="discover" strColorClass="discover" />
          <Explore url="https" title={t('home.discover.title')} urlStr={t('home.discover.str')} pic="logo" colorClass="discover" strColorClass="discover" />
          <Explore url="https" title={t('home.get.title')} urlStr={t('home.get.str')} pic="logo" colorClass="discover" strColorClass="discover" />
          <Explore url="https" title={t('home.play.title')} urlStr={t('home.play.str')} pic="logo" colorClass="discover" strColorClass="discover" />
        </div>
      </div>
    </div>
  )
}

export default withRouter(Home)
