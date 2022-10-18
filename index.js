// Learn more about plugins at: https://posthog.com/docs/plugins/build/overview

// Drop pageleave events
export function processEvent(event, { config }) {
    if (event == '$pageleave') {
        return null
    }
    return event
}