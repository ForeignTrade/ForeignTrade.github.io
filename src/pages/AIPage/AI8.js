
import React, { useState } from 'react'
import { Box, TextField, Button, Typography, Avatar, InputAdornment } from '@mui/material'
import axios from 'axios'
import botAvatar from '../../pic/botAvatar.png'
import userAvatar from '../../pic/userAvatar.png'
import CryptoJS from 'crypto-js'

const secretKey = '112345' // 用于加密和解密的密钥
const encryptedApiKey = 'U2FsdGVkX18bkYS68ghSUXFf14EZZeQL+bS3XsRti3mSIAQfA5kebvtEsdZrC0USQjWm2UdYTqnYDSKmMXfRipLfbCksRd8XFRDrCvrMIMI' // 你加密后的 API 密钥

const PPTGeneration = () => {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])

  const handleInputChange = (event) => {
    setInput(event.target.value)
  }

  // 加密函数
  // const encrypt = (text) => {
  //   return CryptoJS.AES.encrypt(text, secretKey).toString()
  // }

  // 解密函数
  const decrypt = (cipherText) => {
    const bytes = CryptoJS.AES.decrypt(cipherText, secretKey)
    return bytes.toString(CryptoJS.enc.Utf8)
  }

  const handleSubmit = async () => {
    if (!input.trim()) return

    const userMessage = { role: 'user', content: input }
    const newMessages = [...messages, userMessage]

    try {
      const decryptedApiKey = decrypt(encryptedApiKey) // 解密 API 密钥

      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: 'gpt-3.5-turbo',
        messages: newMessages,
      }, {
        headers: {
          'Authorization': `Bearer ${decryptedApiKey}`,
        },
      })

      const botMessage = { role: 'assistant', content: response.data.choices[0].message.content }
      setMessages([...newMessages, botMessage])
    } catch (error) {
      console.error('Error calling OpenAI API:', error)
    }

    setInput('')
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '30px', alignItems: 'center', overflow: 'hidden' }}>
      <Box sx={{ width: '95%', height: '75vh', overflowY: 'auto', marginBottom: 2, borderRadius: '10px', border: '1px solid #ccc' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, padding: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Avatar src={botAvatar} />
            <Typography sx={{ marginLeft: 1, marginRight: 1, padding: 1, backgroundColor: '#e0e0e0', borderRadius: 2 }}>

              欢迎使用直播话术定制精灵！为了让您的直播带货更加生动有趣且富有成效，我们在这里随时准备为您量身打造吸引观众、促进销售的精彩话术。请您在开始前提供以下关键信息以便我能帮您设计出符合产品特色的互动内容：<br />
              目标市场与语言选择： 请选择或告知我们直播的目标国家及对应的语言，如英语、法语、西班牙语或其他语种。<br />
              直播间产品名称： 请告诉我您今天将要推广的具体商品名称以及它的主要特点和卖点。<br />
              目标受众特征： 描述一下您的目标观众群体，比如年龄层、兴趣偏好或是他们可能关心的商品功能等。<br />
              直播活动亮点： 是否有特别优惠、限时折扣、赠品活动或者独家故事可以分享给观众？<br />
              直播目标与节奏： 您希望通过本次直播达成什么样的销售目标？有哪些时段会有特定的活动环节或重要产品介绍？<br />
              产品展示要求： 有没有需要特别强调的产品演示部分，或者是想要通过何种方式来呈现产品的优势？<br />
              只需提供以上这些关键信息，我就能为您精心策划一套引人入胜的开场白、产品解说词、互动游戏及促单话术，让您的直播销售更上一层楼！

            </Typography>
          </Box>
          {messages.map((message, index) => (
            <Box key={index} sx={{ display: 'flex', justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start' }}>
              {message.role !== 'user' && (
                <Avatar src={botAvatar} />
              )}
              <Typography sx={{
                marginLeft: 1,
                marginRight: 1,
                padding: 1,
                backgroundColor: message.role === 'user' ? '#b2fab4' : '#e0e0e0',
                borderRadius: 2,
                maxWidth: 'calc(100% - 110px)' // 假设头像宽度为40px，两个头像总宽度为80px
              }}>
                {message.content}
              </Typography>

              {message.role === 'user' && (
                <Avatar src={userAvatar} />
              )}
            </Box>
          ))}
        </Box>
      </Box>
      <Box sx={{ width: '95%', display: 'flex', marginTop: '50px' }}>
        <TextField
          fullWidth
          value={input}
          onChange={handleInputChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button variant="contained" onClick={handleSubmit} sx={{ whiteSpace: 'nowrap' }}>
                  发送
                </Button>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Box>
  )
}

export default PPTGeneration