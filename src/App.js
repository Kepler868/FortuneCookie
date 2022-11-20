import React, { useEffect, useState } from 'react'
import Header from './Header.js'
import Cookies from './Cookies.js'
import { ethers } from 'ethers'
import Helmet from 'react-helmet'

function App() {
  const [isLogined, setIsLogined] = useState(false)
  const [currentAccount, setCurrentAccount] = useState('')
  const { ethereum } = window
  const [contract, setContract] = useState(null)

  const handleLoginClick = async () => {
    if (!ethereum) {
      alert('Установите метамаск!')
    }
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      await provider.send('eth_requestAccounts', [])
      const signer = provider.getSigner()
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
      const contractCookie = await new ethers.Contract(
        '0x756D86474ec380e87EbBC417C0B37d18558E1d17',
        [
          {
            inputs: [],
            stateMutability: 'nonpayable',
            type: 'constructor',
          },
          {
            stateMutability: 'payable',
            type: 'fallback',
          },
          {
            inputs: [],
            name: 'buyCookie',
            outputs: [],
            stateMutability: 'payable',
            type: 'function',
          },
          {
            inputs: [],
            name: 'getBalance',
            outputs: [
              {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
              },
            ],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [],
            name: 'owner',
            outputs: [
              {
                internalType: 'address payable',
                name: '',
                type: 'address',
              },
            ],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [],
            name: 'withdrawMoney',
            outputs: [],
            stateMutability: 'payable',
            type: 'function',
          },
          {
            stateMutability: 'payable',
            type: 'receive',
          },
        ],
        signer,
      )
      setContract(contractCookie)
      setCurrentAccount(accounts[0])
      setIsLogined(true)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Helmet
        title="Fortune Crypto Cookie"
        meta={[{ name: 'Fortune Crypto Cookie', content: 'Fortune Crypto Cookie' }]}
        link={[
          {
            rel: "preconnect",
            href: "https://fonts.googleapis.com",
          },
          {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
          },
          {rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap"},
          {
            rel: "preconnect",
            href: "https://fonts.googleapis.com",
          },
          {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
          },
          {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap",
          }
        ]}
        
      />
      <Header
        isLogined={isLogined}
        handleLoginClick={handleLoginClick}
        currentAccount={currentAccount}
      />
      <Cookies isLogined={isLogined} contract={contract} />
    </>
  )
}

export default App
