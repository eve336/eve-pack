ServerEvents.recipes(e => {
    e.remove({id: 'rftoolsbase:machine_frame'})

    e.shaped(
        Item.of('rftoolsbase:machine_frame', 1), 
        [
          'IBI',
          'I I',
          'IBI'
        ],
        {
          I: 'minecraft:iron_ingot',
          B: '#forge:dyes/blue'
        }
      )
})