ServerEvents.recipes(event => {

    
    event.remove({id: 'gtceu:assembler/cover_infinite_water'})

    event.recipes.gtceu.assembler("infinite_water_cover")
.itemInputs("2x gtceu:mv_electric_pump")
.itemInputs("minecraft:cauldron")
.itemInputs("#gtceu:circuits/mv")
.itemOutputs("gtceu:infinite_water_cover")
.EUt(120)
.duration(100)



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
        C: "#forge:tools/screwdriversr",
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