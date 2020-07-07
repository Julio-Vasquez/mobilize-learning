import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';

export function TermsAndConditions({ open, accept }) {
  const [visible, setVisible] = useState(open);

  useEffect(() => {
    function CloseModal() {
      setVisible(false);
    }
  }, [visible]);
  return (
    <Modal
      title="Términos y Condiciones"
      centered={true}
      visible={open}
    >
      modal test
    </Modal>
  )
}

TermsAndConditions.propTypes = {
  open: PropTypes.bool.isRequired,
  accept: PropTypes.bool.isRequired
};
