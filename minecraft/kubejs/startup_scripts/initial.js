global.nukeList = []
global.fluidNukeList = []


ItemEvents.modification(e => {

global.nukeList.push('ad_astra:desh_fluid_pipe', 'ad_astra:ostrum_fluid_pipe','ad_astra:hydrogen_bucket', 'ad_astra:oxygen_bucket', 'rftoolsbase:dimensionalshard')
global.fluidNukeList.push( 'ad_astra:hydrogen', 'ad_astra:oxygen')
})
