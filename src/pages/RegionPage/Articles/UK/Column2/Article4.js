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
        外贸视角分析英国消费习惯
      </Typography>
      <Typography paragraph variant="h5">
        一、消费者画像
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        1英国人口6805万，其中有6532万网民，2021年有82%的英国人至少在网上购买了一种产品，电子商务年收入总额超过1200亿美元，占英国零售市场总量的30%。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        2如今英国全年龄段的消费者都在线上购物，其中24-54岁的消费者为主要参与者。2020年，16-44岁的英国成年人为主要的互联网用户群体，占全年龄段的比例高达99%，相比之下，75岁及以上的成年人占比为54%，残疾成年人的占比为81%（近1100万）。
      </Typography>

      <Typography paragraph variant="h5">
        二、消费者行为
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        1价值观与质量意识：英国消费者高度重视产品和服务的质量。他们倾向于为高质量、可持续和伦理生产的商品支付更高的价格。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        2研究和比较购物：在做出购买决定之前，英国消费者倾向于进行广泛的研究和比较，特别是对于高价值商品。在线评论和评价在购买决策过程中扮演着重要角色。
      </Typography>

      <Typography paragraph variant="h5">
        三、流行趋势
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        1可持续性和环保：可持续消费在英国越来越受到重视。环保产品、有机食品和再生材料制成的商品越来越受欢迎。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        2科技和数字产品：英国市场对最新科技产品和数字解决方案有着浓厚的兴趣。智能家居设备、可穿戴技术和在线服务的需求不断增长。
      </Typography>

      <Typography paragraph variant="h5">
        四、市场偏好
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        1品牌意识：英国消费者对品牌有较强的忠诚度，但也愿意尝试新品牌，特别是那些能够提供创新解决方案和独特价值主张的品牌。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        2健康和健身：健康和健身产品在英国市场上需求强劲。从健康食品、营养补充品到健身设备和应用程序，健康意识正在塑造消费者的购买习惯。
      </Typography>

      <Typography paragraph variant="h5">
        五、应对策略
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        1质量和透明度：确保产品和服务符合高标准的质量，并且在生产和供应链过程中保持透明度，以建立消费者信任。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        2市场调研：深入了解目标市场的特定需求和偏好，定期进行市场调研以捕捉最新趋势和消费者期望的变化。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        3数字化营销：利用社交媒体和在线平台进行品牌宣传和市场营销，以达到广泛的目标受众并与消费者建立连接。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        4可持续性实践：将可持续性纳入产品开发和商业实践中，不仅响应消费者的环保要求，也作为品牌差异化的一部分。
      </Typography>

    </Box>
  )
}

export default Article
