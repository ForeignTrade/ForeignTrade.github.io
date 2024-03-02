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
        外贸锦囊：分享日本市场的消费习惯
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>消费习惯</Typography>
      <Typography paragraph variant="h5">
        一．消费者年龄分布
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>日本互联网起步较早，网民数量居世界第五，互联网普及率为94%。为了更清晰地了解日本电商市场，可以将互联网的用户分为不同的年龄组：96%的16-24岁、96%的25-34岁和98%的35-44岁的人每天上网。中老年人也经常上网，45-54岁的占94%，55岁以上的占95%</Typography>
      <Typography paragraph variant="h5">
        二．消费者特征
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>注重产品质量</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>日本消费者非常关心产品质量，也关心产品的一些细节，包括包装、标签甚至购物凭证。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>高复购率</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>一旦日本消费者认可一个品牌，他们就会对这个品牌产生很大的依赖，所以复购率会很高。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>低退货率</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>因为日本人在购买的过程中对产品的质量、展示形式和效果都有很高的要求。因此，一旦选择了产品，就很少退货。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>高保留率</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>购买产品后，如果他们对产品满意，他们会对产品做出真实的评价。这可能是由于日本人严谨的工作态度所决定的。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>奖金带来销售高峰</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>大部分的日本上班族在每年的7月和12月都能获得公司发放的奖金，金额不低于3个月的工资，所以7月和12月是购物的高峰期。亚马逊7月的促销活动，以及12月的假日季——圣诞节、黑五和网一，都与这种市场状况相吻合。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>日本消费者最佳购物时间</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>中午12:00-13:00，晚上20:00-24:00为相对集中的购物时段。根据日本的国情，日本消费者很少在工作时间购物，他们一般选择下班后购物。</Typography>
      <Typography paragraph variant="h5">
        三、日本热销产品类别
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>玩具、爱好和DIY类产品</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>玩具、爱好和DIY类是日本最受欢迎的电商类别。电商卖家列出的产品大多与动漫和游戏角色相关，流行的子类别包括文具、护身符（lucky charms）和电子游戏。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>家具与家电</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>在日本电商市场上，第二大最受欢迎的类别是家具和家用电器，其中家居装饰和厨房产品是最大的子类别。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>食品与个护</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>虽然大多数消费者仍然在实体店购买食品，尤其是新鲜食品，但在网上购买小吃和外国美食是很常见的。这主要是由于网上购物的便利，一些外国产品在日本买不到。此外，日本对美国保健品和法国护肤品的需求量尤其大。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>电子与媒体产品</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>虽然消费者更喜欢在商店里试用电子产品，但他们也会在电子商务网站查看产品评论和价格。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>时尚产品</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>和全球其他市场一样，日本的服装和时尚配饰也在增长。它通常是电商平台销售最多、分类最多的类别。</Typography>
      <Typography paragraph variant="h5">
        四、日本消费特征：
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>特征一：自上世纪50年代起，日本的消费率稳定在50%-60%左右（图表1、2），高于挪威、瑞典等欧洲福利主义国家，也高于亚洲另一发达国家韩国的消费率水平，且并未随着日本经济的衰落而出现收缩。日本的消费率水平在亚洲国家中处于相对较高水平，且一直较为稳定。究其原因，得益于日本在经济高速发展过程中藏富于民的经济政策，60年代起建立了完善的社会保障体系，60年代末就有90%的人群成为中产阶级。日本政府也通过减税、国民收入倍增等促进消费。即便后来“泡沫经济”破灭，日本的贫富差距依然很小。尽管人口老龄化，但日本未老先富，日本老年群体的消费力毫不逊色。上述种种都保证了日本消费率的稳定。</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/外贸锦囊：分享日本市场的消费习惯.png')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Typography paragraph sx={{ textIndent: '2em' }}>特征二：日本的消费率进一步上行的空间被二十年的持续通缩所打断。日本1990s起经历了长达20年的低通胀甚至通缩（图3），伤害了居民消费支出积极性；日本民众没有从银行贷款购物的习惯，通缩环境更加剧了这一现象，年轻人宁愿依赖父母的储蓄消费也不愿负债，日本居民部门的杠杆率水平远低于美国（图4），也使日本消费率继续上行乏力。</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/外贸锦囊：分享日本市场的消费习惯图片2.png')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Typography paragraph sx={{ textIndent: '2em' }}>特征三：日本消费随着其工业化、城市化进程的推进，呈现出从“大众消费”全面崛起到八十年代后个性消费涌现的特点，走过了从大众到个性、从奢侈到简约的百年轮回。第一阶段，从大正天皇即位到二战前，日本尚处于工业化、城市化早期，居民消费刚刚崛起，主要集中在局部大城市，“脱亚入欧”思潮下，消费也崇尚“全面西化”；第二阶段，从战后复兴到1970s石油危机前，日本完成了工业化、城市化建设，大众消费全面崛起；第三阶段，经济低迷中的日本鼓励消费，消费出现多样化、个性化特征，品牌意识强烈；第四阶段，人口负增长、经济低迷激发了日本民众的社会意识，居民消费“返璞归真”，开始走向简约、环保（图表5-7）。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>特征四：家庭规模缩小促进了家用及个人用品消费的增长。在4-6人家庭占主流的年代，居民消费主要围绕家用展开，如购买家电、去超市批量购物等。1980s后，1人独居、2人无子或3-4人的核心家庭成为日本社会主要家庭结构，家用电器等的消费总量增加的同时，个人消费也快速增长，便利店等小型业态得到发展。此外，女性角色的转变推动了日本消费结构的变化。1980s起日本年轻女性迟婚甚至不结婚的比例快速增加，越来越多的女性进入职场。女性收入的提高带动了个人消费能力，餐饮、外卖等行业获得快速发展。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>特征五：“标志迷恋”与“无印良品”并存，反映了消费者重视品质、追求自我存在感的多元消费。日本消费者对品牌的态度看似矛盾，一方面他们表现出对高端奢侈品狂热的“标志迷恋”，时至今日仍是主流奢侈品牌最大的单一市场；另一方面，他们又喜欢“无印良品”等简约、无明显商标的产品，也愿意自己DIY家居用品。两类消费并行不悖，反映的都是日本新生代消费者对自我的宣泄和对与众不同的追求。</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/外贸锦囊：分享日本市场的消费习惯图片3.png')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Typography paragraph sx={{ textIndent: '2em' }}>特征六：“崇尚西式”的理念一度主导日本消费观，但近几年“国产至上”的观点悄然流行。日本对西方文化的推崇可追溯至19世纪晚期明治维新时期，直至1970s末电视机、洗衣机、电冰箱广告中仍宣传其产品属于“典型的美式生活”。然而进入21世纪后，在食品消费等领域出现“国产至上”观点，人们宁愿多花钱也要购买本国生产的食品。这当中，日本本土产品品质的不断提升、对工艺的精益求精、食品安全的高标准都是重要原因。</Typography>
      <Typography paragraph variant="h5">
        五．消费者行为
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>1. 品质意识：日本消费者非常注重产品的质量、耐用性和精细度。他们愿意为高质量的商品支付更高的价格。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>2. 服务重视：优质的顾客服务是日本消费者期待的标准。消费者对服务的期待包括礼貌、专业和高效。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>3. 信息寻求者：在购买之前，日本消费者倾向于进行详细的研究和比较，他们会通过各种渠道（如网站、杂志和口碑）寻找产品信息。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>4. 健康和安全意识：近年来，日本消费者越来越关注产品的健康和安全性，尤其是食品和个人护理产品。</Typography>
      <Typography paragraph variant="h5">
        六．流行趋势
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>1. 数字化和在线购物：尽管日本人欣赏传统购物体验，但数字化和在线购物近年来迅速增长，尤其是在年轻人群中。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>2. 可持续和环保产品：可持续性和环保已成为重要的流行趋势，反映在包装减少、有机产品、以及对环保品牌的偏好上。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>3. 个性化和定制化：日本消费者越来越寻求个性化和定制化的产品和服务，以满足他们独特的需求和偏好。</Typography>
      <Typography paragraph variant="h5">
        七．市场偏好
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>1. 本土品牌的忠诚度：虽然对国际品牌有一定程度的开放性，但日本消费者对本土品牌和产品有很高的忠诚度。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>2. 对技术产品的偏好：日本市场对高科技产品和创新有很高的接受度，尤其是在消费电子、机器人和汽车领域。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>3. 对传统和现代的融合：在许多消费品类中，日本消费者同时欣赏传统元素和现代创新的结合，例如在时尚、食品和家居装饰中。</Typography>

    </Box>
  )
}

export default Article
