import { ReactNode, useState } from 'react';

interface PageWithHintWrapperProps {
  hint: ReactNode;
}

export const AccordionHint = ({ hint }: PageWithHintWrapperProps) => {
  const [hintIsOpen, setHintIsOpen] = useState(false);

  const toggleHintOpen = () => {
    setHintIsOpen((prev) => !prev);
  };

  return (
    <div className="">
      <div>
        <button onClick={toggleHintOpen}>
          {hintIsOpen ? 'Close' : 'Open'} hint
        </button>
      </div>
      {hintIsOpen && hint}
    </div>
  );
};
