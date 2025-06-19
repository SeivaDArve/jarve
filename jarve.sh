#!/bin/bash
# Title: Jarve
# Description: Para fx assincronas, tipo calendario
#              Busca os source-all-<repo>-files por tarefas que sejam precisas para eles
#              Cada repo corre 1x no inicio do terminal, mas jarve corre constantemente


function f_get_date {
   # do comando `date` buscar as var:
   # v_nr_hora
   # v_nr_dia
   # v_nr_semana  (algumas atividades derotina podem ser agendadas por numero de semana)
   # v_nr_mes
   # v_nr_trimestre
   # v_nr_semestre
   # v_nr_ano

   echo
}

function f_tarefa_0 {
   # Testar se a tarefa 1 ja pode ser FEITA ou mencionada ao user para FAZER
   
   # Data escolhida para ser feito (ciclo da rotia de X em X tempo, ou data fixa)
   # v_ag_dia=31              # Agendar para dia 31
   # v_ag_dia=$v_28_29_30_31  # Agendar para o ultimo dia do mes (independentemente se é dia 28 Fev, 29 Fev, 30 ou 31 de outros meses
   # v_ant_day=2              # Numero de dias  de antecedencia para o aviso 
   # v_ant_hr=2               # Numero de horas de antecedencia para o aviso
   
   echo
}

function f_fx_possiveis_chatGPT_suggestion {
   echo '
   Sugestoes do chatGPT de funcoes possiveis para uma supper app que combina agenda/relogio/calendario

   1. Funções de Calendário
      Visualização de Calendário (mensal, semanal, diária)
      Eventos Repetitivos (diários, semanais, mensais, anuais)
      Exibição de Feriados (locais e nacionais)
      Integração com Calendários Externos (Google Calendar, Outlook, etc.)
      Compartilhamento de Calendário (com outros usuários ou grupos)
      Sincronização Multiplataforma (desktop, smartphone, tablet)
      Adição de Eventos com Notificações Personalizadas
      Modo Offline (possibilidade de visualizar eventos mesmo sem internet)
      Personalização de Visual (temas, cores, fontes)
      Ajuste de Fuso Horário Automático
      Filtros e Busca de Eventos (por palavras-chave, data, local, etc.)
      Widgets na Tela Inicial (visualização rápida de eventos)
      Anotações no Evento (campos adicionais como localização, links, etc.)
      Indicadores de Compromissos Futuros (alertas para eventos distantes)
      Integração com Mapas (para eventos com local físico)
      Eventos de Grupo ou Colaborativos (criando eventos com múltiplos participantes)

   2. Funções de Agenda
      Agendamento de Compromissos (com data e hora fixa)
      Notificação de Lembretes (no horário agendado, ou antecedente)
      Tarefas e Checklists (associadas aos compromissos)
      Calendário de Tarefas (relacionado com os eventos no calendário)
      Agendamento Recorrente de Tarefas (diário, semanal, mensal)
      Gestão de Prioridades (marcando compromissos/tarefas como altas, médias ou baixas prioridades)
      Integração com To-Do List Apps (como Todoist, Google Keep, etc.)
      Definição de Horários de Trabalho/Disponibilidade
      Visualização de Agenda por Lista ou Gráfico de Gantt
      Histórico de Compromissos (para revisitar eventos passados)
      Delegação de Tarefas (compartilhando tarefas com outros usuários)
      Modo Foco/Do Not Disturb (bloqueando notificações durante tarefas)
      Armazenamento de Documentos e Links (associados aos compromissos)
      Recursos de Time Blocking (dividir o dia em blocos de trabalho)
      Agendamento de Chamadas/Videochamadas (com integração com Zoom, Google Meet, etc.)

   3. Funções de Relógio
      Relógio Analógico e Digital
      Alarmes Personalizados (com opções de som e vibração)
      Cronômetro e Temporizador (para tarefas de tempo limitado)
      Múltiplos Alarmes (para diferentes horários e atividades)
      Relógio Mundial (com fusos horários de várias cidades)
      Contagem Regressiva para Eventos (contagem do tempo até compromissos importantes)
      Modo Noturno ou "Silencioso" (desligando alarmes de madrugada)
      Relógio de Contagem Progressiva (mostrando tempo até uma meta/compromisso)
      Alertas para Hora de Dormir ou Acordar (baseados em hábitos de sono)
      Função de Soneca (para alarmes repetitivos)
      Alarme Inteligente (detectando seu ciclo de sono e acordando em um momento mais adequado)
      Personalização de Tema de Relógio (cores, fontes, etc.)
      Monitoramento de Sono (para ajudar a melhorar hábitos de sono)

   4. Integração Entre os Três Componentes
      Visibilidade Unificada de Agenda e Eventos no Calendário (sincronização entre agenda e calendário)
      Alertas e Notificações Convergentes (um lembrete pode gerar uma notificação em qualquer área do app)
      Autoagendamento com Base em Disponibilidade de Agenda (sugestão de horários livres)
      Controle de Tempo em Tarefas (Pomodoro) (associando tarefas a blocos de tempo)
      Sincronização com Assistentes Pessoais (como Google Assistant ou Siri)
      Análises de Produtividade e Uso do Tempo (estatísticas sobre o uso do tempo em compromissos e tarefas)
      Modo de Planejamento (onde o app sugere horários e dias para compromissos baseados em sua agenda)
      Integrar Contagem Regressiva de Eventos com Alarmes e Notificações
      Notificação sobre Mudanças de Horário ou Agenda de Última Hora
      Sugestões Automáticas de Horários Livres para Novos Compromissos
      Integração com E-mail e Mensagens de Texto (para enviar convites ou lembretes automaticamente)
      Reconhecimento de Padrões no Uso de Tempo (sugestão de como otimizar a agenda ou melhorar hábitos de trabalho)

   5. Outras Funcionalidades Possíveis
      Integração com Saúde e Bem-estar (monitoramento de atividades físicas e sono)
      Importação e Exportação de Dados (de outros apps de calendário, agenda ou tarefas)
      Integração com Aplicativos de Notas (como Evernote ou OneNote)
      Aplicação de Inteligência Artificial para Sugestão de Agenda (sugestões de tarefas com base no comportamento e histórico)
      Modo "Planejamento de Semana" (organização semanal de compromissos e tarefas)
      Sincronização de Tarefas com Notas ou Documentos
      Compartilhamento de Notas e Documentos entre Participantes de Eventos
      Integração com Aplicativos de Produtividade (como Trello, Asana, etc.)
      Modo de Privacidade ou Proteção por Senha/Face ID (para proteger dados sensíveis)
      Gestão de Tempo Baseado em Metas e Projetos (associando tarefas a projetos específicos)
      Feedback Visual sobre Produtividade (como barras de progresso ou gráficos)
      Importação de Tarefas de Outros Serviços de Agendamento
'
}

function f_exec {

   # See what day is today
      f_get_date  

   # Functions for each time period (each day, each month, each night)
      #f_tarefa_0  (Exemplo de 1 tarefa que aplique TODAS as funcoes competentes deste script)) 
      #f_tarefa_1  (Ver niveis oleo/agua do carro) 
      #f_tarefa_2  (Tirar contagens de agua)

}
f_fx_possiveis_chatGPT_suggestion 
