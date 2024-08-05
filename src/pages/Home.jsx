import About from "@/components/custom/About"
import Blogs from "@/components/custom/Blogs"
import Brands from "@/components/custom/Brands"
import Concerns from "@/components/custom/Concerns"
import Featured from "@/components/custom/Featured"
import Hero from "@/components/custom/Hero"
import NewArrivals from "@/components/custom/NewArrivals"
import Newsletter from "@/components/custom/Newsletter"

function Home() {
  return (
    <div className="pt-[80px]">
        <Hero/>
        <Featured/>
        <Concerns/>
        <NewArrivals/>
        <About/>
        <Brands/>
        <Blogs/>
        <Newsletter/>
    </div>
  )
}

export default Home