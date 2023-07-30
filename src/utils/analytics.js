import ReactGA from 'react-ga';

export const initGA = () => {
    ReactGA.initialize('G-FGGN19FGW3');
};

export const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
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