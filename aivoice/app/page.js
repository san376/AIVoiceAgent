import { Button } from "@/components/ui/button";
import { UserButton } from "@stackframe/stack";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h2>Hello</h2>
      <Button variant={'destructive'}>Subscribe</Button>
      <UserButton/>
    </div>
  );
}
