"use client";

import Form from "../Form";
import { useState } from "react";
import { fields } from "./fields"; // Now inside ContactForm folder

const ContactForm = () => {
  const [message, setMessage] = useState<string | null>(null);

  const handleSuccess = (result: unknown, resetForm: () => void) => {
    setMessage("✅ Message sent successfully!");
    resetForm(); // Call the reset function passed from Form
  };

  const handleError = (error: string) => {
    setMessage(`❌ ${error}`);
    // reset(); // Reset the form fields
  };

  return (
    <div className="mx-auto">
      {message && (
        <p className={`mb-4 text-lg font-bold text-center ${message.includes("✅") ? "text-green-600" : "text-red-500"}`}>
          {message}
        </p>
      )}
      <Form
        title="Contact Us"
        action="/mail/send"
        formName="contact-form"
        fields={fields} // Now using fields from ContactForm folder
        buttonText="Send"
        linkText="Need Help?"
        linkHref="/help"
        onSubmitSuccess={handleSuccess}
        onSubmitError={handleError}
      />
    </div>
  );
};

export default ContactForm;
