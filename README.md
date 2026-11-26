# previe.

**Antes de postar.**

Simule e organize suas sequências de Stories e Status antes de publicar. Uma experiência minimalista, responsiva e sem cadastro.

**[Experimente o previe.](https://useprevie.vercel.app)**

## O que você pode fazer

- Visualizar fotos em uma prévia vertical 9:16, com preenchimento proporcional.
- Navegar por toque, gesto horizontal ou setas do teclado.
- Adicionar e reorganizar fotos arrastando as miniaturas.
- Excluir uma foto da sequência e desfazer a última exclusão durante a sessão.
- Continuar de onde parou ao reabrir o mesmo navegador.

## Privacidade

As fotos e a sequência são armazenadas localmente no navegador com IndexedDB. O aplicativo não envia fotos a um servidor, não altera os arquivos originais e não publica conteúdo em redes sociais.

O armazenamento depende do navegador e do endereço utilizado. Limpar os dados do site, trocar de dispositivo ou usar navegação privada pode impedir a recuperação. Não há sincronização entre dispositivos.

## Tecnologia

HTML, CSS e JavaScript nativos · IndexedDB · Vercel

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
