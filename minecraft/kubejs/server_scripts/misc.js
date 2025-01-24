ServerEvents.recipes(e => {

  e.remove({id: 'dankstorage:dank_3'})

  e.shaped(
    Item.of('dankstorage:dank_3', 1),
    [
      'GGG',
      'GDG',
      'GGG'
    ],
    {
      D: 'dankstorage:dank_2',
      G: 'minecraft:gold_ingot'
    }
  )

  e.remove({id: 'gtceu:shaped/axe_diamond'})
  e.shaped(
    Item.of('gtceu:diamond_axe', 1),
    [
      'DD ',
      'DS ',
      'HS '
    ],
    {
      D: 'minecraft:diamond',
      S: 'minecraft:stick',
      H: '#forge:tools/hammers'
    }
  )

  e.shaped(
    Item.of('sophisticatedstorage:barrel', '{woodType:"oak"}'),
    [
      'PSP',
      'PTP',
      'PSP'
    ],
    {
      P: 'gtceu:rubber_planks',
      S: 'gtceu:rubber_slab',
      T: 'minecraft:redstone_torch'
    }
  )

  e.shaped(
    Item.of('minecraft:glass_bottle', 3),
    [
      'G G',
      ' G '
    ],
    {
      G: 'minecraft:glass'
    }
  )

  e.remove({id: 'gtceu:shaped/steam_boiler_coal_steel'})
  e.shaped(
    Item.of('gtceu:hp_steam_solid_boiler'),
    [
      'WWW',
      'STS',
      'BFB'
    ],
    {
      W: 'gtceu:wrought_iron_plate',
      S: 'gtceu:steel_plate',
      T: '#forge:tools/wrenches',
      B: 'minecraft:bricks',
      F: 'minecraft:furnace'
    }
  )


  e.remove({id: 'quark:oddities/crafting/backpack'})
  e.shaped(
    Item.of('quark:backpack', 1),
    [
      'LIL',
      'LCL',
      'LIL'
    ],
    {
      C: '#forge:chests',
      L: 'minecraft:leather',
      I: 'minecraft:iron_ingot'
    }
  )
})