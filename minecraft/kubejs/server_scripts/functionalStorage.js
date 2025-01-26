ServerEvents.recipes(event => {
    event.remove({id: 'functionalstorage:gold_upgrade'})
    event.remove({id: 'functionalstorage:diamond_upgrade'})
    event.remove({id: 'functionalstorage:netherite_upgrade'})

    event.shaped("functionalstorage:void_upgrade", [
        "A",
        "B"
    ], {
        A: "minecraft:cactus",
        B: "functionalstorage:oak_4"
    })

    event.shaped("functionalstorage:void_upgrade", [
        "A",
        "B"
    ], {
        A: "minecraft:lava_bucket",
        B: "functionalstorage:oak_4"
    })

    // event.shaped("functionalstorage:oak_1", [
    //    "AAA",
    //    "ACA",
    //    "AAA"
    //], {
    //    A: "gtceu:rubber_planks",
    //    C: "#forge:chests/wooden"
    //})
})