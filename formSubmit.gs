function onOpen(){
  //var SS = SpreadsheetApp.getActiveSpreadsheet();
  var Ui = SpreadsheetApp.getUi();
  //Ui.alert("Important message !", "Use google form to fill basic details (Product Code, Description, Category, OEM Ref. No., Unit, HSN Code, GST, Brand, Voltage) in this sheet and product price list. Image and Image link will be inserted manually by a team member.", Ui.ButtonSet.OK)
}


function onFormSubmit(e) {
  var Range = e.range;
  var Data = Range.getValues()
  var Row = Range.getRow();
  Logger.log(Data);
  Logger.log(Row);
  var ImageId = Data[0][10].split("https://drive.google.com/open?id=")[1];
  Logger.log(ImageId);
  
  var WiSS = SpreadsheetApp.getActiveSpreadsheet();
  var PrdMst = WiSS.getSheetByName("Product Master");
  PrdMst.getRange(Row, 12).setValue(ImageId);
  PrdMst.getRange(Row, 13).setValue(`https://drive.google.com/uc?export=view&id=${ImageId}`);
  PrdMst.getRange(Row, 14).setFormula(`=IMAGE("https://drive.google.com/uc?export=view&id=${ImageId}")`);
  
  var SS = SpreadsheetApp.openById("1MB6zMYAl0_LXdk85XD0VllRlYYJu-OfqUck6qF-zcZU");
  var PriceList = SS.getSheetByName("Price List");
  var Arr = [Data[0][0], Data[0][1], Data[0][2], Data[0][3], Data[0][5]];
  PriceList.getRange(PriceList.getLastRow()+1, 1, 1, Arr.length).setValues([Arr]);
  Logger.log("Success- " + Arr);

  imageAccess();
  
}
