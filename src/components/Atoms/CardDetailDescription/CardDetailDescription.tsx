import React, { ReactElement } from 'react';

interface props {
   goodDescription: string | number | ReactElement | undefined;
}
const CardDetailDescription: React.FC<props> = ({ goodDescription }) => {
   return <div>{goodDescription}</div>;
};

export default CardDetailDescription;
