import Animated from "@/components/shared/Animated";
import Button from "@/components/shared/Button";
import { ButtonType } from "@/types/buttton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Animated>
        <Button type={ButtonType.SECONDARY}>Join The Waitlist</Button>
        <Button>Join The Waitlist</Button>
      </Animated>
    </main>
  );
}
