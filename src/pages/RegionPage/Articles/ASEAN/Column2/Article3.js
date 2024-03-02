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
        外贸精讲：东盟的投资环境研讨
      </Typography>
      <Typography paragraph variant="h5">
        一、东南亚创投环境概况
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>根据联合国贸发会议（United Nations Conference on Trade and Development，UNCTAD）发布的《2022世界投资报告》（World Investment Report: 2022），虽然受到新冠疫情的影响，但东南亚在近三年内吸引外商直接投资的资金体量呈现了较大增幅，且相较2020年，2021年东南亚的FDI资金流入量增长了44%，达到了1,750亿美元。在东南亚地区，新加坡、印度尼西亚、泰国、菲律宾四国的FDI资金流入量均排在前列且相较2020年均有增长。其中，新加坡占比最多，其2021年的FDI资金流入量达到了990亿美元。</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/外贸精讲：东盟的投资环境研讨-1.png')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Typography paragraph sx={{ textIndent: '2em' }}>与上述东南亚吸引外国投资大势相匹配的是，根据公开信息，东南亚目前亦正在成为创投圈尤其是华人创投圈重点关注的海外市场，越来越多的华人团队前往东南亚创造着一个又一个独角兽的神话，而中国背景的投资机构亦将投资的触角慢慢伸向了东南亚的创业企业。以电商行业为例，中国投资机构早自2015年起便开始抢占东南亚市场，典型项目包括阿里巴巴于2016年收购电商公司Lazada，并于2017年领投印尼最大的电商平台Tokopedia（与移动支付巨头Gojek合并为“GoTo”后于2022年4月完成印尼本地上市），而另一家东南亚与台湾地区的电商平台巨头Shopee的母公司Sea Limited于2017年12月在纽交所完成上市，其背后的创始团队是华人团队且投资人中不乏国内一线的互联网企业。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>根据越海研究发布的《东南亚创投经济报告2022》显示，2022年东南亚风险投资交易主要集中在Pre-A及A轮等早期项目，其中新加坡、印尼占据东南亚风险投资70%+的风险投资份额，金融科技、电子商务、金融服务及支付为2022年东南亚风险投资的领跑赛道[2]。根据谷歌、淡马锡和贝恩公司联合发布的《2022东南亚数字经济报告》（E-Conomy SEA 2022》，东南亚地区2022年数字经济（主要涵盖电商、运输及食品、旅游、在线媒体和金融服务五大核心领域以及健康科技、教育科技、SaaS和Web3.0四个新兴领域）的GMV预计达到2,000亿美元，比原有预期提前三年达到，且按照目前的增长轨迹，预计到2025年，东南亚数字经济GMV将增至3,300亿美元，到2030年，东南亚数字经济GMV将可能增至6,000亿至1万亿美元的资金。该报告同时观察并预计了东南亚电商、食品外送和在线媒体、旅行&交通行业在2019年~2025年的发展趋势，其中，电子商务预计始终占据数字经济的核心，电商GMV预计将从2022年的1,310亿美元增长到2025年的2,110亿美元。</Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/外贸精讲：东盟的投资环境研讨-2.png')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Typography paragraph sx={{ textIndent: '2em' }}>（东南亚数字经济GMV统计 | 图片来源：《E-Conomy SEA 2022》）</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>尽管面临着全球新冠和经济衰退的影响，东南亚依旧在过去三年中涌现了一批科技独角兽企业。根据东南亚风险投资的私募基金Asia Partners在2023年1月最新发布的《2023东南亚互联网报告》（2023 Southeast Asia Internet Report），2020-2022三年间，东南亚已有7项估值在10亿美元及以上的科技类企业IPO，超出了此前预期；此外，东南亚估值在10亿美元以上的TMT公司的数量已从2004年的9家增长至2022年的28家。因此，东南亚地区的TMT行业发展前景也趋于良好。</Typography>
      <Typography paragraph variant="h5">
        二、投资环境
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>1、外国直接投资政策</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>东盟积极推动自由贸易和开放市场，为外国投资者提供了较为宽松的投资政策。大多数东盟国家都实施了便利化的外国直接投资政策，包括简化审批流程和允许外资在特定行业中持有较高的股权比例。例如，越南、印度尼西亚和马来西亚等国家近年来放宽了对外国投资的限制，以吸引更多外资进入制造业、能源和服务业等领域。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>2、税收制度</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>东盟国家的税收制度各不相同，但普遍采取措施以吸引外国投资，包括降低公司税率和提供税收优惠。例如，新加坡以其低税率和透明的税收政策而闻名，是一个重要的国际金融中心。许多东盟国家也为特定行业或地区提供税收减免，以促进经济特区或高科技产业的发展。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>3、劳动市场状况</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>东盟国家的劳动力市场多样化，拥有广泛的技能水平和劳动力成本差异。一些国家，如新加坡和马来西亚，拥有较高技能的劳动力；而柬埔寨、缅甸和老挝则提供成本较低的劳动力。东盟国家普遍面临提高劳动力技能和生产力的挑战，以满足更高附加值产业的需求。</Typography>
      <Typography paragraph variant="h5">
        三、投资激励政策
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>为吸引外资，许多东盟国家提供了一系列投资激励措施，包括税收优惠、补贴和政府支持。这些激励政策通常针对优先发展的产业和地区，如高科技、可再生能源、研发和区域发展项目。政府支持还可能包括提供土地使用权、简化投资审批流程和提供财政补助。</Typography>
      <Typography paragraph variant="h5">
        四、投资风险评估
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>1、市场风险</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>东盟国家的经济发展水平和市场成熟度不一，投资者可能面临市场准入限制、消费者偏好变化和竞争加剧等市场风险。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>2、货币风险</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>东盟国家货币的汇率波动可能影响外国投资的回报率。一些国家的货币可能面临贬值压力，增加了汇率风险。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>3、政治风险</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>虽然大多数东盟国家政治相对稳定，但政治变动、政策不确定性和监管环境的变化仍可能影响投资决策和项目的可行性。</Typography>
      <Typography paragraph variant="h5">
        五、典型东南亚国家的外商投资准入概述
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>以新加坡为例。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>目前新加坡未对外商投资作通用的准入限制（如负面清单等）。整体上，除特定行业的相关法律法规中有特殊限制外，在新加坡设立一般的外商投资公司并无投资门槛或通用的持股比例限制要求。但外商投资企业仍需满足新加坡法律对在当地设立公司的一般性要求。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>1、投资标准</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>根据新加坡公司法（Companies Act 1967），私人有限公司的最低设立门槛为一名股东、股本至少为一股，相较中国企业常见的红筹架构下的开曼控股公司，新加坡公司的股份不适用票面值（par value）的概念，且公司可以按照不同的价格发行相应数量的股份。新加坡的外商投资企业无特殊的最低投资额门槛要求，与当地内资企业适用相同标准。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>2、特定行业限制</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>新加坡对外资整体呈开放态度，目前新加坡并无针对外资作针对性立法或设立监管机构，而是在少数特定行业对外资进入做出了限制性规定。</Typography>

    </Box>
  )
}

export default Article
