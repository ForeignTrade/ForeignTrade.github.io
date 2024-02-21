import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Map from './Map'
import RegionDetail from './RegionDetail'
import USAC1A1 from './Articles/USA/Column1/Article1'
import USAC1A2 from './Articles/USA/Column1/Article2'
import USAC1A3 from './Articles/USA/Column1/Article3'
import USAC1A4 from './Articles/USA/Column1/Article4'
import USAC2A1 from './Articles/USA/Column2/Article1'
import USAC2A2 from './Articles/USA/Column2/Article2'
import USAC2A3 from './Articles/USA/Column2/Article3'
import USAC2A4 from './Articles/USA/Column2/Article4'
import USAC2A5 from './Articles/USA/Column2/Article5'
import USAC3A1 from './Articles/USA/Column3/Article1'
import USAC3A2 from './Articles/USA/Column3/Article2'
import USAC3A3 from './Articles/USA/Column3/Article3'
import USAC3A4 from './Articles/USA/Column3/Article4'

function RegionPage () {
  return (
    <Routes>
      <Route index element={<Map />} />
      <Route path="detail" element={<RegionDetail />} />
      <Route path="/usac1a1" element={<USAC1A1 />} />
      <Route path="/usac1a2" element={<USAC1A2 />} />
      <Route path="/usac1a3" element={<USAC1A3 />} />
      <Route path="/usac1a4" element={<USAC1A4 />} />
      <Route path="/usac2a1" element={<USAC2A1 />} />
      <Route path="/usac2a2" element={<USAC2A2 />} />
      <Route path="/usac2a3" element={<USAC2A3 />} />
      <Route path="/usac2a4" element={<USAC2A4 />} />
      <Route path="/usac2a5" element={<USAC2A5 />} />
      <Route path="/usac3a1" element={<USAC3A1 />} />
      <Route path="/usac3a2" element={<USAC3A2 />} />
      <Route path="/usac3a3" element={<USAC3A3 />} />
      <Route path="/usac3a4" element={<USAC3A4 />} />
    </Routes>
  )
}

export default RegionPage
