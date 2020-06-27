import React from 'react'
import { IUser } from '../interfaces'

type UserListProps = {
    user: IUser
}

export const UsersListCard: React.FC<UserListProps> = ({user}) => {
    const sendMail = (url: string) : void =>{
        window.open(`mailto:${url}`);
    }

    return(
        <ul>
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
            
        </ul>
    )
}