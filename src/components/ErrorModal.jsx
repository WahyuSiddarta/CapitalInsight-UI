import React from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
} from "@material-tailwind/react";

const ErrorModal = ({ show, handleClose, errorMessage, size }) => {
  return (
    <Dialog
      open={show}
      handler={handleClose}
      size={size || "sm"}
      className="bg-white dark:bg-gray-900"
    >
      <DialogHeader className="text-red-600 border-b border-gray-300 dark:border-gray-700">
        Something Went Wrong
      </DialogHeader>

      <DialogBody className="text-base text-black dark:text-white">
        <p className="text-sm">{errorMessage}</p>
      </DialogBody>

      <DialogFooter className="pt-0">
        <Button
          size="sm"
          color="red"
          onClick={handleClose}
          className="bg-red-600 hover:bg-red-700"
        >
          Close
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default ErrorModal;
