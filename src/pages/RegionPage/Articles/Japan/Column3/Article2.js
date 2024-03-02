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
        今日聚焦：谈日本市场概况
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>市场概括</Typography>
      <Typography paragraph variant="h5">
        一．国家主要经济指标
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>1、GDP与经济增长率</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>2023年日本的GDP约合4.2万亿美元，是全球GDP第四名。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>2023日本名义GDP增长率达到5.7%，高于中国的4.6%，这是1977年以来的首次逆转。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>近二十余年日本国内生产总值图表</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（见图）</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/今日聚焦：谈日本市场概况图片1.png')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Typography paragraph sx={{ textIndent: '2em' }}>2.自2000年日本经济增长率（数据更新至2023年12月）</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（见图）</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/今日聚焦：谈日本市场概况图片2.png')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Typography paragraph sx={{ textIndent: '2em' }}>3.自2000年日本通货膨胀率（数据更新至2024年1月18日）</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（见图）（见图）</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/今日聚焦：谈日本市场概况图片3.png')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/今日聚焦：谈日本市场概况图片4.png')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Typography paragraph variant="h5">
        二、经济结构：服务业、工业、农业等行业的比例
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>日本的消费价格指数中最重要类别是食品（总权重的26%）和住房（21%）。交通和通信占15%；文化和娱乐占9%；燃料、光和水费占7%；杂货和服务占6%；医疗保健占5%。家具和家用器具、服装和鞋类以及教育占剩下的总权重的10%。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>经济结构：</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>日本正在进行由“贸易立国”向“技术立国”“投资立国”转型。实施“内需主导型”战略以来，日本努力实现产业结构高度化。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（1）第三产业即服务业占比不断加大，国民收入水平不断提升间接推动旅游、餐饮、休闲等第三产业发展。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（2）主导产业由劳动密集型向知识密集型发展。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（3）为减少对外严重依赖进口原材料，能源产业比重加大，加快能源结构多元化。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（4）缩减石油、钢铁、造船等夕阳产业规模。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（见图）</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/今日聚焦：谈日本市场概况图片5.png')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Typography paragraph sx={{ textIndent: '2em' }}>（数据更新至2020年）</Typography>
      <Typography paragraph variant="h5">
        三、主要经济城市：
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（见图）（见图）</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/今日聚焦：谈日本市场概况图片6.png')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/今日聚焦：谈日本市场概况图片7.png')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Typography paragraph sx={{ textIndent: '2em' }}>（数据更新至2022年）</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>1. 东京  作为日本的首都，东京是日本经济的心脏，拥有庞大的商业、金融和工业中心。东京股票交易所是世界上最大的证券交易所之一。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>2. 大阪 是日本第二大经济中心，以其多样化的工业基础、贸易和服务业著称。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>3. 横滨 位于东京湾，是日本重要的商业和工业港口城市，以船舶建造、生物技术和半导体制造业为主。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>4. 名古屋 位于日本的中部地区，是日本的制造业和工业中心，尤其是在汽车制造领域。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>5. 福岡 位于九州岛，是西日本的经济中心之一，近年来在科技和创业方面有显著发展。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>6. 札幌位于北海道，是北日本的经济、政治和文化中心。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>7. 神户一个重要的港口城市，以其国际贸易、时尚和美食文化而闻名。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>8. 京都 虽然以其历史和文化遗产而闻名，但京都也是高科技和传统工艺的中心，如电子和纺织品。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>9. 仙台 东北地区的经济中心，以电子、机械和食品加工业为主。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>10. 广岛 是重要的制造业基地，尤其是在汽车、机械和化学产品方面。</Typography>
      <Typography paragraph variant="h5">
        四．经济发展区域：特别经济区、自由贸易区
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>特别经济区（SEZs）</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>日本的特别经济区主要集中在推动地方创新和吸引外国投资的特定区域。这些区域旨在通过放宽法规、提供税收优惠和其他激励措施来促进经济增长。例如，东京的一些区域被指定为特别区，专注于金融科技（Fintech）和其他高科技产业。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>自由贸易区（FTZs）</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>自由贸易区则位于日本的主要港口附近，允许货物在不受关税的情况下进出，以促进国际贸易。这些区域提供了便利的仓储和处理设施，使企业能够高效地处理进出口货物。其中一些知名的自由贸易区包括：</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>东京港自由贸易区：位于日本的首都，是一个重要的国际贸易枢纽。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>大阪港自由贸易区：位于日本第二大城市，服务于大阪湾区的广泛国际贸易需求。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>神户港自由贸易区：位于兵库县，是日本重要的国际贸易港口之一。</Typography>

    </Box>
  )
}

export default Article
