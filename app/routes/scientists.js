import Route from '@ember/routing/route';

export default class ScientistsRoute extends Route {
  model() {
    return ['Marie Curie', 'Mae Jemison', 'Albert Hofmann'];
  } //data returned inside "model" function is displayed in the "scientists.hbs" file in "templates".
}
