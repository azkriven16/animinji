import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Hero() {
  return (
    <div>
      <h1 className="text-3xl text-center lg:text-start sm:text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
        minimalistic anime experience.
      </h1>
      <Image
        src="/movie.png"
        alt="Movie"
        className="mx-auto lg:mx-0 dark:invert dark:mix-blend-lighten contrast-150"
        height={200}
        width={200}
      />
      <Accordion type="single" collapsible className="w-full hidden lg:block">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
