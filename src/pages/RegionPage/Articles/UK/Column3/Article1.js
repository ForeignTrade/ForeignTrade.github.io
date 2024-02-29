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
        今日聚焦：英国政策稳定性
      </Typography>
      <Typography paragraph variant="h5">
        一、政治风险分析
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        1英国政治体系以其成熟和稳定著称，但近年来，脱欧议题和随之而来的政策变动引发了一定程度的不确定性。尽管如此，英国政府和机构展现出应对内外挑战的能力，保持国家的基本稳定。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        2近期政治事件：脱欧后的政策调整和与欧盟的新贸易协议谈判是近年来的主要政治事件。这些变化对企业环境产生了影响，尤其是在贸易、劳动力流动性和监管方面。
      </Typography>
      <Typography paragraph variant="h5">
        二、社会运动
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        近年来，如脱欧相关抗议活动反映了一些社会分歧。英国见证了多场抗议活动和罢工，尤其是关于气候变化、公共服务投资和劳动条件的。尽管存在社会运动，但它们通常被有效管理，很少演变成严重的社会动荡。
      </Typography>
      <Typography paragraph variant="h5">
        三、安全状况
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        1英国总体治安良好，但企业和个人仍需注意安全和旅行警告。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        2英国的犯罪率在全球范围内相对较低，但在某些地区，尤其是大城市，仍需警惕小偷和街头犯罪。政府发布的旅行警告通常与恐怖主义威胁相关，但这种威胁在近年来得到了有效控制。
      </Typography>
    </Box>
  )
}

export default Article
