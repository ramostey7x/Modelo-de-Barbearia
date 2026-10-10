/**
 * Configuração central e dados da barbearia
 * BRAVO BARBER CLUB — Projeto demonstrativo desenvolvido pela agência AGON
 * Todos os campos podem ser facilmente preenchidos ao adaptar para um cliente real.
 */

export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  description: string;
  benefit: string;
  highlight?: boolean;
}

export interface DifferentialItem {
  number: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const SITE_CONFIG = {
  // Dados do Negócio (Placeholders discretos até inserção de dados reais do cliente)
  brandName: "BRAVO BARBER CLUB",
  shortName: "Bravo Barber",
  tagline: "Seu estilo. Sem improviso.",
  description: "Barbearia masculina com proposta visual sofisticada, atendimento personalizado e foco em cortes de cabelo, barba e cuidados com a aparência masculina.",

  // Contato Comercial (Deixar vazio ou inserir dados reais do cliente quando definidos)
  // Deixe whatsappNumber vazio ("") para ativar o modo demonstrativo explicativo com simulador comercial da AGON.
  // Exemplo de formato internacional quando configurado: "5511999999999"
  whatsappNumber: "", 
  
  // Placeholders indicativos (sem inventar dados específicos como endereço falso ou telefone inexistente)
  phoneDisplay: "Disponível sob consulta via WhatsApp",
  addressDisplay: "Endereço a ser definido para a unidade real",
  cityState: "Localização a ser configurada",
  instagramHandle: "@bravobarberclub", // Placeholder
  instagramUrl: "", // Vazio até cliente real fornecer
  emailAddress: "contato@bravobarberclub.com.br", // Placeholder
  openingHoursDisplay: "Horários sob consulta e agendamento prévio",

  agency: {
    name: "AGON",
    role: "Desenvolvimento e Design Estratégico",
    tagline: "Projetos digitais para marcas de alto valor.",
  },

  // Mensagem padrão para o WhatsApp
  defaultWhatsAppMessage: "Olá! Gostaria de consultar os horários disponíveis na Bravo Barber Club.",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "corte-masculino",
    name: "Corte Masculino",
    category: "Cabelo",
    description: "Alinhamento visual completo, corte estruturado com tesoura ou máquina de acordo com a textura do seu cabelo e a anatomia do seu rosto.",
    benefit: "Corte feito sob medida para valorizar seus traços e manter a praticidade no dia a dia.",
    highlight: true,
  },
  {
    id: "degrade",
    name: "Degradê (Fade)",
    category: "Cabelo & Acabamento",
    description: "Transição suave e gradual com graduação precisa (Low, Mid, High ou Taper Fade), finalizado com atenção milimétrica às linhas.",
    benefit: "Visual moderno, nítido e com contraste marcante, executado com técnica apurada.",
    highlight: false,
  },
  {
    id: "corte-classico",
    name: "Corte Clássico",
    category: "Cabelo Tradicional",
    description: "Modelagem tradicional executada predominantemente na tesoura, respeitando o caimento natural dos fios e repartição clássica.",
    benefit: "Elegância atemporal, acabamento sóbrio e caimento impecável para qualquer ocasião formal ou casual.",
    highlight: false,
  },
  {
    id: "barba",
    name: "Barba & Toalha Quente",
    category: "Barboterapia",
    description: "Desenho e alinhamento das linhas do rosto com navalha descartável, toalha quente aromática para dilatação dos poros e hidratação profunda.",
    benefit: "Relaxamento genuíno e uma barba simétrica, macia e sem irritação na pele.",
    highlight: true,
  },
  {
    id: "acabamento",
    name: "Acabamento & Pezinho",
    category: "Manutenção",
    description: "Limpeza precisa da nuca, costeletas, contornos das orelhas e sobrancelhas para manter a linha do corte limpa entre um corte e outro.",
    benefit: "Mantém a postura impecável e a sensação de corte recém-feito sem precisar do serviço completo.",
    highlight: false,
  },
  {
    id: "cabelo-barba",
    name: "Cabelo + Barba",
    category: "Experiência Completa",
    description: "A harmonização total entre o corte de cabelo e o desenho da barba. Atendimento completo com foco na sua identidade visual.",
    benefit: "Visual coeso e alinhado de ponta a ponta com atendimento integrado e dedicado.",
    highlight: true,
  },
];

export const DIFFERENTIALS: DifferentialItem[] = [
  {
    number: "01",
    title: "Atenção Minuciosa aos Detalhes",
    description: "Cada linha, transição e contorno é trabalhado com calma e rigor. Não tratamos seu atendimento como uma linha de montagem acelerada.",
  },
  {
    number: "02",
    title: "Estilo Alinhado à Sua Preferência",
    description: "Antes de iniciar qualquer serviço, conversamos para entender sua rotina, o que você gosta e o corte que realmente funciona no seu cabelo.",
  },
  {
    number: "03",
    title: "Acabamento e Finalização Precisa",
    description: "A diferença entre um corte comum e um corte memorável está na finalização. Cuidado cirúrgico com a navalha e alinhamento facial.",
  },
  {
    number: "04",
    title: "Ambiente Pensado para o Conforto",
    description: "Espaço sofisticado, iluminação agradável, assentos confortáveis e trilha sonora na medida certa para um momento de pausa merecido.",
  },
  {
    number: "05",
    title: "Comunicação Clara no Atendimento",
    description: "Sem surpresas. Agendamento simplificado e orientação sincera sobre o melhor cuidado para seu tipo de fio e formato de rosto.",
  },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Entre em Contato pelo WhatsApp",
    description: "Clique em qualquer botão do site para iniciar uma conversa direta com nossa equipe.",
  },
  {
    step: "02",
    title: "Informe o Serviço Desejado",
    description: "Diga se precisa de corte, barba, acabamento ou o combo completo de cabelo e barba.",
  },
  {
    step: "03",
    title: "Consulte a Disponibilidade",
    description: "A barbearia informa os dias e horários livres para acomodar sua preferência na cadeira.",
  },
  {
    step: "04",
    title: "Combine Diretamente o Horário",
    description: "Seu horário fica confirmado de forma prática, rápida e sem intermediários burocráticos.",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Quais são os serviços oferecidos na barbearia?",
    answer: "Trabalhamos com corte masculino personalizado, degradê (fade), cortes clássicos na tesoura, alinhamento de barba com toalha quente, acabamento de contornos e pezinho, além da combinação integrada de cabelo e barba.",
  },
  {
    question: "Como posso solicitar um agendamento?",
    answer: "O agendamento é feito de forma simples e direta pelo WhatsApp. Basta clicar no botão de agendamento aqui no site para iniciar a conversa e informar o serviço desejado.",
  },
  {
    question: "Como consulto os horários disponíveis?",
    answer: "Ao falar com a barbearia pelo WhatsApp, nossa equipe informa imediatamente as opções de dias e horários livres na agenda para você escolher o melhor momento.",
  },
  {
    question: "Posso perguntar sobre um serviço ou estilo específico?",
    answer: "Com certeza. Se você tem dúvidas sobre qual corte combina melhor com o formato do seu rosto ou deseja enviar fotos de referência, basta mandar pelo WhatsApp antes de marcar.",
  },
  {
    question: "Como encontro a barbearia e onde ela fica?",
    answer: "Este site é um projeto demonstrativo institucional desenvolvido pela agência AGON para apresentação comercial. Em uma implantação para cliente real, o endereço completo, referências de chegada e orientações de estacionamento são exibidos nesta seção.",
  },
  {
    question: "Por que o agendamento é feito pelo WhatsApp?",
    answer: "Acreditamos no contato humano e na flexibilidade de combinar horários diretamente com quem vai te atender, evitando formulários impessoais e proporcionando um atendimento personalizado desde o primeiro contato.",
  },
];

export const GALLERY_ITEMS = [
  {
    id: "gal-1",
    title: "Corte e Texturização",
    category: "Corte Masculino",
    image: "/images/hero-barber.jpg",
    aspect: "landscape",
    alt: "Barbeiro executando corte preciso com tesoura e pente em barbearia clássica",
  },
  {
    id: "gal-2",
    title: "Ambiente & Lounge Exclusivo",
    category: "Estrutura",
    image: "/images/barber-interior.jpg",
    aspect: "square",
    alt: "Interior elegante de barbearia contemporânea com cadeiras de couro e iluminação âmbar",
  },
  {
    id: "gal-3",
    title: "Degradê e Contornos Nítidos",
    category: "Fade & Acabamento",
    image: "/images/haircut-fade.jpg",
    aspect: "portrait",
    alt: "Homem com corte degradê nítido e barba alinhada com precisão",
  },
  {
    id: "gal-4",
    title: "Ritual de Barba com Toalha Quente",
    category: "Barboterapia",
    image: "/images/beard-grooming.jpg",
    aspect: "portrait",
    alt: "Atendimento clássico de barbearia com toalha quente e navalha tradicional",
  },
  {
    id: "gal-5",
    title: "Instrumental de Alta Precisão",
    category: "Ferramentas",
    image: "/images/barber-tools.jpg",
    aspect: "landscape",
    alt: "Tesouras japonesas forjadas, navalha de precisão, pincel e pente sobre ardósia grafite",
  },
];

/**
 * Utilitário para gerar link wa.me válido ou identificar pendência de configuração
 */
export function buildWhatsAppLink(number: string, message: string): string {
  const cleanNumber = number.replace(/\D/g, "");
  if (!cleanNumber) return "";
  const encodedMsg = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedMsg}`;
}
