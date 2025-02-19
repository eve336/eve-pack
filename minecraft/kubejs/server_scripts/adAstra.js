ServerEvents.recipes(event => {
    event.shaped("ad_astra:nasa_workbench", [
        "ABA",
        "CDC",
        "BEB"
    ], {
        A: "gtceu:titanium_rod",
        B: "gtceu:stainless_steel_plate",
        C: "#gtceu:circuits/hv",
        D: "minecraft:crafting_table",
        E: "gtceu:stainless_steel_block"
    })

    event.shaped("ad_astra:steel_engine", [
        "AAA",
        "ABA",
        " C "
    ], {
        A: "gtceu:steel_plate",
        B: "gtceu:steel_frame",
        C: "gtceu:steel_rotor"
    })

    event.shaped("ad_astra:space_suit", [
        "A A",
        "BCB",
        "ABA"
    ], {
        A: "gtceu:steel_plate",
        B: "#minecraft:wool",
        C: "gtceu:fluid_cell"
    })

    event.remove({id: "ad_astra:nasa_workbench/tier_1_rocket_from_nasa_workbench"})
    event.remove({id: "ad_astra:nasa_workbench/tier_2_rocket_from_nasa_workbench"})
    event.remove({id: "ad_astra:nasa_workbench/tier_3_rocket_from_nasa_workbench"})
    event.remove({id: "ad_astra:nasa_workbench/tier_4_rocket_from_nasa_workbench"})
    event.remove({id: "ad_astra:steel_engine"})
    event.remove({id: "ad_astra:space_suit"})
     event.remove({id: "ad_astra:space_station/earth_orbit_space_station"})
    //event.remove({id: /ad:astra:space_station\/.*_orbit_space_station/})
    event.remove({id: "ad_astra:nasa_workbench"})
})