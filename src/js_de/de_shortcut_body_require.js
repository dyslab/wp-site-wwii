export default (categoryLink) => {
    switch (categoryLink) {
        case 'de_army':
            return require('./de_army.json');
        case 'de_airforce':
            return require('./de_airforce.json');
        case 'de_navy':
            return require('./de_navy.json');
        default:
            return null;
    }
}
