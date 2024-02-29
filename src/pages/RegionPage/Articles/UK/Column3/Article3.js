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
        外贸入门：了解英国政治体系
      </Typography>
      <Typography paragraph variant="h5">
        一、政治结构：英国实行君主立宪制，拥有一位君主作为国家象征和一套成熟的议会制度。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        政府由两院组成：下院（House of Commons）和上院（House of Lords），下院拥有立法权和监督政府的主要权力。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        ·君主：英国的国家象征，扮演主要的礼仪角色。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        ·议会（Parliament）：英国的最高立法机构，分为上院（House of Lords）和下院（House of Commons）。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        ·上院：成员非民选，主要负责审议立法。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        ·下院：成员民选，负责制定和通过法律。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        ·政府（Government）：由首相领导，执行日常政策和行政管理。
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/外贸入门：了解英国政治体系-1.jpg')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>

      <Typography paragraph variant="h5">
        二、主要政党：
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/外贸入门：了解英国政治体系-2.jpg')} alt="Major Political Parties in the UK" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        英国的主要政党包括保守党、工党和自由民主党。保守党和工党是两大主流政党，政权多在这两党之间轮换。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        1保守党（Conservative Party）：议会第一大党。领袖戴维·卡梅伦，2005年12月当选。保守党前身为1679年成立的托利党，1833年改称现名。1979-1997年间曾4次连续执政18年。2010年5月英国大选后，保守党重获执政地位，与自民党组成联合政府。支持者一般来自企业界和富裕阶层。主张自由市场经济，严格控制货币供应量，减少公共开支，压低通货膨胀，限制工会权利，加强“法律”和“秩序”等。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        2工党（Labour Party）：议会第二大党。1900年成立，原名劳工代表委员会，1906年改用现名。1997年至2010年连续执政13年。2010年5月大选失利，成为反对党。2010年9月，埃德·米利班德当选新领袖。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        3自由民主党（Liberal Democrat Party）：议会第三大党。1988年3月由原自由党和社会民主党内多数派组成，领袖尼克·克莱格，2007年12月当选。自民党政治主张居中偏左，在很多问题上与工党立场相近。主张通过减税还富于民，提高个税起征点；呼吁限制金融城过度扩张，对银行家薪酬课以重税；承诺公平教育，保护公民权利和自由；倡导宪政改革，提出减少议员议席，在选举制度上采用比例代表制；支持欧洲制宪，主张加入欧元区，反对进行英欧关系公投。2010年5月大选后，与议会第一大党保守党达成协议，组建联合政府，获得5个内阁位置，首次成为执政党。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        4英国其他政党还有：苏格兰民族党（Scottish National Party）、威尔士民族党（Plaid Cymru）、绿党（Green Party）、英国独立党（UK Independence Party）、英国国家党（British National Party），北爱尔兰一些政党如：北爱尔兰统一党（Ulster Unionist Party）、民主统一党 （Democratic Unionist Party）、社会民主工党（Social Democratic and Labour Party）、新芬党（Sinn Fein）等。
      </Typography>

      <Typography paragraph variant="h5">
        三、领导人：
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        首相是政府的领导人，由议会下院中的多数党领袖担任。
      </Typography>
      <Typography paragraph variant="h5">
        四、选举制度：
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        英国采用相对多数制进行选举，这意味着在各选区中得票最多的候选人获胜。
      </Typography>
      <Typography paragraph variant="h5">
        五、地方政府：
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        英国有地方政府负责地方事务管理，包括教育、交通和公共卫生等，具有一定的自治程度。
      </Typography>
    </Box>
  )
}

export default Article
