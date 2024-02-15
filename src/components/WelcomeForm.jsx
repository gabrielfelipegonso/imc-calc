import { useState } from 'react'
import classes from './Form.module.css'

export const WelcomeForm = ({func}) => {
    const [user, setUser] = useState('');
    const[warning, setWarning] = useState(false);
    const handleName = (e)=> {
      let aux = e.target.value;
      const regex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
        if (regex.test(aux)|| aux =="") {
      setUser(e.target.value);
    }
        
        
    }
    const handleSubmit= (e)=> {
        e.preventDefault();
        func(false, user);
       if(user == ''){setWarning(true)}
       else{ setWarning(false);}
    }
  return (
    <>
        <form className={classes.formulario} onSubmit={handleSubmit}>
           <h1 className={classes.titulo} >Calcule seu IMC</h1>
            {user != '' && <h2 className={classes.welcomeMsg}>Seja bem vindo {user}</h2>}
               <input type="text" className={`${classes.inputText} ${warning? classes.warning : ''}`} name='name' placeholder='Seu nome' value={user || ''} onChange={handleName} maxlength="100" />
                
           <input className={classes.submit} type="submit" value="inicio"/>
        </form>
    </>
  )
}

