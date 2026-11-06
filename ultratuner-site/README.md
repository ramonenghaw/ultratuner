# UltraTuner — site para GitHub Pages

Site estático, responsivo, em português. Não exige instalação, compilação, serviço pago ou chave de API.

## Publicar agora e obter a URL de suporte

1. No GitHub, crie um repositório **público** chamado `ultratuner` (ou outro nome desejado). Habilite **Issues** em **Settings → General → Features**; é o canal de contato da página de suporte.
2. Envie **o conteúdo desta pasta** para a raiz do repositório: `index.html`, `suporte.html`, `privacidade.html`, `styles.css`, `script.js` e `assets/`. Envie também este README.
3. Em **Settings → Pages → Build and deployment**, escolha **Deploy from a branch**. Selecione `main` e `/ (root)`; salve.
4. Aguarde o link aparecer em **Settings → Pages** e abra `https://SEU-USUARIO.github.io/ultratuner/suporte.html`. Teste o botão **Abrir solicitação de suporte**. A URL dessa página é a que você poderá colocar no campo **URL de suporte** do App Store Connect.
5. Se o repositório tiver outro nome, substitua `ultratuner` na URL. Se você usar um domínio personalizado ou um repositório `SEU-USUARIO.github.io`, ajuste o link de contato em `script.js`, pois a detecção automática foi feita para Pages em um repositório de projeto.

### Atenção antes de enviar para revisão na App Store

`privacidade.html` é **um rascunho transparente**, não uma política final. Confirme no código e na configuração do app: uso e destino do áudio do microfone; serviços de terceiros; diagnósticos; dados de uso; identificadores; armazenamento e transmissão. Depois substitua o texto de verificação por declarações precisas, coerentes com a ficha **Privacidade do App** no App Store Connect. Não afirme “processamento local” ou “nenhuma coleta” sem essa checagem.

O contato pelo GitHub Issues é público. Se preferir suporte por e-mail, configure um endereço real (não incluído aqui) em `suporte.html` antes de divulgar a página.

## Arquivos

- `index.html`: página inicial, afinador, metrônomo e compra única.
- `suporte.html`: instruções e contato.
- `privacidade.html`: rascunho de política com itens pendentes de verificação.
- `styles.css`: identidade visual e layout responsivo.
- `script.js`: menu móvel e link de contato do GitHub Issues.
- `assets/`: capturas reais do aplicativo fornecidas na conversa anterior.

Para testar localmente, abra `index.html` no navegador. O botão de suporte só é ativado automaticamente quando o site estiver em `usuario.github.io/repositorio`.
