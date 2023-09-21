import Animated from "@/components/shared/Animated";
import Button from "@/components/shared/Button";
import { ButtonType } from "@/types/buttton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Animated className="flex items-center gap-4">
        <Button
          // onClick={() => {}}
          type={ButtonType.SECONDARY}
          loading={true}
        >
          Join The Waitlist
        </Button>
        <Button
          // onClick={() => {}}
          disabled
        >
          Join The Waitlist
        </Button>
      </Animated>
    </main>
  );
}
