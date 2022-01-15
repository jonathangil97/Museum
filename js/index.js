let museum = new Museum();
museum.expositionGallery();

const artCups = museum.getCups();

function showInfoByClickButtom(){
    alert(artCups[0].getDescription())
};