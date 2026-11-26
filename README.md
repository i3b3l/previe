# previe.

**Antes de postar.**

Simule e organize suas sequências de Stories e Status antes de publicar. Uma experiência minimalista, responsiva e sem cadastro.

**[Experimente o previe.](https://useprevie.vercel.app)**

## O que você pode fazer

- Visualizar fotos em uma prévia vertical 9:16, com preenchimento proporcional.
- Navegar por toque, gesto horizontal ou setas do teclado.
- Tocar no centro da prévia para entrar e sair do modo imersivo; Escape também fecha.
- Adicionar e reorganizar fotos arrastando as miniaturas.
- Excluir uma foto da sequência e desfazer a última exclusão durante a sessão.
- Continuar de onde parou ao reabrir o mesmo navegador.

## Instalar no celular

Toque na seta de instalação no cabeçalho. No Android, use o aviso de instalação ou o menu do navegador; no iPhone, abra no Safari e use Compartilhar → Adicionar à Tela de Início. É um PWA, sem APK ou App Store. O ícone :3 identifica o app. Após uma primeira visita online bem-sucedida, o shell pode funcionar offline; as fotos continuam no IndexedDB, não no cache do service worker. O modo imersivo ocupa a área visível do navegador sem solicitar tela cheia nativa, evitando o aviso do navegador. A proporção 9:16 é mantida.

## Privacidade

As fotos e a sequência são armazenadas localmente no navegador com IndexedDB. O aplicativo não envia fotos a um servidor, não altera os arquivos originais e não publica conteúdo em redes sociais.

O armazenamento depende do navegador e do endereço utilizado. Limpar os dados do site, trocar de dispositivo ou usar navegação privada pode impedir a recuperação. Não há sincronização entre dispositivos.

### Estatísticas opcionais

O Vercel Web Analytics é carregado somente após autorização do visitante, sem cookies de rastreamento. São enviadas visualizações de página e metadados gerais de acesso (dispositivo, navegador, localização aproximada e origem da visita), não fotos, nomes de arquivos ou conteúdo da sequência. Os parâmetros e fragmentos da URL são removidos. A preferência pode ser alterada no rodapé, em **privacidade**, e sinais de privacidade do navegador são respeitados. A recusa não limita o aplicativo.

[Dados coletados pela Vercel](https://vercel.com/docs/analytics/privacy-policy) · [Painel de estatísticas](https://vercel.com/i3b3l/prevu/analytics)

## Tecnologia

HTML, CSS e JavaScript nativos · IndexedDB · Vercel · Web Analytics (opcional)

Sem framework, dependências de execução ou etapa de compilação.

## Executar localmente

```bash
git clone https://github.com/i3b3l/previe.git
cd previe
python -m http.server 8000
```

Abra `http://localhost:8000` no navegador. O servidor local permite utilizar o armazenamento de forma consistente. Python é necessário apenas para este exemplo de servidor, não para executar a aplicação na Vercel.

## Projeto

Interface mobile-first, com suporte a desktop e tablet. Prévia ilustrativa e independente, sem vínculo com Instagram ou WhatsApp.

Desenvolvido por [i3b3l](https://github.com/i3b3l).
