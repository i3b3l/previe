# Revisão — duas plataformas e mídia mista

## Direção
Extensão da interface já aprovada, sem redesign. Impeccable 4.11.0: contexto, new-work (extensão do mesmo mundo), adapt, harden, optimize, audit e polish consultados, com craft-floor antes da edição. Sem PRODUCT.md/DESIGN.md formais, identidade existente preservada; a decisão das duas abas e dos nomes veio da conversa. Revisão feita diretamente, sem agente revisor separado.

## Segurança e persistência
Originais continuam locais. Migração atômica do registro legado para duas sequências; remoção do registro legado na mesma transação. Índices e plataforma salvos em registro leve; arquivos e ordem regravados apenas quando mudam. Sem envio de mídias ao Analytics. Eventos avançados desativados por dependerem de plano pago.

## Evidências
- Chrome/CDP em perfil descartável: migração legada, independência das duas abas, vídeo WebM sintético real, duração, mute/unmute, exclusão e desfazer isolados, reprodução automática e pausa, recarga, offline, arraste mouse e toque sintetizado, swipe e reutilização de miniaturas.
- 91 verificações de layout em 13 viewports com fotos e estados de exclusão/restauração.
- Capturas de ambas as abas analisadas; diferença entre as prévias ajustada (ícones específicos do Instagram).
- Imagem social: arte tipográfica original gerada programaticamente em 1200 × 630, sem mídia de usuário.
- Limitações: testes em Chromium, não em dispositivos iOS/Android físicos; outros codecs, Safari, zoom real, quotas de armazenamento, desempenho sob arquivos muito grandes e uso simultâneo em múltiplas abas não certificados. Não há medição de Core Web Vitals em campo. Prévia ilustrativa, sem alegação de fidelidade pixel a pixel à interface oficial.

Detector: imagem inicial sem src, intencionalmente oculta até a seleção de mídia. Nenhum outro achado retornado. A versão 7 do cache foi preparada. Teste antigo por file:// com virtual-time-budget não conseguiu importar os arquivos após a inicialização assíncrona; substituído pelo teste CDP com servidor HTTP local, que também exercita arraste e navegação.

## Revisao mobile: encaixe na altura util
- Impeccable layout, adapt, harden e polish: grid com espaco restante real, safe areas, centralizacao, compactacao proporcional e sem scroll vertical nas telas retrato testadas de altura >=480px; abaixo disso, preserva acessibilidade com rolagem.
- 140 verificacoes em 20 viewports; limites de sobreposicao, centro e rodape aferidos. Regressoes de midia e privacidade aprovadas. Detector: apenas imagem inicial intencionalmente oculta sem src. Validacao em Chromium emulado, nao em iOS/Android fisicos.

## Previa dos espectadores
- Referencias fornecidas: interface do Instagram e WhatsApp, sem dados pessoais ou imagens originais. Moldura 9:18.5, midia 9:16, controles ilustrativos, sem barra de sistema simulada. Capturas das duas abas revisadas. Detector: imagem inicial oculta e avisos de padding intencionais na moldura e no campo de resposta. Validacao em Chromium, nao em aparelhos fisicos.
- 140 verificacoes responsivas e regressao de midia aprovadas.
