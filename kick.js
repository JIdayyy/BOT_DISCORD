function getRandomAnswer(message) {
  const answers = [
    `L'utilisateur ${message.user.tag} a été mis sur le siège éjectable direct, c'est ce qu'il t'attends si tu ne respècte pas le règlement de l'équipage petit pirate !`,
    `Un kick de perdu 10 de retrouvés ! Bye bye ${message.user.tag}`,
  ];
  const randomNumber = Math.floor(Math.random() * answers.length);
  return answer[randomNumber];
}

module.exports = (message) => {
  const member = message.mentions.members.first();
  if (!member) {
    return message.reply(`Utilisateur pas trouvé ou pas spécifié`);
  }
  if (!member.kickable) {
    return message.reply(`L'utilisateur n'est pas kickable`);
  }
  return member
    .kick()
    .then(() => message.reply(getRandomAnswer(message)))
    .catch((error) => message.reply(`Une erreur s'est produite`));
};
