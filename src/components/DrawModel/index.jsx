import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ModalContent } from './ModelContent';

export const DrawModel = ({ data, setDrawResult, handleOptionStatus }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (data) setShowModal(true);
  }, [data]);

  return (
    <>
      <p style={{ display: 'none' }}>Result</p>
      {showModal &&
        createPortal(
          <ModalContent
            onClose={() => {
              handleOptionStatus?.();
              setDrawResult?.(null);
              setShowModal(false);
            }}
            data={data}
          />,
          document.body,
        )}
    </>
  );
};
