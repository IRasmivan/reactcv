const measurementId = process.env.REACT_APP_GA_MEASUREMENT_ID;
const consentStorageKey = "analytics-consent";
const consentEventName = "analytics-consent-change";

let analyticsInitialized = false;

function hasMeasurementId() {
  return typeof measurementId === "string" && measurementId.trim().length > 0;
}

export function isAnalyticsConfigured() {
  return hasMeasurementId();
}

export function getStoredAnalyticsConsent() {
  if (typeof window === "undefined") {
    return null;
  }

  const consent = window.localStorage.getItem(consentStorageKey);

  return consent === "accepted" || consent === "rejected" ? consent : null;
}

export function setStoredAnalyticsConsent(consent) {
  if (typeof window === "undefined") {
    return;
  }

  if (consent === "accepted" || consent === "rejected") {
    window.localStorage.setItem(consentStorageKey, consent);
    window.dispatchEvent(new Event(consentEventName));
  }
}

export function clearStoredAnalyticsConsent() {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(consentStorageKey);
  window.dispatchEvent(new Event(consentEventName));
}

export function subscribeToAnalyticsConsent(callback) {
  if (typeof window === "undefined") {
    return () => {};
  }

  window.addEventListener(consentEventName, callback);
  window.addEventListener("storage", callback);

  return () => {
    window.removeEventListener(consentEventName, callback);
    window.removeEventListener("storage", callback);
  };
}

function injectAnalyticsScript() {
  if (!hasMeasurementId() || typeof document === "undefined") {
    return;
  }

  if (document.getElementById("google-analytics-script")) {
    return;
  }

  const script = document.createElement("script");
  script.id = "google-analytics-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);
}

export function initializeAnalytics() {
  if (!hasMeasurementId() || typeof window === "undefined" || analyticsInitialized) {
    return;
  }

  injectAnalyticsScript();

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    anonymize_ip: true,
  });

  analyticsInitialized = true;
}

export function trackEvent(eventName, params = {}) {
  if (!hasMeasurementId() || typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, params);
}