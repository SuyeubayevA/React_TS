import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { IUser } from '../interfaces';
import { UsersListCard } from '../components/UsersListCard';

export const AboutPage: React.FC = () => {
    const [users, setUsers] = useState<IUser[]>([])

    const addHandler = (email: string, id: number, name: string, phone: string) => {
        const newUser: IUser = {
            email: email,
            id: id,
            name: name,
            phone: phone
        }
        setUsers(prev => [newUser, ...prev])
    }

    const showUsers = async() => {
        let res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
        let {data} = res;
        data.map((item: any)=>{
            return addHandler(
                    item.email,
                    item.id,
                    item.name,
                    item.phone
                )
        })
        return data
      }

    useEffect(()=>{
        showUsers()
    },[])

    if(users.length === 0){
        return <div className="body-container-maps"><p className="center"> Списка пользователей нет </p></div>
    }

    return(
        <div className="body-container-maps">
            <h1>О нас: </h1>
            <ul>
                {users.map(user=>{
                    return(
                        <UsersListCard user={user}/>
                    ) 
                })}
            </ul>
        </div>
    )
}