"use client";
import { motion } from "framer-motion";
import { IComponentProps } from "./interface";

export const ToDown = (props: IComponentProps) => {

    return (
        <motion.header
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
            className="flex bg-fuchsia-100 max-w-7xl w-full mx-auto p-5 justify-end"
        >
            {props.children}
        </motion.header>
    )
}