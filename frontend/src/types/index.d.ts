import { RefObject, Dispatch, SetStateAction } from "react";

declare global {
  interface ContextType {
    email_input?: React.RefObject<HTMLInputElement>;
    loggedIn?: boolean;
    setLoggedIn?: React.Dispatch<React.SetStateAction<boolean>>;
    loggingIn?: boolean;
    setLoggingIn?: React.Dispatch<React.SetStateAction<boolean>>;
    welcomePage?: boolean;
    setWelcomePage?: React.Dispatch<React.SetStateAction<boolean>>;
  }

  // Allow ContextType or null globally
  type NullableContextType = ContextType | null;
}

export { };

