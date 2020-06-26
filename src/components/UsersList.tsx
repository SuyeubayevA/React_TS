import React from 'react'
import { IUser } from '../interfaces'

type UserListProps = {
    users: IUser[]
}

export const UsersList: React.FC<UserListProps> = ({users}) => {
    if(users.length === 0){
        return <p className="center"> Списка пользователей нет </p>
    }

    const sendMail = (url: string) : void =>{
        window.open(`mailto:${url}`);
    }

    return(
        <ul>
            {users.map(user=>{
                return(
                    <div className="card" key={user.id} style={{marginTop: "50px"}}>
                        <div className="card-header">
                            Пользователь #{user.id}
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{user.name}</h5>
                            <p className="card-text">Телефонный номер: {user.phone}</p>
                            <p className="card-text">Email:  {user.email}</p>
                            <button onClick={()=>{sendMail(user.email)}} className="btn btn-primary">Отправить письмо</button>
                        </div>
                    </div>
                )
                
            })}
            
        </ul>
    )
}