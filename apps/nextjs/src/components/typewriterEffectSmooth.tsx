"use client";

import { TextGenerateEffect } from "@saasfly/ui/typewriter-effect";

export function TypewriterEffectSmooths() {
  const words = [
    {
      text: "Navigate",
    },
    {
      text: "complex",
    },
    {
      text: "information",
    },
    {
      text: "landscapes",
    },
    {
      text: "with",
    },
    {
      text: "intelligent",
    },
    {
      text: "guidance",
    },
    {
      text: "using",
    },
    {
      text: "aiNow.",
      className: "text-blue-500",
    },
  ];
  return (
    <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
      <TextGenerateEffect words={words} />
    </p>
  );
}
