import './App.scss'
import { ButtonComponent } from './components/Buttons/ButtonComponent'
import { FooterComponent } from './components/Footer/FooterComponent'
import { HeaderComponent } from './components/Header/HeaderComponent'
import { MainComponent } from './components/Main/MainComponent'

function App() {

  const firstAlert = () => {
    alert("Første Alert");
  }
  const secondAlert = () => {
    alert("Anden Alert");
  }
  const thirdAlert = () => {
    alert("Tredje Alert!");
  }

  return (
    <>
      <HeaderComponent title="Dynamic Header" color="yellow"/>
      <MainComponent />
      <ButtonComponent action={firstAlert} size="small" theme="light" btnText="Tryk på mig!"/>
      <ButtonComponent action={secondAlert} size="medium" theme="dark" btnText="Nej, Tryk på mig!"/>
      <ButtonComponent action={thirdAlert} size="large" theme="dark" btnText="Nej mig!"/>
      <p>Møjn Verden</p>
      <FooterComponent />
    </> 
  )
}

export default App
