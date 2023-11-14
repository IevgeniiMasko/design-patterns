class Template {
  private static instance: Template | undefined;

  private constructor() {}

  static getInstance() {
    if (!Template.instance) {
      Template.instance = new Template();
    }
    return Template.instance;
  }

  testMethod() {
    console.log('this is a test method');
  }
}

const a = Template.getInstance();
const b = Template.getInstance();
a.testMethod();
b.testMethod();
console.log('compare: ', a === b);
