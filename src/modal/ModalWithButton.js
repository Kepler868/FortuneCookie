import React from "react";

const ModalWithButton = ({active, setActive, setLoader, children}) => {
    return (
<div className={active ? "modal active" : "modal"} >
        <div className={active? "modal__content active" : "modal__content"} >
            <div>
                {children}
            <button className="meta" onClick={() => {
                setActive(false)
                setLoader(false)
            }}>Okay!</button>
            </div>
        </div>
    </div>
    )
}
export default ModalWithButton;