import { BlockViewer } from "../components/BlockViewer";
import codeString from "../../blocks/dashboard.tsx?raw";

export default function DashboardBlockShowcase() {
  return (
    <BlockViewer 
      blockId="dashboard" 
      title="Dashboard" 
      description="A full-featured dashboard layout with a responsive sidebar, header, and data visualizations."
      codeString={codeString} 
    />
  );
}
