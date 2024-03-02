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
        专家专访：东盟的产业分析深度分析
      </Typography>
      <Typography paragraph variant="h5">
        一、产业分析
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>1、主要产业</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>东盟主要依靠消费拉动经济，但消费支出占比在主要新兴市场中仍偏低，与俄罗斯相近，仅高于中国；产业结构上，东盟主要依赖服务业拉动经济，服务业增加值占比在主要新兴市场中也同样偏低，与中国相近。在2022年，第三产业是东盟的主要经济行业，占GDP的50.5%，其次是第二产业(29.8%)和农业(16.4%)。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>全球终端大厂陆续在东南亚设厂，产业链转移速度不断加快。近年来，在中国人口红利减弱、劳动力成本上升、产业升级、中美贸易摩擦等因素的影响下，各国企业开始将位于中国的产能逐渐向成本更低的东南亚转移。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>越南：中国电子制造业重要海外基地</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>过去几年越南电子制造业快速发展，在距中国较近的北方地区（河内/太原/北宁）形成了围绕三星，鸿海，立讯等主要手机品牌/代工的产业集群。据UN comtrade，2022 年越南电子出口额1403亿美元，占总额30%以上，约为中国15%。据Vietnam.vn，三星越南厂承接了其全球约50%的手机生产，鸿海，立讯等果链企业越南厂正逐步承接AirPods，Apple Watch，Mac，iPad等iPhone以外产品。越南人力成本低、与中国华南地区物流便捷（深圳-河内陆地车程约16小时），但存在劳动力不足、电力不足、沟通等问题。越南上市企业较少，产业链相关公司包括 Vingroup旗下的VinFast等。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>泰国：东南亚汽车和家电工业重镇，关注电动车发展机会</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>泰国是东南亚重要的汽车/家电产地。丰田，本田，日产等日系车企，三星，索尼、松下等家电企业，以及Western Digital、Seagate等硬盘企业都在当地设有主力基地。2017年后，泰政府制定“泰国4.0战略”，投资1.7万亿泰铢于“东部经济走廊发展计划”（EEC），发展新能源汽车、机器人、电子等高附加值产业。2022年，政府出台激励方案，目标2030年电动车渗透率达50%。2023/3，比亚迪宣布在泰国罗勇建设年产能15万辆的基地。未来东南亚有望成为中国汽车电子出海重要基地。本地企业中，DELTA，HANA，KCE，SVI在全球产业链有重要影响。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>印度尼西亚：东南亚最大的智能手机市场，关注5G普及和高端化机会</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>印尼人口2.76亿，是东南亚最大，全球主要的智能手机消费市场之一。2022年印尼手机出货量3811.9万部，其中智能手机出货量3503.2万部，占东南亚总量的36%，全球3%。2022年，中国品牌市占率之和已超70%，其中OPPO 22%，小米份额14%。展望未来，我们看好5G渗透率提升，带动印尼手机单价提升和移动互联网收入增长的机会。2022年印尼5G渗透率约2%，相当于中国2020年水平。根据GSMA，预计2025年印尼/马来西亚5G普及率将达到11%/19%。本地移动互联网企业包括Grab、Goto等。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>2、新兴产业</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>数字经济和电子商务：随着互联网的普及和移动支付技术的发展，电子商务和数字经济在东盟地区迅速增长。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>可再生能源：太阳能、风能和生物质能等可再生能源产业在东盟国家正逐渐增加，特别是在泰国和菲律宾。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>生物技术和医疗保健：生物技术和医疗保健产业在新加坡、马来西亚和泰国等国家逐渐成为重点发展领域。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>3、产业集群</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>东盟国家通过建立产业集群来促进特定产业的发展。例如：</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>电子制造集群：在马来西亚的槟城和越南的胡志明市。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>汽车制造集群：在泰国的东部沿海地区和印度尼西亚的雅加达周边。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>农产品加工集群：在越南的湄公河三角洲地区和印度尼西亚的苏门答腊岛。</Typography>
      <Typography paragraph variant="h5">
        二、供应链
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>1、原材料供应</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>东盟国家依赖于内部和全球市场来供应原材料，例如石油、天然气、金属和农产品。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>2、制造能力</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>东盟国家在电子、汽车、纺织品和农产品加工等领域拥有强大的制造能力。马来西亚、新加坡、越南等东南亚国家寻求成为全球新的半导体供应链中心。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>新加坡政府最近提出了重大的土地、水、电力和人才福利，以及特殊的税收和补贴激励措施，以吸引台积电及世界先进（VIS）入驻。报道称，世界先进正在着手建设其首座12英寸（300mm）芯片工厂，投资20亿美元用于汽车半导体芯片生产。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>全球半导体公司都将目光投向新加坡，新加坡拥有完善的研发、设计、材料和设备、制造、测试和基础设施。全球研究机构预测，半导体目前占新加坡GDP的7%，并将继续增长。全球第三大晶圆代工厂格芯（GlobalFoundries）2023年9月在新加坡落成新工厂，投资额约5万亿韩元；排名第四的联电也正在当地建设新工厂。其他主要厂商如美光科技、意法半导体（ST）、AMD和爱德万（Advantest）都在新加坡设立了基地。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>3、物流设施</Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/专家专访：东盟的产业分析深度分析-1.png')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Typography paragraph sx={{ textIndent: '2em' }}>按照企业物流业务模式，一般可以将它分为自营物流、第三方物流（3PL）和第四方物流（4PL）等模式。这三种模式最大的区别在于，自营物流属于企业内部的物流业务，第三方物流和第四方物流属于企业的物流外包业务。在中国，自营物流的代表企业有京东物流、苏宁物流、唯品会物流等；第三方物流代表企业有三通一达、顺丰等民营快递企业；具备四方物流基因较明显有菜鸟网络、满帮、传化物流等。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>据J&A Capital Markets Report发布的Logistic Technology in Southeast Asia文章显示，投资于货运技术行业的资本在2014年至2021年间增长了17倍。在这期间，超过270亿美元部署在物流行业，产生过约302笔投资交易，平均交易规模为900万美元。且随着时间的推移，资本对物流行业的部署稳步增加，其中以2021年前三个季度的市场活动最为活跃。</Typography>
      <Typography paragraph variant="h5">
        三、竞争优势
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>1、市场竞争</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>东盟内部和国际上的竞争者众多，包括跨国公司和本地企业。东盟国家竞争优势主要在于出口领域。长期以来，受资源基础、产业结构和经济水平影响，东南亚国家多为出口导向型国家，各国经济与外贸联系密切，对外依存度高。对外贸易及外国直接投资在东南亚经济发展中发挥着至关重要的作用。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>2、行业集中度</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>行业集中度因国家和行业而异。例如，电子制造业和汽车制造业相对集中，而农业和服务业则更为分散。有四个行业正在推动东盟在新经济中的增长。首先是电子商务，东南亚最大的线上市场。其次是在线约车；例如，在新加坡、泰国、越南、印度尼西亚等东南亚国家，一款名为Grab的在线约车软件已经融入数百万人的日常生活，这里有东南亚最大的司机网络，为用户提供最快捷的约车服务，用户可以自行选择私家车、计程车或是摩托车进行预订。第三是外卖服务；该行业的区域价值预计在2020年至 2024 年间翻倍。第四是在线旅游，这是东盟最成熟的在线业务。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>3、市场份额</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>大型跨国公司在电子、汽车和消费品市场占据重要地位。在服务业，尤其是金融和IT服务方面，本地企业和区域性巨头也拥有显著的市场份额。</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/专家专访：东盟的产业分析深度分析-2.png')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/专家专访：东盟的产业分析深度分析-3.png')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Typography paragraph sx={{ textIndent: '2em' }}>4、竞争新优势</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>根据市场研究公司eMarketer发布的一份《2023年全球零售电商预测报告》显示，2023年，东南亚电商市场规模增速位列全球第一，已经连续三年成为全球电商规模增长最快的地区。值得一提的是，在2023年全球电商规模增长最快的十个国家中，东南亚地区有4个国家上榜，菲律宾排名第二，马来西亚排名第三，印度尼西亚排名第七，越南排名第八，增速均达到了12%以上。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>东南亚当地大多数消费行业的品牌集中度很高，品牌之间的竞争远没有中国激烈，市场空白点很多，这就给外来品牌的进入或新创品牌的创立减少了很多压力。</Typography>

    </Box>
  )
}

export default Article
