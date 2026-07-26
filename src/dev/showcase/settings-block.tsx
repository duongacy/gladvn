import { BlockViewer } from "../components/BlockViewer";
import codeString from "../../blocks/settings.tsx?raw";

export default function SettingsBlockShowcase() {
  return (
    <BlockViewer 
      blockId="settings" 
      title="Settings Layout" 
      description="A vertical tabs-based settings page with various input controls and danger zones."
      codeString={codeString} 
    />
  );
}
