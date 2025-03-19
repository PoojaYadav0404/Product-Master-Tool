function imageAccess() {
  var SS = SpreadsheetApp.getActiveSpreadsheet();
  var Sheet = SS.getSheetByName("Images");
  var folderId = '1wF1hkQNPrN9bCESTAk3ODpn3WzcSt5eh9lgD4QvcIbZL0mbFAyM6pkNqEAVPgdE_LAXHR4cd';
  
  var destinationFolder = DriveApp.getFolderById(folderId);
  
  var files = destinationFolder.getFiles();
  
  while (files.hasNext()) {
    var file = files.next();
    Logger.log(file.getName());
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    /*
    var fileName = file.getName();
    var uniqueFileName = fileName.split(".")[0];
    var fileId = file.getId(); 
    var fileLink = `https://drive.google.com/uc?export=view&id=${fileId}`;
    var fileImage = `=image("https://drive.google.com/uc?export=view&id=${fileId}")` ;
    var Arr = [uniqueFileName, fileName, fileId, fileLink, fileImage];
    Sheet.getRange(Sheet.getLastRow()+1, 1, 1, Arr.length).setValues([Arr]);
    SS.toast(fileName);*/
    
  }

}
