"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { TextField, Box, Typography, FormControlLabel, Checkbox } from "@mui/material";
import Button from "../ui/Button";
// import Link from "next/link";
const API_URL =
    process.env.NODE_ENV === "development"
        ? process.env.NEXT_PUBLIC_DEV_API_URL // your local dev server
        : process.env.NEXT_PUBLIC_API_URL; // your production API


interface FormField {
    name: string;
    label: string;
    type: string;
    placeholder?: string;
    required?: boolean;
}

interface FormProps {
    title: string;
    action: string;
    formName: string;
    fields: FormField[];
    buttonText: string;
    linkText: string;
    linkHref: string;
    onSubmitSuccess?: (result: unknown, resetForm: () => void) => void;
    onSubmitError?: (error: string) => void;
}

const Form: React.FC<FormProps> = ({
    title,
    action,
    formName,
    fields,
    buttonText,
    onSubmitSuccess,
    onSubmitError,
}) => {
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data: Record<string, unknown>) => {
        setLoading(true);
        try {
            const response = await fetch(`${API_URL}${action}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            if (!response.ok) throw new Error(result.message || "Submission failed");

            // Pass both result AND reset function to success callback
            onSubmitSuccess?.(result, reset);
        } catch (error) {
            const errorMessage = (error as Error).message;
            onSubmitError?.(errorMessage); // Call error callback if provided
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div
            className=""
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <Typography variant="h5" fontWeight="bold" mb={5}>{title}</Typography>

            <form name={formName} onSubmit={handleSubmit(onSubmit)} noValidate>
                <Box display="flex" flexDirection="column" gap={3}>
                    {fields.map((field, index) => (
                        <TextField
                            key={index}
                            fullWidth
                            label={field.label}
                            type={field.type}
                            variant="outlined"
                            {...register(field.name, { required: field.required })}
                            error={!!errors[field.name]}
                            helperText={errors[field.name] ? `${field.label} is required` : ""}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "12px", // Rounded corners
                                    backgroundColor: "transparent", // Input background color
                                    "& fieldset": { borderColor: "white" }, // Default border color
                                    "&:hover fieldset": { borderColor: "white" }, // Hover effect
                                    "&.Mui-focused fieldset": { borderColor: "white" }, // Focus border color
                                },
                                "& .MuiInputLabel-root": {
                                    color: "white", // Default label color
                                },
                                "& .MuiInputLabel-root.Mui-focused": {
                                    color: "white", // Label color when focused
                                },
                                "& .MuiInputBase-input": {
                                    color: "white", // Text input color
                                },
                                // Remove autofill styling
                                "& input:-webkit-autofill": {
                                    backgroundColor: "transparent !important",
                                    WebkitBoxShadow: "0 0 0px 1000px transparent inset !important",
                                    WebkitTextFillColor: "white !important", // Ensures autofill text stays white
                                    transition: "background-color 5000s ease-in-out 0s", // Forces transparency
                                },
                            }}
                        />
                    ))}
                    {/* Custom checkboxes start here */}
                    <FormControlLabel
                        control={
                            <Checkbox
                                {...register("smsConsent", { required: "This consent is required." })}
                                sx={{
                                    color: errors.smsConsent ? "#ef4444" : "white",
                                    '&.Mui-checked': {
                                        color: errors.smsConsent ? "#ef4444" : "white",
                                    },
                                }}
                            />
                        }
                        label={
                            <Typography variant="body2" color={errors.smsConsent ? "error" : "inherit"}>
                                I Consent to Receive SMS Notifications and Alerts from Humanoid AI. Message frequency varies. Message & data rates may apply. Text HELP to +1 (315) 872 2714 for assistance. You can reply STOP or OUT to unsubscribe at any time.
                            </Typography>
                        }
                    />
                    {errors.smsConsent && (
                        <Typography color="error" variant="caption" sx={{ mt: -2, ml: 1 }}>
                            {errors.smsConsent.message as string}
                        </Typography>
                    )}
                    <FormControlLabel
                        control={
                            <Checkbox
                                {...register("marketingConsent", { required: "This consent is required." })}
                                sx={{
                                    color: errors.marketingConsent ? "#ef4444" : "white",
                                    '&.Mui-checked': {
                                        color: errors.marketingConsent ? "#ef4444" : "white",
                                    },
                                }}
                            />
                        }
                        label={
                            <Typography variant="body2" color={errors.marketingConsent ? "error" : "inherit"}>
                                By checking this box I agree to receive occasional marketing and promotional messages from Humanoid AI at the phone number provided above. This agreement isn&apos;t set a condition of any purchase. Message & data rates may apply. Text HELP to +1 (315) 872 2714 for assistance. You can reply STOP or OUT to unsubscribe at any time.
                            </Typography>
                        }
                    />
                    {errors.marketingConsent && (
                        <Typography color="error" variant="caption" sx={{ mt: -2, ml: 1 }}>
                            {errors.marketingConsent.message as string}
                        </Typography>
                    )}
                    {/* Button below checkboxes, left aligned */}
                    <Box sx={{ width: { xs: '100%', sm: 'auto' }, mt: 2, display: 'flex', justifyContent: 'flex-start' }}>
                        <Button
                            type="submit"
                            text={buttonText}
                            loading={loading}
                        />
                    </Box>
                </Box>
            </form>

            {/* <Typography mt={3} textAlign="center">
                <Link href={linkHref} className="text-blue-600 hover:underline">{linkText}</Link>
            </Typography> */}
        </motion.div>
    );
};

export default Form;
