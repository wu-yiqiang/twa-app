import { useState, useEffect } from 'react'
import './explore.module.scss'
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
    <div className={`"Explore" ${colorClass}`}>
      <div className="leftBox">
        <span className="title">{title}</span>
        <span className={`url ${strColorClass}`}>{urlStr}</span>
      </div>
      <div className="rightBox">
        <SvgIcon size="1.7rem" svgName="logo" color="#fff" />
      </div>
    </div>
  )
}

export default Explore
