import React, { useEffect } from 'react';
import UsersList from '../components/users/UsersList';
import UseFetch from '../hooks/UseFetch';
import { Title } from '../components/styledComponents/TitleStyle';
import { Loading } from '../components/styledComponents/Loader';
const Home = () => {

  const { loading, users } = UseFetch();

  useEffect(() => {


  }, [])

  if (loading) {
    return <Loading></Loading>
  }


  return (
    <>
      <Title color="#35586C">Home</Title>
      <UsersList users={users} />
    </>
  )
}

export default Home;
