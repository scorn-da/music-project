import React from 'react';

interface TrackProgressProps {
  current: number;
  end: number;
  onChange: (e) => void;
}

const TrackProgress: React.FC<TrackProgressProps> = ({ current, end, onChange}) => {
  return (
    <div style={{display: 'flex'}}>
      <input
        type='range'
        min={current}
        max={end}
        value={current}
        onChange={onChange}
      />
      <p>{current} / {end}</p>
    </div>
  );
};

export default TrackProgress;