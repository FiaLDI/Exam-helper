"use client"

import { useState } from "react";
import { ChangeViewProps, View } from "./view.types";

export const useView = (): ChangeViewProps => {
    const [view, setView] = useState<View>("block");

    const setBlock = () => {
        setView("block");
    }

    const setList = () => {
        setView("list");
    }

    return {view, setBlock, setList}
}
