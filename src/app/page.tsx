import { Button } from "@/components/Button";
import { Move } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 w-screen h-screen justify-center items-center bg-white">
      <Button variant="default" size="xs">
        Default Button
      </Button>
      <Button variant="block">Block Button</Button>
      <Button variant="outline" size="sm">
        Outline Button
      </Button>
      <Button variant="destructive" size="lg">
        Destructive Button
      </Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="link">Link</Button>
      <Button variant="outline" size="icon">
        <Move />
      </Button>
    </main>
  );
}
