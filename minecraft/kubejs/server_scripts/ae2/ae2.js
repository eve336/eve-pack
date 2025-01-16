ServerEvents.recipes(e => {

    e.remove({id: 'ae2:network/crystal_resonance_generator'})
    e.remove({id: 'ae2:network/blocks/energy_energy_acceptor'})
    e.remove({id: 'ae2:network/cells/item_storage_components_cell_1k_part'})
    e.remove({id: 'ae2:network/cells/fluid_storage_components_cell_1k_part'})
    e.remove({id: 'ae2:network/blocks/energy_energy_cell'})
    e.remove({id: 'ae2:network/cells/item_storage_cell_1k'})
    e.remove({id: 'ae2:network/cells/fluid_storage_cell_1k'})
    e.remove({id: 'ae2:network/cables/glass_fluix'})
    e.remove({id: 'ae2:network/blocks/pattern_providers_interface'})
    e.remove({id: 'ae2:network/blocks/interfaces_interface'})
    e.remove({id: 'ae2:network/blocks/crystal_processing_growth_accelerator'})
    e.remove({id: 'ae2:network/blocks/crafting/molecular_assembler'})




    e.shaped(
        Item.of('ae2:energy_acceptor', 1), // arg 1: output
        [
          'PGP',
          'GHG', // arg 2: the shape (array of strings)
          'PGP'
        ],
        {
          P: 'gtceu:steel_plate',
          G: 'ae2:quartz_glass', 
          H: 'gtceu:lv_machine_hull'
        }
      )

      e.shaped(
        Item.of('ae2:molecular_assembler', 1), // arg 1: output
        [
          'IGI',
          'GCG', // arg 2: the shape (array of strings)
          'IGI'
        ],
        {
          I: 'minecraft:iron_ingot',
          G: 'ae2:quartz_glass', 
          C: 'minecraft:crafting_table'
        }
      )

      e.shaped(
        Item.of('ae2:growth_accelerator', 1), // arg 1: output
        [
          'GCG',
          'PGP', // arg 2: the shape (array of strings)
          'GCG'
        ],
        {
          P: 'gtceu:wrought_iron_plate',
          G: 'ae2:quartz_glass', 
          C: '#gtceu:circuits/lv'
        
        }
      )

      e.shapeless(
        Item.of('ae2:fluix_glass_cable', 4),
        [
          'ae2:quartz_fiber',
          'minecraft:quartz',
          'minecraft:redstone'
        ]
      )
})  