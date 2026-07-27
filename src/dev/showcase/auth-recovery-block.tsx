import codeString from "../../blocks/auth-recovery.tsx?raw";
import { BlockViewer } from "../components/BlockViewer";

export default function AuthRecoveryBlockShowcase() {
  return (
    <BlockViewer 
      blockId="auth-recovery" 
      title="Auth Recovery" 
      description="A simple password recovery and reset flow."
      codeString={codeString} 
    />
  );
}
