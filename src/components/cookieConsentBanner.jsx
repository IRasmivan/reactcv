import React, { useEffect, useState } from "react";
import {
  getStoredAnalyticsConsent,
  initializeAnalytics,
  isAnalyticsConfigured,
  setStoredAnalyticsConsent,
  subscribeToAnalyticsConsent,
} from "../analytics";

export default function CookieConsentBanner() {
  const [consent, setConsent] = useState(() => getStoredAnalyticsConsent());

  useEffect(() => {
    if (consent === "accepted") {
      initializeAnalytics();
    }
  }, [consent]);

  useEffect(() => {
    return subscribeToAnalyticsConsent(() => {
      setConsent(getStoredAnalyticsConsent());
    });
  }, []);

  if (!isAnalyticsConfigured() || consent) {
    return null;
  }

  function handleConsent(nextConsent) {
    setStoredAnalyticsConsent(nextConsent);
    setConsent(nextConsent);
  }

  return (
    <div className="cookie-consent-banner" role="dialog" aria-live="polite" aria-label="Cookie consent">
      <div className="cookie-consent-banner__content">
        <p className="cookie-consent-banner__title">Cookie preferences</p>
        <p className="cookie-consent-banner__text">
          This site uses Google Analytics to understand visits and key link clicks.
          You can accept or reject analytics cookies.
        </p>
      </div>
      <div className="cookie-consent-banner__actions">
        <button
          type="button"
          className="cookie-consent-banner__button cookie-consent-banner__button--secondary"
          onClick={() => handleConsent("rejected")}
        >
          Reject
        </button>
        <button
          type="button"
          className="cookie-consent-banner__button cookie-consent-banner__button--primary"
          onClick={() => handleConsent("accepted")}
        >
          Accept
        </button>
      </div>
    </div>
  );
}