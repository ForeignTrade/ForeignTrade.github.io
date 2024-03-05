import React, { useState } from 'react'
import { Box, Card, CardContent, CardMedia, Typography, Grid } from '@mui/material'
import { Select, MenuItem, InputLabel, FormControl, TextField, Button, CardActionArea } from '@mui/material'
import { FormGroup, FormControlLabel, Checkbox, InputAdornment } from '@mui/material'
import Avatar from '../../pic/avatar.png'

function Translation () {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Software Engineer',
      intro: 'John is a skilled software engineer with over 10 years of experience.',
      image: Avatar,
    },
    {
      name: 'Jane Smith',
      role: 'Product Manager',
      intro: 'Jane is a talented product manager who specializes in user experience.',
      image: Avatar,
    },
    {
      name: 'Alice Johnson',
      role: 'Data Scientist',
      intro: 'Alice is a data scientist with expertise in machine learning and AI.',
      image: Avatar,
    },
    {
      name: 'Bob Williams',
      role: 'UX Designer',
      intro: 'Bob is a creative UX designer who focuses on creating intuitive interfaces.',
      image: Avatar,
    },
    {
      name: 'Bob Williams',
      role: 'UX Designer',
      intro: 'Bob is a creative UX designer who focuses on creating intuitive interfaces.',
      image: Avatar,
    }
  ]

  const [selectedCard, setSelectedCard] = useState(null) // 用于跟踪选中的卡片

  const cardOptions = [
    {
      title: "阅读级(Reading)",
      description: "常规文件的阅读理解",
      applicable: "适用于: 常规的阅读理解邮件、故事、新闻等",
      price: "￥17.6/百字词",
    },
    {
      title: "专业级(Expert)",
      description: "用于专业用途的文件",
      applicable: "适用于: 作品、商务、演讲应用、学术、网站等",
      price: "￥22.6/百字词",
    },
    {
      title: "大师级(Master)",
      description: "用于重要用途的文件",
      applicable: "适用于: 创作、艺术、出版、学术、发表等",
      price: "￥35.6/百字词",
    }
  ]

  const handleCardSelect = (index) => {
    setSelectedCard(index)
  }

  const [checkedState, setCheckedState] = useState({
    contrast: false,
    paraphrase: false,
    urgent: false,
    typesetting: false,
    paperSeal: false,
  })

  // 处理复选框变化的函数
  const handleCheckboxChange = (event) => {
    setCheckedState({ ...checkedState, [event.target.name]: event.target.checked })
  }

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        我们是北外xxx团队
      </Typography>
      <Typography variant="h5" sx={{ marginBottom: 4 }}>
        可提供xx语言，xx语言，xx语言等翻译服务
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={5} sx={{ overflowY: 'auto', maxHeight: 'calc(100vh - 200px)' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            {teamMembers.map((member, index) => (
              <Card key={index} sx={{ width: 400, height: 200 }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 2 }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 80, height: 80, marginRight: 2 }}
                    image={member.image}
                    alt={member.name}
                  />
                  <Box>
                    <Typography variant="h6" sx={{ textTransform: 'uppercase' }}>
                      {member.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {member.role}
                    </Typography>
                  </Box>
                </Box>
                <CardContent>
                  <Typography variant="body1">
                    {member.intro}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={5}>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel>输入语言</InputLabel>
              <Select label="输入语言">
                <MenuItem value="中文">中文</MenuItem>
                <MenuItem value="日语">日语</MenuItem>
                <MenuItem value="英文">英文</MenuItem>
                <MenuItem value="德语">德语</MenuItem>
              </Select>
            </FormControl>
            <Box sx={{ marginX: 2 }}>➡️</Box>
            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel>翻译语言</InputLabel>
              <Select label="翻译语言">
                <MenuItem value="中文">中文</MenuItem>
                <MenuItem value="日语">日语</MenuItem>
                <MenuItem value="英文">英文</MenuItem>
                <MenuItem value="德语">德语</MenuItem>
              </Select>
            </FormControl>
          </Box>
          {/* 在TextField和Button之间插入Box */}
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between', // 调整为space-between以更好地控制间距
            marginBottom: 2,
            '& > *': { // 应用于所有直接子元素（所有Card）
              width: '30%', // 设置宽度为30%
            },
          }}>
            {cardOptions.map((option, index) => (
              <Card sx={{
                border: selectedCard === index ? '2px solid blue' : '',
                mb: 2,
              }} key={index}>
                <CardActionArea onClick={() => handleCardSelect(index)}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {option.title}
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ fontWeight: 'bold' }}>
                      {option.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {option.applicable}
                    </Typography>
                    <Typography variant="body2" component="p" sx={{ fontWeight: 'bold' }}>
                      {option.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Box>

          <TextField
            label="输入文本"
            multiline
            rows={6}
            fullWidth
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />

          {/* 添加说明文字 */}
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            （以下为选填项）
          </Typography>

          {/* 添加多选项 */}
          <FormGroup row sx={{ marginBottom: 2 }}>
            <FormControlLabel
              control={<Checkbox checked={checkedState.contrast} onChange={handleCheckboxChange} name="contrast" />}
              label="对照"
            />
            <FormControlLabel
              control={<Checkbox checked={checkedState.paraphrase} onChange={handleCheckboxChange} name="paraphrase" />}
              label="意译"
            />
            <FormControlLabel
              control={<Checkbox checked={checkedState.urgent} onChange={handleCheckboxChange} name="urgent" />}
              label="加急"
            />
            <FormControlLabel
              control={<Checkbox checked={checkedState.typesetting} onChange={handleCheckboxChange} name="typesetting" />}
              label="排版"
            />
            <FormControlLabel
              control={<Checkbox checked={checkedState.paperSeal} onChange={handleCheckboxChange} name="paperSeal" />}
              label="纸质盖章"
            />
          </FormGroup>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            对译文的补充要求（选填）
          </Typography>
          <TextField
            fullWidth
            defaultValue="输入您的要求"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button variant="contained" size="small">
                    提交
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
    </Box >
  )
}

export default Translation
