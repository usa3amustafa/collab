import React from 'react'
import bitski from '../assets/img/bitski.png'
import metmaskW from '../assets/img/metamaskW.png'
import coinBaseWallet from '../assets/img/coinBaseWallet.svg'
import nbaTopShop from '../assets/img/nbaTopShop.png'
import tezos from '../assets/img/tezos.png'
import walletConnect from '../assets/img/walletConnect.svg'

const Wallets = () => {
  return (
    <div>
      <section className='walletsSection'>
        <div className='walletsMain'>
          <h2 className='title'>Connect to a wallet</h2>
          <div className='wallets'>
            <div className='wallet'>
              <h2 className='walletTitle'>MetaMask</h2>
              <img src={metmaskW} alt='' className='walletImg' />
            </div>
            <div className='wallet'>
              <h2 className='wallet-title'>Ledger With MetaMask</h2>
              <img src={metmaskW} alt='' className='walletImg' />
            </div>
            <div className='wallet'>
              <h2 className='wallet-title'>WalletConnect</h2>
              <img src={walletConnect} alt='' className='walletImg' />
            </div>
            <div className='wallet'>
              <h2 className='wallet-title'>NBA Top Shop</h2>
              <img src={nbaTopShop} alt='' className='walletImg' />
            </div>
            <div className='wallet'>
              <h2 className='wallet-title'>Tezos</h2>
              <img src={tezos} alt='' className='walletImg' />
            </div>
            <div className='wallet'>
              <h2 className='wallet-title'>Coinbase Wallet</h2>
              <img src={coinBaseWallet} alt='' className='walletImg' />
            </div>
            <div className='wallet'>
              <h2 className='wallet-title'>Bitski</h2>
              <img src={bitski} alt='' className='walletImg' />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Wallets
