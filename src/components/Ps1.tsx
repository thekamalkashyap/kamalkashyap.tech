import React, { useEffect, useState } from 'react';
import config from '../../config.json';

export const Ps1 = () => {
  let [visitor, setVisitor] = useState('');
  useEffect(() => {
    let name = window.sessionStorage.getItem('visitorName');
    if (['', 'undefined', 'null'].includes(name)) {
      name = config.ps1_username;
    }
    setVisitor(name);
  });
  return (
    <div>
      <span className="text-light-yellow dark:text-dark-yellow">{visitor}</span>
      <span className="text-light-gray dark:text-dark-gray">@</span>
      <span className="text-light-green dark:text-dark-green">
        {config.ps1_hostname}
      </span>
      <span className="text-light-gray dark:text-dark-gray">:$ ~ </span>
    </div>
  );
};

export default Ps1;
