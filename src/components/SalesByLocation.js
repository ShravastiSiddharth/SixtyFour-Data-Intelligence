import React from 'react';
import { Card } from 'antd';
import styled from 'styled-components';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const StyledCard = styled(Card)`
  .ant-card-body {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 16px;
  }

  @media (max-width: 768px) {
    .ant-card-body {
      flex-direction: column;
      align-items: center;
    }
  }
`;

const MapWrapper = styled.div`
  width: 60%;
  height: 300px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 16px;
  }
`;

const TableWrapper = styled.div`
  width: 35%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const locations = [
  { name: 'United Kingdom', sales: 467.1, lat: 51.5074, lng: -0.1278 },
  { name: 'Netherlands', sales: 22.4, lat: 52.3676, lng: 4.9041 },
  { name: 'EIRE', sales: 18.3, lat: 53.3498, lng: -6.2603 },
  { name: 'France', sales: 14.6, lat: 48.8566, lng: 2.3522 },
  { name: 'Germany', sales: 14.4, lat: 52.52, lng: 13.405 },
  { name: 'Finland', sales: 5.4, lat: 60.1699, lng: 24.9384 },
  { name: 'Spain', sales: 5.4, lat: 40.4168, lng: -3.7038 },
  { name: 'Sweden', sales: 4.7, lat: 59.3293, lng: 18.0686 },
  { name: 'Denmark', sales: 4.0, lat: 55.6761, lng: 12.5683 },
  { name: 'Channel Islands', sales: 3.5, lat: 49.3723, lng: -2.3644 },
];

const SalesByLocation = () => {
  return (
    <StyledCard title="Sales by Location">
      <MapWrapper>
        <MapContainer center={[54.526, 15.2551]} zoom={4} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
          />
          {locations.map((location, index) => (
            <CircleMarker
              key={index}
              center={[location.lat, location.lng]}
              radius={Math.log(location.sales) * 3}
              fillOpacity={0.6}
              color="blue"
            >
              <Popup>
                {location.name}: ${location.sales.toFixed(1)}K
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </MapWrapper>
      <TableWrapper>
        <table>
          <thead>
            <tr>
              <th>Top locations</th>
              <th>Sales</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((location, index) => (
              <tr key={index}>
                <td>{index + 1}. {location.name}</td>
                <td>${location.sales.toFixed(1)}K</td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableWrapper>
    </StyledCard>
  );
};

export default SalesByLocation;

