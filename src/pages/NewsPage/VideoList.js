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
    { title: '直播购物方式风靡到美国', url: 'https://www.bilibili.com/video/BV1GY411H7gN/', imageUrl: require('../../pic/cover/1.jpg') },
    { title: '蔡崇信談貿易緊張、投資計劃（英）', url: 'https://www.bilibili.com/video/BV1jj411h7K7?vd_source=739b5e85a712ba7b03a88a7d54fdaeb4', imageUrl: require('../../pic/cover/2.png') },
    { title: '2024企业出海跨境电商+产业带战略机遇', url: 'https://www.bilibili.com/video/BV1xv421r71K/', imageUrl: require('../../pic/cover/3.jpg') },
    { title: '我把自己做成了数字人，以后视频不用实拍了？', url: 'https://www.bilibili.com/video/BV1vm4y1x7nm/', imageUrl: require('../../pic/cover/5.jpg') },
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
