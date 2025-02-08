import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { Button } from "@/components/ui/button";
import { InlineMath, BlockMath } from "react-katex";
import Tooltip from "../Tooltip";

const CalculatorThinkId = () => {
  return (
    <Card className="dark:bg-gray-600/70">
      <CardHeader>
        <CardDescription>
          Metode perhitungan dari model adalah :
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-3 space-y-2 ">
        <pre
          id="code"
          className="col-span-1 p-4 overflow-x-auto text-gray-300 whitespace-pre bg-gray-800 rounded-md code"
        >
          <code>
            <BlockMath>
              {"FV = (FV_c * r_dc) + \\left( FV_f * r_df \\right)"}
            </BlockMath>
            {/* Descriptions for each symbol */}
            <div className="mt-2 text-sm">
              <p>
                <InlineMath>{"FV"}</InlineMath> = Harga Wajar
              </p>
              <p>
                <InlineMath>{"FV_c"}</InlineMath> = Harga Wajar Saat Ini
              </p>
              <p>
                <InlineMath>{"FV_f"}</InlineMath> = Harga Wajar Masa Depan
              </p>
              <p>
                <InlineMath>{"r_dc"}</InlineMath> = Tingkat Diskonto Saat Ini
              </p>
              <p>
                <InlineMath>{"r_df"}</InlineMath> = Tingkat Diskonto Masa Depan
              </p>
              <p>
                <InlineMath>{"FV_c * r_dc"}</InlineMath> = Nilai Saat Ini yang
                Didiskon
              </p>
              <p>
                <InlineMath>{"FV_f * r_df"}</InlineMath> = Nilai Masa Depan yang
                Didiskon
              </p>
              <p>
                <InlineMath>{"(FV_c * r_dc) + (FV_f * r_df)"}</InlineMath> =
                Penjumlahan Nilai Saat Ini yang Didiskon dan Nilai Masa Depan
                yang Didiskon
              </p>
            </div>
          </code>
        </pre>
        <div className="grid grid-cols-1 gap-8 space-y-1 xl:grid-cols-2">
          <div className="col-span-1 space-y-1">
            <p className="mb-4 text-lg font-bold">Nilai Masa Depan :</p>
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-1">
                <Label htmlFor="name" className="flex gap-2 mb-2">
                  Keyakinan Anda
                  <Tooltip size="lg" position={"right"}>
                    <p className="text-xs">
                      Keyakinan Anda tentang perusahaan, pastikan hanya
                      berinvestasi pada perusahaan yang Anda yakin lebih dari
                      80%
                    </p>
                  </Tooltip>
                </Label>
                <Input
                  id="name"
                  defaultValue="Pedro Duarte"
                  prepend={
                    <span className="flex items-center justify-center w-full h-full text-sm">
                      %
                    </span>
                  }
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="name" className="flex gap-2 mb-2">
                  Pendapatan Bersih Normal
                  <Tooltip size="lg" position={"right"}>
                    <p className="text-xs">
                      Pendapatan bersih yang Anda anggap normal untuk
                      perusahaan, misalnya Anda dapat menggunakan rata-rata 5
                      tahun. Harap berhati-hati saat menggunakannya pada saham
                      komoditas atau saham siklikal
                    </p>
                  </Tooltip>
                </Label>
                <div className="flex justify-center w-full gap-2">
                  <div className="w-full">
                    <Input
                      id="name"
                      defaultValue="Pedro Duarte"
                      className="w-full"
                      prepend={
                        <span className="flex items-center justify-center w-full h-full text-sm whitespace-nowrap">
                          IDR
                        </span>
                      }
                      append={
                        <span className="flex items-center justify-center w-full h-full text-sm whitespace-nowrap">
                          Juta
                        </span>
                      }
                    />
                  </div>
                  <Dialog>
                    <DialogTrigger>
                      <p className="h-full w-full px-2 text-sm shadow bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md  font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
                        Hitung Rata-rata 5 Tahun
                      </p>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Fitur Belum Tersedia</DialogTitle>
                        <DialogDescription>
                          Tindakan ini tidak dapat dibatalkan. Ini akan secara
                          permanen menghapus akun Anda dan menghapus data Anda
                          dari server kami.
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              <div className="space-y-1">
                <Label htmlFor="name" className="flex gap-2 mb-2">
                  Pangsa Pasar (SEMENTARA WAJIB, NANTI Bersyarat)
                  <Tooltip size="lg" position={"right"}>
                    <p className="text-xs">Pangsa pasar perusahaan di pasar</p>
                  </Tooltip>
                </Label>
                <Input
                  id="name"
                  defaultValue="Pedro Duarte"
                  prepend={
                    <span className="flex items-center justify-center w-full h-full text-sm">
                      %
                    </span>
                  }
                />
              </div>
            </div>
          </div>
          <div className="col-span-1 space-y-1">
            <p className="mb-4 text-lg font-bold">Nilai Saat Ini :</p>
            <div className="space-y-1">
              <Label htmlFor="username" className="flex gap-2 mb-2">
                Tingkat Diskonto Aset %{" "}
                <Tooltip size="lg" position={"right"}>
                  <p className="text-xs">
                    Persentase pengurangan nilai aset jika perusahaan bangkrut
                    dan semua aset dilikuidasi
                  </p>
                </Tooltip>
              </Label>
              <Input
                id="username"
                defaultValue="@peduarte"
                prepend={
                  <span className="flex items-center justify-center w-full h-full text-sm">
                    %
                  </span>
                }
              />
            </div>
          </div>
          <div className="col-span-1 space-y-1 lg:col-span-2">
            <div className="mb-4 ">
              <p className="text-lg font-bold">Parameter Opsional</p>
              <p className="text-sm ">
                Jika diisi, akan memberikan rekomendasi
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div className="space-y-1">
                <Label htmlFor="name" className="flex gap-2 mb-2">
                  Margin Keamanan Anda
                </Label>
                <Input
                  id="name"
                  defaultValue="Pedro Duarte"
                  prepend={
                    <span className="flex items-center justify-center w-full h-full text-sm">
                      %
                    </span>
                  }
                />
              </div>
              <div className="space-y-1 ">
                <Label htmlFor="name" className="flex gap-2 mb-2">
                  PE Ratio Current / Forward (Manual sementara)
                </Label>
                <Input id="name" defaultValue="Pedro Duarte" />
              </div>
              <div className="space-y-1 ">
                <Label htmlFor="name" className="flex gap-2 mb-2">
                  Rasio PBV (Manual sementara)
                </Label>
                <Input id="name" defaultValue="Pedro Duarte" />
              </div>
            </div>
          </div>

          <div className="col-span-1 space-y-1 lg:col-span-2 ">
            <p className="mb-4 text-lg font-bold">
              Manual (SEMENTARA) :
              {/* TODO: Change from SEMENTARA to Advance or Manual, use card and accordion */}
            </p>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 ">
              <div className="space-y-1">
                <Label htmlFor="name" className="flex gap-2 mb-2">
                  Asset Saat ini (Equity)
                </Label>
                <Input
                  id="name"
                  defaultValue="Pedro Duarte"
                  prepend={
                    <span className="flex items-center justify-center w-full h-full text-sm whitespace-nowrap">
                      IDR
                    </span>
                  }
                  append={
                    <span className="flex items-center justify-center w-full h-full text-sm whitespace-nowrap">
                      Juta
                    </span>
                  }
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username" className="flex gap-2 ">
                  Total Share
                </Label>
                <Input
                  id="username"
                  defaultValue="@peduarte"
                  prepend={
                    <span className="flex items-center justify-center w-full h-full text-sm whitespace-nowrap">
                      Lembar
                    </span>
                  }
                  append={
                    <span className="flex items-center justify-center w-full h-full text-sm whitespace-nowrap">
                      Juta
                    </span>
                  }
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username" className="flex gap-2 ">
                  Stability Rate
                  <Tooltip size="lg" position={"right"}>
                    <p className="text-xs">
                      Net Income perusahaan dalam 10 tahun terakhir. contoh jika
                      selama 10 tahun perusahaan A keuntungan naik 9 dari 10
                      tahun, maka nilainya adalah 90%. Nilai termaksimal adalah
                      99%
                    </p>
                  </Tooltip>
                </Label>
                <Input
                  id="username"
                  defaultValue="@peduarte"
                  prepend={
                    <span className="flex items-center justify-center w-full h-full text-sm whitespace-nowrap">
                      %
                    </span>
                  }
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username" className="flex gap-2 ">
                  Net Income Return
                </Label>
                <Input
                  id="username"
                  defaultValue="@peduarte"
                  prepend={
                    <span className="flex items-center justify-center w-full h-full text-sm whitespace-nowrap">
                      %
                    </span>
                  }
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username" className="flex gap-2 ">
                  Growth Rate
                </Label>
                <Input
                  id="username"
                  defaultValue="@peduarte"
                  prepend={
                    <span className="flex items-center justify-center w-full h-full text-sm whitespace-nowrap">
                      %
                    </span>
                  }
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username" className="flex gap-2 ">
                  Dividen
                </Label>
                <Input
                  id="username"
                  defaultValue="@peduarte"
                  prepend={
                    <span className="flex items-center justify-center w-full h-full text-sm whitespace-nowrap">
                      %
                    </span>
                  }
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username" className="flex gap-2 ">
                  Leverage
                  <Tooltip size="lg" position={"right"}>
                    <p className="text-xs">
                      Nilai hutang perusahaan dibandingkan dengan ekuitas
                    </p>
                  </Tooltip>
                </Label>
                <Input
                  id="username"
                  defaultValue="@peduarte"
                  prepend={
                    <span className="flex items-center justify-center w-full h-full text-sm whitespace-nowrap">
                      %
                    </span>
                  }
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username" className="flex gap-2 ">
                  Stock Price
                </Label>
                <Input
                  id="username"
                  defaultValue="@peduarte"
                  prepend={
                    <span className="flex items-center justify-center w-full h-full text-sm whitespace-nowrap">
                      IDR Per Lembar
                    </span>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button disabled>Save changes</Button>
      </CardFooter>
    </Card>
  );
};

export default CalculatorThinkId;
