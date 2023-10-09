import { React, useState } from 'react'
import { useForm } from '../hooks/useForm'
import { fetchPrompt } from '../helpers/fetchPrompt'
import { fetchLog } from '../helpers/fetchLog'
import '../styles/App.css'
import ipod from '../images/ipod.png'

export const App = () => {
    
    const initialForm = {
        search: ''
    }

    const { search, onInputChange } = useForm(initialForm)
    const [prompts, setPrompts] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()                
        if(search.length > 0) {
           fetchPrompt(search)
           .then(res => {          
              const { data, log } = res
               savePromt(data)     
               saveLog(log)
           })
        }        
    }
    
    const savePromt = ( data ) => {
        const newPrompt = {
            id: new Date().getTime(),
            prompt: search,
            response: data
        }
        const newArray = [newPrompt, ...prompts]
        setPrompts(newArray)
    }

    const saveLog = ( data ) => {
        const log = {
            Prompt: search,
            Log: data,
            Date: calcDate()
        }
        fetchLog(log)        
    }

    const calcDate = () => {
        const now = new Date()
        const year = now.getFullYear()
        const month = String(now.getMonth() + 1).padStart(2, '0')
        const day = String(now.getDate()).padStart(2, '0')
        const hours = String(now.getHours()).padStart(2, '0')
        const minutes = String(now.getMinutes()).padStart(2, '0')
        const seconds = String(now.getSeconds()).padStart(2, '0');

        const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
        return formattedDateTime
    }

    return(
        <>        
            <div className='container main-content d-flex flex-column min-vh-100'>                                
                <img src={ipod} alt='ipod' className='w-25 p-3 mx-auto zoom-on-hover'></img>
                <h1>iPod Time Capsule</h1>
                <p>Explore the device that changed Apple's history! Do you have questions about the iconic iPod?
                    Ask us and unravel its revolutionary impact on the world of technology and music!</p>
                <form onSubmit={ handleSubmit } className='search-form'>
                    <input 
                        type="text"  
                        className='form-control form-control-lg'
                        name='search'     
                        placeholder="Write something..."
                        value={ search }                          
                        onChange={ onInputChange }
                    />
                    <button type="submit"><ion-icon name="search-outline"></ion-icon></button>                
                </form>                           

                <ul className="list-group"> {
                        prompts.length > 0
                        ?                        
                        prompts.reverse().map(item => {
                            return(                        
                                <li key={item.id} className="list-group-item d-flex justify-content-between mb-3 p-2">
                                    <span>{item.prompt}</span>
                                    <span>{item.response}</span>
                                </li>                        
                            )
                        })
                        :
                        <li className="list-group-item d-flex justify-content-between">
                            <span>No search performed</span>
                        </li>   
                    }
                </ul>
            </div>                        
        </>        
    )
}