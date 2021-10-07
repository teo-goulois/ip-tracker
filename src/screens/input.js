import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Input = (props) => {

    const [input, setInput] = useState(" ");
    const [connect, setConnect] = useState(false)

    const handleInput = event => {
        setInput(event.target.value)
    }

    useEffect(() => {
        if(connect === false) {
            axios.get(`https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_GEO_API_KEY}&ipAddress=${input}`)
            .then((res) => {
                const info = {
                    ip: res.data.ip, 
                    isp: res.data.isp, 
                    location: res.data.location.city + ' ' + res.data.location.country  , 
                    timezone: 'UTC' + res.data.location.timezone
                }
                
                props.setLocation([`${res.data.location.lat}`, `${res.data.location.lng}`
            ])
                props.setIp([`${info.ip}`, `${info.location}`,`${info.timezone}`, `${info.isp}` ])
            })
            setConnect(true)
        }
    }, [connect, input, props])


    const logValue = () => {
            axios.get(`https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_GEO_API_KEY}&ipAddress=${input}`)
            .then((res) => {
                const info = {
                    ip: res.data.ip, 
                    isp: res.data.isp, 
                    location: res.data.location.city + ' ' + res.data.location.country  , 
                    timezone:  res.data.location.timezone 
                }
                
                props.setLocation([`${res.data.location.lat}`, `${res.data.location.lng}`])
                props.setIp([`${info.ip}`, `${info.location}`,`${info.timezone}`, `${info.isp}` ])
            })
        
      };

    return(
        <div className="input-container">
            <input onChange={handleInput} placeholder="Search for any IP address or domain"></input>
            <button onClick={logValue} className='button'></button>
        </div>
    )

}

export default Input;