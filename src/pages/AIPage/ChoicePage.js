import React from 'react'
import { Box, Card, CardMedia, Typography, Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const tools = [
  {
    title: '邮件编写助手',
    description: '这是邮件编写助手',
    imageUrl: require('../../pic/default.png'),
    route: '/ai/ai1',
  },
  {
    title: '市场分析预测助手',
    description: '这是市场分析预测助手',
    imageUrl: require('../../pic/default.png'),
    route: '/ai/ai2',
  },
  {
    title: '风险管理助手',
    description: '为企业提供全面的风险识别、评估和应对策略，帮助企业有效管理和降低潜在风险，保障业务稳定发展。',
    imageUrl: require('../../pic/default.png'),
    route: '/ai/ai3',
  },
  {
    title: '供应链优化助手',
    description: '通过深度分析和优化供应链流程，帮助企业提升运营效率，降低成本，增强市场竞争力。',
    imageUrl: require('../../pic/default.png'),
    route: '/ai/ai4',
  },
  {
    title: '交付可靠性助手',
    description: '保证企业产品或服务的准时交付，提高客户满意度，构建企业信誉，促进业务长期发展。',
    imageUrl: require('../../pic/default.png'),
    route: '/ai/ai5',
  },
  {
    title: '供应链协调助手',
    description: '通过促进供应链内部各环节的高效协同，增强整体供应链的灵活性和响应速度，提升业务运营效能。',
    imageUrl: require('../../pic/default.png'),
    route: '/ai/ai6',
  },
  {
    title: '需求预测助手',
    description: '利用先进的数据分析技术，精准预测市场需求变化，支持企业优化生产计划和库存管理，提高市场响应速度。',
    imageUrl: require('../../pic/default.png'),
    route: '/ai/ai7',
  },
  {
    title: '直播话术生成助手',
    description: '利用先进的数据分析技术，精准预测市场需求变化，支持企业优化生产计划和库存管理，提高市场响应速度。',
    imageUrl: require('../../pic/default.png'),
    route: '/ai/ai8',
  },
]


function AIPage () {
  const navigate = useNavigate()

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '10%' }}>
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
                fontSize: '2rem', // Increase the font size
                mb: 1, // Add margin bottom
              }}>
                {tool.title}
              </Typography>
              <Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant="body2" color="text.secondary" sx={{
                  textAlign: 'left',
                  flex: 1,
                  pr: 2, // Increase the padding right
                  fontSize: '1.5rem',
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
