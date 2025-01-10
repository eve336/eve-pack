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