import React, {Fragment} from 'react'
import './styles.css'

type MainAdvProps = {
    titles: string[]
}
export const MainPageAdv: React.FC<MainAdvProps> = ({titles}) => {
                
    return(
        <Fragment>
            {titles.map((title, i) => {
                if(i===0){
                    return <div className="main-adv" key={i}>
                                <div className='main-adv__title'>{title}</div>
                            </div>
                        }
                return <div className="main-adv main-adv-img"  key={i}>
                            <div className='main-adv__title'>{title}</div>
                        </div>
                    }
                )}
        </Fragment>
    )
}