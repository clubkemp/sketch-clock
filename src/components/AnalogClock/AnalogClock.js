import React, { useEffect, useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import styled from 'styled-components';

const ClockWrapper = styled.div`
  font-size: 4rem;
  text-align: center;
  color: Black;
  position:absolute;
`;

function AnalogClock() {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(
      () => setValue(new Date()),
      1000
    );

    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <ClockWrapper>
      <Clock renderNumbers= {true} value={value} size={800}/>
    </ClockWrapper>
  )
}
export default AnalogClock