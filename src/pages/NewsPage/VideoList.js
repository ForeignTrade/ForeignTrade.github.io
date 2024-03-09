import React from 'react'
import { Box, Typography, Card, CardContent, CardActionArea } from '@mui/material'
import { Masonry } from '@mui/lab'
import { styled } from '@mui/material/styles'

// 自定义 MasonryItem 组件以适应不同高度的图片
const MasonryItem = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'flex-start',
}))

function VideoList () {
  const videos = [
    { title: '厉老师谈外贸 | 世界前三大贸易协定你知道是哪三个吗？CPTPP、RCEP及美加墨自贸协定对比分析精讲', url: 'https://www.bilibili.com/video/BV1Eq4y1o7C1?vd_source=739b5e85a712ba7b03a88a7d54fdaeb4', imageUrl: require('../../pic/cover/1.png') },
    { title: '蔡崇信談貿易緊張、投資計劃（英）', url: 'https://www.bilibili.com/video/BV1jj411h7K7?vd_source=739b5e85a712ba7b03a88a7d54fdaeb4', imageUrl: require('../../pic/cover/2.png') },
    { title: '冯科谈贸易', url: 'https://www.bilibili.com/video/BV1s44y1871a?vd_source=739b5e85a712ba7b03a88a7d54fdaeb4', imageUrl: require('../../pic/cover/3.png') },
    { title: '【加拿大创业者】02年小伙在北美做国际贸易的一天 ｜00后边读大学边创业到底能做的如何？北美卖陶瓷锅销量好吗？', url: 'https://www.bilibili.com/video/BV1Gr4y1b7T6?vd_source=739b5e85a712ba7b03a88a7d54fdaeb4', imageUrl: require('../../pic/cover/5.png') },
    // 其他视频数据...
    { title: '外贸出口各国的特点和商业谈判习惯（6）', url: 'https://www.bilibili.com/video/BV1FU4y1N7L8?vd_source=739b5e85a712ba7b03a88a7d54fdaeb4', imageUrl: require('../../pic/cover/4.png') },
  ]

  return (
    <Box>
      <Box sx={{ backgroundColor: 'primary.main', color: 'white', padding: '10px 16px', borderRadius: '10px', marginBottom: '20px' }}>
        <Typography variant="h6">相关视频</Typography>
      </Box>
      <Masonry columns={2} spacing={2} sx={{ width: '100%' }}>
        {videos.map((video, index) => (
          <MasonryItem key={index}>
            <CardActionArea href={video.url} target="_blank">
              <img
                src={video.imageUrl}
                alt={video.title}
                style={{ width: '100%', objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  {video.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </MasonryItem>
        ))}
      </Masonry>
    </Box>
  )
}

export default VideoList
