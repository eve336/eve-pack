ServerEvents.recipes(event => {

    
    event.remove({id: 'gtceu:assembler/cover_infinite_water'})
    event.remove({id: 'gtceu:assembler/casing_palladium_substation'})
    event.remove({id: 'gtceu:shaped/power_substation'})
    event.remove({id: 'gtceu:assembler/ev_large_miner'})


    event.recipes.gtceu.assembler("infinite_water_cover")
.itemInputs("2x gtceu:mv_electric_pump")
.itemInputs("minecraft:cauldron")
.itemInputs("#gtceu:circuits/mv")
.itemOutputs("gtceu:infinite_water_cover")
.EUt(120)
.duration(100)


event.recipes.gtceu.extruder("large_ptfe_pipe_sheet")
.itemInputs("6x gtceu:polytetrafluoroethylene_plate")
.notConsumable("gtceu:large_pipe_extruder_mold")
.itemOutputs("gtceu:polytetrafluoroethylene_large_fluid_pipe")
.EUt(42)
.duration(96)

event.shaped("gtceu:power_substation", [
    "ABA",
    "BCB",
    "ABA"
], {
    A: "gtceu:palladium_substation",
    B: "#gtceu:circuits/ev",
    C: "gtceu:lapotron_crystal"
})

event.shaped("gtceu:ev_large_miner", [
    "ABA",
    "CDC",
    "EBE"
], {
    A: "gtceu:titanium_frame",
    B: "#gtceu:circuits/ev",
    C: "gtceu:diamond_grinding_head",
    D: "gtceu:ev_machine_hull",
    E: "gtceu:ev_sensor"
})

event.recipes.gtceu.assembler("palladium_substation")
.itemInputs("6x gtceu:palladium_plate")
.itemInputs("gtceu:stainless_steel_frame")
.itemOutputs("2x gtceu:palladium_substation")
.circuit(6)
.EUt(16)
.duration(50)

event.recipes.gtceu.lathe("ptfe_rod_from_sheet")
.itemInputs("gtceu:polytetrafluoroethylene_plate")
.itemOutputs("2x gtceu:polytetrafluoroethylene_rod")
.EUt(16)
.duration(32)

event.recipes.gtceu.extruder("normal_ptfe_pipe_sheet")
.itemInputs("3x gtceu:polytetrafluoroethylene_plate")
.notConsumable("gtceu:normal_pipe_extruder_mold")
.itemOutputs("gtceu:polytetrafluoroethylene_normal_fluid_pipe")
.EUt(42)
.duration(48)

event.shaped("gtceu:fluid_filter", [
    "AAA",
    "ABA",
    "AAA"
], {
    A: "gtceu:zinc_foil",
    B: "minecraft:lapis_lazuli"
})


    event.shaped("gtceu:item_voiding_cover", [
        "ABA",
        "CDE",
        " F "
    ], {
        A: "gtceu:steel_screw",
        B: "gtceu:item_detector_cover",
        C: "#forge:tools/screwdrivers",
        D: "gtceu:brass_normal_item_pipe",
        E: "#forge:tools/wrenches",
        F: "minecraft:cactus"
    })
    event.shapeless(
        Item.of('gtceu:fluid_detector_cover'),
        [
            'gtceu:iron_plate',
            'minecraft:heavy_weighted_pressure_plate'
        ]
    )
    event.shaped("gtceu:item_voiding_cover", [
        "ABA",
        "CDE",
        " F "
    ], {
        A: "gtceu:steel_screw",
        B: "gtceu:item_detector_cover",
        C: "#forge:tools/screwdrivers",
        D: "gtceu:brass_normal_item_pipe",
        E: "#forge:tools/wrenches",
        F: "minecraft:lava_bucket"
    })
    event.shaped("gtceu:fluid_voiding_cover", [
        "ABA",
        "CDE",
        " F "
    ], {
        A: "gtceu:steel_screw",
        B: "gtceu:fluid_detector_cover",
        C: "#forge:tools/screwdrivers",
        D: "gtceu:bronze_normal_fluid_pipe",
        E: "#forge:tools/wrenches",
        F: "minecraft:lava_bucket"
    })
    event.shaped("gtceu:fluid_voiding_cover", [
        "ABA",
        "CDE",
        " F "
    ], {
        A: "gtceu:steel_screw",
        B: "gtceu:fluid_detector_cover",
        C: "#forge:tools/screwdrivers",
        D: "gtceu:bronze_normal_fluid_pipe",
        E: "#forge:tools/wrenches",
        F: "minecraft:cactus"
    })

    event.recipes.gtceu.assembler("item_voiding_cover_lava")
.itemInputs("2x gtceu:steel_screw")
.itemInputs("gtceu:item_detector_cover")
.itemInputs("gtceu:brass_normal_item_pipe")
.itemInputs("minecraft:lava_bucket")
.itemOutputs("gtceu:item_voiding_cover")
.EUt(30)
.duration(100)

event.recipes.gtceu.assembler("item_voiding_cover_cactus")
.itemInputs("2x gtceu:steel_screw")
.itemInputs("gtceu:item_detector_cover")
.itemInputs("gtceu:brass_normal_item_pipe")
.itemInputs("minecraft:cactus")
.itemOutputs("gtceu:item_voiding_cover")
.EUt(30)
.duration(100)

event.recipes.gtceu.assembler("fluid_voiding_cover_cactus")
.itemInputs("2x gtceu:steel_screw")
.itemInputs("gtceu:item_detector_cover")
.itemInputs("gtceu:bronze_normal_fluid_pipe")
.itemInputs("minecraft:cactus")
.itemOutputs("gtceu:fluid_voiding_cover")
.EUt(30)
.duration(100)

event.recipes.gtceu.assembler("fluid_voiding_cover_lava")
.itemInputs("2x gtceu:steel_screw")
.itemInputs("gtceu:item_detector_cover")
.itemInputs("gtceu:bronze_normal_fluid_pipe")
.itemInputs("minecraft:lava_bucket")
.itemOutputs("gtceu:fluid_voiding_cover")
.EUt(30)
.duration(100)
})
