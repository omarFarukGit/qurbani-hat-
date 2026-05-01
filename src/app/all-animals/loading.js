import { getAllAnimalsData } from "@/lib/data";
import { Skeleton } from "@heroui/react";
import React from "react";

const loading = async () => {
  const data = await getAllAnimalsData();
  const loadingData = data;

  return (
    <div>
      <div className="flex justify-between items-center shadow-panel  space-y-5 rounded-lg bg-transparent p-4">
        <div>
          <Skeleton className="h-5 rounded-lg" />
        </div>
        <div className="space-y-3">
          <Skeleton className="h-5 w-2/5 rounded-lg" />
        </div>
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {loadingData.map((d) => (
          <div key={d.id}>
            <div className="shadow-panel  space-y-5 rounded-lg bg-transparent p-4">
              <Skeleton className="h-75 rounded-lg" />
              <div className="space-y-3">
                <Skeleton className="h-3 w-3/5 rounded-lg" />
                <Skeleton className="h-3 w-4/5 rounded-lg" />
                <Skeleton className="h-3 w-2/5 rounded-lg" />
                <Skeleton className="h-3 w-2/5 rounded-lg" />
                <Skeleton className="h-5 w-2/5 rounded-lg" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default loading;
