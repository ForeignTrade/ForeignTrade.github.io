import React from 'react'
import { Box, Card, CardMedia, Typography, Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const tools = [
  {
    title: '人工翻译',
    description: '准确、快速地翻译商务文件，跨越语言障碍。支持多种语言，保证翻译的专业性和准确性。',
    imageUrl: require('../../pic/translation.png'),
    route: '/team/translation',
  },
  {
    title: '专家大师课',
    description: '自动生成高质量的文书内容，提高工作效率。帮助您快速完成报告、论文、申请书等文档的撰写。',
    imageUrl: require('../../pic/master.png'),
    route: '/team/master',
  },
  {
    title: '同行一对一',
    description: '快速生成精美的PPT，提升演示效果。自动化设计，让您的演示更加吸引人。',
    imageUrl: require('../../pic/pear.png'),
    route: '/team/pear',
  },

]


function AIPage () {
  const navigate = useNavigate()

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
      <Grid container spacing={6} sx={{ maxWidth: 1200 }}> {/* Increase the grid spacing and max width */}
        {tools.map((tool) => (
          <Grid item xs={6} key={tool.title}>
            <Card
              sx={{
                minHeight: 250, // Increase the card height
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                p: 3, // Increase the padding
                border: '2px solid', // 设置边框粗细为2px
                borderColor: 'primary.main', // 设置边框颜色，这里使用主题中的主色，也可以直接使用颜色代码，如'#333'
                borderRadius: '16px' // 设置弧度
              }}
              onClick={() => navigate(tool.route)}
            >
              <Typography variant="h5" component="div" sx={{
                fontWeight: 'bold',
                textAlign: 'left',
                fontSize: '1.5rem', // Increase the font size
                mb: 1, // Add margin bottom
              }}>
                {tool.title}
              </Typography>
              <Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant="body2" color="text.secondary" sx={{
                  textAlign: 'left',
                  flex: 1,
                  pr: 2, // Increase the padding right
                }}>
                  {tool.description}
                </Typography>
                <CardMedia
                  component="img"
                  sx={{ width: 80, height: 80 }}
                  image={tool.imageUrl}
                  alt={tool.title}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default AIPage
