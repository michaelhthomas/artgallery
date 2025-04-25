import { clsx, type ClassValue } from "clsx";
import { UseFormReturn } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { ApiError, ValidationErrorResponse } from "~/api/requests";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type ApiValidationError = ApiError & { body: ValidationErrorResponse };

export function isApiValidationError(
  error: unknown,
): error is ApiValidationError {
  return (
    error instanceof ApiError &&
    typeof error.body === "object" &&
    error.body != null &&
    "errors" in error.body &&
    typeof error.body.errors === "object"
  );
}

export function setFormErrors(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any>,
  error: ValidationErrorResponse,
) {
  for (const [key, value] of Object.entries(error.errors)) {
    form.setError(key, { message: value.join(", ") });
  }
}
