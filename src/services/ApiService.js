class ApiService {
  url = 'http://localhost:8000';

  events = {
    getAll: () => fetch(`${this.url}/api/event`).then(data => data.json()),
  };
}

export default new ApiService();
