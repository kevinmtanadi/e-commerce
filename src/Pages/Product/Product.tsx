import { Grid, GridItem } from '@chakra-ui/react'

const item = {
  id: "asus_rog_strix_g15",
  name: "ASUS ROG Strix G15",
  images: [
    "../../assets/rog_strix.jpeg"
  ],
  description: `Asus ROG Strix G15 G513RC-R735B7G-O Eclipse Gray (RAM 16GB)
  
  Raise your game. Play with style.
  
  • CPU : AMD Ryzen™ 7 6800H Mobile Processor (8-core/16-thread, 20MB cache, up to 4.7 GHz max boost)
  • GPU : NVIDIA® GeForce RTX™ 3050 Laptop GPU 4GB GDDR6 ROG Boost: 1550MHz* at 95W (1500MHz Boost Clock+50MHz OC, 80W+15W Dynamic Boost)
  • Display : 15.6-inch FHD (1920 x 1080) 16:9; Brightness 250nits ; Refresh Rate 144Hz ; sRGB % 62.5% ; Adaptive-Sync
  • Memory : 16GB ((2x8GB DDR5-4800 SO-DIMM)
  • Storage : 512GB M.2 NVMe™ PCIe® 4.0 SSD
  • Keyboard : Backlit Chiclet Keyboard 4-Zone RGB
  
  • Software :
  - Operating System : Windows 11 Home
  - Office : Office Home and Student 2021
  
  • Audio :
  - Speaker : 2-speaker system
  - Audio Tech :
  AI noise-canceling technology
  Dolby Atmos
  Hi-Res certification
  
  • Wifi : Wi-Fi 6E(802.11ax)
  • Bluetooth : 5.2 (Dual band) 2*2
  (*BT version may change with OS upgrades.) -RangeBoost
  
  • I/O Port :
  1x RJ45 LAN port
  1x USB 3.2 Gen 2 Type-C
  1x USB 3.2 Gen 2 Type-C support DisplayPort™ / power delivery
  2x USB 3.2 Gen 1 Type-A//1x 3.5mm Combo Audio Jack
  
  • Battery : 56WHrs, 4S1P, 4-cell Li-ion
  
  Free ROG backpack
  
  • KSP
  - Pro level precision : 87% screen to body ratio
  - Power anywhere : 56WHrs battery on RTX3050 above and type-C charging
  - Inteligent cooling : Liquid metal, 4 fans outlets, 6 heats pipes, cooling zone, anti dust
  - Smaller, sleeker, stronger : 7% smaller than last gen
  - Metal chassis
  
  Garansi Resmi Asus Indonesia 2 Tahun (1st Year VIP Perfect Warranty)`,
  price: 20999000,
  rating: 4.9,
  category: "laptop",
}

import ProductDetail from './ProductDetail'


const Product = () => {
  return (
    <Grid>
      <GridItem>
        <ProductDetail product={item} />
      </GridItem>
    </Grid>
  )
}

export default Product

