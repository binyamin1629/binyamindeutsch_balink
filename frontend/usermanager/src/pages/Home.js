import React, { useEffect } from 'react'
import UsersList from '../components/users/UsersList';
import UseFetch from '../hooks/UseFetch';
const Home = () => {
 // const [usersfromapi, setUsers] = useState([])
  const {loading , users} =UseFetch();

  useEffect(() => {
    
    
  }, [])
 
  if (loading) {
    return <section>
      <p>Loading...</p>
    </section>
  }
    
 
    return (
        <>
          <h1 style={{color:'#35586C'}}>Home </h1>  
          <UsersList users={users}/>
        </>
    )
}

export default Home;
