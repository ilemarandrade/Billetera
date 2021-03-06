import React, { useState} from 'react';
import TextField from '@material-ui/core/TextField';
import {styles, useStylesComplete} from "../../theme/theme.js";
import {ButtonDashboard} from "../../theme/theme.js";
import { useHistory } from "react-router-dom";
import {validateOnlyLetters, validateOnlyNumbers, validateEmail} from "../Validadores/validadorInput.js";
import {usuarios} from "../../localStorage.js";
import "../../App.css"

function Register(){
const classes =useStylesComplete();
const valueSignUp={"documento":"","nombres":"","email":"","celular":"","saldo":"1000"}
let history = useHistory();

const [errorDocumento, seterrorDocumento]=useState(false);  
const [errorNombre, seterrorNombre]=useState(false);
const [errorEmail, seterrorEmail]=useState(false);  
const [errorCelular, seterrorCelular]=useState(false); 
const [signUp,setSignUp]=useState(valueSignUp);
const [valueDocumento,setvalueDocumento]=useState("");
const [valueNombre,setvalueNombre]=useState("");
const [valueEmail,setvalueEmail]=useState("");
const [valueCelular,setvalueCelular]=useState("");


  
const handlerRegistrar=()=>{
  if(valueDocumento==="" || valueNombre===""  || valueEmail==="" || valueCelular===""){
    return
  }
  else if((!errorDocumento && !errorEmail) && (!errorCelular && !errorNombre)){
    alert("Ahora ya puede hacer login");
    localStorage.setItem("user",JSON.stringify([...usuarios,{...signUp}]))
    setvalueCelular("");
    setvalueEmail("");
    setvalueNombre("");
    setvalueDocumento("")
  }  
  else{
    alert("Completa los campos correctamente");
  }
}
  const handlerDocumento=(e)=>{
    seterrorDocumento(validateOnlyNumbers(e.target.value))
    setvalueDocumento(e.target.value);
    setSignUp({...signUp, documento:e.target.value});
  }
  const handlerNombre=(e)=>{
    seterrorNombre(validateOnlyLetters(e.target.value))
    setvalueNombre(e.target.value);
    setSignUp({...signUp, nombres:e.target.value});
  }
  const handlerEmail=(e)=>{
    seterrorEmail(validateEmail(e.target.value));
    setvalueEmail(e.target.value);
    setSignUp({...signUp, email:e.target.value});
  }
  const handlerCelular=(e)=>{
    seterrorCelular(validateOnlyNumbers(e.target.value))
    setvalueCelular(e.target.value);
    setSignUp({...signUp, celular:e.target.value});;
  }

    return(
        <div>
            <h2 style={{textAlign:"center",color:"white"}}>Sign up</h2>
            <div>
                <div style={styles.marginBottom}><TextField classes={{root: classes.root}} id="documento" error={errorDocumento} onChange={handlerDocumento} inputProps={{maxlength:10}} required="true"label="Documento" variant="filled" value={valueDocumento}/></div>
                <div style={styles.marginBottom}><TextField classes={{root: classes.root}} id="nombres" error={errorNombre} onChange={handlerNombre} inputProps={{maxlength:40}} required="true" label="Nombres" variant="filled" value={valueNombre}/></div>
                <div style={styles.marginBottom}><TextField classes={{root: classes.root}} id="email" error={errorEmail} required="true" onChange={handlerEmail} inputProps={{maxlength:45}} label="Email" variant="filled" value={valueEmail} /></div>
                <div style={styles.marginBottom}><TextField classes={{root: classes.root}} error={errorCelular} onChange={handlerCelular} inputProps={{maxlength:12}}required="true" label="Celular" variant="filled" value={valueCelular} /></div>
                <div className="perfectCentered"><ButtonDashboard onClick={handlerRegistrar} variant="contained" color="#1ab187">Registrar</ButtonDashboard></div>
            </div>
        </div>
    )

}


export default Register