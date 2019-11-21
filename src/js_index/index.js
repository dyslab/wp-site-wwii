/* eslint-disable no-unused-vars */
import indexJSON from './index.json';
import logsJSON from './logs.json';
import template from '../views/index.pug';

document.write(template({
    index: indexJSON,
    logs: logsJSON
}));
