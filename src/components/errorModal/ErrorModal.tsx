import { Button, Center, FormControl, Input, Modal } from "native-base";
import React, { useState } from "react";

export const ErroModal = ({ error }: { error: any }) => {
    const [showModal, setShowModal] = useState();
    return <Center>
        <Modal isOpen={showModal} onClose={() => setShowModal(error)}>
            <Modal.Content maxWidth="400px">
                <Modal.CloseButton />
                <Modal.Header>Contact Us</Modal.Header>
                <Modal.Body>
                   {error.message}
                </Modal.Body>
            </Modal.Content>
        </Modal>
    </Center>;
};