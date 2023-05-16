import './src/styles/global.css'

import '@fontsource/roboto/latin-300.css'
import '@fontsource/roboto/latin-400.css'
import '@fontsource/roboto/latin-400-italic.css'
import '@fontsource/roboto/latin-500.css'
import '@fontsource/roboto/latin-700.css'

import '@fontsource/roboto-mono/latin-400.css'
import '@fontsource/roboto-mono/latin-400-italic.css'
import '@fontsource/roboto-mono/latin-600.css'

import '@fontsource/material-icons/index.css'

import { Metric, onCLS, onFID, onLCP } from 'web-vitals'

declare global {
  interface Window {
    gtag: any
  }
}

function sendToGoogleAnalytics({ name, delta, value, id }: Metric) {
  console.log(`${name} matching ID ${id} changed by ${delta}`)

  // Assumes the global `gtag()` function exists, see:
  // https://developers.google.com/analytics/devguides/collection/ga4
  if (!window.gtag) return
  window.gtag('event', name, {
    // Built-in params:
    value: delta, // Use `delta` so the value can be summed.
    // Custom params:
    metric_id: id, // Needed to aggregate events.
    metric_value: value, // Optional.
    metric_delta: delta // Optional.

    // OPTIONAL: any additional params or debug info here.
    // See: https://web.dev/debug-web-vitals-in-the-field/
    // metric_rating: 'good' | 'ni' | 'poor',
    // debug_info: '...',
    // ...
  })
}

onCLS(sendToGoogleAnalytics)
onFID(sendToGoogleAnalytics)
onLCP(sendToGoogleAnalytics)
