import GetShortcutBody from './jp_shortcut_body.js';
import OutputShortcut from '../js_common_base/common_shortcut.js';

OutputShortcut(
    'jp', 
    GetShortcutBody(require('./jp_shortcut.json')), 
    require('./jp_menu.json')
);
