import shortcut_require from './fr_shortcut_body_require.js';

export default (listJSON) => {
    // Read list
    const step = 1;
    var fdata = null;
    const bodyJSON = [];

    for (let no = 0; no < listJSON.files.length; no += step) {
        bodyJSON.push({
            intro: '***',
            link: listJSON.files[no].link,
            title: listJSON.files[no].title
        });

        fdata = shortcut_require(listJSON.files[no].link);

        if (fdata && fdata !== null) {
            for (let jno = 0; jno < fdata.weapons.length; jno += step) {
                bodyJSON.push({
                    intro: fdata.weapons[jno].intro,
                    link: fdata.weapons[jno].link,
                    title: fdata.weapons[jno].model
                });
            }
        }
    }

    return bodyJSON;
}
