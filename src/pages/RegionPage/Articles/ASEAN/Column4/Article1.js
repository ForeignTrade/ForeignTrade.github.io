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
        精选专栏：解读东盟的社会文化
      </Typography>
      <Typography paragraph variant="h5">
        一、社会文化：语言、宗教、价值观念、节假日和工作时间
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>1、东盟各国语言种类繁多，官方及常用语言存在多语种并存现象。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>新加坡有马来语、华语、泰米尔语和英语4种官方语言；其中马来语 为国语，英语为行政用语。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>印度尼西亚有200多种民族语言，官方语言为印尼语。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>柬埔寨的通用语言为高棉语，与英语、法语同为官方语言；英语、法 语也是柬埔寨政府部门的工作语言；华语、越南语是普通市民中使用较多 的语言。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>泰国的国语为泰语，官方语言为泰语和英语；每个地区都有自己的方 言，但以中部曼谷地区的方言为标准语；潮州话、海南话、广东话在泰籍 华人中使用较为普遍，此外还有马来语和高棉语。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>缅甸有100多种民族语言，官方语言为缅语及英语；主要的民族语言包括缅甸、克钦、克耶、克伦、钦、孟、若开等民族的语言，英语是流 行的主要外国语。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>越南官方语言为越南语，也是通用语言和主要民族语言，部分居民会 讲英语。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>老挝官方语言为老挝语，英语正逐步普及，部分人会法语。资格较老 的政府官员多会说俄语或越南语。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>马来西亚的国语为马来语，通用英语；马来西亚华人基本上能用华语 普通话或方言交谈，普遍使用的方言有粤语、闽南语、客家话、潮州话、 海南话、福州话等；印度族群常用泰米尔语交谈。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>菲律宾约有70多种语言，国语是以他加禄语为基础的菲律宾语；英语 为官方语言，在菲律宾较普及。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>文莱的马来语是国语，通用英语。原用加威文（用阿拉伯文书写的马来文），现在许多场合（如个人签名、公共建筑物上等）仍使用。文莱华人除用英文和马来语外，还讲闽南语、广东话，绝大多数华人能讲普通话 （当地人称为华语）。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>2、东盟诸国信仰宗教种类繁多，有浓厚宗教价值观念</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>泰国、缅甸、老挝和柬埔寨四个国家以佛教为主；马来西亚、文莱和 印度尼西亚主要信奉伊斯兰教，印度尼西亚是世界上拥有穆斯林人口最多 的国家；菲律宾是信仰天主教的国家；而儒家文化则在越南和新加坡占主要地位。</Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/精选专栏：解读东盟的社会文化-1.png')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Typography paragraph sx={{ textIndent: '2em' }}>佛教国家（泰国、缅甸、老挝和柬埔寨）笃信佛教，如泰国法律中有 许多保障宗教的条文，故而不要对佛像不敬；由于僧侣必须严格遵守小乘 佛教教义，绝对禁止接触女性或被女性触摸，因此女性游客在公共场合应 避免碰触僧侣。緬甸人笃信佛教，参拜寺院宝塔必须脱鞋赤脚进人，表示 对佛祖的尊敬；缅甸人视摸头为一件不礼貌的事，因此不要随便摸小孩子的头。老挝国民大多信奉小乘佛教，忌讳亵渎佛像，人们不能随意用手去 触摸佛像，更不能用身体的任何部分接触佛像，也不能对佛像随意评论。柬埔寨佛寺遍及全国，僧王和僧侣的社会地位很高。通常男子无论社会地位高低，一生都要出家一次，否则为世俗鄙视，但可以随时还俗。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>伊斯兰教国家（马来西亚、文莱和印度尼西亚），如马来西亚，在傍 晚的伊斯兰教徒祈祷时间内不要打扰他们；用食指指人在马来西亚是一种 不礼貌的行为，最好以拇指代替；触摸小孩子的头也是不礼貌的行为。文莱，参观清真寺或到马来人家做客时，进门前要脱鞋以示尊重和清洁， 非穆斯林不能踩清真寺内祷告用的地毯。印尼的少数民族认为照相或闪光 灯是摄人灵魂的器具，拍照前最好能先询问当地人。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>越南人崇尚儒家思想。人们在日常生活中注重礼节，见面习惯打招呼 或互致问候。称谓与问候很讲究，要在名字前加兄弟姐妹等尊称。忌讳三 人合影、一根火柴或打火机连续给三个人点烟，认为不吉利；忌讳被人摸 头顶；席地而坐时，忌别人把脚对着自己。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>3、假期</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>缅甸为其公民提供27天假期。其中，4月10日至17日为期8天的庆祝活动专门庆祝泼水节，让人想起泰国和柬埔寨的宋干节，以热闹的泼水庆祝活动为标志。值得注意的日期还包括1月4日的缅甸国庆日、2月 12日的联邦日、3月2日的农民日和3月5日的达邦满月日。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>印度尼西亚安排了27个公共假期，并于4月29日至25日举行为期7天的开斋节庆祝活动，标志着斋月的结束。印尼日历还包括8月17日纪念该国独立的印尼国庆日、6月1日纪念国家基本原则的潘查西拉日、6月19日庆祝伊斯兰新年的穆哈拉姆日以及12月25日至26日圣诞节。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>泰国拥有22个丰富的公共假期。其中最著名的是4月13日至15日庆祝的为期三天的泰国新年（泼水节）庆祝活动。其他值得注意的节日包括5月4日至5日的加冕日、6月3日的女王陛下生日、6月28日的国王陛下生日、6月5日纪念佛陀一生中的重大事件的佛陀日、10月23日的朱拉隆功日和泰国纪念日、12月10日宪法日。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>柬埔寨有20个公共假期，包括4月14日至16日为期三天的高棉新年庆祝活动，泼水仪式与泰国和老挝类似。日历上其他值得注意的日期包括11月9日柬埔寨国庆日、5月14日国王生日以及6月18日国王母亲的庆祝活动。此外，每年的9月24日都是宪法日，纪念该国 1993 年向君主立宪制过渡。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>菲律宾每年有20个公共假期。其中值得注意的日期包括1月2日的元旦、2 月 23 日这个群岛国家的庆祝活动、6月12日的菲律宾国庆节和8月21日的尼诺·阿基诺日。该日历还包括11月1日至2日的诸圣日、11月27日的博尼法西奥日和12月8日的圣母无染原罪日。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>文莱是位于东南亚婆罗洲北岸的独立伊斯兰苏丹国，授予其公民共17个公共假期。其中，有四天是开斋节假期，俗称“开斋节”，标志着斋月的结束。其他重要节日包括2月23日庆祝的文莱国庆日和 5月31日庆祝的皇家武装部队日。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>马来西亚为其公民提供总共15个公共假期。该国最重要的庆祝活动是每年8月31日举行的独立日，以及为期三天的穆斯林重要节日开斋节。马来西亚公民还会在4月21日至 23 日左右庆祝，在为期一个月的斋戒（斋月）结束时举行节日聚会、特别祈祷和美味盛宴。此外，马来西亚人在农历新年、9月16日马来西亚日和5月4日纪念佛陀诞生的卫塞节放假。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>马来西亚和新加坡两国在同一天庆祝农历新年和卫塞节。然而，新加坡的独立日是8月9 日。此外，新加坡另有独特的节日，例如11月12日的印度教排灯节屠妖节、4月7日的耶稣受难日以及4月22日的开斋节。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>越南为公民提供13天的公共假期。“越南春节”，根据阴历，也被称为越南新年，是越南最长的庆祝活动，为期五天。通常在一月底或二月初庆祝。这个假期的日期每年都会变化。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>越南的其他主要节日包括5月1日的劳动节、4月29日的雄王庙节（每年都有变化）和 9 月 2 日的越南国庆节。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>老挝全年共有14天公共假期。老挝新年（也称为 Pi Mai Lao）通常在 4 月 14 日、15 日和 16 日举行，是全国各地欢乐庆祝的时刻。老挝也在5月1日庆祝国家劳动节，以表彰其劳动力的贡献。老挝日历上另一个值得注意的日子是12月2日的国庆节，以纪念该国历史上的一个关键时刻。</Typography>
      <Typography paragraph variant="h5">
        二、教育体系
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>新加坡的教育体制有利于每个学生循序渐进地发展自己独特的天赋和兴趣，灵活的教学方法使学生的潜能得到培养和发展。新加坡的教育一般分为 3~4 个阶段。六年小学教育对国民是强制性的，再修完四至六年的中学课程。基本科目成绩均达标者可选读理工学院（三至五年）或初级学院（两年），未达标者可入读工艺教育学院（ITE）或出国留学，也可选择直接走向社会参与工作。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>马来西亚教育制度沿袭了英国的教育制度。小学6年，中学5年，并且法律规定：所有马来西亚国民必须接受6年小学和5年中学的强制性义务教育。结束11年的义务教育后，学生要根据“马来西亚教育文凭” (SPM)的考试成绩来决定是继续进入本国或外国的高等学院继续学习，还是为进入社会工作而作准备。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>而像缅甸、老挝等教育资源较为缺乏的国家和地区，则需要帮助和支持。根据世界银行7月份发布的一份报告中显示，在缅甸只有约 22% 的合格学生在高中就读。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>老挝，近年来一直在为提升教育质量而努力，高度重视发挥教育作用，特别是高等教育引领作用。老挝政府通过教育对外开放和多边合作，争取国际组织及中国、越南、澳大利亚等国的支持，促进老挝高等教育发展。</Typography>
      <Typography paragraph variant="h5">
        三、媒体与信息
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>东盟国家在新闻自由度上存在显著差异。一些国家（如泰国和菲律宾）的媒体相对自由，而其他国家（如越南和柬埔寨）则受到较严格的控制。社交媒体在东盟国家广泛使用，对社会和政治有着重要影响。尤其是年轻人群体，他们通过社交媒体获取信息、参与社会活动和表达意见。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>自2016年以来，东盟国家社交媒体用户急剧增加，有超过4亿的用户通过Facebook、Twitter、Youtube、Whatsapp、Instagram等主流社交媒体平台获取新闻和娱乐等信息。在东盟国家总计6.7亿人口中，互联网普及率高达72%。相较于报纸、广播、电视等传统媒体，东盟国家民众倾向于通过更值得信赖的社交媒体寻找信息的替代来源。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>媒体以新加坡为例。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>广播：广播行业由新加坡信息通信媒体发展局（IMDA）负责监管，并实施牌照许可。根据新加坡广播法（Broadcasting Act，BCA），广播公司的外资股比及控制的表决权比例必须低于49%，否则无法取得广播许可牌照。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>国内媒体：与广播行业类似，媒体报业也由IMDA负责监管，并实施牌照许可。根据新加坡报纸和印刷机法（Newspaper and Printing Presses Act，NPPA），报业公司必须设置管理股和普通股两类股份，其中管理股份仅能向新加坡公民或者经批准的公司发行或转让。此外NPPA还规定，报业公司所有董事均需是新加坡公民（第10条）、成为报业公司的主要股东或控制人需事先获得批准（第11条）、任何外资资金都需要事先批准（第19条）等。</Typography>

    </Box>
  )
}

export default Article
