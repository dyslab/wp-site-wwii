export default (categoryLink) => {
    switch (categoryLink) {
        case 'jp_army':
            return require('./jp_army.json');
        default:
            return null;
    }
}
