export default (categoryLink) => {
    switch (categoryLink) {
        case 'us_army':
            return require('./us_army.json');
        default:
            return null;
    }
}
