declare global {
    interface Window {
        $chatwoot?: {
            toggle: (action?: "open" | "close") => void;
        };
        chatwootSDK?: {
            run: (config: {
                websiteToken: string;
                baseUrl: string;
                launcher?: "show" | "hide";
            }) => void;
        };
    }
}

export function loadChatwoot(): void {
    const BASE_URL = "https://app.chatwoot.com";

    // Check if Chatwoot is already loaded
    if (window.$chatwoot) {
        window.$chatwoot.toggle(); // This maintains the original toggle behavior
        return;
    }

    const script = document.createElement("script");
    script.src = `${BASE_URL}/packs/js/sdk.js`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
        if (!window.chatwootSDK) {
            console.error("Chatwoot SDK not loaded properly");
            return;
        }

        // Initialize Chatwoot without showing the launcher button
        window.chatwootSDK.run({
            websiteToken: "7W6d5objBMqKZrM29znfPDmW",
            baseUrl: BASE_URL,
            launcher: "hide",
        });

        // Force hide the default button using CSS
        const style = document.createElement("style");
        style.innerHTML = `
            .woot-widget-bubble {
                display: none !important;
            }
        `;
        document.head.appendChild(style);

        // Open the chatbox immediately
        const interval = setInterval(() => {
            if (window.$chatwoot) {
                window.$chatwoot.toggle("open"); // Explicitly open on first load
                clearInterval(interval);
            }
        }, 300);
    };

    script.onerror = () => {
        console.error("Failed to load Chatwoot SDK");
    };

    document.body.appendChild(script);
}