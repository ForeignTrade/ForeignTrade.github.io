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
        外贸精讲课：跨文化营销案例研究
      </Typography>
      <Typography paragraph variant="h5">
        一、案例1：星巴克在中国的文化适应
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        1背景：星巴克是一个成功将西方咖啡文化引入中国，并实现本地化的典范。初入中国市场时，星巴克面临着中国传统茶文化的深厚根基和消费者对咖啡消费习惯的不熟悉。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        2策略：·文化融合：星巴克在保持其品牌核心价值的同时，融入中国文化元素。例如，推出绿茶拿铁等结合本地口味的产品，以及在中秋节和春节推出节日限定商品。·社交空间创造：针对中国消费者喜欢在咖啡厅社交和工作的习惯，星巴克在店面设计上提供了舒适的社交和工作环境，促进了品牌与消费者之间的互动。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        3成果：星巴克不仅在中国市场成功扩张，而且成为了中国城市生活文化的一部分，展示了有效的跨文化交流和市场适应策略。
      </Typography>

      <Typography paragraph variant="h5">
        二、案例2：迪士尼在上海的文化定位
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        1背景：迪士尼乐园是全球知名的娱乐品牌，但在进入中国市场时，迪士尼面临如何将其品牌故事和经典角色与中国文化相结合的挑战。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        2策略：文3化定制：上海迪士尼乐园在设计时充分考虑到中国文化元素，如将十二生肖与迪士尼角色相结合的装饰，以及引入具有中国特色的餐饮和商品。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        4文化尊重：乐园内的导览标识、表演和节目都融入了中英文双语，尊重并满足了本地和国际游客的需求。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        5成果：上海迪士尼乐园的成功不仅体现在它的商业成就上，更重要的是它展示了如何通过尊重和融入当地文化，实现品牌与消费者之间的深层次连接。
      </Typography>

      <Typography paragraph variant="h5">
        三、文化冲突案例
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        案例：吉列在印度的市场策略失误
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        1背景：吉列是全球知名的剃须刀品牌，在进入印度市场时，采用了与西方市场相同的营销策略，强调剃须的清洁和舒适感。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        2问题：吉列没有充分考虑到印度文化中男性体毛的社会和文化含义，以及不同地区对于剃须习惯的差异。此外，高昂的产品价格也与印度大多数消费者的消费能力不匹配。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        3结果：吉列在初期并未在印度市场取得预期的成功，主要原因是忽视了本地文化的特性和消费者的实际需求。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        4教训：这个案例强调了在跨文化市场进入策略中，深入了解和尊重当地文化的重要性。企业需要根据目标市场的文化特征和消费者行为来调整其产品和营销策略。
      </Typography>

    </Box>
  )
}

export default Article
