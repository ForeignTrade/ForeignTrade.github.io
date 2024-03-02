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
import UKC1A1 from './Articles/UK/Column1/Article1'
import UKC2A1 from './Articles/UK/Column2/Article1'
import UKC2A2 from './Articles/UK/Column2/Article2'
import UKC2A3 from './Articles/UK/Column2/Article3'
import UKC2A4 from './Articles/UK/Column2/Article4'
import UKC2A5 from './Articles/UK/Column2/Article5'
import UKC3A1 from './Articles/UK/Column3/Article1'
import UKC3A2 from './Articles/UK/Column3/Article2'
import UKC3A3 from './Articles/UK/Column3/Article3'
import UKC3A4 from './Articles/UK/Column3/Article4'
import UKC3A5 from './Articles/UK/Column3/Article5'
import UKC4A1 from './Articles/UK/Column4/Article1'
import UKC4A2 from './Articles/UK/Column4/Article2'
import UKC4A3 from './Articles/UK/Column4/Article3'
import UKC4A4 from './Articles/UK/Column4/Article4'
import UKC4A5 from './Articles/UK/Column4/Article5'
import JAPANC1A1 from './Articles/Japan/Column1/Article1'
import JAPANC1A2 from './Articles/Japan/Column1/Article2'
import JAPANC1A3 from './Articles/Japan/Column1/Article3'
import JAPANC1A4 from './Articles/Japan/Column1/Article4'
import JAPANC1A5 from './Articles/Japan/Column1/Article5'
import JAPANC2A1 from './Articles/Japan/Column2/Article1'
import JAPANC2A2 from './Articles/Japan/Column2/Article2'
import JAPANC2A3 from './Articles/Japan/Column2/Article3'
import JAPANC2A4 from './Articles/Japan/Column2/Article4'
import JAPANC3A1 from './Articles/Japan/Column3/Article1'
import JAPANC3A2 from './Articles/Japan/Column3/Article2'
import JAPANC3A3 from './Articles/Japan/Column3/Article3'
import JAPANC3A4 from './Articles/Japan/Column3/Article4'
import JAPANC4A1 from './Articles/Japan/Column4/Article1'
import ASEANC1A1 from './Articles/ASEAN/Column1/Article1'
import ASEANC1A2 from './Articles/ASEAN/Column1/Article2'
import ASEANC1A3 from './Articles/ASEAN/Column1/Article3'
import ASEANC1A4 from './Articles/ASEAN/Column1/Article4'
import ASEANC2A1 from './Articles/ASEAN/Column2/Article1'
import ASEANC2A2 from './Articles/ASEAN/Column2/Article2'
import ASEANC2A3 from './Articles/ASEAN/Column2/Article3'
import ASEANC2A4 from './Articles/ASEAN/Column2/Article4'
import ASEANC2A5 from './Articles/ASEAN/Column2/Article5'
import ASEANC3A1 from './Articles/ASEAN/Column3/Article1'
import ASEANC3A2 from './Articles/ASEAN/Column3/Article2'
import ASEANC3A3 from './Articles/ASEAN/Column3/Article3'
import ASEANC3A4 from './Articles/ASEAN/Column3/Article4'
import ASEANC3A5 from './Articles/ASEAN/Column3/Article5'
import ASEANC4A1 from './Articles/ASEAN/Column4/Article1'
import ASEANC4A2 from './Articles/ASEAN/Column4/Article2'
import ASEANC4A3 from './Articles/ASEAN/Column4/Article3'
import ASEANC4A4 from './Articles/ASEAN/Column4/Article4'



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
      <Route path="/ukc1a1" element={<UKC1A1 />} />
      <Route path="/ukc2a1" element={<UKC2A1 />} />
      <Route path="/ukc2a2" element={<UKC2A2 />} />
      <Route path="/ukc2a3" element={<UKC2A3 />} />
      <Route path="/ukc2a4" element={<UKC2A4 />} />
      <Route path="/ukc2a5" element={<UKC2A5 />} />
      <Route path="/ukc3a1" element={<UKC3A1 />} />
      <Route path="/ukc3a2" element={<UKC3A2 />} />
      <Route path="/ukc3a3" element={<UKC3A3 />} />
      <Route path="/ukc3a4" element={<UKC3A4 />} />
      <Route path="/ukc3a5" element={<UKC3A5 />} />
      <Route path="/ukc4a1" element={<UKC4A1 />} />
      <Route path="/ukc4a2" element={<UKC4A2 />} />
      <Route path="/ukc4a3" element={<UKC4A3 />} />
      <Route path="/ukc4a4" element={<UKC4A4 />} />
      <Route path="/ukc4a5" element={<UKC4A5 />} />
      <Route path="/japanc1a1" element={<JAPANC1A1 />} />
      <Route path="/japanc1a2" element={<JAPANC1A2 />} />
      <Route path="/japanc1a3" element={<JAPANC1A3 />} />
      <Route path="/japanc1a4" element={<JAPANC1A4 />} />
      <Route path="/japanc1a5" element={<JAPANC1A5 />} />
      <Route path="/japanc2a1" element={<JAPANC2A1 />} />
      <Route path="/japanc2a2" element={<JAPANC2A2 />} />
      <Route path="/japanc2a3" element={<JAPANC2A3 />} />
      <Route path="/japanc2a4" element={<JAPANC2A4 />} />
      <Route path="/japanc3a1" element={<JAPANC3A1 />} />
      <Route path="/japanc3a2" element={<JAPANC3A2 />} />
      <Route path="/japanc3a3" element={<JAPANC3A3 />} />
      <Route path="/japanc3a4" element={<JAPANC3A4 />} />
      <Route path="/japanc4a1" element={<JAPANC4A1 />} />
      <Route path="/aseanc1a1" element={<ASEANC1A1 />} />
      <Route path="/aseanc1a2" element={<ASEANC1A2 />} />
      <Route path="/aseanc1a3" element={<ASEANC1A3 />} />
      <Route path="/aseanc1a4" element={<ASEANC1A4 />} />
      <Route path="/aseanc2a1" element={<ASEANC2A1 />} />
      <Route path="/aseanc2a2" element={<ASEANC2A2 />} />
      <Route path="/aseanc2a3" element={<ASEANC2A3 />} />
      <Route path="/aseanc2a4" element={<ASEANC2A4 />} />
      <Route path="/aseanc2a5" element={<ASEANC2A5 />} />
      <Route path="/aseanc3a1" element={<ASEANC3A1 />} />
      <Route path="/aseanc3a2" element={<ASEANC3A2 />} />
      <Route path="/aseanc3a3" element={<ASEANC3A3 />} />
      <Route path="/aseanc3a4" element={<ASEANC3A4 />} />
      <Route path="/aseanc3a5" element={<ASEANC3A5 />} />
      <Route path="/aseanc4a1" element={<ASEANC4A1 />} />
      <Route path="/aseanc4a2" element={<ASEANC4A2 />} />
      <Route path="/aseanc4a3" element={<ASEANC4A3 />} />
      <Route path="/aseanc4a4" element={<ASEANC4A4 />} />
    </Routes>
  )
}

export default RegionPage
