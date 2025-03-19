function setImageName() {
  var SS = SpreadsheetApp.getActiveSpreadsheet();
  var Sheet = SS.getSheetByName("Image");
  var DataArr = Sheet.getRange(2, 1, Sheet.getLastRow()-1, Sheet.getLastColumn()).getValues();

  DataArr.forEach(function(r){
    if(r[1]!=""){
      var destinationFolder = DriveApp.getFolderById(r[1]);
      destinationFolder.setName(r[0]);

    }
  })
  
  
  
}
