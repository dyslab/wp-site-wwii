export default (categoryLink) => {
    switch (categoryLink) {
        case 'it_army':
            return require('./it_army.json');
        default:
            return null;
    }
}
