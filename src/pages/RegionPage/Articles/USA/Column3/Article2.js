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
        外贸视角：研究美国消费习惯
      </Typography>
      <Typography paragraph variant="h5" sx={{ textIndent: '2em' }}>
        在当今社会中，人们越来越重视环境保护和可持续发展。随着全球变暖和气候变化的影响日益明显，从个人到企业，再到政府机构，大家都在寻求减少碳足迹和保护自然资源的方法。在这个过程中，绿色技术和清洁能源成为了热门话题，人们纷纷探讨如何利用太阳能、风能和其他可再生能源来替代传统的化石燃料。
      </Typography>
      <Typography paragraph variant="h5" sx={{ textIndent: '2em' }}>
        与此同时，社交媒体和数字技术的发展也为环境保护提供了新的平台和工具。通过网络，人们可以更容易地分享信息、传播环保理念和组织各种活动。此外，智能技术的应用，如智能家居和智能交通系统，也有助于提高能源效率和减少浪费。
      </Typography>
      <Typography paragraph variant="h5" sx={{ textIndent: '2em' }}>
        然而，在追求科技进步和经济发展的同时，我们也应该注意保持生活的平衡和谐。过度消费和资源的无节制开发会对环境造成严重破坏。因此，培养可持续的生活方式和消费习惯，尊重自然界的规律，对于实现人与自然和谐共存至关重要。
      </Typography>
      <Typography paragraph variant="h5" sx={{ textIndent: '2em' }}>
        总的来说，环境保护是一个复杂而多面的议题，需要政府、企业和公众共同努力。通过科技创新、政策制定和公众参与，我们可以朝着更加绿色、可持续的未来迈进。
      </Typography>
    </Box>
  )
}

export default Article
