import type { NextPage } from 'next'
// UI
import { Footer, Navbar } from '@/components'
import Home from "./Home/index"

const Index: NextPage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Footer/>
    </>
  )
}

export default Index
