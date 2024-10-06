// import { Input } from "@/components/ui/input";
"use client";
import { ModeToggle } from "./toggleTheme";
import ProjectComboBox from "./projectComboBox";
import MobileClientSheet from "./mobileClientSheet";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { Button } from "./ui/button";

const DesktopSidebar = () => {
  const { data } = useSession();
  return (
    <header className="flex h-14 items-center gap-4 border-b px-4 lg:h-[60px] lg:px-6">
      <MobileClientSheet />
      <ProjectComboBox />
      <ModeToggle />
      {data?.user?.image ? (
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Image
              src={data.user.image}
              alt="User Image"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
        </div>
      ) : (
        <Button onClick={() => signIn("google")}>Sign in</Button>
      )}
    </header>
  );
};

export default DesktopSidebar;
