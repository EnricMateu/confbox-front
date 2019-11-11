class ApiService {
  url = 'http://localhost:8000';

  validatedEvents = '/api/event';

  events = {
    getValidatedEvents: () => fetch(`${this.url}${this.validatedEvents}`).then(data => data.json()),
  };

  userData = '/api/userprofile';

  users = {
    getUserData: ({ id }) => fetch(`${this.url}${this.userData}/${id}`).then(data => data.json()),
  };
}

export default new ApiService();
