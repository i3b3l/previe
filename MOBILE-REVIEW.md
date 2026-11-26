# prevuu. — Adaptação mobile

Skill: Impeccable 4.11.0, instalada localmente em `.agents/skills/impeccable`. Fluxos: adapt e polish, com contexto, diagnóstico, planejamento, implementação, verificação e revisão final. A marca rosa-bebê e a assinatura existentes são preservadas. A escrita prevuu. acompanha o domínio aprovado.

## Decisões
- Prévia 9:16 proporcional ao viewport dinâmico, com margens de áreas seguras e controles abaixo da foto.
- Barra horizontal com adicionar sempre visível; controles com área mínima de 44 px. Layout lateral no tablet, desktop e celular horizontal.
- Sem login, upload ou novos dados. Mesmo IndexedDB e origens anteriores; exclusão, desfazer, arraste e navegação preservados.
- Avisos de armazenamento somente em caso de falha. Imagem da prévia sem src até importação é intencional e fica oculta até receber um arquivo local.
- A skill fica fora do deploy e do Git; o aplicativo não depende dela. Sem hook automático instalado; análise mecânica manual realizada.

## Verificação
Chrome headless com dados sintéticos: 320×568, 360×640, 390×844, 430×932, 667×375 (horizontal), 768×1024 e 1366×768. Verificação de proporção, largura, alcance de botões e altura; regressão de navegação, toque sintetizado, arraste, exclusão e persistência. O hardware físico Android/iOS e Safari ainda precisam ser validados; estados de erro ou zoom elevado podem exigir rolagem normal.
