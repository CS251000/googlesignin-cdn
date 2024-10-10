(function() {
    function loadGoogleSignInScript() {
      const script = document.createElement("script");
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      script.onload = initializeGoogleSignIn;
      document.body.appendChild(script);
    }
    function handleCredentialResponse(response) {
      const jwtToken = response.credential;
      console.log("Encoded JWT ID token: " + jwtToken);
     
    }

    function initializeGoogleSignIn() {
      window.google.accounts.id.initialize({
        client_id: "770883517770-b6ffrsubm5trevp14cac76qnk533igvl.apps.googleusercontent.com",
        callback: handleCredentialResponse,
        auto_select: true,
        context: "signin",
        ux_mode: "popup",
        itp_support: true
      });
      window.google.accounts.id.prompt();
 
      window.google.accounts.id.renderButton(
        document.getElementById("g_id_signin"), {
          type: "standard",
          shape: "pill",
          theme: "filled_blue",
          text: "continue_with",
          size: "large",
          logo_alignment: "left"
        }
      );
    }

    window.onload = function() {
      loadGoogleSignInScript();
    };
  })();
  