var gmailApp = GmailApp;
var app = SpreadsheetApp;
var spreadsheet = app.getActiveSpreadsheet();
var sheet = spreadsheet.getSheetByName('nome da planilha');

function sendEmails(email, nome) {
  if (email && nome) { // Verifica se tanto o email quanto o nome não estão vazios
    var assunto = "Assunto!";
    
    var corpo = `
      <p><strong>Olá ${nome},</strong></p>
      <p>seu texto aqui</p>
    `;
    gmailApp.sendEmail(email, assunto, '', { htmlBody: corpo, name: "Seu nome" });
    Logger.log(`Email enviado para ${nome} (${email})`);
  } else {
    Logger.log("Email ou nome estão vazios, não foi possível enviar o email.");
  }
}

function checkForNewEntries() {
  try {
    var lastRow = sheet.getLastRow();
    
    Logger.log(`Última linha: ${lastRow}`);
    
    var email = sheet.getRange(lastRow, 2).getValue();
    var nome = sheet.getRange(lastRow, 1).getValue();
    
    Logger.log(`Email: ${email}`);
    Logger.log(`Nome: ${nome}`);

    if (email && nome) {
      sendEmails(email, nome);
    } else {
      Logger.log("A nova linha não contém email ou nome válidos.");
    }
  } catch (error) {
    Logger.log(`Erro: ${error.message}`);
  }
}
