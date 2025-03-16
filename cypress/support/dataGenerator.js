import { faker } from "@faker-js/faker";
export default class DataGenerator {
  static generateLookUpData() {
    return {
      Name: faker.name.findName(),
      ShortDescription: faker.name.jobTitle(),
      LongDescription: faker.company.catchPhrase(),
      SystemName: faker.helpers.arrayElement(["Windows", "MacOs", "Linux"]),
    };
  }
}
