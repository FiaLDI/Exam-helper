
export type View = "block" | "list";

export interface ChangeViewProps {
    view: View; 
    setBlock: () => void; 
    setList:  () => void;
}
