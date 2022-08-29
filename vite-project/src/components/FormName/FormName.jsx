import React from 'react'
import Button from '../Button/Button'

const FormName = ({ input, handleChange, handleClick }) => {
  return (
    <form>
      <label>Nome</label>
      <input
        type="text"
        value={input.nome}
        name="nome"
        onChange={(e) => handleChange(e, "nome")}
      />
      <label>Sobrenome</label>
      <input
        type="text"
        value={input.sobrenome}
        name="sobrenome"
        onChange={(e) => handleChange(e, "sobrenome")}
      />
      <label>Email</label>
      <input
        type="email"
        value={input.email}
        name="email"
        onChange={(e) => handleChange(e, "email")}
      />
      <label>Telefone</label>
      <input
        type="tel"
        value={input.tel}
        name="tel"
        onChange={(e) => handleChange(e, "tel")}
      />
      <Button handleClick={handleClick} content="Próximo" />
    </form>
  )
}

export default FormName