export class Pokemon {
  constructor(data) {
    this.name = data.name
    this.nickName = data.nickName
    this.img = data.img || this.name.sprites
    this.backImg = data.backImg || this.name.sprites
    this.weight = data.weight
    this.height = data.height
    this.health = data.health
    this.defense = data.defense
    this.attack = data.attack
    this.speed = data.speed
    this.types = data.types
    this.creatorId = data.creatorId
  }

  get activePokemonTemplate() {
    return `
    <div class="card d-flex mb-2 sticky-top">
          <div class="card-header d-flex justify-content-between">
            <h2>Pokemon Name</h2>
            <h2>No.1</h2>
          </div>
          <div class="card-img d-flex justify-content-evenly pt-3">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
              alt="ditto front">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
              alt="ditto back">
          </div>
          <div class="card card-body m-3 pb-0">
            <section class="row">
              <div class="col-3 rounded-pill bg-info text-light text-center mb-2">
                type
              </div>
              <div class="col-12 d-flex justify-content-between">
                <p>Health:</p>
                <p># hp</p>
              </div>
              <div class="col-12 d-flex justify-content-between">
                <p>Attack:</p>
                <p># ap</p>
              </div>
              <div class="col-12 d-flex justify-content-between">
                <p>Defense:</p>
                <p> # dp</p>
              </div>
              <div class="col-12 d-flex justify-content-between">
                <p>Speed:</p>
                <p># spd</p>
              </div>
              <div class="col-12 d-flex justify-content-between">
                <p>Weight:</p>
                <p># hg</p>
              </div>
              <div class="col-12 d-flex justify-content-between">
                <p>Height:</p>
                <p># dm</p>
              </div>
            </section>
          </div>
          <div class="d-flex justify-content-center py-2">
            <button class="w-50 m-2">Catch Em!</button>
          </div>
        </div>`
  }
}