import GetShortcutBody from './uk_shortcut_body.js';
import OutputShortcut from '../js_common_base/common_shortcut.js';

OutputShortcut(
    'uk', 
    GetShortcutBody(require('./uk_shortcut.json')), 
    require('./uk_menu.json')
);
