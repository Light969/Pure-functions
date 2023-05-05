// function strikeOfLife(person) {
export function strikeOfLife(hero) {
  if (hero.health > 50) {
    return 'healthy';
  } if (hero.health <= 50 && hero.health >= 15) {
    return 'wounded';
  } if (hero.health < 15) {
    return 'critical';
  }
}

// убрать из файла или закоментить.
// let hero = {name: 'Маг', health: 14}
// console.log(hero);

// console.log(strikeOfLife(hero));
