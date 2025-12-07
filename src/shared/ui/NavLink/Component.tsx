"use client";

import Link from "next/link"
import {FC} from "react"
import { IComponentProps } from "./interface";

export const Component: FC<IComponentProps> = ({href, title}) => {

    return (
        <li>
            <Link href={href}>{title}</Link>
        </li>
    )
}