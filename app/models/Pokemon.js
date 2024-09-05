export class Pokemon {
  constructor(data) {
    this.name = data.name
    this.id = data.id
    this.nickName = data.nickName
    this.img = data.img || this.sprites.front_default
    this.backImg = data.backImg || this.sprites.back_default
    this.weight = data.weight
    this.height = data.height
    this.health = data.stats[0].base_stat
    this.defense = data.stats[2].base_stat
    this.attack = data.stats[1].base_stat
    this.speed = data.stats[5].base_stat
    this.types = data.types
    this.creatorId = data.creatorId
  }

  get activePokemonTemplate() {
    return `
    <div class="card d-flex mb-2 sticky-top">
          <div class="card-header d-flex justify-content-between">
            <h2>${this.name}</h2>
            <h2>No${this.id}</h2>
          </div>
          <div class="card-img d-flex justify-content-evenly pt-3">
            <img src="${this.img}"
              alt="${this.name} front">
            <img src="${this.backImg}"
              alt="${this.name} back">
          </div>
          <div class="card card-body m-3 pb-0">
            <section class="row">
              <div class="col-3 rounded-pill bg-info text-light text-center mb-2">
                ${this.types}
              </div>
              <div class="col-12 d-flex justify-content-between">
                <p>Health:</p>
                <p>${this.health} hp</p>
              </div>
              <div class="col-12 d-flex justify-content-between">
                <p>Attack:</p>
                <p>${this.attack} ap</p>
              </div>
              <div class="col-12 d-flex justify-content-between">
                <p>Defense:</p>
                <p>${this.defense} dp</p>
              </div>
              <div class="col-12 d-flex justify-content-between">
                <p>Speed:</p>
                <p>${this.speed} spd</p>
              </div>
              <div class="col-12 d-flex justify-content-between">
                <p>Weight:</p>
                <p>${this.weight} hg</p>
              </div>
              <div class="col-12 d-flex justify-content-between">
                <p>Height:</p>
                <p>${this.height} dm</p>
              </div>
            </section>
          </div>
          <div class="d-flex justify-content-center py-2">
            <button class="w-50 m-2">Catch Em!</button>
          </div>
        </div>`
  }
}