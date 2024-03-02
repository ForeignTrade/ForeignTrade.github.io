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
        今日聚焦：中国东盟自贸区3.0建设
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>2021年习近平主席和东盟领导人宣布建立中国—东盟全面战略伙伴关系。三年来，中国与东盟双边贸易投资逆势攀升，相互保持第一大贸易伙伴地位，互为重要投资来源地和目的地，并在新兴领域展现巨大合作潜力，互为重要发展机遇。当前，双方全力推进3.0版各领域谈判，升级自贸区建设，将进一步挖掘双边合作机遇，提升合作质量和水平，让区域内国家、企业、人民获得更多实实在在的利益。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>中方愿与东盟各方一道努力，按照领导人指示尽早完成谈判，在现有中国—东盟自贸协定和《区域全面经济伙伴关系协定》（RCEP）基础上，进一步提升贸易投资自由化水平，拓展中间品贸易、数字贸易、跨境电商、标准、绿色低碳等新兴领域务实合作，打造更高水平中国—东盟自贸区，为区域发展创造更广阔空间，积极构建更为紧密的中国—东盟命运共同体。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>中国—东盟自贸区3.0版第五轮谈判于1月29日—2月2日举行，中国、东盟十国主管部门和东盟秘书处近400名官员与会。</Typography>
      {/* <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/今日聚焦：中国东盟自贸区3.0建设-1.jpg')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box> */}
    </Box>
  )
}

export default Article
