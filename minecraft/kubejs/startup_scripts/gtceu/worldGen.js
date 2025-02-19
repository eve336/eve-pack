GTCEuStartupEvents.registry('gtceu:world_gen_layer', event => {
    event.create('moonstones')
        .targets(
            '#ad_astra:moon_stone_replaceables'
        )
        .dimensions(
            "ad_astra:moon"
        )


        event.create('stones')
        .targets('#minecraft:stone_ore_replaceables')
        .dimensions(
            "examplemod:phobos"
        )

})