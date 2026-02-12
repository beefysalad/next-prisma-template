import React from "react";

interface FormErrorMessageProps {
  message: string | undefined;
}
const FormErrorMessage = ({ message }: FormErrorMessageProps) => {
  return <div className='text-sm text-destructive'>{message || ""}</div>;
};

export default FormErrorMessage;
