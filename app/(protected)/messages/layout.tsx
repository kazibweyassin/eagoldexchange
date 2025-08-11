import { Metadata } from "next";

import { constructMetadata } from "@/lib/utils";

export const metadata: Metadata = constructMetadata({
  title: "Messages - East African Gold Exchange",
  description: "Secure messaging system for gold traders, buyers, and sellers.",
});

interface MessagesLayoutProps {
  children: React.ReactNode;
}

export default function MessagesLayout({ children }: MessagesLayoutProps) {
  return (
    <div className="flex w-full flex-col space-y-4 lg:space-y-6">
      {children}
    </div>
  );
}
