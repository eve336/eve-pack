GTCEuServerEvents.oreVeins(event => {

    event.add('kubejs:moon/rutile', vein => {
        vein.weight(60)
        vein.clusterSize(40)
        vein.density(0.6)
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

    event.add('kubejs:phobos/salt', vein => {
        vein.weight(60)
        vein.clusterSize(40)
        vein.density(0.9)
        vein.layer("stones")
        vein.dimensions(
            "examplemod:phobos"
        )
        vein.heightRangeUniform(45, 71)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(6).mat(EVMaterials.Fluorite).size(1, 2))
                .layer(l => l.weight(5).mat(GTMaterials.Salt).size(1, 2))
            )
        )
    })

    event.add('kubejs:phobos/lepidolite', vein => {
        vein.weight(40)
        vein.clusterSize(40)
        vein.density(0.8)
        vein.layer("stones")
        vein.dimensions(
            "examplemod:phobos"
        )
        vein.heightRangeUniform(50, 71)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(6).mat(GTMaterials.Spodumene).size(1, 2))
                .layer(l => l.weight(5).mat(GTMaterials.Lepidolite).size(1, 2))
            )
        )
    })

    event.add('kubejs:mercury/platinum', vein => {
        vein.weight(40)
        vein.clusterSize(40)
        vein.density(0.4)
        vein.layer("stones")
        vein.dimensions(
            "ad_astra:mercury"
        )
        vein.heightRangeUniform(50, 71)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(5).mat(EVMaterials.PlatinumMetallicPowder).size(1, 3))
                .layer(l => l.weight(1).mat(EVMaterials.PalladiumMetallicPowder).size(1, 1))
            )
        )
    })

    event.add('kubejs:mercury/neodymium', vein => {
        vein.weight(40)
        vein.clusterSize(40)
        vein.density(0.6)
        vein.layer("stones")
        vein.dimensions(
            "ad_astra:mercury"
        )
        vein.heightRangeUniform(50, 71)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(5).mat(GTMaterials.Neodymium).size(1, 2))
                .layer(l => l.weight(3).mat(GTMaterials.Bastnasite).size(1, 2))
                .layer(l => l.weight(4).mat(GTMaterials.Monazite).size(1, 2))
            )
        )
    })

    event.add('kubejs:mercury/nether_star', vein => {
        vein.weight(40)
        vein.clusterSize(35)
        vein.density(0.25)
        vein.layer("stones")
        vein.dimensions(
            "ad_astra:mercury"
        )
        vein.heightRangeUniform(50, 71)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.NetherStar).size(1, 2))
                .layer(l => l.weight(3).mat(GTMaterials.Diamond).size(1, 2))
            )
        )
    })

    event.add('kubejs:mercury/naquadah', vein => {
        vein.weight(40)
        vein.clusterSize(35)
        vein.density(0.25)
        vein.layer("stones")
        vein.dimensions(
            "ad_astra:mercury"
        )
        vein.heightRangeUniform(50, 71)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(EVMaterials.NaquadricCompound).size(1, 2))
                .layer(l => l.weight(2).mat(EVMaterials.EnrichedNaquadricCompound).size(1, 2))
                .layer(l => l.weight(1).mat(EVMaterials.NaquadriaticCompound).size(1, 2))
                
            )
        )
    })

})