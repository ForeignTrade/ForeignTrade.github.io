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
        专家专访：谈英国市场概况
      </Typography>
      <Typography paragraph variant="h5">
        一、国家的主要经济指标：
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        英国拥有强健的经济体系，2022年GDP排名世界第六。尽管面临脱欧后的挑战，英国经济展现出适度的恢复力，经济增长率和通货膨胀率均符合先进经济体的普遍特征。
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/专家专访：谈英国市场概况-1.jpg')} alt="GDP" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/专家专访：谈英国市场概况-2.jpg')} alt="GDP Growth Rate" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/专家专访：谈英国市场概况-3.jpg')} alt="Inflation Rate" style={{ width: '90%', height: 'auto' }} />
      </Box>

      <Typography paragraph variant="h5">
        二、经济结构：
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        1服务业在英国经济中占主导地位，尤其是金融服务业，在全球金融服务领域具有决定性的影响力。此外，科技、创新和创意产业也是英国经济的重要支柱。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        2私有企业是英经济的主体，占国内生产总值的90%以上，服务业占国内生产总值的3/4，制造业占1/10左右。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        3主要经济城市：
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        经济中心：作为英国首都，伦敦不仅是欧洲最大的经济中心，而且是世界上最重要的经济中心之一，一直稳居欧洲最大的金融中心地位，同时和纽约并称为世界上两大金融中心。由工业到金融业，再到文化创意产业，伦敦凭借不断突破和创新的能力引领世界产业的变革和经济浪潮，不仅自身成为世界一流的国际大都市，也带动着周边大中小城市的产业分工与升级，以及可持续高质量发展。
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/专家专访：谈英国市场概况-4.jpg')} alt="Economic Center London" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        4商业重镇：
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        曼彻斯特——作为英国领先的区域性城市、吸引外国直接投资（FDI）和地方产业战略试点，成为投资者眼中炙手可热的商业城市！其行业优势集中于技术和新兴行业，包括先进材料、医疗保健分析、网路安全和金融科技，曼彻斯特是伦敦以外有著较多私募股权公司的英国城市，世界一流的大学研究和产业合作，也在业界远近驰名。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        布里斯托——由于4％的人口劳动力至少接受过学位教育，该市有着一个多元化的商业部门，该部门拥有世界领先的专业知识，特别是在环境技术、高科技、航空航天高级工程、媒体和金融方面提供专业的服务。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        爱丁堡——世界一流的学术课程和数据驱动议程是现代爱丁堡地区经济的核心。 该城市在过去十年中增长了12.5％，在数据科学，网络安全，机器人和干细胞研究方面表现亮眼，并且是英国创业企业成功率非常高的城市。爱丁堡劳动力技能娴熟 – 几乎有一半（42％）来自该市四所大学的毕业生，毕业后也仍然选择留在爱丁堡。 它被评为Arcadis 2018年可持续发展城市指数中适合居住的城市，以及2017年英国适合步行的城市（55％的居民使用公共汽车，自行车或步行作为其主要出行方式）。
      </Typography>
      <Typography paragraph variant="h5">
        四、经济发展区域：
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        1自由贸易港：英国的自由港（free port）是以一个或多个航空、铁路、海港为中心，范围可延伸至中心以外45公里的特殊区域，自由港内适用不同经济法规，具有关税制度灵活、通关流程精简等优势。自由港还可为区内企业提供税收减免、贸易投资支持，从而为当地创造就业机会，吸引投资并促进经济繁荣。截至23年3月，英格兰共有8个自由港区正在运行。
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/专家专访：谈英国市场概况-5.jpg')} alt="Free Ports" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        2自由港的政策举措：税收优惠是企业选址自由港的一大理由。对各个自由港管理机构来说，商业税收本地留存是自由港的主要资金来源。创新激励、优化监督、贸易推广、便捷通关等政策措施也是自由港吸引投资的重要因素。
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/专家专访：谈英国市场概况-6.jpg')} alt="Free Port Policy Measures" style={{ width: '90%', height: 'auto' }} />
      </Box>
    </Box>
  )
}

export default Article
