import React, {useEffect, useState} from 'react';
import Loading from "../Components/Loading/Loading";
import MyButton from "../Components/Button/MyButton";
import CardItem from "../Components/Card/CardItem";
import PostService from "../API/PostService";


const Users = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    async function fetchPost() {
      const users = await PostService.getAll()
      setUsers(users)
      setIsLoading(false)
    }

    fetchPost()
  }, []);


  const sortCity = () => {
    let res = [...users].sort((cityA, cityB) => cityA.address.city.localeCompare(cityB.address.city))
    setUsers(res)

  }
  const userSort = () => {
    let res = [...users].sort((userA, userB) => userA.name.localeCompare(userB.name))
    setUsers(res)
  }


  function dateNbDays(a0, a, p) {

  }

  console.log(dateNbDays())


  return (
    <div className='container'>
      {isLoading ? <Loading/> :
        <div className='wrap'>
          <div className='button'>
            <h3>Сортировка</h3>
            <MyButton
              onClick={sortCity}
              name='name'
              value='name'
            >По городу</MyButton>
            <MyButton
              onClick={userSort}
              name='city'
              value='city'
            >По компании</MyButton>
          </div>
          <div>
            <h1>Список пользователей</h1>
            <CardItem users={users}/>
          </div>
        </div>
      }
    </div>

  );
};

export default Users;
