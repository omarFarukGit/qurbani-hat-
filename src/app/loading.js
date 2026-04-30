import { Skeleton } from "@heroui/react";
import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="shadow-panel w-[250px] space-y-5 rounded-lg bg-transparent p-4">
        <Skeleton className="h-32 rounded-lg" />
        <div className="space-y-3">
          <Skeleton className="h-3 w-3/5 rounded-lg" />
          <Skeleton className="h-3 w-4/5 rounded-lg" />
          <Skeleton className="h-3 w-2/5 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
Loading;
