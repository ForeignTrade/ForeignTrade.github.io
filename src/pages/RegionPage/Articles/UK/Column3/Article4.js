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
        专家视角：论英国国际关系
      </Typography>
      <Typography paragraph variant="h5">
        一、外交关系
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        1英国与多数国家和地区保持友好的外交关系，并积极参与国际组织如联合国、北约。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        2英国与许多国家和地区保持着强健的外交关系，尤其是与美国、欧盟成员国及英联邦国家。脱欧后，英国积极寻求新的贸易协议，以强化与非欧盟国家的经济联系。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        3参与国际组织：英国是联合国、北约、七国集团（G7）、二十国集团（G20）等多个重要国际组织的成员。这些成员资格使英国在国际舞台上扮演着重要角色，能够在全球事务中发挥影响力。
      </Typography>

      <Typography paragraph variant="h5">
        二、外交政策趋势：
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        1英国外交政策注重维护全球安全、促进国际贸易和应对气候变化。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        2当前英国外交政策的重点是加强全球贸易网络、应对气候变化、打击恐怖主义和促进国际和平与安全。英国致力于通过多边主义途径解决国际争端和挑战。
      </Typography>

      <Typography paragraph variant="h5">
        三、国际争端
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        1英国力求通过外交途径解决国际争端，避免对外冲突。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        2英国与阿根廷就福克兰群岛（马尔维纳斯群岛）的主权问题存在长期争议，但这一争端目前保持低强度状态。英国还积极参与国际合作，以解决气候变化、贸易争端等问题。
      </Typography>

    </Box>
  )
}

export default Article
