"use client";

import React from "react";

import { WobbleCard } from "@saasfly/ui/wobble-card";

export function WobbleCardShow() {
  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 lg:grid-cols-3">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-blue-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">
            Stay Informed
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            aiNow is constantly evolving to provide the most accurate and
            context-aware insights, helping you navigate complex challenges
            effortlessly.
          </p>
        </div>
        <img
          src="https://cdn.sanity.io/images/tpb4obti/production/50c13f886c039225be4e7e99023b8f1e2b4161b9-1792x1024.png"
          width={500}
          height={500}
          alt="aiNow demo"
          className="absolute -bottom-10 -right-4 rounded-2xl object-contain grayscale filter lg:-right-[40%]"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80 text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">
          Our Vision
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          At aiNow, we aim to revolutionize how users interact with information
          by providing intelligent, context-aware assistance.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:max-w-lg md:text-xl lg:text-3xl">
            Simplify Complex Information with aiNow.
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            aiNow integrates knowledge from diverse sources to provide
            actionable insights, empowering you to make informed decisions
            faster.
          </p>
        </div>
        <img
          src="https://cdn.sanity.io/images/tpb4obti/production/50c13f886c039225be4e7e99023b8f1e2b4161b9-1792x1024.png"
          width={500}
          height={500}
          alt="aiNow demo"
          className="absolute -bottom-10 -right-10 rounded-2xl object-contain md:-right-[40%] lg:-right-[20%]"
        />
      </WobbleCard>
    </div>
  );
}
