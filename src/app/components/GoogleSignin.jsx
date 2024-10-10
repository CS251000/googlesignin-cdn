
"use client";
import { useEffect } from "react";

const GoogleSignIn = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleCredentialResponse = (response) => {
    const jwtToken = response.credential;
    console.log("Encoded JWT ID token: " + jwtToken);
  };

  useEffect(() => {
    window.handleCredentialResponse = handleCredentialResponse;
  }, []);

  return (
    <div>
      <div
        id="g_id_onload"
        data-client_id="770883517770-b6ffrsubm5trevp14cac76qnk533igvl.apps.googleusercontent.com"
        data-context="signin"
        data-ux_mode="popup"
        data-callback="handleCredentialResponse"
        data-auto_select="true"
        data-itp_support="true"
        data-auto_prompt = "true"
      ></div>

      <div
        className="g_id_signin"
        data-type="standard"
        data-shape="pill"
        data-theme="filled_blue"
        data-text="continue_with"
        data-size="large"
        data-logo_alignment="left"
      ></div>
    </div>
  );
};

export default GoogleSignIn;
