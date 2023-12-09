import React from 'react';
import Image from 'next/image';

function Skill({ title, icon, details }: Skill) {
  return (
    <div>
      <h3>{title}</h3>
      <Image src={icon} alt={title} width={100} height={100} />
      <ul>
        {details.map(detail => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skill;
