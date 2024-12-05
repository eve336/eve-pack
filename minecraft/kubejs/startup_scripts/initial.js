global.nukeList = []
global.fluidNukeList = []


ItemEvents.modification(e => {

global.nukeList.push('ad_astra:desh_fluid_pipe', 'ad_astra:ostrum_fluid_pipe','ad_astra:hydrogen_bucket', 'ad_astra:oxygen_bucket', 'rftoolsbase:dimensionalshard', 'gtceu:solar_panel', 'gtceu:ulv_solar_panel', 'gtceu:lv_solar_panel','gtceu:mv_solar_panel', 'gtceu:hv_solar_panel','gtceu:ev_solar_panel','gtceu:iv_solar_panel', 'gtceu:luv_solar_panel', 'gtceu:zpm_solar_panel','gtceu:uv_solar_panel'
)
global.fluidNukeList.push( 'ad_astra:hydrogen', 'ad_astra:oxygen')
})
