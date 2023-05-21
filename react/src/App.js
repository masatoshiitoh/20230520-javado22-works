import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import YoutubeEmbed from "./YoutubeEmbed";
import CheckoutForm from "./stripePage";
const App = () => {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    return (
        <div>
            {!isAuthenticated && (
                <button onClick={loginWithRedirect}>Log in</button>
            )}

            {isAuthenticated && (
                <div>
                    <button onClick={logout}>Log out</button>
                    <h1>YouTube Embed</h1>
                    <YoutubeEmbed myId="1" />
                    <CheckoutForm />
                </div>
            )}
        </div>
    );
};
export default App;
