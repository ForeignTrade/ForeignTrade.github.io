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
        专家专访：解读东盟的国际关系
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>本文从整体角度介绍东盟的国际关系。</Typography>
      <Typography paragraph variant="h5">
        一、国际关系
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>1、与主要国家和地区的外交关系</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>中国：中国是东盟的重要合作伙伴，双方在贸易、投资、旅游等多个领域有着密切的合作关系。东盟与中国共同推进“一带一路”倡议与区域全面经济伙伴关系协定（RCEP）的实施。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>美国：美国与东盟关系紧密，双方在安全、经济和区域政治等方面进行合作。美国支持东盟中心地位，参与东盟地区论坛（ARF）和东盟防长扩大会议（ADMM-Plus）。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>欧盟：欧盟是东盟的主要贸易和投资伙伴之一，双方有着长期的合作历史。欧盟与东盟合作覆盖贸易、环境保护、科技、教育等多个领域。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>日本：日本与东盟关系密切，是东盟的重要发展援助来源国。日本与东盟合作涉及经济、技术支持、灾害管理和人文交流等众多领域。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>2、参与国际组织和论坛</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>东亚峰会（EAS）：是东盟+6（中国、日本、韩国、印度、澳大利亚、新西兰）和美国、俄罗斯参与的领导人论坛，旨在促进东亚地区的战略对话和合作。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>亚太经济合作组织（APEC）：东盟部分成员国是APEC的成员，这个论坛致力于促进亚太地区的经济一体化和贸易自由化。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>世界贸易组织（WTO）：东盟国家作为WTO成员，参与全球贸易体系的建设和规则制定，促进贸易自由化和多边贸易体制的稳固。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>联合国（UN）：东盟国家作为联合国成员国，积极参与联合国的多边外交活动和国际和平维护任务。</Typography>
      <Typography paragraph variant="h5">
        二、外交政策趋势
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>1、主要外交策略原则</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>维护东盟中心性：东盟致力于保持其在亚太地区多边外交和安全架构中的中心地位，通过东盟+1、东盟+3（中国、日本、韩国）、东亚峰会（EAS）等机制，确保东盟在区域合作和对话中发挥关键作用。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>推进区域经济一体化：加快实施东盟经济共同体（AEC）蓝图，通过降低贸易壁垒、增强区域内贸易和投资流动性，以及推动自由贸易协定（FTA）和区域全面经济伙伴关系协定（RCEP）的实施，促进区域经济一体化。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>促进多边主义和区域合作：东盟支持基于规则的多边体系，通过与全球和区域伙伴进行外交和经济合作，共同应对跨国挑战，如气候变化、恐怖主义、跨国犯罪和海上安全。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>增强对外关系：通过与大国和其他区域组织建立和深化伙伴关系，平衡大国在区域内的影响力，同时扩大东盟的国际影响力。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>2、重点合作领域</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>面对日益复杂的印太战略竞争格局和安全环境，东盟领导人致力于在东盟峰会和东亚合作领导人系列会议中继续维护在地区各项议题上的中心地位，并取得一定成效。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>第一，东盟峰会聚焦区域经济增长，“和谐”成为前进愿景和指南。区域经济增长方面，第43届东盟峰会主席声明称，本届峰会回顾了东盟各项事务的进展，并重申东盟致力于进一步加强东盟机构能力和效力，以应对当前挑战，继续保持地区增长和繁荣的中心地位。重申坚定支持维护多边主义，维护和促进地区和平、安全与稳定，和平解决争端。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>前进愿景和指南方面，第43届东盟峰会通过第四份《东盟和谐联合声明》和《东盟2045年愿景》。印度尼西亚外交官员表示，这是本次峰会最重要的内容之一。印尼外交部长蕾特诺·马尔苏迪此前也表示，这一长期愿景将成为东盟前进的“指南”。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>第二，中国-东盟（10+1）领导人会议关注经贸交流议题，推动合作进一步深化。一是“一带一路”倡议与东盟印太展望合作方面，达成互利合作并发表联合声明。二是人文合作方面，宣布2024年为“中国东盟人文交流年”。三是农业绿色发展、电子商务、科技创新方面，通过了《中国－东盟关于深化农业合作的联合声明》《中国－东盟农业绿色发展行动计划（2023－2027）》《中国－东盟关于加强电子商务合作的倡议》《共同推进实施中国－东盟科技创新提升计划的联合倡议》等成果文件。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>第三，东盟与中日韩（10+3）领导人会议围绕地区繁荣稳定，驱动东亚和平发展。与会领导人表示，10+3合作为维护地区稳定、促进地区发展作出重要贡献。各方应协调行动，坚持多边主义，以落实新一期《10+3合作工作计划》为契机，深化经贸、投资、数字经济、绿色低碳发展等领域合作，携手应对气候变化、能源和粮食安全等全球性挑战，为地区稳定与繁荣注入新动力，将东亚打造成和平与增长中心。会议还通过《10+3领导人关于发展电动汽车生态系统的联合声明》。</Typography>
      <Typography paragraph variant="h5">
        三、国际争端
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>柏威夏寺地区位于柬埔寨柏威夏省与泰国接壤的地方 边界地区。柏威夏寺地地区面积为4.6平方千米，这地区属于泰国与柬埔寨领土争端地区。柏威夏寺是从公元10世纪开始修建的。柏威夏寺修建在柏威夏所在的悬崖上，柏威夏寺修建大约花了200多年。柬埔寨19世纪80年底沦为法国殖民地。1907年，法国与泰国进行泰柬边界划界，法国把柏威夏寺划在柬埔寨境内当时泰国没有察觉有什么问题。20世纪50年，柬埔寨摆脱法国殖民地，柬埔寨获得独立。泰国向柬埔寨提出柏威夏寺有争议。1962年，泰国和柬埔寨就关于柏威夏寺提交海牙国际法庭审理，海牙国际法庭把柏威夏寺判给柬埔寨。2008年，世界文化遗产委员会决定把柏威夏寺作为世界文化遗产，但是泰国认为柏威夏寺虽然归属柬埔寨，但是柏威夏寺附近的领土却没有明确规属。现在柏威夏寺地区被柬埔寨控制。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>白礁岛位于新家坡海峡与南海之间的海域。白礁岛面积为2000平方米，距离马来西亚大约7.7海里，距离新加坡大约25.5海里。1851年，英国殖民地在白礁岛上修建灯塔，英国把灯塔移交新加坡管理。1980年，马来西亚突然把白礁岛划入马来西亚版图。新加坡知道后，首先向马来西亚提出抗议。新加坡马上派遣军队加强对白礁岛的控制。1994年，经过马来西亚和新加坡谈判，双方同意把白礁岛移交给海牙国际法庭。2007年，海牙国际法庭宣布把白礁岛判给新加坡。马来西亚与新加坡关于白礁岛的争议宣告结束。</Typography>

    </Box>
  )
}

export default Article
