import { Card, CardDescription } from "@/components/ui/card";
import { siteConfig } from "@/constants/site";
import { IconType } from "react-icons";

export default function BuiltWith() {
  return (
    <div className="space-y-5">
      <h1 className="text-base sm:text-md md:text-lg font-medium mt-10">
        Built with
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {siteConfig.builtWith.map((item) => (
          <TechCard {...item} />
        ))}
      </div>
    </div>
  );
}

interface TechCardProps {
  icon: IconType;
  text: string;
}

function TechCard({ icon: Icon, text }: TechCardProps) {
  return (
    <Card className="w-full p-5 text-center flex flex-col items-center gap-2 hover:bg-accent cursor-pointer">
      <Icon size={35} />
      <CardDescription>{text}</CardDescription>
    </Card>
  );
}
