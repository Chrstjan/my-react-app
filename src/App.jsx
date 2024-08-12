import './App.scss'
import { FooterComponent } from './components/Footer/FooterComponent'
import { HeaderComponent } from './components/Header/HeaderComponent'
import { MainComponent } from './components/Main/MainComponent'

function App() {
  return (
    <>
      <HeaderComponent />
      <MainComponent />
      <p>Møjn Verden</p>
      <FooterComponent />
    </> 
  )
}

export default App
