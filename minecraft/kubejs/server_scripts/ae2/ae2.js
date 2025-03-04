ServerEvents.recipes(event => {

    event.remove({id: 'ae2:network/crystal_resonance_generator'})
    event.remove({id: 'ae2:network/blocks/energy_energy_acceptor'})
    //event.remove({id: 'ae2:network/cells/item_storage_components_cell_1k_part'})
    //event.remove({id: 'ae2:network/cells/fluid_storage_components_cell_1k_part'})
    event.remove({id: 'ae2:network/blocks/energy_energy_cell'})
    //event.remove({id: 'ae2:network/cells/item_storage_cell_1k'})
    //event.remove({id: 'ae2:network/cells/fluid_storage_cell_1k'})
    event.remove({id: 'ae2:network/cables/glass_fluix'})
    event.remove({id: 'ae2:network/blocks/pattern_providers_interface'})
    event.remove({id: 'ae2:network/blocks/interfaces_interface'})
    event.remove({id: 'ae2:network/blocks/crystal_processing_growth_accelerator'})
    event.remove({id: 'ae2:network/blocks/crafting/molecular_assembler'})
    event.remove({id: 'ae2:network/blocks/inscribers'})
    event.remove({id: 'expatternprovider:tag_storage_bus'})
    event.remove({id: 'expatternprovider:mod_storage_bus'})



    // pattern providers
event.recipes.gtceu.assembler("mv_pattern_provider")
.itemInputs('#gtceu:circuits/iv')
.itemInputs("gtceu:mv_conveyor_module")
.itemInputs('6x gtceu:zeron_100_plate')
.itemInputs("2x ae2:quartz_glass")
.itemInputs("ae2:logic_processor")
.itemOutputs("3x ae2:pattern_provider")
.EUt(7680)
.duration(60)

event.recipes.gtceu.assembler("hv_pattern_provider")
.itemInputs('2x #gtceu:circuits/iv')
.itemInputs("gtceu:hv_conveyor_module")
.itemInputs('12x gtceu:zeron_100_plate')
.itemInputs("3x ae2:quartz_glass")
.itemInputs("ae2:logic_processor")
.itemOutputs("6x ae2:pattern_provider")
.EUt(7680)
.duration(60)

event.recipes.gtceu.assembler("ev_pattern_provider")
.itemInputs("gtceu:ev_conveyor_module")
.itemInputs('3x #gtceu:circuits/iv')
.itemInputs('24x gtceu:zeron_100_plate')
.itemInputs("4x ae2:quartz_glass")
.itemInputs("ae2:logic_processor")
.itemOutputs("12x ae2:pattern_provider")
.EUt(7680)
.duration(60)





    event.shaped(Item.of("ae2:storage_bus", 4), [
      "AB",
      "BC"
  ], {
      A: "ae2:quartz_glass",
      B: "gtceu:stainless_steel_plate",
      C: "minecraft:chest"
  })

  event.shaped(Item.of("ae2:storage_bus", 6), [
    "AB ",
    "BC ",
    "   "
], {
    A: "ae2:quartz_glass",
    B: "gtceu:titanium_plate",
    C: "minecraft:chest"
})

  event.shaped("expatternprovider:tag_storage_bus", [
    "AB",
    "BC"
], {
    A: "ae2:logic_processor",
    B: "minecraft:redstone",
    C: "ae2:storage_bus"
})

event.shaped("expatternprovider:mod_storage_bus", [
  "AB",
  "BC"
], {
  A: "ae2:calculation_processor",
  B: "minecraft:redstone",
  C: "ae2:storage_bus"
})


  // event.remove({id: 'ae2:inscriber/silicon_print'})
  event.custom({
    "type": "ae2:inscriber",
    "ingredients": {
        "middle": {
            "item": "gtceu:silicon_ingot"
        },
        "top": {
            "item": "ae2:silicon_press"
        }
    },
    "mode": "inscribe",
    "result": {
        "item": "ae2:printed_silicon"
    }
}).id('kubejs:ae2/silicon_print')

event.custom({
  "type": "ae2:inscriber",
  "ingredients": {
      "middle": {
          "item": 'gtceu:certus_quartz_gem'
      },
      "top": {
          "item": 'ae2:calculation_processor_press'
      }
  },
  "mode": "inscribe",
  "result": {
      "item": 'ae2:printed_calculation_processor'
  }
}).id('kubejs:ae2/calculation_print')

    event.shaped("ae2:interface", [
      "ABA",
      "CDC",
      "ABA"
  ], {
      A: "minecraft:iron_ingot",
      B: "ae2:quartz_glass",
      C: "gtceu:lv_electric_motor",
      D: "ae2:engineering_processor"
  })

  event.shaped("ae2:me_p2p_tunnel", [
    " A ",
    "ABA",
    " A "
], {
    A: "minecraft:iron_ingot",
    B: "ae2:engineering_processor"
})

  event.shaped(Item.of("ae2:interface", 3), [
    "ABA",
    "CDC",
    "ABA"
], {
    A: "minecraft:iron_ingot",
    B: "ae2:quartz_glass",
    C: "gtceu:mv_electric_motor",
    D: "ae2:engineering_processor"
})

event.shaped(Item.of("ae2:interface", 6), [
  "ABA",
  "CDC",
  "ABA"
], {
  A: "minecraft:iron_ingot",
  B: "ae2:quartz_glass",
  C: "gtceu:hv_electric_motor",
  D: "ae2:engineering_processor"
})

event.shaped(Item.of("ae2:interface", 12), [
  "ABA",
  "CDC",
  "ABA"
], {
  A: "minecraft:iron_ingot",
  B: "ae2:quartz_glass",
  C: "gtceu:ev_electric_motor",
  D: "ae2:engineering_processor"
})

    event.shaped("ae2:inscriber", [
      "ABA",
      "  A",
      "ACA"
  ], {
      A: "gtceu:stainless_steel_plate",
      B: "#gtceu:circuits/iv",
      C: "gtceu:hv_electric_piston"
  })

  event.shaped("ae2:inscriber", [
    "ABA",
    "  A",
    "ACA"
], {
    A: "gtceu:stainless_steel_plate",
    B: "ae2:logic_processor",
    C: "gtceu:hv_electric_piston"
})

    event.shaped(
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

      event.shaped(
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

      event.shaped(
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

      event.shapeless(
        Item.of('ae2:fluix_glass_cable', 4),
        [
          'ae2:quartz_fiber',
          'minecraft:quartz',
          'minecraft:redstone'
        ]
      )
})  