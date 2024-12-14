ServerEvents.recipes(e => {
    e.remove({id: 'laserio:logic_chip_raw'})
    e.remove({id: 'laserio:laser_node'})
    e.remove({id: 'laserio:laser_connector'})
    
    e.shaped(
        Item.of('laserio:logic_chip_raw', 16), 
        [
          'RRR',
          'CQC',
          'RRR'
        ],
        {
          Q: 'minecraft:quartz_block',
          C: 'minecraft:copper_ingot', 
          R: 'minecraft:redstone'
        }
      )

      e.shaped(
        Item.of('laserio:logic_chip_raw', 4), 
        [
          'IRI',
          'RCR',
          'IRI'
        ],
        {
          C: 'laserio:laser_connector',
          I: 'minecraft:iron_ingot',
          R: 'minecraft:redstone'
        }
      )

      e.shaped(
        Item.of('laserio:laser_connector', 2), 
        [
          ' B ',
          'RCR',
          'III'
        ],
        {
          C: 'laserio:logic_chip',
          I: 'minecraft:iron_ingot',
          R: 'minecraft:redstone',
          B: 'minecraft:redstone_block'
        }
      )

})