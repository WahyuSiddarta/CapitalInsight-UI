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
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { InlineMath, BlockMath } from "react-katex";
import Tooltip from "../Tooltip";
import CalculatorThinkIdForm from "./CalculatorThinkIdForm";

const CalculatorThinkId = () => {
  return (
    <div className="mt-4 dark:bg-gray-800/70">
      <div>
        <p className="text-lg font-bold text-black dark:text-white">
          Metode perhitungan dari model adalah :
        </p>
      </div>
      <div className="grid grid-cols-1 gap-3 space-y-2 ">
        <pre
          id="code"
          className="col-span-1 p-4 overflow-x-auto text-gray-300 whitespace-pre bg-gray-800 rounded-md dark:bg-gray-700 code"
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
        <div className="grid grid-cols-1 gap-8 space-y-1">
          <CalculatorThinkIdForm />
        </div>
      </div>
    </div>
  );
};

export default CalculatorThinkId;
