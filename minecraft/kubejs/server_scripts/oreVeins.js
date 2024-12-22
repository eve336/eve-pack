const EVMaterials = Java.loadClass("com.eve.examplemod.common.data.EVMaterials")


GTCEuServerEvents.oreVeins(event => {
    event.remove("gtceu:magnetite_vein_ow")
    event.remove("gtceu:banded_iron_vein")
})

