import React from 'react';

export type props = {
   placeholder?: string;
   className?: string;
   inpStyle?: string;
};

const InputTwo: React.FC<props> = (props) => {
   return (
      <div className={props.className}>
         <input
            className={props.inpStyle}
            type="text"
            placeholder={props.placeholder}
         />
      </div>
   );
};

export default InputTwo;
