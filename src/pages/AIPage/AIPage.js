import React from 'react'
import ChoicePage from './ChoicePage'
import AI1 from './AI1'
import AI2 from './AI2'
import AI3 from './AI3'
import AI4 from './AI4'
import AI5 from './AI5'
import AI6 from './AI6'
import AI7 from './AI7'
import AI8 from './AI8'
import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'

function AIPage () {
  return (
    <Box>
      <Routes>
        <Route index element={<ChoicePage />} />
        <Route path="ai1" element={<AI1 />} />
        <Route path="ai2" element={<AI2 />} />
        <Route path="ai3" element={<AI3 />} />
        <Route path="ai4" element={<AI4 />} />
        <Route path="ai5" element={<AI5 />} />
        <Route path="ai6" element={<AI6 />} />
        <Route path="ai7" element={<AI7 />} />
        <Route path="ai8" element={<AI8 />} />
      </Routes>
    </Box>

  )
}

export default AIPage
