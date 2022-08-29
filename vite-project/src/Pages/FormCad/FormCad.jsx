import React from 'react'
import FormName from '../../components/FormName/FormName';
import { useState, useEffect } from 'react';

const FormCad = () => {
  
    const [input, setInput] = useState({
        nome: "",
        sobrenome: "",
        email: "",
        tel: "",
        cep: "",
        endereco1: "",
        endereco2: "",
        date: "",
        cpf: "",
        renda: "",
      });
      const [infos, setInfos] = useState({});
      const [lista, setLista] = useState([])
    
      const handleChange = (e) => {
        const value = e.target.value;
        setInput({ ...input, [e.target.name]: value });
      };
    
      const handleClick = (e) => {
        e.preventDefault();
        setInfos({...infos, input});
      };
      
      console.log(infos)
      console.log(lista)
    
    
      return (
        <>
          <FormName
            input={input}
            handleChange={handleChange}
            handleClick={handleClick}
          />          
        </>
      );
  
}

export default FormCad