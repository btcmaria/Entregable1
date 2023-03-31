import React from 'react'
import getMessageArray from '../utils/getRandomArray'
import phrases from '../utils/phrases.json'

const Button = ({setmessageRandom, setnumberImg}) => {

    const changePhrase = () =>{
        setmessageRandom(getMessageArray(phrases))
        setnumberImg(getMessageArray([1, 2, 3, 4]))
    }

    return (
    <button className='App__btn' onClick={changePhrase}>Probar mi suerte</button>
    )
}

export default Button