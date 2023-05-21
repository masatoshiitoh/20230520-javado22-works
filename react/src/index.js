import React from "react";
import ReactDOM from "react-dom";
//import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51N9kfhKChT0QIRnf4ieEwi8MdK9BCWYflhn5lvuCIIKrfTst9gXGcdXgnYbOQLMoYB0X3W3NlKUrbq7rGsVIVBwl00DrMc1Y78');


ReactDOM.render(
    <Auth0Provider
        domain="dev-sz2tqi5tpnvpew8p.us.auth0.com"
        clientId="k6uJcrWxPipnPnPldzbppQyQzJhZO4NS"
        redirectUri={window.location.origin}
    >
        <Elements stripe={stripePromise}>
            <App />
        </Elements>
    </Auth0Provider>,
    document.getElementById("root")
);


reportWebVitals();





