import { useState } from "react";
import Input from "../../form/Input";
import styles from "../../form/Form.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../../context/UserContext";

function Register() {
  const [user, setUser] = useState({});
  const {register}=useContext(Context)

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    register(user)
  }

  return (
    <section className={styles.form_container}>
      <h1>Registrar</h1>
      <form onSubmit={handleSubmit}>
        <Input
          text="Nome"
          type="text"
          name="name"
          placeholder="Digite seu nome"
          handleOnchange={handleChange}
        />
        <Input
          text="Telefone"
          type="text"
          name="phone"
          placeholder="Digite seu número de telefone"
          handleOnchange={handleChange}
        />
        <Input
          text="E-mail"
          type="email"
          name="email"
          placeholder="Digite seu E-mail"
          handleOnchange={handleChange}
        />
        <Input
          text="Senha"
          type="password"
          name="password"
          placeholder="Digite sua senha"
          handleOnchange={handleChange}
        />
        <Input
          text="Confirmação deSenha"
          type="password"
          name="password"
          placeholder="Confirme sua senha"
          handleOnchange={handleChange}
        />

        <input type="submit" value="Cadastrar" />
      </form>
      <p>
        Já tem conta ? <Link to="/login">Clique aqui.</Link>
      </p>
    </section>
  );
}

export default Register;
