import { useState } from 'react'
import classes from './Form.module.css'

const ImcForm = ({user, func}) => {

var alturas = [];

for (let i = 0; i <= 270; i++) {
   // Converte o valor para duas casas decimais
  alturas.push(Number(i)); // Adiciona o número ao array após converter para número novamente
}
var pesos = [];

for (let i = 0; i <= 300; i++) {
   // Converte o valor para duas casas decimais
  pesos.push(Number(i)); // Adiciona o número ao array após converter para número novamente
}



const[alt, setAlt] = useState(0);
const[pes, setPes] = useState(0);
const [warningPes, setWarningPes] = useState(false);
const [warningAlt, setWarningAlt] = useState(false);
 const handleSubmit= (e)=> {
        e.preventDefault();
        console.log(alt);
        console.log(pes);
       if ((alt != 0) && (pes != 0)){
        func(alt, pes);
       
       }else{
        alt == 0? setWarningAlt(true): setWarningAlt(false);
        pes == 0? setWarningPes(true): setWarningPes(false);
    }
       
        
    }

  return (
<>

    <form className={classes.formulario} onSubmit={handleSubmit}>
        <h1 className={classes.tituloImc} >{user}, por favor informe altura e peso.</h1>
        <div className={classes.imcContainer}>
            <select name="altura" className={`${classes.select} ${warningAlt? classes.warning : ''}`}  value = {alt || ''} onChange={(e)=> setAlt(e.target.value)} id="">
                {
                    alturas.map( (alt, indice) => ( 
                        
                       <option value={alt} key={indice}>
                           {alt} Cm
                        </option>
                      
                     )

                     )
                }


            </select>
            <select name="peso" className={`${classes.select} ${warningPes? classes.warning : ''}`} value = {pes || ''} onChange={(e)=> setPes(e.target.value)} id="">
                {
                    pesos.map( (alt, indice) => ( 
                        
                       <option value={alt} key={indice}>
                           {alt} Kg
                        </option>
                      
                     )

                     )
                }


            </select>
           
        </div>
         <input type="submit" value="calcular" className={classes.submit}  />
    </form>
</>


  )
}

export default ImcForm