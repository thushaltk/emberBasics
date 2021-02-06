import Route from '@ember/routing/route';

export default class ProgrammersRoute extends Route {
  model() {
    return ['Steve Jobs', 'Bill Gates', 'Andy Rubin', 'James Goslin'];
  } //data returned inside "model" function is displayed in the "programmers.hbs" file in "templates".
}
