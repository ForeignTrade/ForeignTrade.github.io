import React from 'react'
import { Box, Typography } from '@mui/material'

function Article () {
  return (
    <Box sx={{
      maxWidth: '70%',
      margin: 'auto',
      textAlign: 'justify',
      padding: '20px', // 设置容器与网页上左右三边有一定的距离
    }}>
      <Typography variant="h4" sx={{
        fontWeight: 'bold',
        marginBottom: '20px',
        textAlign: 'center', // 标题居中
        fontSize: '2rem', // 使用更大的字号
      }}>
        今日聚焦：2024中国东盟人文交流年
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>2024年2月1日，中国—东盟中心同中国外交部、中国人民对外友好协会在福建省福州市联合举办2024年中国—东盟人文交流年标识发布仪式，揭晓人文交流年标识设计大赛优胜者名单并举行颁奖仪式。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>标识以中国—东盟（CHINA-ASEAN）首字母“C”及“A”为主视觉元素，形成代表2024甲辰龙年的龙形外观，同时蕴含中国和东盟国家山水相连、命运与共美好寓意。拱形条纹图案也代表桥梁和道路，象征中国东盟高质量推共建“一带一路”。色彩以“中国红”作为主色，辅以渐变的红、绿、橙、黄、蓝色调，象征中国同东盟国家和合共生，共建和平、安宁、繁荣、美丽、友好家园。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>来源：中国-东盟中心</Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/今日聚焦：2024中国东盟人文交流年-1.png')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>
    </Box>
  )
}

export default Article
