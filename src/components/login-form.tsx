"use client";

import { useActionState } from 'react';

import { login } from '@/actions/auth';

import { FormError } from './form-error';
import { SubmitButton } from './submit-button';

export function LoginForm() {
  const [state, loginAction] = useActionState(login, undefined);

  return (
    <form
      action={loginAction}
      className="flex w-full md:w-1/2 lg:w-1/3 flex-col gap-2"
    >
      <div className="flex flex-col gap-2">
        <input
          className="border px-4 py-2 rounded-md border-zinc-400"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
        />
        {state?.errors.email && <FormError error={state.errors.email} />}
      </div>
      <div className="flex flex-col gap-2">
        <input
          className="border px-4 py-2 rounded-md border-zinc-400"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        />
        {state?.errors.password && <FormError error={state.errors.password} />}
      </div>
      <SubmitButton />
    </form>
  );
}
