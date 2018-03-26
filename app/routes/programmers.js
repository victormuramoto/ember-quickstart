import Route from '@ember/routing/route';

export default Route.extend({
    model() {
      return ['Martin Fawler', 'Matz', 'Rafael Franca'];
    }
});
