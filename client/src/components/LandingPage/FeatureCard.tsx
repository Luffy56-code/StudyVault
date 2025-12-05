import React from 'react';
import type { featureCardProp } from '../../types/landingpage';

const FeatureCard:React.FC<featureCardProp> = ({icon,title,body}) => {
  return (
    <div className='flex flex-[100%] md:flex-[45%] lg:flex-[30%] justify-between shrink-0 flex-col gap-3 px-3 py-4 bg-card rounded-lg border-2 border-border'>
       <div className='flex flex-col gap-2'>
         {icon}
        <p className='text-base font-semibold'>{title}</p>
       </div>
        <p className='text-sm text-muted'>{body}</p>
    </div>
  );
}

export default FeatureCard;
