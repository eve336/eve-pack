global.fluidNukeList = ["ad_astra:oxygen", "ad_astra:hydrogen", "ad_astra:oxygen", "ad_astra:cryo_fuel", "ad_astra:oil", "ad_astra:fuel"]
global.nukeList = []

ItemEvents.modification(e => {

      global.nukeList.push('ad_astra:desh_fluid_pipe', 'ad_astra:ostrum_fluid_pipe', 'ad_astra:hydrogen_bucket', 'ad_astra:oxygen_bucket', 'rftoolsbase:dimensionalshard',
            'gtceu:solar_panel', 'gtceu:ulv_solar_panel', 'gtceu:lv_solar_panel', 'gtceu:mv_solar_panel', 'gtceu:hv_solar_panel', 'gtceu:ev_solar_panel', 'gtceu:iv_solar_panel',
            'gtceu:luv_solar_panel', 'gtceu:zpm_solar_panel', 'gtceu:uv_solar_panel', 'ad_astra:steel_rod', 'ad_astra:iron_rod', 'ad_astra:steel_block', 'ad_astra:steel_plate',
            'ad_astra:cryo_fuel_bucket', 'ad_astra:oil_bucket', 'ad_astra:fuel_bucket', 'ad_astra:iron_plate', 'functionalstorage:gold_upgrade', 'functionalstorage:diamond_upgrade',
            'functionalstorage:netherite_upgrade', 'functionalstorage:max_storage_upgrade', 'functionalstorage:creative_vending_upgrade', 'rftoolsbase:machine_infuser', 'rftoolsbase:dimensionalshard_overworld',
            'rftoolsbase:dimensionalshard_nether', 'rftoolsbase:dimensionalshard_end', 'ironfurnaces:million_furnace', 'ironfurnaces:rainbow_plating', 'ironfurnaces:rainbow_core', 'ironfurnaces:rainbow_coal',
            'ironfurnaces:augment_generator','ironfurnaces:crystal_furnace'
      )

})


WorldgenEvents.remove(event => {
      event.removeOres(props => {
            props.blocks = ['rftoolsbase:dimensionalshard_nether', 'rftoolsbase:dimensionalshard_overworld', 'rftoolsbase:dimensionalshard_end']
      })
})