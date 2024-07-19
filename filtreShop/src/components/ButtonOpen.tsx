import React, { useState } from 'react';

interface AccordionProps {
    title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
        {title}
      <button style={{ backgroundColor: 'white', color:'black'}}  onClick={toggleOpen}>-</button>
      {isOpen && children}
    </div>
  );
};

export default Accordion;