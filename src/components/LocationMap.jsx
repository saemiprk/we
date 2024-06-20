import React, { useRef, useEffect } from 'react'

const LocationMap = () => {

    const mapRef = useRef(null);
    const lat = 37.5171174
    const lng = 126.8994966
    
    useEffect(() => {
      const { naver } = window;
      if (mapRef.current && naver) {
        const location = new naver.maps.LatLng(lat, lng);
        const map = new naver.maps.Map(mapRef.current, {
          center: location,
          zoom: 17, // 지도 확대 정도
        });
        new naver.maps.Marker({
          position: location,
          map,
        });
      }
    }, []);
    
    return (
       <div ref={mapRef} style={{ width: "100%", height: "300px" }}></div>
    );
}

export default LocationMap