import { useState, useEffect } from 'react'
import * as React from 'react'
import { withRouter } from 'react-router-dom'
import style from './index.module.scss'
function Miss(props: any) {
  return <div className={style.Miss}>404</div>
}

export default withRouter(Miss)
