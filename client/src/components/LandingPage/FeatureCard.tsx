import React from 'react';
import type { featureCardProp } from '../../types/landingpage';

const FeatureCard:React.FC<featureCardProp> = ({icon,title,body}) => {
  return (
    <div className='flex flex-[30%] shrink-0 flex-col gap-3 px-3 py-4 bg-card'>
        {icon}
        <p>{title}</p>
        <p>{body}</p>
    </div>
  );
}

export default FeatureCard;
