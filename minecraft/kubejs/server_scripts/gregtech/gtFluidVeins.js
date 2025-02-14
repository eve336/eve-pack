const Registries = Java.loadClass('net.minecraft.core.registries.Registries')
const ResourceKey = Java.loadClass('net.minecraft.resources.ResourceKey')
const martianPolarCapsResourceKey = ResourceKey.create(Registries.BIOME, 'examplemod:phobos')

GTCEuServerEvents.fluidVeins(event => {

event.add('kubejs:phobos/fluorine', vein => {
    vein.dimensions('examplemod:phobos')
    vein.fluid(() => Fluid.of("gtceu:fluorine").fluid)
    vein.weight(60)
    vein.minimumYield(200)
    vein.maximumYield(400)
    vein.depletionAmount(1)
    vein.depletionChance(50)
    vein.depletedYield(5)
})

event.add('kubejs:phobos/chlorine', vein => {
    vein.dimensions('examplemod:phobos')
    vein.fluid(() => Fluid.of("gtceu:chlorine").fluid)
    vein.weight(60)
    vein.minimumYield(200)
    vein.maximumYield(400)
    vein.depletionAmount(1)
    vein.depletionChance(50)
    vein.depletedYield(5)
})

event.add('kubejs:phobos/salt_water', vein => {
    vein.dimensions('examplemod:phobos')
    vein.fluid(() => Fluid.of("gtceu:salt_water").fluid)
    vein.weight(70)
    vein.minimumYield(250)
    vein.maximumYield(500)
    vein.depletionAmount(1)
    vein.depletionChance(50)
    vein.depletedYield(5)
})

})