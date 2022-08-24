import React, { useEffect } from 'react'

export const ComponentDidmount = () => {

    useEffect(() => {
     console.log('Comportamiento antes de que el componente sea agregado al DOM')
        this.timerID = setInterval ( () => this.tick(), 1000 );

    }, [])
    
    return (
        <div>
        </div>
        )
}

// export default ComponentDidmount
//-27:21