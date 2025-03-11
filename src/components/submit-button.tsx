"use client";

import { useFormStatus } from 'react-dom';

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button className="btn" type="submit" disabled={pending}>
      Login
    </button>
  );
}
