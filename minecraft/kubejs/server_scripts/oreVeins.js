const EVMaterials = Java.loadClass("com.eve.examplemod.common.data.EVMaterials")


GTCEuServerEvents.oreVeins(event => {
    event.remove("gtceu:magnetite_vein_ow")
    event.remove("gtceu:banded_iron_vein")
    event.remove("gtceu:mineral_sand_vein")
    event.remove("gtceu:sheldonite_vein")
    event.remove("gtceu:naquadah_vein")
})

