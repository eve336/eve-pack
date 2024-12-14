ServerEvents.recipes(e => {

    e.remove({output: 'fluxnetworks:flux_core'})
    e.remove({output: 'fluxnetworks:flux_block'})
})