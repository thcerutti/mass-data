const { v4: uuidv4 } = require('uuid');
const { faker } = require("@faker-js/faker");
const fs = require("fs");

const createSampleAtendimento = () => ({
  id: uuidv4(),
  name: faker.person.fullName(),
  phone: faker.phone.number({ style: "international" }),
  last_message: faker.lorem.sentence(),
  tags: [
    {
      id: 1,
      description: faker.lorem.word(),
    },
    {
      id: 2,
      description: faker.lorem.word(),
    },
  ],
  last_message_timestamp: faker.date.recent(),
  avatar_url: faker.image.avatar(),
  status: faker.helpers.arrayElement([
    "Online",
    "Offline",
    "Ocupado",
    "Invisível",
  ]),
});

const createSampleMessage = (conversationId) => ({
  conversationId: uuidv4(),
  referencedMessageId: conversationId || uuidv4(),
  timestamp: faker.date.recent(),
  outbound: faker.datatype.boolean(),
  status: faker.helpers.arrayElement([
    "pending",
    "sent",
    "received",
    "read",
    "error",
  ]),
  type: faker.helpers.arrayElement([
    "text",
    "image",
    "audio",
    "video",
    "document",
    "location",
  ]),
  content: faker.lorem.sentence(),
});

const createConversation = (messageCount, id) => {
  const messages = [];
  for (i = 0; i < messageCount; i++) {
    messages.push(createSampleMessage(id));
  }

  return {
    id: uuidv4(),
    conversationId: id,
    messages: messages,
  };
};

const atendimentos = Array.from({ length: 2 }, () => createSampleAtendimento());

const chats = atendimentos.map((atendimento) => {
  return createConversation(2, atendimento.id);
});

// console.log("conversation", JSON.stringify(chats, null, 2));

const outputAtendimentos = atendimentos.map((atendimento) => {
  return {
    id: atendimento.id,
    name: atendimento.name,
    phone: atendimento.phone,
    last_message: atendimento.last_message,
    tags: atendimento.tags,
    last_message_timestamp: atendimento.last_message_timestamp,
    avatar_url: atendimento.avatar_url,
    status: atendimento.status,
  };
});
console.log("atendimentos", JSON.stringify(outputAtendimentos, null, 2));

const outputChats = chats
  .map((chat) => {
    return chat.messages.flat();
  })
  .flat();
console.log("chats", JSON.stringify(outputChats, null, 2));

if (process.argv.includes("--save")) {
  fs.writeFileSync(
    "./output/atendimentos.json",
    JSON.stringify(outputAtendimentos, null, 2)
  );
  fs.writeFileSync("./output/chats.json", JSON.stringify(outputChats, null, 2));
}
