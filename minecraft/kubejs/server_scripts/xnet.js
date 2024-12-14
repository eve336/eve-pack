ServerEvents.recipes(e => {
    e.remove({id: 'xnet:controller'})



    e.shaped(
        Item.of('xnet:netcable_yellow', 20), 
        [
          'SDS',
          'RWR',
          'SRS'
        ],
        {
          S: 'minecraft:string',
          W: 'gtceu:wrought_iron_ingot', 
          R: 'minecraft:redstone',
          D: '#forge:dyes/yellow'
        }
      )

      e.shaped(
        Item.of('xnet:netcable_red', 20), 
        [
          'SDS',
          'RWR',
          'SRS'
        ],
        {
          S: 'minecraft:string',
          W: 'gtceu:wrought_iron_ingot', 
          R: 'minecraft:redstone',
          D: '#forge:dyes/red'
        }
      )
      e.shaped(
        Item.of('xnet:netcable_blue', 20), 
        [
          'SDS',
          'RWR',
          'SRS'
        ],
        {
          S: 'minecraft:string',
          W: 'gtceu:wrought_iron_ingot', 
          R: 'minecraft:redstone',
          D: '#forge:dyes/blue'
        }
      )
      e.shaped(
        Item.of('xnet:netcable_green', 20), 
        [
          'SDS',
          'RWR',
          'SRS'
        ],
        {
          S: 'minecraft:string',
          W: 'gtceu:wrought_iron_ingot', 
          R: 'minecraft:redstone',
          D: '#forge:dyes/green'
        }
      )

      e.shaped(
        Item.of('xnet:netcable_routing', 20), 
        [
          'SRS',
          'RWR',
          'SRS'
        ],
        {
          S: 'minecraft:string',
          W: 'gtceu:wrought_iron_ingot', 
          R: 'minecraft:redstone',

        }
      )



      // connectors
      e.shaped(
        Item.of('xnet:connector_red', 10), 
        [
          'DCD',
          'RWR',
          'DRD'
        ],
        {
          C: '#forge:chests',
          W: 'gtceu:wrought_iron_ingot', 
          R: 'minecraft:redstone',
          D: '#forge:dyes/red'
        }
      )

      e.shaped(
        Item.of('xnet:connector_green', 10), 
        [
          'DCD',
          'RWR',
          'DRD'
        ],
        {
          C: '#forge:chests',
          W: 'gtceu:wrought_iron_ingot', 
          R: 'minecraft:redstone',
          D: '#forge:dyes/green'
        }
      )

      e.shaped(
        Item.of('xnet:connector_blue', 10), 
        [
          'DCD',
          'RWR',
          'DRD'
        ],
        {
          C: '#forge:chests',
          W: 'gtceu:wrought_iron_ingot', 
          R: 'minecraft:redstone',
          D: '#forge:dyes/blue'
        }
      )

      e.shaped(
        Item.of('xnet:connector_yellow', 10), 
        [
          'DCD',
          'RWR',
          'DRD'
        ],
        {
          C: '#forge:chests',
          W: 'gtceu:wrought_iron_ingot', 
          R: 'minecraft:redstone',
          D: '#forge:dyes/yellow'
        }
      )

      e.shaped(
        Item.of('xnet:connector_routing', 15), 
        [
          'RRR',
          'WCW',
          'RRR'
        ],
        {
          C: '#xnet:connectors',
          W: 'gtceu:wrought_iron_ingot', 
          R: 'minecraft:redstone',
        }
      )
})