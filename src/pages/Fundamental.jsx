import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { InlineMath, BlockMath } from "react-katex";
import Tooltip from "../components/Tooltip";

function Fundamental() {
  return (
    <div className="grid grid-cols-12 gap-6 text-2xl">
      <div className="flex flex-col col-span-12 gap-2 p-4 bg-white rounded-sm dark:bg-gray-800">
        <p className="text-sm">
          Fundamental analysis adalah sebuah analysis saham, dengan pendekatan
          bisnis. Pengguna analisis fundamental percaya bahwa sebuah saham
          memiliki nilai <span className="italic font-bold">"wajar"</span>.
          Dengan mengetahui nilai wajar tersebut, maka pengguna analisis
          fundamental dapat mengetahui apakah saham tersebut sedang overvalued
          atau undervalued. Hal ini membuat pengguna merasa lebih yakin dalam
          membeli saham, karena mereka tahu bahwa saham tersebut memiliki nilai
          wajar yang sesuai dengan harga yang mereka bayarkan. Jika saham mereka
          overvalued, maka mereka akan menjual saham tersebut. Jika saham mereka
          undervalued, maka mereka akan membeli / tidak menjual saham tersebut.
        </p>
        <p className="text-sm">
          Inti dari analisis fundamental adalah menghitung harga wajar saat ini
          dan / atau masa depan sebuah saham. Dikarenakan dalam mata uang, uang
          saat ini {">"} lebih besar dari uang masa depan, maka penilaian saham
          di masa depan harus dikurangi dengan discount. Discount ini dinamakan
          discount rate, model dari perhitungan nilai masa depan pada umumnya
          adalah nilai masa depan dikurangi dengan discounted rate
        </p>
      </div>
      <div className="col-span-12 p-4 bg-white rounded-sm dark:bg-gray-800">
        <h5 className="mb-2 font-bold">Calculator Saham</h5>
        <h6 className="mb-1 text-lg">Model</h6>
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="think.id" className="">
              Think.id
            </TabsTrigger>
            <TabsTrigger value="password">
              Discounted Cash Flow (DCF)
            </TabsTrigger>
            <TabsTrigger value="password2">
              Dividend Discount Model (DDM)
            </TabsTrigger>
          </TabsList>
          <TabsContent value="think.id">
            <Card className="dark:bg-gray-600/70">
              <CardHeader>
                <CardTitle>Think.id</CardTitle>
                <CardDescription>
                  Metode perhitungan dari think.id adalah :
                </CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 gap-3 space-y-2 ">
                <pre
                  id="code"
                  className="col-span-1 p-4 overflow-x-auto text-gray-300 whitespace-pre bg-gray-800 rounded-md code"
                >
                  <code>
                    <BlockMath>
                      {"FV = FV_c + \\left( FV_f * r_d \\right)"}
                    </BlockMath>
                    {/* Descriptions for each symbol */}
                    <div className="mt-2 text-sm">
                      <p>
                        <InlineMath>{"FV"}</InlineMath> = Harga Wajar (Fair
                        Value)
                      </p>
                      <p>
                        <InlineMath>{"FV_c"}</InlineMath> = Harga Wajar Saat Ini
                        (Current Fair Value)
                      </p>
                      <p>
                        <InlineMath>{"FV_f"}</InlineMath> = Harga Wajar Masa
                        Depan (Future Fair Value)
                      </p>
                      <p>
                        <InlineMath>{"r_d"}</InlineMath> = Discounted Rate
                      </p>
                    </div>
                  </code>
                </pre>
                <div className="grid grid-cols-1 gap-4 space-y-1 xl:grid-cols-2">
                  <div className="col-span-1 space-y-1">
                    <p className="mb-4 text-lg font-bold">Future Value :</p>
                    <div className="mb-3 space-y-1">
                      <Label htmlFor="name" className="flex gap-2">
                        Your Conviction
                        <Tooltip message="I am tooltip 🚀">
                          <p>Here</p>
                        </Tooltip>
                      </Label>
                      <Input id="name" defaultValue="Pedro Duarte" />
                    </div>
                    <div className="py-3 space-y-1">
                      <Label htmlFor="name" className="flex gap-2">
                        Predicted Net Income (SEMENTARA WAJIB, NANTI OPTIONAL)
                        <Tooltip message="I am tooltip 🚀">
                          <p>Here</p>
                        </Tooltip>
                      </Label>
                      <Input id="name" defaultValue="Pedro Duarte" />
                    </div>
                  </div>
                  <div className="col-span-1 space-y-1">
                    <p className="mb-4 text-lg font-bold">Current Value :</p>
                    <div className="space-y-1">
                      <Label htmlFor="name" className="flex gap-2">
                        Asset Saat ini (PBV)
                      </Label>
                      <Input id="name" defaultValue="Pedro Duarte" />
                    </div>
                    <div className="py-3 space-y-1">
                      <Label htmlFor="username" className="flex gap-2">
                        Discounted Rate Asset{" "}
                        <Tooltip message="I am tooltip 🚀">
                          <p>Here</p>
                        </Tooltip>
                      </Label>
                      <Input id="username" defaultValue="@peduarte" />
                    </div>
                  </div>
                  <div className="col-span-1 space-y-1 lg:col-span-2">
                    <p className="mb-4 text-lg font-bold">
                      Margin Of Safety (Optional) :
                    </p>
                    <div className="space-y-1">
                      <Label htmlFor="name" className="flex gap-2">
                        Your Margin of Safety
                      </Label>
                      <Input id="name" defaultValue="Pedro Duarte" />
                    </div>
                  </div>

                  <div className="col-span-1 space-y-1 lg:col-span-2">
                    <p className="mb-4 text-lg font-bold">
                      Manual (SEMENTARA) :
                    </p>
                    <div className="space-y-1">
                      <Label htmlFor="name" className="flex gap-2">
                        Asset Saat ini (PBV)
                      </Label>
                      <Input id="name" defaultValue="Pedro Duarte" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="username" className="flex gap-2 mt-3">
                        Discounted Rate Asset{" "}
                        <Tooltip message="I am tooltip 🚀">
                          <p>Here</p>
                        </Tooltip>
                      </Label>
                      <Input id="username" defaultValue="@peduarte" />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you'll be logged out.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Current password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">New password</Label>
                  <Input id="new" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Fundamental;
