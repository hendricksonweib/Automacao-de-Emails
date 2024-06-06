# Automação de Emails com Google Sheets e Google Apps Script

Este projeto fornece uma solução automatizada para enviar emails com base em dados de uma planilha do Google Sheets utilizando Google Apps Script. A automação é ideal para tarefas como envio de notificações, relatórios periódicos, lembretes e outros tipos de comunicação baseada em dados armazenados em planilhas.

## Funcionalidades

- **Envio Automático de Emails**: Envia emails automaticamente para destinatários especificados na planilha.
- **Agendamento Personalizado**: Configuração de horários específicos para envio de emails.
- **Mensagens Personalizadas**: Personalização do conteúdo do email com base nos dados da planilha.
- **Logs de Envio**: Registro das atividades de envio de emails para monitoramento e auditoria.

## Como Usar

### Pré-requisitos

- Conta no Google com acesso ao Google Sheets e Google Apps Script.
- Planilha do Google Sheets configurada com os dados necessários (ex: nome, email, mensagem).

### Passo a Passo

1. **Clone este repositório**:

    ```bash
    git clone https://github.com/hendricksonweib/Automacao-de-Emails
    ```

2. **Configuração da Planilha no Google Sheets**:

    - Crie uma nova planilha no Google Sheets.
    - Configure as colunas necessárias, como `Nome`, `Email`, `Mensagem`, etc.
    - Preencha a planilha com os dados dos destinatários.

3. **Adicionar o Script no Google Apps Script**:

    - Vá para `Extensões > Apps Script` na sua planilha do Google Sheets.
   

4. **Configurar o Gatilho para Execução Automática**:

    - No Google Apps Script, vá para `Editor de Script > Editar > Acionadores do projeto atual`.
    - Adicione um novo gatilho para a função `checkForNewEntries`.
    - Configure o gatilho para ser executado em intervalos regulares (ex: diariamente, semanalmente).

5. **Salvar e Testar**:

    - Salve o script.
    - Execute a função `checkForNewEntries` manualmente para testar se os emails são enviados corretamente.
    - Verifique os logs para confirmar o envio.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorias e correções.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## Contato

Para mais informações, entre em contato através do <a href="https://www.linkedin.com/in/hendricksonweib/" title="LinkedIn" target="_blank">
<img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/></a>
<a href="https://www.instagram.com/weibhr/" title="Instagram" target="_blank">
<img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram"/></a>
<br>
