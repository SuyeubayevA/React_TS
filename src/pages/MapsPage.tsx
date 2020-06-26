import React, {Fragment} from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

export const MapsPage: React.FC  = () => {
     const mapData = {
         center:[43.250908, 76.947244],
         zoom: 13
     }

    return(
        <Fragment>
            <h1>О нас: </h1>
            <YMaps>
                <div>
                    Карта
                    <Map defaultState={mapData} width='700px' height='700px'>
                            <Placemark 
                                geometry={[43.264165, 76.929910 ]} 
                                properties={{
                                    balloonContent: 'Mega Center Almaty',
                                    hintContent : 'Mega Center Almaty'
                                }}
                            />
                            <Placemark 
                                geometry={[43.230582, 76.945995]} 
                                options= {{preset :'islands#circleDotIcon'} }
                            />
                    </Map>
                </div>
            </YMaps>
        </Fragment>
    )
}