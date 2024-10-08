import { Button } from "@/components/ui/button";
import { Cover } from "@/components/ui/cover";
import { FlipWords } from "@/components/ui/flip-words";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { OrbitingIAS } from "./OrbitingCirclesIA";

const words = [
  "Descubre",
  "Investiga",
  "Aprende",
  "Conecta",
  "Analiza",
  "Domina",
];

export default function Hero() {
  return (
    <header className="relative overflow-hidden" id="hero">
      <div className="relative container items-center lg:py-20 xl:py-32 pb-0 pt-14 flex flex-col lg:flex-row px-4 sm:px-6  overflow-x-hidden gap-5 lg:gap-0">
        <div className="lg:w-[60%] flex flex-col gap-8">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl sm:text-6xl font-semibold text-center lg:text-left ">
            <span className="inline bg-gradient-to-r from-[#f5c996] to-[#fc9d4c] text-transparent bg-clip-text">
              <FlipWords words={words} />
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800">
              tu
              <br />
            </span>
            <Cover className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Potencial Científico
            </Cover>
          </h1>

          <p className="text-base lg:text-lg xl:text-xl text-muted-foreground self-center lg:self-start w-[80%] text-center lg:text-left ">
            Impulsa tu investigación con IA avanzada: encuentra, compara y
            aprende en segundos.
          </p>

          <Button
            className="w-full sm:w-1/3 self-center lg:self-start lg:text-base bg-primary-black hover:bg-[#0D1522] text-white sm:h-12"
            variant="expandIcon"
            Icon={ArrowRightIcon}
            iconPlacement="right"
            iconSize="20"
            asChild
          >
            <Link href="/cursos">Empieza a Aprender</Link>
          </Button>
        </div>

        <div className="lg:w-[40%] flex justify-center  items-center">
          <OrbitingIAS />
        </div>
      </div>
    </header>
  );
}
