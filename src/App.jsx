
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Content from './Components/Content/Content'
import Search from './Components/Search/Search'
import Info from './Components/Info/Info'
import Lounge from './Components/Lounge/Lounge'
import Travelers from './Components/Travelers/Travelers'

const App = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Content/>
        <Search/>
        <Info/>
        <Lounge/>
        <Footer/>
        <Travelers/>
    </div>
  )
}

export default App