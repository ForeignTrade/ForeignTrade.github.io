import React from 'react'
import { Button, Box, Grid, Card, CardMedia, CardContent } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Tec from '../../pic/tech.png' // 确保这个路径是正确的

function PaidAssessment () {
  const navigate = useNavigate()

  const handleNavigate = (path) => {
    navigate(path)
  }

  const cardsInfo = [
    { title: '生成企业评估报告', navigatePath: '/report' },
    { title: '同行一对一', navigatePath: '/team' },
    { title: '专家大师课', navigatePath: '/team/master' },
  ]

  return (
    <Box sx={{ flexGrow: 1, padding: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '90vh' }}>
      <Grid container spacing={2} justifyContent="center">
        {cardsInfo.map((card, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', borderRadius: 2, boxShadow: 3 }}>
              <CardMedia
                component="img"
                image={Tec}
                alt={card.title}
                sx={{ width: 'calc(100% - 40px)', borderRadius: '30px', objectFit: 'contain', margin: 'auto', paddingX: '20px', paddingTop: '20px' }} // Adjust image size and centering
              />
              <CardContent sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button
                  variant="contained"
                  sx={{ width: 200, height: 50 }}
                  onClick={() => handleNavigate(card.navigatePath)}
                >
                  {card.title}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default PaidAssessment
