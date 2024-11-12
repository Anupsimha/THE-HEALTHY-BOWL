import './App.css'
import Navbar from './components/Navbar'
import GridImg from './components/GridImg'
import Highlights from './components/Highlights'
import RecipesOfTheDay from './components/RecipesOfTheDay'
import Footer from './components/footer'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <GridImg></GridImg>
      <Highlights></Highlights>
      <RecipesOfTheDay></RecipesOfTheDay>
      <Footer></Footer>
    </div>
  )
}

export default App
