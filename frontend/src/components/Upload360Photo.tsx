import React, { useState } from 'react';
import axios from 'axios';
import RoomWireframe from './RoomWireframe';

const Upload360Photo: React.FC = () => {
  const [measurements, setMeasurements] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;
    setLoading(true);
    const formData = new FormData();
    formData.append('photo', e.target.files[0]);
    const res = await axios.post('/api/room/upload', formData);
    setMeasurements(res.data);
    setLoading(false);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {loading && <p>Processing...</p>}
      {measurements && <RoomWireframe {...measurements} />}
    </div>
  );
};

export default Upload360Photo;

