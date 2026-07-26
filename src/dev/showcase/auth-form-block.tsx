import { BlockViewer } from "../components/BlockViewer";
import codeString from "../../blocks/auth-form.tsx?raw";

export default function AuthFormBlockShowcase() {
  return (
    <BlockViewer 
      blockId="auth-form" 
      title="Login Form" 
      description="A clean, simple authentication form layout for login and registration."
      codeString={codeString} 
    />
  );
}
