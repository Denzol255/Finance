import AOS from 'aos';
import '../index.html';
import 'aos/dist/aos.css';
import '../scss/style.scss';
import { webpChecker } from './modules/functions';
import clickListner from './modules/clickListner';
import sendForm from './modules/sendForm';
import spollers from './modules/spollers';

// AOS init
AOS.init();

// Checking the browser for webp support
webpChecker();

// Clicks
clickListner();

// Sending email form
sendForm();

// Spollers
spollers();
