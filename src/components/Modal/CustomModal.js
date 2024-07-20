import styled from 'styled-components';
import { Modal } from 'react-bootstrap';
const CustomModal = styled(Modal)`
  .modal-dialog {
    max-width: ${({ width }) => width || '500px'};
    
  }
`;
export default CustomModal;