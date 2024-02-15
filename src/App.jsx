

import ImcForm from './components/ImcForm';
import { useState } from 'react';
import './App.css'
import { Container } from './components/Container'
import { WelcomeForm } from './components/WelcomeForm'
import Resultado from './components/Resultado';



function App() {
  const [welc, setWelc] = useState(true);
  const[user,setUser] = useState('');
  const [imc, setImc] = useState(false);
  const [imcVal, setImcVal] = useState('');
  
  const imcCalc = (altura, peso) => {
    if(altura >0 && peso>0){setImcVal((peso/(altura/100)));
    console.log((peso/(altura/100)));
    setImc(false);}
    else{
      return
    }
  }
 

  const handleFatherWelc = (welc, nome) => {
     
    if(nome != ''){
      setWelc(welc);
      setImc(true);
      setUser(nome);
     

      }

  }

  const reset = () =>{
    setWelc(true);
    setImc(false);
    setImcVal('');
    
  }

  return (
   
 
  <>
    <Container>
    <>
    {welc && <WelcomeForm func = {handleFatherWelc} />  }
    {imc && <ImcForm  user={user} func ={imcCalc} />}
    {imcVal!='' && <Resultado reset={reset} imc={imcVal}/>}
    </>
      
   </Container>
   

     </>
    
  )
}

export default App
