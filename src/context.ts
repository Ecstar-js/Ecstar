import { Client } from 'ecstar';
import { APIMessage, Message, StringResolvable } from 'discord.js';

export interface Context {
  name: string;
  message: Message;
  args: string[];
  send(content: StringResolvable | APIMessage): Promise<Message>;
}

export const context = (client: Client, message: Message): Context => {
  const [commandName, ...args] = message.content
    .slice(client.options.prefix.length)
    .split(' ');

  return {
    name: commandName,
    message,
    args,
    send(content) {
      return message.channel.send(content);
    },
  };
};