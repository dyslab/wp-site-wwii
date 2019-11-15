export default (categoryLink) => {
    switch (categoryLink) {
        case 'ru_army':
            return require('./ru_army.json');
        default:
            return null;
    }
}
