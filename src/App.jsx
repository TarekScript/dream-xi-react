
import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import MainCompo from './Components/MainCompo/MainCompo'
import Newsletter from './Components/Newsletter/Newsletter'

function App() {

  return (
    <>
      <div className='sora-font'>
        {/* <Header></Header> */}
        <MainCompo></MainCompo>
        <Newsletter></Newsletter>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
