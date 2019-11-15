export default (categoryLink) => {
    switch (categoryLink) {
        case 'fr_army':
            return require('./fr_army.json');
        default:
            return null;
    }
}
