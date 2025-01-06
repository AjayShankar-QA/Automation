const { faker } = require("@faker-js/faker");

export function generateUserData() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const emailUsername = faker.word.sample().toLowerCase();
  const email = `${emailUsername}@maildrop.cc`;
  const password = faker.internet.password(12, true, /[A-Z]/, "1!");
  return { firstName, lastName, email, password };
}
