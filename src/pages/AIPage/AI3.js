
import React, { useState } from 'react'
import { Box, TextField, Button, Typography, Avatar, InputAdornment } from '@mui/material'
import axios from 'axios'
import botAvatar from '../../pic/botAvatar.png'
import userAvatar from '../../pic/userAvatar.png'
import CryptoJS from 'crypto-js'

const secretKey = '112345' // 用于加密和解密的密钥
const encryptedApiKey = 'U2FsdGVkX19nnQ7hcRt7UbOJXaMl5Jkjt6JK5Z1hjom1Jv8DBpTlsFesCL5WVvgUahbI/Iik+cLXA4EYhpqD7DobXi3nKJ0k4eUwi3oPJ0s=' // 你加密后的 API 密钥

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
              欢迎使用风险管理助手。为了帮助您更好地识别、评估和管理风险，以确保您的业务运作顺利并达到预期目标，请告诉我以下相关信息：<br />
              您所关注的主要风险类别（例如市场风险、信用风险、操作风险等）：<br />
              您当前的风险管理策略或流程：<br />
              您希望助手关注的特定风险领域或挑战：<br />
              其他任何您认为重要的信息，如您的业务规模、行业特点等：<br />
              这些细节将有助于我们为您提供定制的风险管理方案，以最大程度地降低您面临的风险并提升您的业务效率和可持续性。

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