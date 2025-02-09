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

import CalculatorDMMGGM from "./CalculatorDMMGGM";
import CalculatorDMMH from "./CalculatorDMMH";
import CalculatorDMMMultiStage from "./CalculatorDMMMultiStage";

const CalculatorDMM = () => {
  return (
    <Card className="dark:bg-gray-600/70">
      <CardHeader>
        <CardTitle>Model DMM</CardTitle>
        <CardDescription>
          <div className="w-full">
            Model Diskonto Dividen (DDM) adalah metode kuantitatif untuk menilai
            harga saham perusahaan berdasarkan asumsi bahwa harga wajar saham
            saat ini sama dengan jumlah dari semua dividen perusahaan di masa
            depan yang didiskontokan kembali ke nilai saat ini.
            <br />
            Model ini sering digunakan oleh investor untuk menentukan nilai
            intrinsik suatu saham, dengan mempertimbangkan dividen yang
            diharapkan akan diterima di masa depan. DDM mengasumsikan bahwa
            dividen akan terus tumbuh pada tingkat yang konstan atau
            berubah-ubah tergantung pada model yang digunakan.
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-3 space-y-2">
        <Tabs defaultValue="gmm" className="w-full">
          <TabsList className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
            <TabsTrigger
              value="gmm"
              className="border border-violet-300 lg:border-none"
            >
              Gordon Growth Model (GGM)
            </TabsTrigger>
            <TabsTrigger
              value="h"
              className="border border-violet-300 lg:border-none"
            >
              H-Model
            </TabsTrigger>
            <TabsTrigger
              value="Multi-Stage"
              className="border border-violet-300 lg:border-none"
            >
              Multi-Stage DDM
            </TabsTrigger>
          </TabsList>
          <TabsContent value="gmm">
            <CalculatorDMMGGM />
          </TabsContent>
          <TabsContent value="h">
            <CalculatorDMMH />
          </TabsContent>
          <TabsContent value="Multi-Stage">
            <CalculatorDMMMultiStage />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default CalculatorDMM;
