import { StrictMode } from "react";
import { render }     from "react-dom";

// Import Own Components
import App                            from "./App.jsx";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals                from "./reportWebVitals";

render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.getElementById("root")
);

if (process.env.NODE_ENV === "production") {
	serviceWorkerRegistration.register();
	reportWebVitals();
} else {
	serviceWorkerRegistration.unregister();
}
