import React  from 'react'
import { Container as MapDiv, NaverMap, Marker, useNavermaps } from 'react-naver-maps'

const LocationMap = () => {

    const navermaps = useNavermaps();
    
    return (
        <MapDiv
            style={{
            width: '100%',
            height: '400px',
          }}
        >
            <NaverMap
                defaultCenter={new navermaps.LatLng(37.517436, 126.8997884)}
                defaultZoom={15}
            >
                <Marker position={new navermaps.LatLng(37.517436, 126.8997884)} />
            </NaverMap>
        </MapDiv>
    );
}

export default LocationMap