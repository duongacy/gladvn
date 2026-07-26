import { BlockViewer } from "../components/BlockViewer";
import codeString from "../../blocks/auth-split.tsx?raw";

export default function AuthSplitBlockShowcase() {
  return (
    <BlockViewer 
      blockId="auth-split" 
      title="Auth Split Layout" 
      description="A split-screen authentication page with an image or branding area."
      codeString={codeString} 
    />
  );
}
