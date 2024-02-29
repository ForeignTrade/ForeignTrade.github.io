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
        专家视角：解读英国社会文化
      </Typography>
      <Typography paragraph variant="h5">
        一、语言
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        1主要语言：英语是英国的官方语言，是商业交流和日常生活的主要语言。英国英语与其他英语国家（如美国）在拼写、词汇和语法上有所不同。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        2语言的重要性：在英国进行业务时，清晰、准确的英语交流至关重要。尽管英国是一个多语言国家，但掌握流利的英语是成功开展业务的关键。
      </Typography>

      <Typography paragraph variant="h5">
        二、宗教
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        1多元宗教社会：英国是一个宗教多元化的国家，基督教是主要宗教，但也有众多其他宗教信仰，包括伊斯兰教、印度教、犹太教和佛教等。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        2宗教对商业的影响：虽然宗教对英国的日常商业活动影响有限，但了解和尊重不同宗教节日和习俗对于建立长期商业关系很重要。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        3由于宗教的原因,他们非常忌讳"13"这个数字,认为这是个不吉祥的数字。日常生活中尽量避免"13"这个数字,用餐时,不准13人同桌,如果13日又是星期五的话,则认为这是双倍的不吉利。
      </Typography>

      <Typography paragraph variant="h5">
        三、价值观念
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        1个人主义与公平：英国社会高度重视个人主义、自由和平等。在商业环境中，这表现为强调个人成就和公平竞争。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        2保守与传统：尽管现代化，英国社会仍然保留着许多传统习俗和礼节，这在商务礼仪和社交活动中尤为明显。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        3英国免费医疗,即便是临时来英国的外国人有急病,也不例外。
      </Typography>

      <Typography paragraph variant="h5">
        四、节假日和工作时间
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        1标准工作时间：英国的标准工作时间为周一至周五，每天约7-8小时。周末（周六和周日）通常为休息日。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        2公共假期：英国有多个公共假日，包括圣诞节、复活节和银行假日等。了解这些假日对于规划商务活动和会议十分重要。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        3商务活动在2~6月、9月中至11月最宜。圣诞节及复活节前后两周最好勿去。英国有银行春假(圣灵降临)节,在6月(第一个周末)；银行暑假节,8月(最后一个周末)。
      </Typography>

      <Typography paragraph variant="h5">
        五、教育体系
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        1高教育水平：英国拥有世界领先的教育体系，包括多所著名大学和专业机构，提供高水平的教育和技能培训。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        2技能培训：英国的教育体系重视实用技能和终身学习，为企业提供了高技能的劳动力资源。
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/专家视角：解读英国社会文化-1.jpg')} alt="description" style={{ width: '90%', height: 'auto' }} />
      </Box>


      <Typography paragraph variant="h5">
        六、媒体与信息
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        1新闻自由：英国享有高度的新闻自由，多样化的媒体环境为公众提供了广泛的信息来源。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        2社交媒体的影响：社交媒体在英国极为流行，对品牌宣传、市场营销和客户服务有着重要影响。利用社交媒体平台可以有效地达到目标受众，增强品牌知名度。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        3英国媒体格局由高度党派的商业国家媒体和由 BBC 主导的公共服务广播系统组成。根据路透社数据，截至 2015 年，网络已超过电视成为新闻的主要来源，74% 的受访者通过网络获取新闻，而 60% 的受访者通过电视获取新闻。社交媒体作为新闻来源的比例从 2013 年的 20% 上升到 2021 年的 41%，而印刷媒体在同一时期从 60% 急剧下降到 15%。尽管纸媒依然强大，但英国也正在向数字新闻来源转变。
      </Typography>

    </Box>
  )
}

export default Article
