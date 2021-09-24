// console.log(pokemons);

var elList = document.querySelector('.list');

elList.innerHTML = null;

for(var pokemones of pokemons){
    var newLi = document.createElement('li');
    var newHeading = document.createElement('h2');
    var newImg = document.createElement('img');
    var newType = document.createElement('h3');
    var newHeight = document.createElement('h4');
    var newWeight = document.createElement('h4');
    var newHeightWeight = document.createElement('h4');
    var newCandy = document.createElement('p');
    var newCandyCount = document.createElement('p');
    var newEgg = document.createElement('p');
    var newSpawn = document.createElement('p');
    var newAvg = document.createElement('p');
    var newSpawnTimes = document.createElement('p');
    var newMultipliers = document.createElement('p');
    var newWeaknesses = document.createElement('h5');
    var newEvolution = document.createElement('h5');
    // var newEvolutionNum = document.createElement('p');
    // var newEvolutionText = document.createElement('p');

    newHeading.textContent = pokemones.name;
    newType.textContent = pokemones.type;
    newHeightWeight.textContent = pokemones.height + " bo'yi " + ' | ' + pokemones.weight + " og'irligi";
    newCandy.textContent = pokemones.candy + " sevimli shirinliki";
    newCandyCount.textContent = pokemones.candy_count + " shirinliklar soni";
    newEgg.textContent = pokemones.egg + " tuxumining og'irligi";
    newSpawn.textContent = pokemones.spawn_chance + " tug'ilish imkoniyati";
    newAvg.textContent = pokemones.avg_spawns + "ta o'rtacha urug'lar";
    newSpawnTimes.textContent = pokemones.spawn_time + " tug'ilish vaqtlari";
    newMultipliers.textContent = pokemones.multipliers + " ko'paytirgichlar";
    newWeaknesses.textContent = pokemones.weaknesses + " zaifliklari";
    newEvolution.textContent = "YANGI AVLODLAR";

    newLi.setAttribute('class', 'list__item');
    newHeading.setAttribute('class', 'pokemon__heading');
    newImg.setAttribute('src', pokemones.img);
    newImg.setAttribute('class', 'imgg')
    newType.setAttribute('class', 'pokemon__type');
    newHeightWeight.setAttribute('class', 'pokemon__size');
    newCandy.setAttribute('class', 'pokemon__candy fontAlign');
    newEgg.setAttribute('class', 'pokemon__egg fontAlign');
    newSpawn.setAttribute('class', 'pokemon__spawn fontAlign');
    newAvg.setAttribute('class', 'pokemon__avg fontAlign');
    newSpawnTimes.setAttribute('class', 'pokemon__spawntimes fontAlign');
    newMultipliers.setAttribute('class', 'pokemon__multipliers fontAlign');
    newWeaknesses.setAttribute('class', 'pokemon__weaknesses fontAlign');


    newLi.appendChild(newHeading);
    newLi.appendChild(newImg);
    newLi.appendChild(newType);
    newLi.appendChild(newHeightWeight);
    newLi.appendChild(newWeight);
    newLi.appendChild(newCandy);
    newLi.appendChild(newEgg);
    newLi.appendChild(newSpawn);
    newLi.appendChild(newAvg);
    newLi.appendChild(newSpawnTimes)
    newLi.appendChild(newMultipliers)
    newLi.appendChild(newWeaknesses)
    

    elList.appendChild(newLi)
}