"use client";
import { Button } from "../ui/button";
import { signOut, useSession } from "next-auth/react";

const DashboardComponent = () => {
  const session = useSession();
  return (
    <div>
      Welcome {session.data?.user?.name}
      <Button onClick={() => signOut()}>Sign out</Button>
    </div>
  );
};

export default DashboardComponent;
