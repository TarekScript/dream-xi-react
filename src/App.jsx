
import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Newsletter from './Components/Newsletter/Newsletter'
import Players from './Components/Players/Players'

function App() {

  return (
    <>
      <div className='sora-font'>
        <Header></Header>
        <Players></Players>
        <Newsletter></Newsletter>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
