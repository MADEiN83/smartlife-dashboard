const { REACT_APP_BASE_URL } = process.env;

class TuyaService {
  login = (email: string, password: string): Promise<any> => {
    console.log("login");
    return Promise.resolve(1);
  };
}

export default TuyaService;
