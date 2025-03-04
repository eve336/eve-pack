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

event.add('kubejs:mercury/ammonia', vein => {
    vein.dimensions('ad_astra:mercury')
    vein.fluid(() => Fluid.of("gtceu:ammonia").fluid)
    vein.weight(70)
    vein.minimumYield(250)
    vein.maximumYield(500)
    vein.depletionAmount(1)
    vein.depletionChance(50)
    vein.depletedYield(5)
})

event.add('kubejs:mercury/charcoal_byproducts', vein => {
    vein.dimensions('ad_astra:mercury')
    vein.fluid(() => Fluid.of("gtceu:charcoal_byproducts").fluid)
    vein.weight(69)
    vein.minimumYield(400)
    vein.maximumYield(600)
    vein.depletionAmount(10000)
    vein.depletionChance(100)
    vein.depletedYield(0)
})

})