import { useState, useEffect } from 'react'
import * as React from 'react'
import { withRouter } from 'react-router-dom'
import  './index.module.scss'
import {changeTheme} from '@/utils/index'
function User(props: any) {
  return (
    <div className="User">
      mine
    </div>
  )
}

export default withRouter(User)
