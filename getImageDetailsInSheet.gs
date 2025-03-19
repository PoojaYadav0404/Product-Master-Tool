function getImageDetailsInSheet() {
  var SS = SpreadsheetApp.getActiveSpreadsheet();
  var Sheet = SS.getSheetByName("Product Master");
  var folderId = '1wF1hkQNPrN9bCESTAk3ODpn3WzcSt5eh9lgD4QvcIbZL0mbFAyM6pkNqEAVPgdE_LAXHR4cd';
  
  var destinationFolder = DriveApp.getFolderById(folderId);
  
  var files = destinationFolder.getFiles();
  
  // Loop through all the files
  while (files.hasNext()) {
    var file = files.next();
    var fileName = file.getName();
    var uniqueFileName = fileName.split(".")[0];
    SS.toast(fileName);
    var fileId = file.getId();
    var fileLink = `https://drive.google.com/uc?export=view&id=${fileId}`;
    var fileImage = `=image("https://drive.google.com/uc?export=view&id=${fileId}")` ;
    
    var UniqueArr = (!Sheet.getLastRow() < 1) ? Sheet.getRange(2, 2, Sheet.getLastRow() - 1, 1).getValues().map(unique => { return unique.toString() }) : [];
    var Row = UniqueArr.indexOf(uniqueFileName.toString()) + 2;
    Sheet.getRange(Row, 12).setValue(fileId);
    Sheet.getRange(Row, 13).setValue(fileLink); 
    Sheet.getRange(Row,14).setValue(fileImage); 
      
      
  
  }
  
  Logger.log("Images details added successfully.");
}
