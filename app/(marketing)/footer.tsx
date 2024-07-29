import { Button } from "@/components/ui/button";
import { getCourses } from "@/db/queries";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const Footer = async () => {
  const coursesData = getCourses();
  const [courses] = await Promise.all([coursesData]);

  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200">
      <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between">
        <div className="flex flex-col py-2 text-xs">
          <p className="font-semibold uppercase">Supported languages</p>
          <div className="mt-2 flex flex-wrap">
            {courses.map((course, i) => (
              <div
                key={course.id}
                className={cn(
                  "flex justify-center items-center text-muted-foreground p-2 px-3",
                  courses.length - 1 !== i && "border-r-2"
                )}
              >
                <Image
                  src={course.imageSrc}
                  alt="image"
                  width={25}
                  height={15}
                  className="mr-2 rounded-md object-contain"
                />
                {course.title}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center py-1 min-w-[140px]">
          <small>
            Lesson icons by{" "}
            <a
              href="https://www.freepik.com/"
              rel="noreferrer"
              target="_blank"
              className="text-blue-500"
            >
              Freepik
            </a>
          </small>
        </div>
      </div>
    </footer>
  );
};
