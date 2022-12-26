// * Modules
import Modal from '@mui/material/Modal'

import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setIsModalOpen} from "../../../../../../../store/reducers/Shared";

const ModalWindow = ({
    children,
    onClose
}) => {
  const { isModalOpen } = useSelector((state) => state.sharedReducer)
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(setIsModalOpen(false))
    onClose()
  }
  return (
    <Modal
      open={isModalOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
        {children}
    </Modal>
  )
}

export default ModalWindow
