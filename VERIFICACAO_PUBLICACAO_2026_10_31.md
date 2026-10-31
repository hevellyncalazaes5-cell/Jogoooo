# Verificação técnica da publicação — 31/10/2026

Site inspecionado: https://jogohevvy.netlify.app/

A publicação carregou a interface, o catálogo de 120 casos e a função de IA. Foram consultados 128 caminhos estáticos com sucesso HTTP (incluindo os 120 JSON de casos), sem referências de provas inválidas nas respostas de testemunhas verificadas. A função de IA respondeu HTTP 503 por configuração ausente: GEMINI_API_KEY e/ou TRIBUNAL_AI_ACCESS_TOKEN não disponíveis para o ambiente da função.

Foram identificados problemas reproduzíveis na interface e corrigidos no pacote: menus novos ausentes no primeiro carregamento, rótulo antigo de 100 casos, relógio removido nas rotas novas, abertura assíncrona de consultas, schema financeiro incompleto em novos casos familiares e pesquisa legal dominada por palavras de ligação. Também foram corrigidos restauração/deduplicação de anexos, reserva institucional, validação do contexto individual das testemunhas IA e pausa do motor local quando a IA é escolhida para julgar.

A configuração da IA foi simplificada: endereço do próprio site automático, modelo padrão do servidor com alternativa configurável, senha de acesso do jogo e diagnóstico das variáveis ausentes. Nenhuma chave foi incorporada aos arquivos. A chave permanece no servidor.

Validação do pacote corrigido:

- Sintaxe dos scripts JavaScript e da função de IA: passou.
- 13 cenários de integração em DOM de teste: passaram. Cobrem primeiro carregamento, 120 casos, relógio, sorteio, schema financeiro, consulta legal, anexos e recarga, carreira pública, privacidade do contexto, salário e etapas do Júri.
- 9 cenários do servidor com provedor simulado: passaram. Cobrem diagnóstico, configuração, autenticação, origem, contexto de testemunha, fontes válidas/inválidas e falha do provedor.

Esses testes não constituem revisão narrativa integral de cada história nem teste real de geração Gemini na conta da usuária. O serviço publicado precisa ser atualizado com este pacote e com as variáveis disponíveis para Functions. Alterações no pacote local não alteram a publicação por si só.
