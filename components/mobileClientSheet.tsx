"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import ClientSelectRoute from "./clientSelectRoute";
import { Button } from "./ui/button";
import { routes } from "./globalData";
const MobileClientSheet = () => {
  return (
    <Sheet>
      <div className="hidden">
        <SheetTitle></SheetTitle>
        <SheetHeader></SheetHeader>
        <SheetDescription></SheetDescription>
      </div>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <nav className="grid gap-2 text-lg font-medium">
          {routes.map(({ name, href, icon }, index) => (
            <ClientSelectRoute
              key={index}
              name={name}
              href={href}
              icon={icon}
            />
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileClientSheet;
