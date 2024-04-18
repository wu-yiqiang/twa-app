import React from 'react'
import axios from 'axios'
import style from './index.module.scss'
const NavigationBar = () => {
  const chatId = 'YOUR_CHAT_ID'
  const title = '顶部导航栏标题'

  const handleClick = async () => {
    try {
      const response = await axios.post(`https://api.telegram.org/botYOUR_BOT_TOKEN/sendMessage`, {
        chat_id: chatId,
        text: '这是一条消息',
        title: title // 设置顶部导航栏标题
      })
      console.log(response.data)
    } catch (error) {
      console.error('Error sending message:', error)
    }
  }

  return (
    <div className={style.Navbar}>
      <h1>控制顶部导航栏</h1>
      <button onClick={handleClick}>设置顶部导航栏标题</button>
    </div>
  )
}

export default NavigationBar
