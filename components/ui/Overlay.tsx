"use client";

import { useMenu } from "./ContextProvider";

export default function Overlay() {
  const [isOpen, setIsOpen] = useMenu();

  return isOpen ? (
    <div
      className="fixed overflow-hidden h-screen z-40 inset-0 bg-black/20"
      onClick={() => setIsOpen(false)}
    />
  ) : null;
}
