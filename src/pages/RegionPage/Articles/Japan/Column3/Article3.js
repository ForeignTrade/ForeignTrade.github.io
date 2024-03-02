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
        外贸视角：分析当今日本投资环境
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>投资环境</Typography>
      <Typography paragraph variant="h5">
        一、外国直接投资政策、税收制度、劳动市场状况
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>外国直接投资政策</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>01</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>鼓励行业</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>中央政府没有特别规定的外商投资鼓励行业；地方政府根据自身行业布局和发展规划，对鼓励发展行业做出规定。目前，外国企业对日投资主要集中在东京都、大阪府和神奈川县等。大阪重点招商行业为生物技术、精密科技、半导体、电子零部件、电子设备；神奈川县为汽车、IT、半导体、生物科技、环保；兵库县为精细加工、组装产业、半导体、再生医疗。在中央政府层面，并未出台单独针对外资企业的财税优惠政策。地方政府面向公司总部或研发机构的税收优惠和其他优惠，对内外资同等适用。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>02</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>疫情期间的税收减免政策</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>2020年4月7日，作为应对疫情紧急经济援助计划组成部分，日本政府宣布支持疫情防控的税收政策。主要措施如下。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>延期付款</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>允许总收入明显下降的企业，国税、地方税和社会保障的缴款时间延长一年，而无需抵押和缴纳滞纳金。如果因疫情影响，纳税人总收入自2020年2月1日至2021年1月31日的某时期(1个月或更长时间)显著下降(与上年同期相比降幅至少20%)，且纳税人面临税款或社会保障款立即缴纳困难，付款时间可最多延长一年。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>净经营亏损向前结转</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>目前，注册资本不超过1亿日元的中小企业，可通过净经营亏损向前结转进行退税。净经营亏损向前结转制度适用范围还将扩大至注册资本不超过10亿日元的中型企业。这些措施适用于在2020年2月1日至2022年1月31日之间产生的净经营亏损。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>远程办公设备计入资本投资</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>中小企业远程办公设备通常为疫情防控需要购置，对这种资本投资，允许财务上计提特殊折旧，并进行税收抵免。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>可更改是否缴纳消费税选择</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>在1个月或更长时间，经营实体总收入显著下降(与上年同期相比至少下降50%)，允许更改其是否需缴纳消费税的选择。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>减免地方房地产税和城市规划税</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>如果在2020年2月至10月中小企业营业收入三个月内与上年同期相比减少30%至50%，则计算2021年应缴纳地方房地产税和城市规划税时，税基减半征收；如果降幅超50%，则税基降至零。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>扩大低税率适用的资产范围</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>为促进中小企业资本投资，将适用低税率的可计提折旧资产的范围扩大至企业的房屋和建筑物，以提高企业生产力。特别措施的适用期限将延长两年，直至2023年3月31日。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>豁免特殊贷款合同印花税</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>对金融机构向受新冠肺炎疫情影响的经营实体提供优惠贷款的合同文件，免予征收印花税。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>03</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>经济特区法规</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>日本经济特区主要包括以下两大类。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>第一类，以先行先试、制度创新为核心的经济特区。主要包括结构改革特区、综合特区、国家战略特区、冲绳经济特区在内的特别区域。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>第二类，以贸易便利化为核心的海关特殊监管区域，主要包括指定保税区域、保税仓库、保税工厂、综合保税区等。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>日本针对每种经济特区，均颁布相关法律和特区建设的基本方针，对其定位、监管、特殊政策等予以规定。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>相关法规包括：《结构改革特区法》《结构改革特区基本方针》《综合特区法》《综合特区基本方针》《国家战略特区法》《国家战略特区基本方针》《冲绳回归特别措施法》《冲绳振兴特别措施法》《关税法》。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>税收制度</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>日本是以直接税为主的国家，现行的主要税种有：法人税、个人所得税、消费税、酒税、关税、继承和赠与税、固定资产税、印花税等。其中，对个人与公司的所得征税，是日本的主要税收来源，是日本税制体制的核心和主要税种。此外，1989年开始征收的消费税也已成为日本税制体系中的主要税种之一，而且一般认为在今后的税制改革中，消费税的地位会不断上升。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>日本的税收立法权集中在中央。中央政府不仅负责中央税收的立法工作，还负责地方税收立法工作。中央税收简称国税，由财务省税收政策局和关税局负责法案、修正案的起草工作，由内阁提交国会审议、批准。国税的税收征管权限主要是国税和部分地方税的征收、稽查和管理。地方税包括都道府县税和市町村税，除地方消费税由国税部门代为征收外，其余地方税均由地方政府设立的税务管理部门负责征收。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>日本的税种种类</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>1、法人税</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（1）纳税人</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>法人税的纳税人是以营利为目的的普通法人组织和其他有经营性收入的法人组织。纳税人分为国内法人和外国法人。总部设在日本境内的为国内法人，总部设在日本境外的为外国法人。国内法人应当就其来源于日本境内、境外的全部所得缴纳法人税；外国法人只就其来源于日本境内的所得纳税。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（2）征税对象 、税率</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>法人税的征税对象是法人各经营年度从事经营获取的利润。国内法人就经营所得、清算所得、退休年金基金等所得缴纳法人税。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>来源于日本境内的所得共分为11类：经营和资产运用所得、提供劳务所得、不动产租赁所得、存款利息所得、股息所得、贷款利息所得、资产转让所得、广告所得、人寿保险基金所得、从隐名工会等组织分得的所得、中小企业风险准备金。法人税的基本税率是30%。资本金不超过1亿日元的法人，年应纳税所得额低于800万日元，适用税率为22%；年应纳税所得额超过800万日元，适用税率为30% 。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>2、个人所得税</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（1）纳税人</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>日本个人所得税的纳税人为居民和非居民个人。居民指在日本国内拥有住所、居住期间满1年以上的个人,非居民指在日本国内没有住所、居住期间不满1年的个人(居民以外的个人)。居民应就来源于全世界的所得纳税,非居民只对来源于日本境内的所得纳税。无意在日本永久居住,居住期限在5年以下的非永久居民,仅对来源于日本境内的所得和在日本支付或汇往日本的境外所得纳税。日本的海外移居者最初5年通常作为非永久居民;因工作派遣到日本居住不满1年,则作为非居民对待;在日本居住满5年,即成为永久居民。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（2）征税对象、税率</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>居民应就下列所得缴纳个人所得税,包括:①利息所得;②股息所得;③不动产所得;④经营所得;⑤工薪所得;⑥转让所得;⑦偶然所得;⑧山林所得;⑨退休所得;⑩其他所得。 个人所得税的起征点因基本生活扣除额等因素的影响而有所变化,目前,夫妇带两个孩子的标准工薪家庭的个人所得税起征点为384.2万日元。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>3、消费税（增值税）</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（1）纳税义务人</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>在日本国内提供应纳税货物与劳务的居民、非居民以及国内法人和外国法人为消费税的纳税义务人。年应纳税销售额低于1000万日元的小规模企业免除消费税的纳税义务。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>从事出口贸易的中小企业经申请可以选择作为纳税义务人，这样，不仅可以扣除进项消费税税额，还可以享受出口退税的优惠（即出口货物享受免税优惠）。另外，税法还规定了法人继承、合并、分立时免除消费税纳税义务的特例。进口货物一律缴纳消费税。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（2）征税对象、税率</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>日本消费税采用价外税方式，对在日本国内所有有偿货物劳务交易普遍征收。个体经营者（成法人）的无偿资产转让（用于家庭消费、赠与或低价转让他人）时，也视作交易，纳入征税对象，计税依据采用资产市值。当然，也有一些不征税交易：</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>不纳入消费税征税对象的货物劳务包括两类，从其交易性质看不易纳入征税对象的货物劳务包括：①土地（含土地上的权利）的转让与租赁（以土地转让与租赁的中介费作为等价报酬的劳务提供除外）。②有价证券等支付手段的转让。③贷款利息、保险费等。④邮票、印花转让。⑤行政手续费、国际邮政汇兑、国际邮政转账、外汇交易。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>从政策方面考虑不纳入征税对象的货物劳务包括：①医疗保险各法规定的医疗费。②看护服务和社会福利服务。③生育助产费用。④埋葬费、火葬费。⑤残疾人物品的转让与租赁。⑥学校提供的教育费用。⑦教学用图书的转让。⑧住宅租赁。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>日本消费税与欧洲国家普遍实行的增值税属于同一类型，即缴税基数较宽的间接税。消费税税率为4%。与地方消费税（消费税税额的25%）的合计税率5%。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>4、其他主要税种</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（1）继承税</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>① 纳税人。继承税的纳税人是因继承或遗赠取得财产的个人。在日本国内拥有住所的个人取得的全部财产均纳入征税范围。在日本国内没有住所，有日本国籍者，其在国外居住5年以下时，根据临时措施，对其国外财产也征税；在国外居住超过5年时，仅对其国内财产征税；而没有日本国籍者，仅对其国内财产征税。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>②继承税的征税对象和税率。继承税的征税对象原则上是继承人取得的继承或遗赠财产。即指可以估算为现金的、具有经济价值的一切有形和无形资产。因而继承税的征税对象不仅包括动产和不动产，同时也包含特许权、著作权等无形财产权和矿业权、渔业权等经营权利以及私法、公法上的各种债权。另外，继承人领取的死亡保险赔付和死亡退休金也纳入征税范围。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>继承税不征税的范围包含：皇室成员继承的财产；墓地、神龛、佛坛；用于宗教、慈善、学术或公益目的的继承财产；继承人因被继承人死亡获得的死亡保险赔付款和死亡退休金的一部分，死亡保险赔付款和死亡退休金的最高免征限额分别按500万日元乘以法定继承人数计算。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>继承税的基础扣除额按5000万日元加上1000万日元乘以法定继承人数计算。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（2）赠与税</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>①纳税人及征税对象。赠与税的纳税人是因赠与取得财产的个人。取得财产时在日本拥有住所的个人就其取得的全部财产缴纳赠与税。在日本没有住所的个人，就其国内财产缴纳赠与税。因赠与取得国外财产的个人，在日本没有住所，但拥有日本国籍者，就其国外财产缴纳赠与税。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>赠与税不征税财产包括：来自法人的受赠财产；抚养义务人相互间用于生活费和教育费的受赠财产；重症残疾人取得的信托受益权价值6000万日元的部分；子女无偿租用父母的土地建造房屋时，对其房屋使用权不征税。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>②赠与税税率。赠与税的基础扣除额为110万 日元。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（3）酒税和烟税</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>烟酒作为嗜好品,较之其他商品征收较高税收, 引进消费税之后,税负有所调整。在确立以直接税为主导税种之前,酒税占国税收入的第一位,现在约占国税收入的4%;酒税是以含酒精1度以上的饮料为计税依据,按照不同酒类设定税率,如40°的威士忌1公斤税额高达409000日元;烟酒税均采用从量税方式征收,对于香烟,除征收消费税和地方消费税以外,还征收国税的烟税和地方的烟税以及特别烟税。烟酒税属于间接税,最终的负担者是消费者。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（4）印花税</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>对个人或法人制作的凭证如合同、期票、汇票、收据等征收,凭证制作人是纳税人。纳税人在其制作的应纳税凭证上贴足印花税票即完成纳税。税率取决于凭证的性质和所含的数额。如不动产转让合同金额10万日元以下,税率为200日元,合同金额超过50亿日元,税率为60万日元。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（5）社会保障税</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>健康、养老、长期看护和失业保险是政府主办、雇主和雇员必须参加的制度。税额由雇主和雇员各自分摊。税率为:健康保险是月标准工资的4.1%(最大限额为每月40180日元),月奖金标准的4.1%（最大限额为一次支付81000日元）;养老保险是月标准工资的6.79%(最大限额为每月42098日元),月奖金标准的6.79%（最大限额为一次支付101850日元）;长期看护保险是月标准工资的0.445%(最大限额为每月4361日元);失业保险是月标准工资的0.7%，月奖金标准的0.7%。雇员每月全部保障税占月标准工资的12.035%,占月奖金的11.59%。其余均由雇主分摊。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>劳动市场状况。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>严重的劳动人口短缺：</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>与低失业率相对的困境是，日本的企业很难找到合适的人才了。日本在2020财政年度的职位空缺率为1.1，比上一财政年度的1.55大幅下降，这意味着每1个空缺的职位与之对应的求职者是1.1名。这一比率在2018年为1.62，创下了历史最高值，在接下来的两年中大幅下降。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（见图）</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/外贸视角：分析当今日本投资环境图片1.png')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Typography paragraph sx={{ textIndent: '2em' }}>图 日本1981-2020财年职位空缺与申请人的比例</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>数据来源：数据基于日本公共就业保障办公室的报告。*职位空缺/申请人比率=每月有效职位空缺数量/每月有效求职者数量</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>2021年12月的活跃职位空缺与申请人的比率为1.16倍，处于较低水平，但目前处于逐渐上升的趋势。根据帝国数据银行（Teikoku DataBank）2022年1月进行的“2022年工资趋势企业意识调查”，预计到2022年底54.6%的企业将以提高全职员工的工资的方式来吸引劳动者，未来劳动力短缺无疑将再次成为企业所面临的困境。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>根据机构帝国征信2020年1月在日本企业中进行的一项调查，约66%的信息服务行业公司报告称，正规全职员工短缺。餐饮业紧随其后，约占65%。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>IT企业经营者普遍表示：“应用开发项目越来越多，但由于一个项目跨越1到3年左右，往往因劳动力短缺而很难找到工作”（软件合同开发项目）</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>建筑企业经营者表示：“感觉询盘量减少，材料价格飞涨，劳动力短缺”（一般土木建筑工程）</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（见图）</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/外贸视角：分析当今日本投资环境图片2.png')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Typography paragraph sx={{ textIndent: '2em' }}>图：2022年，受调查日本企业遭受全职员工短缺比率，按行业分列</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>数据来源：机构帝国征信, Mar 2022</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>企业同样的也缺乏兼职人员、派遣人员等非正式员工。按受调查行业分，“餐厅”（76.6%），“娱乐服务”（50.8%）、“餐饮零售商”（49.4%）、“旅馆/酒店”（47.6%）、等与个人消费与客户服务相关的行业排名靠前。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>图：截至2022年1月，日本非正式（兼职，劳务派遣等）员工不足的企业所占的比例</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（见图）</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/外贸视角：分析当今日本投资环境图片3.png')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Typography paragraph sx={{ textIndent: '2em' }}>数据来源：机构帝国征信, Mar 2022</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>另一方面，在日本，由于少子老龄化未能得到改善，预计人口将继续减少，未来企业的劳动力短缺感将增加。政府和业界都已经提出需要通过DX（数字化转型）和提高工资来解决劳动力短缺问题。然而，根据帝国数据库于 2021 年 12 月进行的“企业DX推广意识调查”，50.6% 的企业指出“没有人力资源可以处理DX”。随着劳动力短缺的加剧，如何雇佣和培养能够处理DX的人力资源将是未来解决劳动力短缺的关键。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>3. 劳动人口结构</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（1）女性劳动人口</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>提高妇女就业可能是改善日本劳动力短缺的可能办法之一。近年来，日本越来越多的女性加入劳动大军，这体现在女性就业率的增长。服务业的扩张在一定程度上支撑了劳动力市场参与度的增长。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>图：1973年至2021年日本的劳动力人数(百万)</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（见图）</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/外贸视角：分析当今日本投资环境图片4.png')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Typography paragraph sx={{ textIndent: '2em' }}>日本统计局，日本内务省</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>*资料来源将年龄在15岁及以上的就业和失业人口定义为劳动力。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>2021年，日本劳动力总数约为6860万人，其中男性约3800万人，女性约3057万人。女性参与劳动的总人数保持了整体上升的趋势，在统计期间，女性就业人数在2019年达到最高水平3058万人。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>图1973年至2021年日本按性别统计劳动力人数(单位：百万人)</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（见图）</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/外贸视角：分析当今日本投资环境图片5.png')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Typography paragraph sx={{ textIndent: '2em' }}>数据来源：日本统计局，日本内务省</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>*资料来源将年龄在15岁及以上的就业和失业人口定义为劳动力。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>除了女性之外，外籍工人的增加以及老年人的高参与率也值得一提。按年龄组划分的劳动力数据显示，2020年约有900万人在65岁年龄之后继续参与劳动力市场。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（2）老龄化与劳动人口</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>2021年，日本全国劳动力人口总数约为6860万人，其中约有860万45岁至49岁的劳动力。这一年龄组是全国劳动力总数中最大的年龄组。日本约有62%的人口是劳动力。60-64岁人口的参与劳动比率达到了75.8%，65岁以上人口的劳动参与率达到了近30年来的最高值25.6%，所以在日本见到白发苍苍的老人做收银员、服务生或者出租车司机也是很常见的。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>从下图我们可以看出，其中15-30岁的年轻劳动力群体数量从2000年开始呈减少趋势，到2021年，30岁以下的年轻劳动力群体仅占日本劳动力人口的16.82%。30岁至50岁的中年劳动力群体数量自1995年开始下降，其中45-49岁年龄段的劳动者群体仍然是按年龄段划分日本劳动者人数最多的，在2021年达到了865万人，但是按照现有人口老龄化的趋势来看，很快人数最多的劳动力群体就会变成50-54岁的劳动者。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>50-64岁的劳动者自1995年起数量开始下降，到2021年这一年龄组的劳动者人数为2005万人，占日本全部劳动人口数量的29.02%。65岁以上的劳动者人数一直在随年增长，在2021年达到同比最多，为926万人。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>日本65岁及以上的劳动者数量在不断增多，并且其工作性质也与其他年龄段的劳动者有明显的区别，那就是65岁以上劳动者从事非正式工作的比率远远高于其他年龄段。2021年，日本65岁及以上的就业者中有近76%的人从事非正式工作。相比之下，55岁至64岁的员工中也有高达45%比率左右的劳动者是在从事非正式工作。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>图2002年至2021年，日本各年龄段非正式职就业者所占比例</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（见图）</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/外贸视角：分析当今日本投资环境图片6.png')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Typography paragraph sx={{ textIndent: '2em' }}>数据来源：日本统计局，日本内务省</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>5. 外籍员工与移民</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>日本不是一个传统意义上的移民国家，不仅有语言上的天然屏障，整个社会的态度也较其他国家显得保守。但是不断的老龄化进程和年轻人无法提振的生育率让引入外籍员工与松动移民政策变成不得不事实性实施的政策方向。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>在社会的基础劳动力方面，日本社会存在大量的外国人技能实习生。不少越南、菲律宾等国的青年赴日本，成为日本劳动力贡献者。随着人口老龄化趋势无法逆转，日本政府终于下决心改革，与2019年4月宣布新增「特定技能制度」，继续引进外国人赴日工作。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>另外，在日外国人的一个重要组成部分，就是拿着“经营管理”资格签证，以及“人文、技术和国际服务”签证的非体力高等劳动人才。持有经营管理资格签证的外国人，通过投资和经营活动给日本政府贡献税收，并且提供工作岗位，促进就业，推动经济发展。而“人文、技术和国际服务”签证则主要发放给具备一定学历、工作经验、从事特定行业的高水平人才，以此来匹配日本的高等人才需求。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>截止到2021年10月，日本的外国劳动者约为173万人。这一数字在过去十年中翻了一倍多。根据厚生省调查，日本作为老牌工业制造国家，制造业仍然是日本外国劳工最重要的雇主。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>图2012年至2021年在日本的外国工人数量</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（见图）</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/外贸视角：分析当今日本投资环境图片7.png')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Typography paragraph sx={{ textIndent: '2em' }}>数据来源：厚生劳动省</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>虽然中国跟日本有着非常紧密的文化和地理上的链接，我们身边也不断的有人去往日本工作和移民，但是其实中国人并不是在日本人数最多的。截至2021年10月，日本超过26%的外国工作者是越南人，中国工人排在第二位，约占外国工人的23%。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>图按来源国或地区分类，2021年在日本的外国工人分布情况</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（见图）</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/外贸视角：分析当今日本投资环境图片8.png')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Typography paragraph sx={{ textIndent: '2em' }}>总体来讲，日本作为发展较为稳定的经济体，其劳动市场从数据上看较为稳定。但是其潜藏的危机也不容忽视：劳动者老龄化，退休时间延后；少子化带来年轻劳动者不足；企业面临着较严重的员工短缺困难。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>投资激励政策：</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>税收优惠</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>具体规定是，2021年（仅2021年），对于固定资产税采取减税措施。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>根据2021年1月发布的地价，如果由于2021年地价上涨，导致固定资产税高于前期，则2021年固定资产税将维持原状不变。如果地价下降，将使用减税标准。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>估价对象主要包含商业用地、住宅用地和农用地等在内的所有的土地。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>由于日本地价是稳中有升的常态，此政策可以是利好消息。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>个人和家庭方面</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>1、凡在2022年末前入住，居住面积在40平方米超过的居民，均可享受住房贷款减税；</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>2、凡在2023年4月底前，购置电动汽车或混合动力汽车的居民，均可享用减税政策，原方案在2021年末前实行的减税措施继续执行；</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>3、对婴儿保姆的补助金不得课税，产后护理的委托金部分也不加收其10%的消费税；</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>4、祖父母捐给孙辈教育、成婚等育儿费，不征税；</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>5、商业用地、住宅用地等土地的固定资产税不增加。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>企业方面</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>1、对二氧化碳排放量大幅减少的企业，扣除10%的法人税；</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>2、对导入云数据处理企业，其投资份额扣除5%的法人税；</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>3、对引入海外金融高端人才的企业，在继承税、法人税、所得税享有优惠；</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>4、对并购中小企业，在全新设备投资和就业方面得到优惠。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>政府支持</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>半导体方面补贴政策：日本根据《特定高等信息通信技术活用系统的开发供应及导入促进法修正案》(《半导体支援法》)对 日国内半导体项目提供高额补贴。其中，对技术开发项目最高补贴总投资额的三分之一；对半导体设备投资项目原则 上补贴三分之一，但对“特定半导体”生产设施的完善以及建厂扩容等最高可补贴50%</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>有关举措：</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>❶主导组建日本公司Rapidus。该公司于2022年8月在日本经产省主导下设立，资本金约73亿日元，由丰田、</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>NTT、索尼、NEC、软银、电装、铠侠各岀资10亿日元、三菱日联银行出资3亿日元组成，日本政府先后提供3300亿</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>日元补贴。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>❷吸引全球巨头来日投资。2023年5月18日，岸田文雄会见美国应用材料、英特尔、IBM、美光、韩国三星电</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>子、台积电、比利时IMEC等全球七大半导体公司高管。相关企业2021年以来对日投资已接近2万亿日元。其中，台</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>积电正在熊本建设工厂，三星和IMEC在日设立研发中心。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>❸补贴或收购半导体设备及材料企业。日本官民基金产业革新投资机构(JIC)拟收购光刻胶企业JSR，以强化半导</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>体供应链，经产省拟提供750亿日元补贴SUMCO新建硅晶片工厂。另外，政府还将为IBIDEN封装基板工厂提供405亿日元、为佳能制造设备工厂提供111亿日元的资金支持。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>2022年1月17日由于美中贸易紧张和疫情暴露日本供应链的脆弱，日本政府计划设立一项补贴计划，协助企业开发芯片、大容量电池和其他关键材料，确保这些战略产品供应稳定。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>补贴名单包括稀土金属和药品，计划截至于2024 年3 月的财政年度内启动和运作这项补贴计划。制造商首先必须提交研究或生产设施的投资计划，由政府筛选，审核条件包括保证在一定期间内持续生产、采取适当措施保护专利技术，并承诺向国内市场提供稳定供应。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>日本2021年决定补贴台积电与Sony 集团在熊本县设厂，计划动用约5000 亿日圆（约合人民币278.1亿元）和其他预算拨款。电子资讯技术产业协会2021年敦促政府提供财政支援，称如果没有与竞争对手国家和地区相同补贴，就不可能实现公平竞争。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>除了半导体产业外，还有车用锂电子电池。丰田汽车集团和主要贸易公司去年4 月成立电池供应链协会，并要求政府提供援助。日本的钴、镍等金属依赖进口，而中国在电极和电解质材料方面占主导地位。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>投资风险评估：</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>1.文化与沟通风险</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>日本和中国的商业礼仪和交往方式有很大差异。例如，日本商业场合非常注重礼仪、时间观念和形式。不恰当的交往可能会误解为不尊重，进而影响商业合作。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>2.汇率风险</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>由于国际经济环境的影响，日元与人民币的汇率可能会出现大幅波动。这不仅会影响投资收益，还可能增加投资成本。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>3.	政策与法律风险</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>日本的政策和法规经常会根据其国内外经济情况进行调整。对于外国投资者来说，如果不了解或未能及时跟进，可能会面临意外的法律风险。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>4.市场竞争风险</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>日本市场的消费者对产品和服务的品质要求很高。新进入者除了面临当地竞争对手的压力，还要确保其产品或服务能满足日本消费者的高品质要求。</Typography>

    </Box>
  )
}

export default Article
