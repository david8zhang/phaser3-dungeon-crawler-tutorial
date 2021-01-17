import Phaser from 'phaser'

import Game from './scenes/Game'
import Preloader from './scenes/Preloader'
import GameUI from './scenes/GameUI'

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 400,
  height: 300,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  scale: {
    zoom: 2,
  },
  scene: [Preloader, Game, GameUI],
}

export default new Phaser.Game(config)
