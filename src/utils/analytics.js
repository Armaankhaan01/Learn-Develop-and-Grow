import ReactGA from 'react-ga4';

export const initGA = () => {
    ReactGA.initialize(process.env.REACT_APP_ANALYTICS_TOKEN);
};

export const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname + window.location.search);
};

export const logEvent = (category, action, label) => {
    ReactGA.event({
        category,
        action,
        label,
    });
};

export const logException = (description, fatal) => {
    ReactGA.exception({
        description,
        fatal,
    });
};