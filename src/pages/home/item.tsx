import { useState, useEffect } from 'react'
import style from './item.module.scss'
import React, { FC } from 'react'
import SvgIcon from '@/components/SvgIcon'
import { Route, Router } from 'react-router-dom'
interface ItemProps {
  typename: string // svg名字
  title: string
  typecount: string | number
  count: string | number
}
const Item: FC<ItemProps> = (props) => {
  const { typename, title, typecount, count } = props
  useEffect(() => { }, [])
  const goToUrl = () => {
  }
  return (
    <div className={style.item}>
      <div className={style.leftBox}>
        <SvgIcon size="1.1rem" svgName={typename} color="#fff" />
        <div className={style.title}>
          <div className={style.toptitle}>{title}</div>
          <div className={style.bottomtitle} onClick={goToUrl}>{typecount} </div>
        </div>
      </div>
      <div className={style.rightBox}>${count ? count : "0.00"}</div>
    </div>
  )
}

export default Item
