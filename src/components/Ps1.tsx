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
      <span className="text-[#310000] dark:text-red">{visitor}</span>
      <span>@</span>
      <span className="text-[#013101] dark:text-green">
        {config.ps1_hostname}
      </span>
      <span className=" text-[#342a86] dark:text-yellow"> :$~ </span>
    </div>
  );
};

export default Ps1;
