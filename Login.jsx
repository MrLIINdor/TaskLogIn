
import './Login.css'
import { React, useState } from 'react';

export default function Login() {

  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  


  function handleClick() {
    alert(`Email: ${form.email} 
    Password: ${form.password}`)
  }

  const handleChagne = (e) =>{
    const {name, value} = e.target
    setForm({
      ...form,
      [name]:value,
    })
  }


  return (
    <div className='conteiner'>
      <header>
        <div className='block-logo'>
          <img src="https://thumb.tildacdn.com/tild3566-3038-4262-b335-393764646637/-/format/webp/Frame-2.png" alt="Kampus" />
          <p className='block-logo__page'>Умный помощник для развития бизнес-команд</p>
        </div>
      </header>


      <main className='block-form'>

        <div className='block-title'>
            <h1>Авторизация</h1>
            <p className='block-title__page'>С возращением, пройдите авторизацию чтобы начать обучение</p>
        </div>

        <div className='block-login'>
          <input className='block-login__input' onChange={handleChagne} type="text" name='email' placeholder='Адрес'/>

          <div className='block-password'>
            <input className='block-login__input' onChange={handleChagne} type="password" maxLength={20} name='password' placeholder='Пароль'/>
            <a  href="https://kampus.team/" className='block-password__recovery'>Забыли пароль?</a>
          </div>

          <button className='block-login__button' onClick={handleClick}>Войти</button>
        </div>

      </main>

    </div>
  )
}
