import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class MyModal extends React.Component {

  render() {
    const {modal,title,toggle,body,action} = this.props
    return (
      <div>
        {/*<Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>*/}
        <Modal isOpen={modal} toggle={toggle} >
          <ModalHeader toggle={toggle}>{title}</ModalHeader>
          <ModalBody>
            {body}
          </ModalBody>
          <ModalFooter>

            <Button color="secondary" onClick={action}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default MyModal;