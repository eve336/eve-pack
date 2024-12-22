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

    e.shaped(
        Item.of('minecraft:copper_block', 1), 
        [
          'CCC',
          'CCC',
          'CCC'
        ],
        {
          C: 'minecraft:copper_ingot'
        }
      )

      e.shaped(
        Item.of('minecraft:redstone_block', 1), 
        [
          'CCC',
          'CCC',
          'CCC'
        ],
        {
          C: 'minecraft:redstone'
        }
      )

      e.shaped(
        Item.of('minecraft:gold_block', 1), 
        [
          'CCC',
          'CCC',
          'CCC'
        ],
        {
          C: 'minecraft:gold_ingot'
        }
      )

        e.shapeless(
        Item.of('minecraft:gold_ingot', 9),
        [
          'minecraft:gold_block'
        ]
      )

      e.shapeless(
        Item.of('minecraft:redstone', 9),
        [
          'minecraft:redstone_block'
        ]
      )

      e.shapeless(
        Item.of('minecraft:flint_and_steel', 1),
        [
          'minecraft:iron_ingot',
          'minecraft:flint'
        ]
      )
      e.shaped(
        Item.of('minecraft:gold_block', 1), 
        [
          'CCC',
          'CCC',
          'CCC'
        ],
        {
          C: 'minecraft:gold_ingot'
        }
      )
})