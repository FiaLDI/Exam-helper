
import { MotionValue } from "framer-motion";

export interface IComponentProps {
    index: number;
    progress: MotionValue<number>;
    projectsProgress: MotionValue<number>;
}