import { LogoutButton } from '@/components/logout-button';

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <h1 className="text-2xl font-bold">Dashboard page</h1>
      <LogoutButton />
    </div>
  );
}
