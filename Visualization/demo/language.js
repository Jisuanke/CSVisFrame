function setLanguage() {
    if (CSVisFrame.language == 1) {
        CSVisFrame.config({
            language: 2
        });
        console.log(CSVisFrame.language);
        return ;
    } else {
        CSVisFrame.config({
            language: 1
        });
        console.log(CSVisFrame.language);
        return;
    }
}
