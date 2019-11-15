import GetShortcutBody from './ru_shortcut_body.js';
import OutputShortcut from '../js_common_base/common_shortcut.js';

OutputShortcut(
    'ru', 
    GetShortcutBody(require('./ru_shortcut.json')), 
    require('./ru_menu.json')
);
