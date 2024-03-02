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
        专家视角：解读东盟的政策环境
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>总体来看，东盟充分具有有利于外贸发展的政策环境。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>为进一步推动区域经济融合，东盟经济共同体(AEC)于2015年12月31日正式成立。这个单一市场旨在便利区内货物、服务、投资、资金及人员流动。《AEC发展蓝图2025》(AEC Blueprint 2025)擘划了AEC由2016至2025年的经济发展大方向，就以下5方面提出策略性措施，分别是：(1)使经济高度融合和凝聚；(2)成为具竞争力、创意和充满活力的东盟；(3)加强互联互通和跨领域合作；(4)使东盟变得强韧、具包容性、以人为本和以人为中心；(5)令东盟走向全球化。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>具体来看，以新加坡为例。</Typography>
      <Typography paragraph variant="h5">
        一、政策环境
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>1、对外贸易政策</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>新加坡是一个自由贸易的坚定支持者，拥有非常开放的对外贸易政策。它与许多国家和地区签订了自由贸易协定（FTA）和投资保障协议，旨在减少贸易壁垒，促进进出口。新加坡还是世界贸易组织（WTO）的成员，积极参与多边贸易体系的构建和维护。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>2、行业规制</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>新加坡政府对各个行业实施规制，以确保市场竞争的公平性和消费者权益的保护。这包括金融服务、电信、媒体和公共交通等关键领域。通过设立监管机构（如金融管理局（MAS）、新加坡通信媒体发展局（IMDA）），政府确保行业遵守透明和公正的操作标准。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>3、环保政策</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>新加坡实施了一系列环保政策，目标是实现可持续发展和改善生活质量。这些政策包括限制汽车拥有量、推广公共交通、实施绿色建筑标准、以及通过经济手段（如征收碳税）鼓励企业减少污染。</Typography>
      <Typography paragraph variant="h5">
        二、经济政策
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>1、货币政策</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>新加坡的货币政策由新加坡金融管理局（MAS）制定，主要目标是通过调控新加坡元的汇率来控制通货膨胀，保持货币稳定。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>自1981年以来，新加坡的货币政策一直以汇率为中心，在小型和开放的新加坡经济中，汇率是维持价格的更有效的工具，而不是利率货币基础。国内利率相对于世界利率的任何变化都会受到资金进出新加坡的损害，导致汇率变动升值或贬值。为了将新币保持在政策区间内，MAS必须抵消对国内利率的任何初始调整的影响。MAS有效的放弃了对国内利率和货币供应的控制。因此，新加坡的货币政策是汇率政策的代名词。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>与大多数其他央行一样，MAS还开展日常货币市场操作，以管理银行系统的流动性水平。这些不是针对任何级别的利率或货币供应。相反，它们旨在确保国内银行系统有足够的流动性来满足银行对预防和结算余额的需求，以及最低现金余额，即银行负债基数的3%。MAS 货币市场运作的范围和规模将取决于MAS和银行系统之间资金流入和流出的净流动性影响。这些可能来自发行纸币和硬币，公积金委员会和政府资金转移，新加坡政府证券（SGS)的净发行，外汇干预业务以及以往货币市场业务的成熟。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>为了管理流动性影响，MAS使用直接借款，外汇掉期，回购协议（回购）和发行MAS票据。例如，如果公积金委员会向MAS投放了大量公积金资金，则MAS可以通过发行相对于匹配金额的较少MAS票据来抵消银行系统流动性的损失。选择金融工具来应对这种情况，这种货币市场运作与MAS管理新元NEER的外汇干预大相径庭。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>2、财政政策</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>新加坡的财政政策着重于实现长期的财政可持续性，通过有效的公共支出和税收政策支持经济增长。政府投资于基础设施、教育和技术创新，同时维持较低的个人所得税和企业税率，以吸引外资和促进经济发展。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>新加坡经济实质新规2024年1月1日生效。新加坡财政部（MOF）提出1947年所得税法（Income Tax Act 1947，简称SITA）的修正案，引入新第10L条，该条款将针对在新加坡企业于当地无经济实质（Economic Substance）的情况下，在新加坡获得的出售或处分外国资产的收益进行征税。这一变革已于2024年1月1日生效，修正的原因是为了使新加坡的税制符合国际反避税标准，同时巩固企业在新加坡的实质经济活动。</Typography>
      <Typography paragraph variant="h5">
        三、社会政策
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>1、社会保障</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>终身健保(MediShield Life)是一份政府提供的强制医疗保险。此保险通过从个人的CPF Medisave Account每年扣取保费，以25岁为例，每年保费约为250新币，随着年龄越大，保费也会越贵。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>终身护保(CareShield Life)是政府在2020年推出的强制性残疾保险计划，为严重残疾的民众提供基本的财务保障。保费每年直接从CPF Medisave Account中扣取。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>家属保障计划(Dependents Protection Scheme)是一份定期人寿保险，保费会直接从个人CPF Ordinary Account账户中扣取。</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/专家视角：解读东盟的政策环境-1.png')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Typography paragraph sx={{ textIndent: '2em' }}>2、教育政策</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/专家视角：解读东盟的政策环境-2.png')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Typography paragraph sx={{ textIndent: '2em' }}>新加坡教育历来被称为精英教育体制，在每一个阶段都会进行层层筛选，为不同的学生提供不同的教育资源，可谓因材施教。在不同的升学阶段有很多种选项，而即便当下筛选到了不理想的等级，在下一个升学考试中仍然有机会逆袭回到最好的等级。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>3、医疗政策</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>新加坡提供基层医疗、综合医疗和中长期护理三级医疗服务，这些服务由私立、公立和民间团体的医疗机构提供，并将以上三种护理方式结合起来形成连续护理体系，通过各方合作为病人提供综合性护理服务，以协助病人快速转诊。新加坡已初步以电子病历交换系统连接所有公立医院、综合诊所和社区医院等医疗机构。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>新加坡医疗系统曾被世界卫生组织(WHO)评为亚洲最有效的医疗卫生系统，全球第六。而新加坡在医疗保健方面的年支出却只占全国GDP的4.25%（世界银行2015年数据），低于中国的5.32%。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>新加坡政府不断健全本国的医疗保障制度，逐步建立了保健储蓄计划（Medisave）、健保双全计划（MediShield）、保健基金计划（Medifund）的医疗保障制度，也被称为“3M计划”，3个计划互相配合，优化了新加坡医疗保健服务的供应以及对公共医疗保健机构补贴的方式，降低民众医疗保健费用，推动新加坡医疗保障体系高效运行。</Typography>

    </Box>
  )
}

export default Article
