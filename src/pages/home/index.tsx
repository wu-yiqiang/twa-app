import { useState, useEffect } from 'react'
import * as React from 'react'
import style from './index.module.scss'
import SvgIcon from '@/components/SvgIcon'
import Item from '@/pages/home/item'
import Explore from '@/pages/home/explore'
import { useTranslation } from 'react-i18next' 
import { useNavigate } from 'react-router-dom'
function Home(props: any) {
  const navigation = useNavigate()
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
    // console.log('sdsd', navigator)
    // return navigator.push('/crypto')
    console.log('asdsa', navigation)
    // if (true) return  props.history.push('/crypto')
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
    <div className={style.Home}>
      <div className={style.banner}>
        <div className={style.title}>{t('home.title')}</div>
        <div className={style.count}>
          <span className={style.dotbefore}>${dotbefore}</span>
          <span className={style.dotafter}>.{dotafter}</span>
        </div>
      </div>
      <div className={style.opts}>
        <div className={style.send} onClick={gotoSend}>
          <SvgIcon size="0.8rem" svgName="send" />
          <span className={style.title}>{t('home.send')}</span>
        </div>
        <div className={style.add} onClick={gotoAddCrypto}>
          <SvgIcon size="0.8rem" svgName="add" />
          <span className={style.title}>{t('home.addCrypto')}</span>
        </div>
        <div className={style.exchange} onClick={gotoExchange}>
          <SvgIcon size="0.8rem" svgName="exchange" />
          <span className={style.title}>{t('home.exchange')}</span>
        </div>
        <div className={style.shell} onClick={gotoShell}>
          <SvgIcon size="0.8rem" svgName="shell" />
          <span className={style.title}>{t('home.shell')}</span>
        </div>
      </div>
      <div className={style.assets}>
        <Item typename="logo" count="12" typecount="1 TON" title="Toncoin" />
        <Item typename="bit" count="12" typecount="10 BTC" title="Bitcoin" />
        <Item typename="dollar" count="12" typecount="1 USTD" title="Dollars" />
        <Item typename="dollar" count="12" typecount="1 USTD" title="Dollars" />
        <Item typename="dollar" count="12" typecount="1 USTD" title="Dollars" />
        <Item typename="dollar" count="12" typecount="1 USTD" title="Dollars" />
        <Item typename="dollar" count="12" typecount="1 USTD" title="Dollars" />
      </div>
      <div className={style.exploreBox}>
        <div className={style.title}>{t('home.exporeTitle')}</div>
        <div className={style.content}>
          <Explore url="https" title={t('home.see.title')} urlStr={t('home.see.str')} pic="logo" colorClass="discover" strColorClass="discover" />
          <Explore url="https" title={t('home.discover.title')} urlStr={t('home.discover.str')} pic="logo" colorClass="discover" strColorClass="discover" />
          <Explore url="https" title={t('home.get.title')} urlStr={t('home.get.str')} pic="logo" colorClass="discover" strColorClass="discover" />
          <Explore url="https" title={t('home.play.title')} urlStr={t('home.play.str')} pic="logo" colorClass="discover" strColorClass="discover" />
        </div>
      </div>
    </div>
  )
}

export default Home
