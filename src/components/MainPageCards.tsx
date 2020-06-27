import React, {Fragment} from 'react'
import './styles.css'

type MainCardProps = {
    titles: string[],
    row: number
}
export const MainPageCards: React.FC<MainCardProps> = ({titles, row}) => {
    const cardRows = []
    for(let i=0; i< row; i++){ 
        cardRows.push(
            <div className="card-row" key={i}>
                {titles.map((title, i) => (
                    <div className="main-card" key={i}>
                        <div  className='main-card__lenta'></div>
                        <div className='main-card__line'></div>
                        <div className='main-card__title'>{title}</div>
                    </div>)
                )}
            </div>
        )
    }
    return(
        <Fragment>
            {cardRows}  
        </Fragment>
    )
}