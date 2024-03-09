import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Background from '../pic/background.png' // 确保正确引入了背景图片
import { useNavigate } from 'react-router-dom'

function App () {
  const navigate = useNavigate()

  const navigateToHomePage = () => {
    navigate('/news')
  }


  return (
    <Box
      sx={{
        position: 'relative', // 为背景和内容定位提供相对定位
        height: '100vh', // 或根据需要调整
      }}
    >
      {/* 独立的背景层 */}
      <Box
        sx={{
          position: 'absolute', // 绝对定位以填满父容器
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${Background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.4, // 只对背景应用透明度
          zIndex: -1, // 确保背景在内容之下
        }}
      />

      {/* 标题 - 放在左上角 */}
      <Typography
        sx={{
          position: 'absolute', // 绝对定位
          top: 30, // 从顶部留出一些空间
          left: 60, // 从左侧留出一些空间
          color: 'black', // 文字颜色
          fontWeight: 'bold', // 字体加粗
          fontSize: '1.5rem', // 字号大小
        }}
      >
        知洲外贸通
      </Typography>

      {/* 左侧居中的内容区域 */}
      <Box
        sx={{
          position: 'absolute', // 绝对定位
          top: '50%', // 垂直居中
          left: 60, // 从左侧留出一些空间
          transform: 'translateY(-50%)', // 精确垂直居中
          width: '50%', // 根据内容自动调整宽度
        }}
      >
        {/* 段落1 */}
        <Typography
          sx={{
            color: 'black', // 文字颜色
            fontSize: '5rem', // 字号大小
            paddingBottom: '20px', // 段落之间的间距
          }}
        >
          全球贸易，一触即达
        </Typography>

        {/* 段落2 */}
        <Typography
          sx={{
            color: 'black', // 文字颜色
            fontSize: '1.5rem', // 字号大小
            paddingBottom: '50px', // 段落之间的间距
          }}
        >
          知洲外贸通，连接全球贸易的智慧桥梁！一站式解决您的进出口需求，让世界触手可及。精准数据、专业服务，助力企业驰骋国际市场，引领贸易新时代。打造全球化商务平台，携手企业共绘全球贸易蓝图，畅通无阻，共赢未来!
        </Typography>

        {/* 按钮 - 透明背景黑色边框 */}
        <Button variant="outlined" onClick={navigateToHomePage}
          sx={{ borderColor: 'black', color: 'black', padding: '10px' }}>
          Discover More
        </Button>
      </Box>
    </Box>
  )
}

export default App
