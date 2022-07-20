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
      <span className="text-[#3c4f8f] dark:text-red">{visitor}</span>
      <span>@</span>
      <span className="text-[#238a23] dark:text-green">
        {config.ps1_hostname}
      </span>
      <span className=" text-[#96130e] dark:text-yellow"> :$~ </span>
    </div>
  );
};

export default Ps1;
