function tranferFolderOwnership() {

  var SS = SpreadsheetApp.getActiveSpreadsheet();
  var Ui = SpreadsheetApp.getUi();
  var UserId = Session.getActiveUser().getEmail();
    
  var MainDrive = DriveApp.getFolderById("1wF1hkQNPrN9bCESTAk3ODpn3WzcSt5eh9lgD4QvcIbZL0mbFAyM6pkNqEAVPgdE_LAXHR4cd");
  var CustCode = MainDrive.getFiles();
  
  while (CustCode.hasNext()) {
    var file = CustCode.next();
    var fileName = file.getName();
    var fileId = file.getId();
    
    var newOwnerEmail = 'dmm@bajato.com';
    var owner = file.getOwner().getEmail();
    if(owner==="backoffice2@bajato.com" ){
      file.setOwner(newOwnerEmail);
      Logger.log("fileName-" + fileName);
    }
  }
   
}
