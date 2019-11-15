export default (categoryLink) => {
    switch (categoryLink) {
        case 'uk_army':
            return require('./uk_army.json');
        default:
            return null;
    }
}
