import { AuthController } from './controllers/AuthController.js';
import { PokemonsController } from './controllers/PokemonsController.js';
import { router } from './router-config.js';
const USE_ROUTER = false

class App {

  AuthController = new AuthController()

  PokemonsController = new PokemonsController()

  constructor() {
    if (USE_ROUTER) {
      this.router = router
      this.router.init(this)
    }
  }
}


const app = new App()
// @ts-ignore
window.app = app
