"use client";

import { logout } from '@/actions/auth';

export function LogoutButton() {
  return (
    <button className="btn" onClick={() => logout()}>
      Logout
    </button>
  );
}
