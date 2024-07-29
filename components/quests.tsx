import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { QUESTS } from "@/lib/constants";
import { Progress } from "@/components/ui/progress";

type Props = {
  points: number;
};
export const Quests = ({ points }: Props) => {
  return (
    <div className="border-2 rounded-xl p-4 space-y-4">
      <div className="flex items-center justify-between space-y-2">
        <h3 className="font-bold text-lg">Quests</h3>
        <Link href="/quests">
          <Button size="sm" variant="primaryOutline">
            View all
          </Button>
        </Link>
      </div>
      <ul className="w-full space-y-4">
        {QUESTS.filter((quest) => (points / quest.value) * 100 < 100)
          .slice(0, 1)
          .map((quest) => {
            const progress = (points / quest.value) * 100;

            return (
              <div
                key={quest.title}
                className="flex items-center w-full pb-4 gap-x-3 "
              >
                <Image
                  src="/assets/points.svg"
                  alt="points"
                  width={40}
                  height={40}
                />

                <div className="flex flex-col gap-y-2 w-full">
                  <p className="text-neutral-700 text-sm font-bold">
                    {quest.title}
                  </p>
                  <Progress value={progress} className="h-2" />
                </div>
              </div>
            );
          })}
      </ul>
    </div>
  );
};
