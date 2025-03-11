"use server";

import { redirect } from 'next/navigation';

import { createSession, deleteSession } from '@/lib/session';
import { loginSchema } from '@/schemas/auth';

const testUser = {
  id: "1",
  email: "johndoe@example.com",
  password: "12345678",
};

export async function login(prevState: any, formData: FormData) {
  const result = loginSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const { email, password } = result.data;

  if (email !== testUser.email || password !== testUser.password) {
    return {
      errors: {
        email: ["Invalid email or password"],
        password: ["Invalid email or password"],
      },
    };
  }

  await createSession(testUser.id);

  redirect("/dashboard");
}

export async function logout() {
  await deleteSession();

  redirect("/login");
}
