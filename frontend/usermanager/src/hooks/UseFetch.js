import { useState, useEffect } from 'react';



const Usefetch=()=>{
    const [loading, setLoading] = useState(true)
    const [users, setUsers] = useState([])
 
    useEffect(() => {
        
       


        setLoading(true)
        const BASE_URL = '/users'
        fetch(BASE_URL, { headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }})
          .then(res => {
            return res.json()
          }).then(data => {
            const usersArr=[]
            for(const key in data){
              const user={         
                ...data[key]
              }
            
              
              usersArr.push(user)
            }
           
            setLoading(false)
            setUsers(usersArr)
      
          })
    
      }, [])
      

     return {loading,users } 
}

export default Usefetch;