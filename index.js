const { v4: uuidv4 } = require('uuid');

const getSample = () =>  [
  {
    "id": uuidv4(),
    "name": "Alice Silva",
    "phone": "+55 11 91234-5678",
    "last_message": "Olá, como posso ajudar?",
    "tags": [
      { "id": "1", "description": "Suporte" },
      { "id": "2", "description": "Prioridade Alta" }
    ],
    "last_message_timestamp": "2025-01-07T10:00:00Z",
    "avatar_url": "https://example.com/avatars/alice.jpg",
    "status": "Online"
  },
  {
    "id": uuidv4(),
    "name": "Bruno Santos",
    "phone": "+55 21 98765-4321",
    "last_message": "Pedido confirmado.",
    "tags": [
      { "id": "3", "description": "Vendas" },
      { "id": "4", "description": "Novo Cliente" }
    ],
    "last_message_timestamp": "2025-01-07T09:45:00Z",
    "avatar_url": "https://example.com/avatars/bruno.jpg",
    "status": "Ocupado"
  },
  {
    "id": uuidv4(),
    "name": "Carla Pereira",
    "phone": "+55 31 99876-5432",
    "last_message": "Qual é o prazo de entrega?",
    "tags": [
      { "id": "5", "description": "Dúvida" },
      { "id": "6", "description": "Entrega" }
    ],
    "last_message_timestamp": "2025-01-07T09:30:00Z",
    "avatar_url": "https://example.com/avatars/carla.jpg",
    "status": "Offline"
  },
  {
    "id": uuidv4(),
    "name": "Diego Costa",
    "phone": "+55 41 91234-1234",
    "last_message": "Obrigado pela ajuda!",
    "tags": [
      { "id": "7", "description": "Feedback" },
      { "id": "8", "description": "Resolução" }
    ],
    "last_message_timestamp": "2025-01-07T09:15:00Z",
    "avatar_url": "https://example.com/avatars/diego.jpg",
    "status": "Online"
  },
  {
    "id": uuidv4(),
    "name": "Elisa Rocha",
    "phone": "+55 61 98765-9876",
    "last_message": "Pode me ligar mais tarde?",
    "tags": [
      { "id": "9", "description": "Retorno" },
      { "id": "10", "description": "Chamada" }
    ],
    "last_message_timestamp": "2025-01-07T09:00:00Z",
    "avatar_url": "https://example.com/avatars/elisa.jpg",
    "status": "Invisível"
  },
  {
    "id": uuidv4(),
    "name": "Fábio Lima",
    "phone": "+55 71 99876-1111",
    "last_message": "Preciso de mais informações.",
    "tags": [
      { "id": "11", "description": "Consulta" },
      { "id": "12", "description": "Produto" }
    ],
    "last_message_timestamp": "2025-01-07T08:45:00Z",
    "avatar_url": "https://example.com/avatars/fabio.jpg",
    "status": "Ocupado"
  },
  {
    "id": uuidv4(),
    "name": "Gabriela Nunes",
    "phone": "+55 81 91234-2222",
    "last_message": "Como faço para pagar?",
    "tags": [
      { "id": "13", "description": "Pagamento" },
      { "id": "14", "description": "Dúvida" }
    ],
    "last_message_timestamp": "2025-01-07T08:30:00Z",
    "avatar_url": "https://example.com/avatars/gabriela.jpg",
    "status": "Offline"
  },
  {
    "id": uuidv4(),
    "name": "Hugo Martins",
    "phone": "+55 91 98765-3333",
    "last_message": "Tudo resolvido. Obrigado!",
    "tags": [
      { "id": "15", "description": "Agradecimento" },
      { "id": "16", "description": "Resolução" }
    ],
    "last_message_timestamp": "2025-01-07T08:15:00Z",
    "avatar_url": "https://example.com/avatars/hugo.jpg",
    "status": "Online"
  },
  {
    "id": uuidv4(),
    "name": "Isabela Souza",
    "phone": "+55 51 99876-4444",
    "last_message": "Quando estará disponível?",
    "tags": [
      { "id": "17", "description": "Disponibilidade" },
      { "id": "18", "description": "Consulta" }
    ],
    "last_message_timestamp": "2025-01-07T08:00:00Z",
    "avatar_url": "https://example.com/avatars/isabela.jpg",
    "status": "Online"
  },
  {
    "id": uuidv4(),
    "name": "Jorge Almeida",
    "phone": "+55 71 91234-5555",
    "last_message": "Recebi um código errado.",
    "tags": [
      { "id": "19", "description": "Erro" },
      { "id": "20", "description": "Suporte" }
    ],
    "last_message_timestamp": "2025-01-07T07:45:00Z",
    "avatar_url": "https://example.com/avatars/jorge.jpg",
    "status": "Ocupado"
  }
]

const { faker } = require('@faker-js/faker');

const createSampleContact = () =>(
  {
    "id": uuidv4(),
    "name": faker.person.fullName(),
    "phone": faker.phone.number({ style: 'international' }),
    "last_message": faker.lorem.sentence(),
    "tags": [
      {
        "id": 1,
        "description": faker.lorem.word()
      },
      {
        "id": 2,
        "description": faker.lorem.word()
      },
    ],
    "last_message_timestamp": faker.date.recent(),
    "avatar_url": faker.image.avatar(),
    "status": faker.helpers.arrayElement(['Online', 'Offline', 'Ocupado', 'Invisível'])
  }
)

const createSampleMessage = () => (
  {
    "conversationId": uuidv4(),
    "referencedMessageId": uuidv4(),
    "timestamp": faker.date.recent(),
    "outbound": faker.datatype.boolean(),
    "status": faker.helpers.arrayElement(['pending', 'sent', 'received', 'read', 'error']),
    "type": faker.helpers.arrayElement(['text', 'image', 'audio', 'video', 'document', 'location']),
    "content": faker.lorem.sentence()
  }
)

console.log(JSON.stringify(createSampleContact(), null, 2));
console.log(JSON.stringify(createSampleMessage(), null, 2));

// chats / messages

// const data = []
// for (i = 0; i < 5000; i++) {
//   data.push(createSampleContact())
// }

// console.log(JSON.stringify(data, null, 2));

// const fs = require('fs');
// fs.writeFileSync('data.json', JSON.stringify(output, null, 2));
