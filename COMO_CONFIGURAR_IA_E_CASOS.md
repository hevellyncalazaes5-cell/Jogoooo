# Tribunal IX — arquivos, legislação e IA

O jogo e os autos são ficcionais. Os 100 dossiês existentes foram mantidos e foram adicionados 20 roteiros. Eles se inspiram em questões jurídicas e entendimentos públicos, sem reproduzir autos, nomes ou provas de processos reais. As referências aparecem no dossiê e os fatos de cada roteiro foram escritos para esta simulação.

## Anexos e novos roteiros

Em um processo, abra **Anexar documento ou mídia**. TXT, MD, CSV e JSON têm texto lido localmente. PDF e imagens são guardados como arquivos e baixados para inspeção; não há OCR inventado. Cada prova externa começa fora da seleção e precisa ser juntada manualmente. O hash identifica o arquivo escolhido, mas não confirma origem ou autenticidade. O conteúdo de texto de um arquivo só vai ao provedor de IA depois de juntado ao processo.

Para adicionar um roteiro, abra **Audiência IA → Orientações em TXT → Caso adicional em JSON** e importe um objeto JSON com `area`, `title`, `client`, `opponent`, `claim`, `opponentClaim`, `evidence` e `witnesses`. Cada prova precisa ter ao menos um `body`; cada testemunha deve ter `name` e `statement`. IDs internos são gerados pelo jogo. O caso importado é marcado como ficção criada pelo jogador. Faça um backup antes de trocar de dispositivo.

## IA real de audiência

O modo local permanece disponível. Para conectar um modelo Gemini em uma hospedagem Netlify:

1. Publique a pasta do projeto como site estático com a função `netlify/functions/tribunal-ai.js`.
2. No painel de variáveis da hospedagem, crie `GEMINI_API_KEY`, `TRIBUNAL_AI_ACCESS_TOKEN` e `TRIBUNAL_ALLOWED_ORIGIN` conforme `.env.example`, disponíveis para Functions. `GEMINI_MODEL` é opcional e altera o padrão `gemini-3.8-flash`. Use uma chave de acesso longa e exclusiva para o jogo.
3. No jogo, o endpoint do próprio site é automático. Informe somente a senha que você definiu em `TRIBUNAL_AI_ACCESS_TOKEN` e use **Conectar IA**. **Verificar configuração do servidor** identifica as variáveis ausentes, sem revelar segredos. Publique novamente no Netlify após alterar as variáveis.
4. Abra um processo, junte as fontes e use **IA de audiência**. A IA conversa durante a sessão, responde como testemunha apenas ao perfil selecionado e pode preparar uma minuta após as alegações finais. Leia e registre a minuta conscientemente.

A chave do provedor fica no servidor. A chave de acesso do jogador fica neste navegador. Os dados enviados incluem identificação e partes do caso, falas de audiência, alegações finais e textos dos documentos juntados, além de trechos legais para consulta. Não anexe informação pessoal real a um serviço externo. A função limita origem, volume e taxa de chamadas; configure os segredos antes de publicar. Sem conexão e teste reais, o jogo identifica a sessão como local e não simula que a IA respondeu.

## Legislação e referências

O pacote contém cópias locais dos textos legislativos consultados em 31/10/2026, links diretos a fontes da Câmara dos Deputados e uma pesquisa de texto. Abra a fonte oficial antes de usar uma regra em outro contexto: a lei aplicável depende da data dos fatos e pode mudar. O texto legal orienta a análise, mas não comprova fatos.

Entre as inspirações públicas dos casos estão os temas do STJ sobre reconhecimento de pessoas (HC 598.886/SC), integridade e método de extração digital (AgRg no HC 828.054/RN), confissão e dosimetria (Tema 1.194 e Súmulas 545 e 231), e as Súmulas 309, 358, 479 e 543. Casos de filiação, regime patrimonial e Defensoria incluem referências do STF (Temas 622 e 1.236) e LC 80/1994. Os cenários não afirmam reproduzir esses processos.

## Carreiras e dinheiro

Na advocacia particular, honorários são contratados e despesas de diligência/perícia são orçadas em nota separada, antecipadas e reconciliadas. O saldo não usado pode ser devolvido. Na carreira pública, o salário mensal e o orçamento de diligências são ficcionais e institucionais; a pessoa assistida não paga honorários nem sucesso. O jogo exige encerrar contratos privados ativos e prestar contas de reservas antes de mudar de regime, seguindo a separação institucional da LC 80/1994.

Valores de casos milionários representam valor da causa ou pedido. Eles não entram automaticamente no caixa do escritório: honorário de êxito depende do contrato, e benefício do cliente depende de cumprimento comprovado.
