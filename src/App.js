import React from "react";
import "./App.css";
import LoginForm from "./LoginForm";
import { AuthProvider } from "./common/contexts";
function App() {
  return (
    <AuthProvider>
      <LoginForm />
    </AuthProvider>
  );
}

export default App;
