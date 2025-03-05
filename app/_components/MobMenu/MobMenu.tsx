"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import NavLinks from "../NavLinks/NavLinks";

const MobMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Menu className="w-8 h-8" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-left pb-4">Connectly</SheetTitle>
          {/* <SheetDescription></SheetDescription> */}
          <NavLinks closeSheet={() => setOpen(false)} />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobMenu;
