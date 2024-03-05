import React from 'react'
import { Box, Button, Card, CardContent, Typography, CardMedia } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Tec from '../../pic/tec.png'

function Choice () {
  const navigate = useNavigate()

  const navigateToFreeAssessment = () => {
    navigate('/assessment/free')
  }

  const navigateToPaidAssessment = () => {
    navigate('/assessment/paid')
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '95vh', gap: 2 }}>
      {/* Adjust the parent box to manage cards */}
      <Box sx={{ width: '90%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: '90%' }}>
        <Card sx={{
          width: '45%',
          textAlign: 'center',
          mx: '4%',
          height: '80%',
          display: 'flex',
          flexDirection: 'column',
          border: '2px solid', // 设置边框粗细为2px
          borderColor: 'primary.main', // 设置边框颜色，这里使用主题中的主色，也可以直接使用颜色代码，如'#333'
          borderRadius: '16px' // 设置弧度
        }}>
          <CardMedia
            component="img"
            image={Tec} // 使用导入的图片
            alt="免费测评"
            sx={{ width: 'calc(100% - 60px)', marginX: '30px', marginTop: '30px', borderRadius: '10px' }} // 保持上、左、右边与Card边框相同的距离
          />
          <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'start', paddingY: '16px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', marginBottom: '8px', marginTop: '30px' }}>
                免费测评
              </Typography>
              <Box sx={{ maxHeight: 150, overflow: 'auto', textAlign: 'justify', width: '80%' }}>
                <Typography variant="body1">
                  全方位评估企业的综合竞争力，测评内容覆盖财务实力、出口产品与服务质量等十个核心维度。帮助企业深度剖析自身优势和短板，明确发展路径，实现战略优化及全面提升。参与测评的企业将获得一份详尽的分析报告，报告中详细解读企业在各维度的表现，并提供针对性建议和发展策略。
                </Typography>
              </Box>
              <Button variant="contained" onClick={navigateToFreeAssessment} sx={{ padding: '10px 20px', width: '80%', marginTop: '20px' }}>
                进入
              </Button>
            </Box>
          </CardContent>
        </Card>

        <Card sx={{
          width: '45%',
          textAlign: 'center',
          mx: '4%',
          height: '80%',
          display: 'flex',
          flexDirection: 'column',
          border: '2px solid', // 设置边框粗细为2px
          borderColor: 'primary.main', // 设置边框颜色，这里使用主题中的主色，也可以直接使用颜色代码，如'#333'
          borderRadius: '16px' // 设置弧度
        }}>
          <CardMedia
            component="img"
            image={Tec} // 使用导入的图片
            alt="免费测评"
            sx={{ width: 'calc(100% - 60px)', marginX: '30px', marginTop: '30px', borderRadius: '10px' }} // 保持上、左、右边与Card边框相同的距离
          />
          <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'start', paddingY: '16px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', marginBottom: '8px', marginTop: '30px' }}>
                付费测评
              </Typography>
              <Box sx={{ maxHeight: 150, overflow: 'auto', textAlign: 'justify', width: '80%' }}>
                <Typography variant="body1">
                  这里是关于付费测评的介绍，可以包括测评的内容、目的和预期效果等。这段介绍应该简洁明了，大约100字左右。
                </Typography>
              </Box>
              <Button variant="contained" onClick={navigateToPaidAssessment} sx={{ padding: '10px 20px', width: '80%', marginTop: '20px' }}>
                进入
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  )
}

export default Choice
