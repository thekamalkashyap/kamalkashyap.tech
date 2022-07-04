import React, { useEffect, useState } from 'react';
import config from '../../config.json';

export const Ps1 = () => {
  let [visitor, setVisitor] = useState('');
  useEffect(() => {
    let name = window.sessionStorage.getItem('visitorName');
    setVisitor(name);
  }, [visitor]);
  return (
    <div>
      <span className="text-yellow-600">{visitor}</span>
      <span className="text-red-600">@</span>
      <span className="text-green-400">{config.ps1_hostname}</span>
      <span className="text-gray-400"> :$~ </span>
    </div>
  );
};

export default Ps1;
