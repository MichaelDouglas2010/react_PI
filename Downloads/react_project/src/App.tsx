import './App.css'
import ButtonFatec from './components/button-fatec/ButtonFatec'
import InputFatec from './components/input-fatec'


function App() {
  

  return (
    <>
      <hr>
      <p>Insira os dados abaixo:</p>
      <InputFatec type='Nome'/><br/>
      <InputFatec type='E-mail'/><br/>
      <InputFatec type='Senha'/><br/>
      <ButtonFatec type='button' label='Fatec'/>
      </hr>
    </>
  )
}
// const App = () =>{}

export default App
