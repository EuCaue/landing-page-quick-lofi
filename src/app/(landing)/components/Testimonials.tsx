import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Hero from "@/components/hero";
import Link from "next/link";
import { StarIcon } from "lucide-react";

type TestimonialProps = {
  name: string;
  msg: string;
};

function Testimonial({ name, msg }: TestimonialProps) {
  const url = `https://extensions.gnome.org/accounts/profile/${name}`;
  return (
    <Card className="w-[98vw] flex items-center justify-center lg:h-80">
      <CardHeader className="size-full flex items-end justify-center p-3">
        <CardTitle className="font-bold text-xl w-full text-center lg:h-27.25">
          {msg}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-center self-center flex-1 size-full">
        <Avatar className="size-15">
          <AvatarImage
            src="/user.jpg"
            className="w-full h-full"
            alt={`@${name}`}
          />
          <AvatarFallback title={name}>
            {name[0]}
            {name[name.length - 1]}
          </AvatarFallback>
        </Avatar>
      </CardContent>
      <CardFooter className="flex items-center justify-center flex-col gap-3 self-center">
        <Link
          href={url}
          target="_blank"
          className="text-lg font-semibold text-accent underline decoration-2 decoration underline-offset-5"
        >
          {name}
        </Link>
        <Link
          className="flex items-center justify-center gap-2"
          target="_blank"
          href="https://extensions.gnome.org/extension/6904/quick-lofi/"
        >
          {Array.from({ length: 5 }).map((_, i) => {
            return <StarIcon className="fill-yellow-400" key={i} />;
          })}
        </Link>
      </CardFooter>
    </Card>
  );
}
export default function Testimonials() {
  const testimonialsData: Array<TestimonialProps> = [
    {
      name: "himozzza",
      msg: "This is an amazing extension!",
    },
    {
      name: "CaptainSensible",
      msg: "This works great on 46. This can also be used to add ANY stream so I  have also added Radio Paradise channels thanks to the add radio feature. Great work!",
    },
    {
      name: "M4TiX",
      msg: "I like it. Dope beats. Keep it alive, please",
    },
  ];
  return (
    <Hero id="testimonials" className="lg:flex-row items-center gap-3 lg:p-3">
      {testimonialsData.map(({ name, msg }) => {
        return <Testimonial key={name} name={name} msg={msg} />;
      })}
    </Hero>
  );
}
