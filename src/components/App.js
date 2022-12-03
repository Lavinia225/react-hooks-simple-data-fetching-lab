// create your App component here
import React, {useState, useEffect} from 'react'

function App(){
    const [loading, setLoading] = useState(true)
    const [image, setImage] = useState(null)

    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data =>{
            setImage(data.message)
            setLoading(false)
        })
    }, [])

    if(loading){
        return <p>Loading Image...</p>
    }

    return (
        <img src={image} alt='A Random Dog'></img>
    )
}

export default App