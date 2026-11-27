# previe.

**Antes de postar. :3**

Simule e organize suas fotos e vídeos de Stories e Status antes de publicar. Minimalista, responsivo e sem cadastro.

**[Experimente o previe.](https://useprevie.vercel.app)**

## Funcionalidades

- Instagram: **Meu story**. WhatsApp: **Meu status**. Duas sequências independentes, com ordem e posição salvas localmente.
- Fotos e vídeos juntos, miniaturas numeradas e duração de vídeo.
- Prévia 9:16 ilustrativa, navegação por toque, deslize, miniaturas ou teclado.
- Adicione, arraste, mova, exclua e desfaça a última exclusão de cada sequência na sessão.
- Toque no centro para abrir ou fechar o modo imersivo. Fotos avançam após 5 segundos; vídeos avançam ao terminar. A reprodução para no último item.
- Segure a prévia para pausar ou use o botão de reprodução. Vídeos começam sem som, com opção de ativá-lo. Escape sai do modo imersivo.
- Instalação PWA e funcionamento offline após a primeira visita online bem-sucedida.

Os formatos reproduzíveis dependem dos codecs do navegador (JPG, PNG, MP4 e WebM são sugestões, não garantia universal). Não há conversão, edição, corte automático de vídeos ou publicação em redes sociais.

## Instalação

Toque na seta no cabeçalho. Android: instalação pelo navegador compatível. iPhone: Safari → Compartilhar → Adicionar à Tela de Início. Sem APK nem App Store.

## Privacidade

Arquivos originais, ordem e seleção ficam no IndexedDB do mesmo navegador, dispositivo e domínio; nenhum arquivo é enviado ao servidor. A migração da versão anterior coloca a sequência existente no Instagram, em uma transação atômica. O WhatsApp começa vazio. Excluir na sequência não exclui da galeria. Desfazer funciona durante a sessão.

Não há sincronização entre dispositivos. A limpeza dos dados do site, a navegação privada, limites de armazenamento ou a troca de domínio podem impedir a recuperação. Evite editar a mesma sequência em várias abas simultaneamente.

Vercel Web Analytics registra somente visualizações autorizadas no domínio oficial, sem cookies de rastreamento, envio de mídia ou identificação publicitária. A preferência pode ser alterada em **privacidade**. Eventos personalizados foram preparados com uma lista fixa de ações sem propriedades de mídia, mas estão desativados; exigem plano Pro ou Enterprise. Não há coleta de identificadores de uso recorrente. Nenhum plano pago foi contratado.

[Privacidade da Vercel](https://vercel.com/docs/analytics/privacy-policy) · [Painel de estatísticas](https://vercel.com/i3b3l/prevu/analytics)

## Tecnologia

HTML, CSS, JavaScript nativos · IndexedDB · Service Worker · Vercel.

Miniaturas reduzidas, leitura de mídia em série, um vídeo ativo por vez, faixa de miniaturas reaproveitada na navegação e persistência de seleção sem regravar arquivos quando a ordem não muda. Sem framework ou dependências de execução.

## Executar localmente

```bash
git clone https://github.com/i3b3l/PREVIE.git
cd PREVIE
python -m http.server 8000
```

Abra http://localhost:8000. Python é apenas uma opção de servidor local.

## Testes

```bash
node analytics-test.cjs
node media-test.cjs
node responsive-test.cjs
```

Node.js com WebSocket/fetch nativos e Chrome instalado (defina CHROME_PATH se necessário). Os testes usam perfis temporários e mídia sintética.

Prévia independente e não oficial, sem vínculo com Instagram ou WhatsApp.

Desenvolvido por [i3b3l](https://github.com/i3b3l).
