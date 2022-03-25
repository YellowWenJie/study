const f1 = require('../../node_modules/@faker-js/faker');
const dwp = require('../helpers/dwp');
const fs = require('fs');

const faker = f1.faker;
faker.setLocale('en_GB');

function* idNumber(index = 1000) {
  while (true) {
    yield index++;
  }
}

const generateIds = (start, count) => {
  const ids = [];
  for (let i = 0; i < count; i++) {
    ids.push(start + i);
  }
  return ids;
};

const generateNI = () => {
  return (
    faker.helpers.replaceSymbols('??######') +
    faker.random.arrayElement(['A', 'B', 'C', 'D']).toString()
  );
};
const userId = idNumber(10000);
const customerId = idNumber(30000);
const caseId = idNumber(40000);
const taskId = idNumber(50000);
const teamId = idNumber(20000);
const eventId = idNumber(1000000);

const teamIds = [];

console.log('Starting Data Generation...');

class DBObject {
  id = 0;
  constructor(obj = undefined) {
    if (obj) {
      for (const [key, value] of Object.entries(obj)) {
        this[key] = value;
      }
    }
  }
}

class User extends DBObject {
  constructor(props) {
    super(props);
    this.id = userId.next().value;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  /**
   * populate instance with 'random' data
   * @param extra
   */
  generate(extra) {
    const user = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      job: faker.name.jobTitle(),
      email: faker.internet.email(this.firstName, this.lastName, 'dwp.gov.uk'),
      password: 'camLite2022',
      teamId: faker.random.arrayElement(teamIds),
      role: faker.random.arrayElement(['Team Leader', 'Agent', 'Site Manager']),
      status: faker.random.arrayElement(dwp.available),
      sensitive: faker.random.arrayElement(dwp.sensitive),
      staffNo: faker.helpers.replaceSymbols('??######'),
      callbackSkill: faker.random.arrayElement(['Yes', 'No', 'Maybe']),
      organisation: faker.random.arrayElement(['DWP', 'Police', 'Mafia']),
      phone: {
        home: faker.phone.phoneNumber(),
        mobile: faker.phone.phoneNumber(),
        work: faker.phone.phoneNumber(),
      },
      ...extra,
    };
    Object.assign(this, user);
  }
}

class Customer extends DBObject {
  crn;
  nino;
  gender;

  constructor() {
    super();
    this.id = customerId.next().value;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  /**
   * populate instance with 'random' data
   * @param extra
   */
  generate(extra) {
    const id = this.id;
    const gender = faker.random.arrayElement([0, 1]);
    const [first, other] = [
      faker.name.firstName(gender),
      faker.name.firstName(gender),
    ];
    const notes = [
      {
        title: 'Note Added',
        byline: 'By Caseworker 1',
        time: faker.date.recent(),
        description:
          'Your application is being reviewed by one of our case workers.',
      },
      {
        title: 'Note Added',
        byline: 'By Caseworker 1',
        time: faker.date.recent(),
        description: 'Your application has been received – reference',
      },
    ];
    const customer = {
      crn: id,
      gender: faker.name.gender(!!gender),
      firstName: first,
      otherNames: other, //  middleName not very good
      lastName: faker.name.lastName(),
      preferredName: `${first}`,
      nino: generateNI(),
      postcode: faker.address.zipCode(),
      address: faker.address.streetAddress(true),
      language: {
        spoken: 'English',
        written: 'Welsh',
      },
      phone: {
        home: faker.phone.phoneNumber(),
        mobile: faker.phone.phoneNumber(),
        work: faker.phone.phoneNumber(),
      },
      dateOfBirth: faker.date.past(100).toISOString(),
      dateOfDeath: faker.random.arrayElement([
        '',
        faker.date.past(5).toISOString(),
      ]),
      preferContact: faker.random.arrayElement([
        'Email',
        'Home Phone',
        'Mobile',
        'Work Phone',
      ]),
      notes,
      ...extra,
    };

    Object.assign(this, customer);
  }
}

class Case extends DBObject {
  #customer;
  #user;
  constructor(customer, user) {
    super();
    this.#customer = customer;
    this.#user = user;
    this.id = caseId.next().value;
    this.usersId = user.id;
    this.customersId = customer.id;
    this.customerName = this.#customer.fullName();
    this.crn = this.#customer.crn;
    this.nino = this.#customer.nino;
    this.ownerName = this.#user.fullName();
    this.teamId = this.#user.teamId;
  }

  getCustomer() {
    return this.#customer;
  }
  /**
   * populate instance with 'random' data
   * @param extra
   */
  generate(extra) {
    /**
     * @type {*&{ownerName: string, resolutionDate: string, dueDate: Date, subType: string, id: *, state: string, claimId: string, type: string, createdOn: Date, resolution: string, customerName: string, benefit: string}}
     */
    const aCase = {
      createdOn: faker.date.recent(),
      type: faker.random.arrayElement(dwp.types),
      subType: faker.random.arrayElement(dwp.subTypes),
      state: faker.random.arrayElement(Case.states),
      benefit: faker.random.arrayElement(dwp.benefits),
      resolution: faker.random.arrayElement(dwp.resolutions),
      resolutionDate: faker.date.recent().toISOString(),
      dueDate: faker.date.soon(),
      claimId: faker.datatype.number({ min: 1000, max: 9999 }),
      priority: faker.random.arrayElement(dwp.priority),
      ...extra,
    };
    Object.assign(this, aCase);
  }
}

Case.states = [
  'new',
  'unassigned',
  'awaiting evidence',
  'awaiting decision',
  'closed',
  'open',
];

class Task extends DBObject {
  #user;
  #case;
  #customer;

  constructor(aCase, user) {
    super();
    this.#user = user;
    this.#case = aCase;
    this.#customer = aCase.getCustomer();
    this.id = taskId.next().value;

    this.casesId = aCase.id;
    this.usersId = user.id;
    this.customersId = this.#customer.id;
    this.crn = this.#customer.crn;
    this.customerName = this.#customer.fullName();
    this.nino = this.#customer.nino;
    this.ownerName = this.#user.fullName();
  }

  /**
   * populate instance with 'random' data
   * * @param extra
   */
  generate(extra) {
    const aTask = {
      createdOn: faker.date.recent().toISOString(),
      type: faker.random.arrayElement(dwp.types),
      subType: faker.random.arrayElement(dwp.subTypes),
      state: faker.random.arrayElement(Task.states),
      benefit: faker.random.arrayElement(dwp.benefits),
      resolution: faker.random.arrayElement(dwp.resolutions),
      resolutionDate: faker.date.recent().toISOString(),
      dueDate: faker.date.soon(),
      claimId: faker.datatype.number({ min: 1000, max: 9999 }),
      priority: faker.random.arrayElement(dwp.priority),
      ...extra,
    };
    Object.assign(this, aTask);
  }
}

Task.states = [
  'new',
  'unassigned',
  'awaiting evidence',
  'awaiting decision',
  'closed',
  'open',
];

const eventTypes = [0, 1, 2, 3, 4, 5];

class Event extends DBObject {
  #user;
  constructor(user) {
    super();
    this.#user = user;
    this.id = eventId.next().value;
    this.usersId = user.id;
    this.type = faker.random.arrayElement(eventTypes);
    this.date = faker.date.past(1);
  }

  generate(extra) {
    const aEvent = {
      ...extra,
    };
    Object.assign(this, aEvent);
  }
}

/**
 * generate mock users
 * @param number
 * @returns {*[]}
 */
const generateUsers = number => {
  const agents = [];
  const managers = [];
  const leaders = [];
  // generate site manager(s)
  for (let i = 0; i < 1; i++) {
    const manager = new User();
    manager.generate({
      lastName: `Manager${i}`,
      email: `manager${i}@dwp.gov.uk`,
      role: 'Site Manager',
    });
    managers.push(manager);
  }
  // generate team leaders
  for (let i = 0; i < 4; i++) {
    const t = teamId.next().value;
    teamIds.push(t);
    const leader = new User();
    leader.generate({
      lastName: `Leader${i}`,
      email: `leader${i}@dwp.gov.uk`,
      role: 'Team Leader',
      teamId: t,
    });
    leaders.push(leader);
  }

  const teams = leaders.map(leader => leader.teamId);

  // assign users to teams
  for (let i = 0; i < number; i++) {
    const user = new User();
    user.generate({
      lastName: `Agent${i}`,
      email: `agent${i}@dwp.gov.uk`,
      role: 'Agent',
      teamId: faker.random.arrayElement(teams),
    });
    agents.push(user);
  }

  return [...managers, ...leaders, ...agents];
};

/**
 * generate mock customers
 * @param number
 * @returns {*[]}
 */
const generateCustomers = number => {
  const data = [];
  while (number !== 0) {
    const customer = new Customer();
    customer.generate();
    data.push(customer);
    number--;
  }
  return data;
};

/**
 * generate mock cases
 * @param number
 * @param users
 * @param customers
 * @returns {*[]}
 */
const generateCases = (number, users, customers) => {
  const data = [];
  while (number !== 0) {
    const user = faker.random.arrayElement(users);
    const customer = faker.random.arrayElement(customers);
    const aCase = new Case(customer, user);
    aCase.generate({});
    data.push(aCase);
    number--;
  }
  return data;
};

/**
 * generate mock tasks
 * @param number
 * @param users
 * @param customers
 * @param cases
 * @returns {*[]}
 */
const generateTasks = (number, users, customers, cases) => {
  const data = [];
  while (number !== 0) {
    const user = faker.random.arrayElement(users);
    const aCase = faker.random.arrayElement(cases);
    let aTask = new Task(aCase, user);
    aTask.generate({});
    data.push(aTask);
    number--;
  }
  return data;
};

function generateEvents(number, users, cases, tasks) {
  const data = [];
  while (number !== 0) {
    const user = faker.random.arrayElement(users);
    let aEvent = new Event(user);
    aEvent.generate({});
    data.push(aEvent);
    number--;
  }
  return data;
}

console.log('Generating Users...');
const users = generateUsers(20);
console.log('Generating Customers...');
const customers = generateCustomers(50);
console.log('Generating Cases...');
const cases = generateCases(300, users, customers);
console.log('Generating Tasks...');
const tasks = generateTasks(300, users, customers, cases);
console.log('Generating Events...');
const events = generateEvents(300, users, cases, tasks);

console.log('Searches...');

const queryCase = [];
const queryTask = [];
const queryUser = [];
const queryCustomer = [];

fs.writeFileSync(
  './db.json',
  JSON.stringify(
    {
      users,
      customers,
      cases,
      tasks,
      events,
      queryCase,
      queryTask,
      queryUser,
      queryCustomer,
    },
    null,
    2
  )
);

console.log('done');
