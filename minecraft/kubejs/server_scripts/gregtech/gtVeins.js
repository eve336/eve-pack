GTCEuServerEvents.oreVeins(event => {

    event.add('kubejs:moon/rutile', vein => {
        vein.weight(80)
        vein.clusterSize(40)
        vein.density(0.8)
        vein.layer("moonstones")
        vein.dimensions(
            "ad_astra:moon"
        )
        vein.heightRangeUniform(-20, 100)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(6).mat(GTMaterials.Rutile).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Iron).size(1, 2))
            )
        )
    })

})