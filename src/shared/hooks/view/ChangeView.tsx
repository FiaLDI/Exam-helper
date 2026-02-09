"use client"

import { Grid2x2, Rows2 } from "lucide-react";
import { ChangeViewProps } from "./view.types";

export const ChangeView = ({view, setBlock, setList}: ChangeViewProps) => (
    <div className="flex gap-5">
        <button data-active={view === "list"} className="" onClick={setList}><Rows2 /></button>
        <div data-active={view === "block"} onClick={setBlock}><Grid2x2 /></div>
    </div>
)
