import React, {Fragment} from 'react'
import './styles.css'

type MainAdvProps = {
    titles: string[]
}
export const MainPageAdv: React.FC<MainAdvProps> = ({titles}) => {
                
    return(
        <Fragment>
            {titles.map(title => <div className="main-adv">
                                        <div className='main-adv__title'>{title}</div>
                                    </div>
                )}
        </Fragment>
    )
}