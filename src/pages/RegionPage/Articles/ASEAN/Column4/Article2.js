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
        热点聚焦：解读东盟的文化差异
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>中国与东盟文化差异主要体现在宗教上。</Typography>
      <Typography paragraph variant="h5">
        1、佛教国家（泰国、缅甸、老挝和柬埔寨）
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>泰国法律中有许多保障宗教的条文，故而不要对佛像不敬；由于僧侣必须严格遵守小乘 佛教教义，绝对禁止接触女性或被女性触摸，因此女性游客在公共场合应 避免碰触僧侣。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>緬甸人笃信佛教，参拜寺院宝塔必须脱鞋赤脚进人，表示对佛祖的尊敬；缅甸人视摸头为一件不礼貌的事，因此不要随便摸小孩子的头。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>老挝国民大多信奉小乘佛教，忌讳亵渎佛像，人们不能随意用手去 触摸佛像，更不能用身体的任何部分接触佛像，也不能对佛像随意评论。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>柬埔寨佛寺遍及全国，僧王和僧侣的社会地位很高。通常男子无论社会地 位高低，一生都要出家一次，否则为世俗鄙视，但可以随时还俗。</Typography>
      <Typography paragraph variant="h5">
        2、伊斯兰教国家（马来西亚、文莱和印度尼西亚）
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>马来西亚，在傍晚的伊斯兰教徒祈祷时间内不要打扰他们；用食指指人在马来西亚是一种 不礼貌的行为，最好以拇指代替；触摸小孩子的头也是不礼貌的行为。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>在文莱，参观清真寺或到马来人家做客时，进门前要脱鞋以示尊重和清洁，非穆斯林不能踩清真寺内祷告用的地毯。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>印尼的少数民族认为照相或闪光灯是摄人灵魂的器具，拍照前最好能先询问当地人。</Typography>
      <Typography paragraph variant="h5">
        3、崇尚儒家思想（越南）
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>越南人们在日常生活中注重礼节，见面习惯打招呼或互致问候。称谓与问候很讲究，要在名字前加兄弟姐妹等尊称。忌讳三 人合影、一根火柴或打火机连续给三个人点烟，认为不吉利；忌讳被人摸头顶；席地而坐时，忌别人把脚对着自己。</Typography>

    </Box>
  )
}

export default Article
