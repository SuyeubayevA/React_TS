import React from 'react';
import {Link} from 'react-router-dom';

export const Dropdown: React.FC= () => {
    const items: string[] = [
            'На свой счет внутри банка', 
            'На чужой счет внутри банка', 
            'В другой банк в национальной валюте',
            'Международные платежи SWIFT'
        ]
    return(
        <>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {items.map(item=>{
                    return <Link className="dropdown-item" to="/">{item}</Link>
                })}
            </div> 
            
        </>
    )
}