# previe. — Adaptação mobile

Skill: Impeccable 4.11.0, instalada localmente em `.agents/skills/impeccable`. Fluxos: adapt e polish, com contexto, diagnóstico, planejamento, implementação, verificação e revisão final. A marca rosa-bebê e a assinatura existentes são preservadas. A escrita previe. acompanha o domínio aprovado.

## Decisões
- Prévia 9:16 proporcional ao viewport dinâmico, com margens de áreas seguras e controles abaixo da foto.
- Barra horizontal com adicionar sempre visível; controles com área mínima de 44 px. Layout lateral no tablet, desktop e celular horizontal.
- Sem login, upload ou novos dados. Mesmo IndexedDB e origens anteriores; exclusão, desfazer, arraste e navegação preservados.
- Avisos de armazenamento somente em caso de falha. Imagem da prévia sem src até importação é intencional e fica oculta até receber um arquivo local.
- A skill fica fora do deploy e do Git; o aplicativo não depende dela. Sem hook automático instalado; análise mecânica manual realizada.

## Verificação
Chrome headless com dados sintéticos: 320×568, 360×640, 390×844, 430×932, 667×375 (horizontal), 768×1024 e 1366×768. Verificação de proporção, largura, alcance de botões e altura; regressão de navegação, toque sintetizado, arraste, exclusão e persistência. O hardware físico Android/iOS e Safari ainda precisam ser validados; estados de erro ou zoom elevado podem exigir rolagem normal.

## Revisão de estados — Impeccable adapt, harden e polish

- Corrigida a distribuição desigual de largura quando Desfazer aparece. Grid responsivo de 3/4 colunas, 2 em contêineres estreitos; alvos de pelo menos 44 px.
- Ajustadas a prévia em altura reduzida e a tela inicial em paisagem. Textos podem quebrar linha; rolagem vertical é permitida em viewports extremos.
- 91 verificações de estados (13 viewports, de 280x480 a 1920x1080, 7 estados), sem corte de ações ou overflow horizontal. Capturas revisadas em 320x568, 390x844 e 568x320. Teste persistido em responsive-test.cjs (Node e Chrome; CHROME_PATH opcional).
- Regressão de gestos, instalação, modo imersivo, offline, IndexedDB e consentimento aprovada. Detector: imagem inicial sem src é intencional e fica oculta até uma foto ser selecionada.
- Chromium emulado; Safari, dispositivos físicos e zoom real ainda não verificados. PRODUCT.md e DESIGN.md ausentes; refinamento preserva a implementação existente, sem alterar a identidade.
