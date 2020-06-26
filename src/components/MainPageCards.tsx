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
            <div className="row">
                {titles.map(title => <div className="main-card">
                                        <div  className='main-card__lenta'></div>
                                        <div className='main-card__line'></div>
                                        <div className='main-card__title'>{title}</div>
                                    </div>
            
                )}
            </div>
        )
    }
    console.log(cardRows)
    return(
        <Fragment>
            {cardRows}
            
        </Fragment>
    )
}