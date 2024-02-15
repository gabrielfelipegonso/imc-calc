import classes from './Form.module.css'

const Resultado = ({imc, reset}) => {
  return (
    <div className={classes.resultadoContainer}>
        <h1 className={classes.titulo}>
            Seu IMC é {imc.toFixed(2)}.
        </h1>
        <button className={classes.button} onClick={reset}>Calcular novamente</button>
        
    </div>
  )
}

export default Resultado