import React from 'react'

const Message = ({messageRandom}) => {
console.log(messageRandom)

    return (
    <p className='App__message'>{messageRandom.phrase}</p>
    )
}

export default Message