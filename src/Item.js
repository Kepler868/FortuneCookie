import React, { useState } from 'react'
import uuid from 'react-uuid'
import Modal from './modal/Modal.js'
import { ethers } from 'ethers'
import { predictions } from './pred/pred'
import ModalWithButton from './modal/ModalWithButton.js'


export default function Item(props) {
  const [modalActive, setModalActive] = useState(false)
  const [modalPrediction, setModalPrediction] = useState(false)
  const [modalError, setModalError] = useState(false)
  const [textError, setTextError] = useState("")
  const [prediction, setPrediction] = useState("")
  const [loader, setLoader] = useState(false)

  const { isLogined, name, desc, image, value, contract, type } = props


  const changeNetwork = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
          params: [{ chainId: ethers.utils.hexValue(5)}],
        });
        }
      catch (error) {
        console.error(error);
      }
    }
  }

  async function transferMoney(price) {
    try {
      const tx = await contract.buyCookie({
        value: ethers.utils.parseEther(price),
      })
      const receipt = await tx.wait()
      if (receipt.confirmations > 0) {
        setModalPrediction(true) 
        setPrediction(
            predictions[type][Math.floor(Math.random() * predictions[type].length)])          
        }
      
    } catch (error) {
      if (error.code == "INSUFFICIENT_FUNDS") {
        setModalError(true);
        setTextError("Not enough tokens!")
      } else if (error.code == "ACTION_REJECTED"){
        setModalError(true);
        setTextError("Why did you cancel the transaction? You are one step away from a fateful prediction, sign a deal!")
        console.log(error)
      }
      else if (error.code == "NETWORK_ERROR"){
        setModalError(true);
        setTextError("Wrong network selected. Please select a goerli testnet")
        console.log(error)
      }
      else {
        setModalError(true);
        setTextError("Something went wrong! Try again!")
        console.log(error)
      }
      
    }
    finally {
      setLoader(false)
    }
  }

  return (
    <div className="item">
      <div className="image">
        <img
          src={image}
          width="350"
          heigth="350"
          alt="cookie"
          className="cookie"
        />
      </div>
      <div>
        <p>{name}</p>
      </div>
      <div>
        <hr
          style={{
            color: '#000000',
            backgroundColor: '#000000',
            width: '200px',
            borderColor: '#000000',
          }}
        />
      </div>
      {desc.map((el) => (
        <p key={uuid()}>{el}</p>
      ))}
      <div className="price">
        {isLogined ? (
          <button
            disabled={loader}
            onClick={() => {
              setLoader(true)
              transferMoney(value)

            }}
            className="cookie-button"
          >
            {loader ? 'Waiting' : 'Eat me!'}
          </button>
        ) : (
          <div>
            <button
              onClick={() => setModalActive(true)}
              className="cookie-button-notLogined"
            >
              Eat me!
            </button>
            <Modal active={modalActive} setActive={setModalActive}>
              <p className="modal__words">
                Сonnect your Metamask to buy cookies!
              </p>
              <hr />
              <p className="modal__words">
                Сlick on the button in the upper right corner.
              </p>
              <button onClick={() => setModalActive(false)} className="meta">
                Okay!
              </button>
            </Modal>
          </div>
        )}
        <p>{value + ' ETH'}</p>
      </div>
      <ModalWithButton
        active={modalPrediction}
        setActive={setModalPrediction}
        setLoader={setLoader}
      >
        <p className="modal__words">{prediction}</p>
      </ModalWithButton>
      <Modal className="modal__error" active={modalError} setActive={setModalError} setLoader={setLoader} >
        <p className='modal__words'>{textError}</p>
        {textError !== "Wrong network selected. Please select a goerli testnet" ? (<button className="meta" onClick={() => {
                setModalError(false)
                setLoader(false)
            }}>So sad :(</button>) :
            ((<button className="meta" onClick={() => {
              changeNetwork()
              setModalError(false)
              setLoader(false)
          }}>Change network</button>))}
      </Modal>
    </div>
  )
}