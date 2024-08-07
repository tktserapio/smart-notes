"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import AddEditNoteDialog from "@/components/AddEditNoteDialog";
import AIChatButton from "@/components/AIChatButton";

export default function NavBar() {

  const [showAddEditNoteDialog, setShowAddEditNoteDialog] = useState(false);

  return (
    <>
    <div className="p-4 shadow">
      <div className="m-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
        <Link href="/notes" className="flex items-center gap-1">
          <Image src={logo} alt="SmartNotes Logo" width={40} height={40} />
          <span className="font-bold">SmartNotes</span>
        </Link>
        <div className="flex items-center gap-2">
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: { avatarBox: { width: "2.5rem", height: "2.5rem" } },
            }}
          />
          <Button onClick={() => setShowAddEditNoteDialog(true)}>
            <Plus size={20} className="mr-2" />
            Add Note
          </Button>
          <AIChatButton />
        </div>
      </div>
    </div>
    <AddEditNoteDialog open={showAddEditNoteDialog} setOpen={setShowAddEditNoteDialog}/>
    </>
  );
}
