ServerEvents.recipes(e => {

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
})