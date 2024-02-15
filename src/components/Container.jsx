import classes from './Container.module.css'

export const Container = ({children})=> {
    return(
        <div className={classes.body}>
             {children}
        </div>
       
    )
}