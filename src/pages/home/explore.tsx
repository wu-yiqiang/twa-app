import { useState, useEffect } from 'react'
import style from './explore.module.scss'
import React, { FC } from 'react'
import SvgIcon from '@/components/SvgIcon'
interface ItemProps {
  title: string // svg名字
  url: string
  urlStr: string
  strColorClass: string
  colorClass: string
  pic: string
}
const Explore: FC<ItemProps> = (props) => {
  const { title, url, pic, urlStr, strColorClass, colorClass } = props
  useEffect(() => {}, [])
  return (
    <div className={`${style.Explore} ${style[colorClass]}`}>
      <div className={style.leftBox}>
        <span className={style.title}>{title}</span>
        <span className={`${style.url} ${style[strColorClass]}`}>{urlStr}</span>
      </div>
      <div className={style.rightBox}>
        <SvgIcon size="1.7rem" svgName="logo" color="#fff" />
      </div>
    </div>
  )
}

export default Explore
