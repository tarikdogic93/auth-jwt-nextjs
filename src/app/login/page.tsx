import { LoginForm } from '@/components/login-form';

export default function LoginPage() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <h1 className="text-2xl font-bold">Login page</h1>
      <LoginForm />
    </div>
  );
}
