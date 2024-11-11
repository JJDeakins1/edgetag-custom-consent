console.log('Script starting...');

const COOKIE_CONSENT_KEY = '__BATBcookies';
console.log('Cookie key:', COOKIE_CONSENT_KEY);

const checkConsent = () => {
    console.log('checkConsent running');
    
    const consentValue = localStorage.getItem(COOKIE_CONSENT_KEY);
    console.log('Current consent value:', consentValue);
    
    let edgeTagConsent = { all: false };
    
    if (consentValue === 'accepted') {
        edgeTagConsent = { all: true };
    }
    
    console.log('edgeTagConsent set to:', edgeTagConsent);
    
    if (typeof window.edgetag === 'function') {
        window.edgetag('consent', edgeTagConsent);
    } else {
        console.log('Warning: edgetag function not found');
    }
};

 window.addEventListener('edgetag-initialized', (data) => {
  checkConsent();
}, { once: true });

document.addEventListener('click', function(e) {
  if (e.target && e.target.matches('.closeCookieBanner')) {
    checkConsent();
  }
});

checkConsent();

window.checkCookieConsent = checkConsent;
console.log('Script setup complete - try running window.checkCookieConsent()');
