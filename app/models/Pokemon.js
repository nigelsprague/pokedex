export class Pokemon {
  constructor(data) {
    this.name = data.name
    this.nickName = data.nickName
    this.img = data.img || this.name.sprites.front_default
    this.backImg = data.backImg || this.name.sprites.back_default
    this.weight = data.weight
    this.height = data.height
    this.health = data.health
    this.defense = data.defense
    this.attack = data.attack
    this.speed = data.speed
    this.types = data.types
    this.creatorId = data.creatorId
  }
}