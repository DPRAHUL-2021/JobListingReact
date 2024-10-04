import Browse from "./Components/Browse"
import Category from "./Components/Category"
import Hero from "./Components/HeroSection"
import Navbar from "./Components/Navbar"
import ViewAllJobs from "./Components/ViewAllJobs"

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Category/>
      <Browse/>
      <ViewAllJobs/>
    </>
  )
}

export default App