import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const CalculatorDCF = () => {
  return (
    <Card className="dark:bg-gray-600/70">
      <CardHeader>
        <CardTitle>Model DCF</CardTitle>
        <CardDescription>
          <div className="w-full">
            Discounted cash flow (DCF) adalah metode penilaian yang
            memperkirakan nilai investasi menggunakan arus kas masa depan yang
            diharapkan. Analis menggunakan DCF untuk menentukan nilai investasi
            hari ini, berdasarkan proyeksi berapa banyak uang yang akan
            dihasilkan investasi tersebut di masa depan. Discounted cash flow
            dapat membantu investor yang sedang mempertimbangkan apakah akan
            mengakuisisi perusahaan atau membeli sekuritas.
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-3 space-y-2">
        <Tabs defaultValue="constant" className="w-full">
          <TabsList className="grid w-full grid-cols-1 gap-2 md:grid-cols-2">
            <TabsTrigger
              value="constant"
              className="border border-violet-300 lg:border-none"
            >
              Constant Growth
            </TabsTrigger>
            <TabsTrigger
              value="changing"
              className="border border-violet-300 lg:border-none"
            >
              Changing Growth
            </TabsTrigger>
          </TabsList>
          <TabsContent value="constant"></TabsContent>
          <TabsContent value="changing"></TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default CalculatorDCF;
